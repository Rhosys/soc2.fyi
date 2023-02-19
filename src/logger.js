/* eslint-disable no-console */
import shortUuid from 'short-uuid';
import stringify from 'json-stringify-safe';

const sessionIdKey = 'soc2.fyi-sessionId';
const baseUrl = 'https://relay.rhosys.ch/v1/logs';

class Logger {
  constructor(storageProvider = localStorage) {
    this.storageProvider = storageProvider;

    this.messagesToPost = [];
    window.setInterval(() => this.flush(), 15000);
  }

  initialize() {
    this.sessionKey = this.storageProvider.getItem(sessionIdKey) || shortUuid.generate();
    this.storageProvider.setItem(sessionIdKey, this.sessionKey);
  }

  /**
   * Log critical errors breaking application behavior
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  critical(message, display = true) {
    if (display) {
      console.error(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'CRITICAL');
  }

  /**
   * Log errors indicating unexpected, but handled behavior
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  error(message, display = true) {
    if (display) {
      console.error(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'ERROR');
  }

  /**
   * Log warnings indicating undesired situations that don't interrupt application flow
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  warn(message, display = true) {
    if (display) {
      console.warn(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'WARN');
  }

  /**
   * Log information about standard application behavior
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  log(message, display = true) {
    if (display) {
      console.info(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'INFO');
  }

  /**
   * Log information about standard application behavior
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  info(message, display = true) {
    if (display) {
      console.info(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'INFO');
  }

  /**
   * Log tracking info about standard application behavior
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=true] - Whether to display message in the console
   */
  track(message, display = false) {
    if (display) {
      console.info(message);
    } else {
      console.debug(message);
    }
    this.logInternal(message, 'TRACK');
  }

  /**
   * Log low-level information about application behavior that doesn't need to be collected
   * NOTE: Requires selecting "Verbose" logging level in Chrome
   * @param {String} message - Message to be logged
   * @param {Boolean} [display=false] - Whether to display message in the console
   */
  debug(message, display = false) {
    if (display) {
      console.debug(message);
    }
    this.logInternal(message, 'DEBUG');
  }

  logInternal(message, level = 'INFO') {
    if (!message) {
      console.error('Sumo Logic Logger requires that you pass a value to log.');
      return;
    }

    const type = typeof message;
    let messageAsObject = message;
    if (type === 'undefined' || (type === 'string' && message === '')) {
      console.error('Sumo Logic Logger requires that you pass a value to log.');
      return;
    } else if (type === 'string') {
      messageAsObject = {
        title: message
      };
    } else if (type === 'object' && Object.keys(message).length === 0) {
      console.error('Sumo Logic Logger requires that you pass a non-empty JSON object to log.');
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      route: this.getRoute ? this.getRoute() : 'unknown',
      level: level,
      sessionId: this.sessionKey,
      message: messageAsObject
    };

    // convert an error object to a json object
    const replaceErrors = (_, value) => {
      if (value instanceof Error) {
        const error = {};
        Object.getOwnPropertyNames(value).forEach(key => {
          error[key] = value[key];
        });
        return error;
      } else if (value instanceof URL) {
        return value.toString();
      }
      return value;
    };

    this.messagesToPost.push(this.truncateToken(stringify(payload, replaceErrors)));

    // if (this.messagesToPost.length > 25) {
    //   this.flush();
    // }
    this.flush();
  }

  /**
   * @description Gets the next set of messages as payload, and resets the current messages to an empty array.
   */
  nextMessagesAsPayload() {
    const payload = this.messagesToPost.reduce((acc, curr) => `${acc}${curr}\n`, '');
    this.messagesToPost = [];
    return payload;
  }

  /**
   * @description Flushes the current messages and sends them to SumoLogic
   */
  async flush() {
    if (this.messagesToPost.length === 0) {
      return;
    }

    try {
      await fetch(baseUrl, {
        method: 'POST',
        body: this.nextMessagesAsPayload(),
        headers: {
          'Content-Type': 'text/plain',
          'X-Sumo-Name': 'Website',
          'X-Sumo-Category': 'SOC2.FYI'
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description Flushes the remaining messages at the time when the user navigates to another window
   *              This is not supported on all browsers yet https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
   *              But it's probably the best to catch the remaining messages that might not yet have been sent yet.
   *              Any asynchronous calls (that is, calls through axios) won't be executed during the window unload event.
   */
  flushOnUnload() {
    try {
      if (navigator.sendBeacon && this.messagesToPost.length > 0) {
        const data = this.nextMessagesAsPayload();
        // navigator.sendBeacon must not trigger CORS preflight calls on Chrome
        // this this bug: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests
        // ensure the type is set to text/plain and not application/json, since only a small selection
        // of content types won't trigger a preflight request. See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests
        const blob = new Blob([data], { type: 'text/plain' });
        navigator.sendBeacon(baseUrl, blob);
      }
    } catch (error) {
      /* If it can't happen then it can't happen */
    }
  }

  /**
   * @description Truncates all oauth token occurrences in given json payload. In case of JWT the header and payload part will remain visible for analysis.
   * @param {String} payload stringified json payload
   * @returns {String} stringified json payload with truncated oauth tokens
   */
  truncateToken(payload) {
    return payload.replace(/(eyJ[a-zA-Z0-9_-]{5,}\.eyJ[a-zA-Z0-9_-]{5,})\.[a-zA-Z0-9_-]*/gi, (m, p1) => `${p1}.<sig>`);
  }
}

export default new Logger();
