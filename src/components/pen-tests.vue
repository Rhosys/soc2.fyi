<template>
    <div>
        <br id="pen-tests">

    <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('pen-tests')">Pen Testers</h2>

    Pen testing is not required for many certifications. So can be avoided unless you are interested in security not compliance. An important step, if you are considering or are required to have a pen test completed--is knowing what you should be asking for in a <strong>Request for Information</strong> from your potential pen tester. Some helpful guidance straight directly from one company is available <a href="https://soc2.fyi/documents/Rhino-Security-Labs_6-questions-ask-every-pentest-company.pdf" target="_blank" rel="noopener">in this white paper</a>.

    <br><br>
    Not all Security vendors offer the same services, some of them only offer vulnerabliity scans while others offer manual exploratory testing.
    <br>To understand more about what you may need, please review the <a href="https://tldrsec.com/p/guides-buying-security" target="_blank">Buying Security Guide</a> by <a href="https://tldrsec.com/" target="_blank">TL;DR Sec</a>.
    <br><br>
    The prices below are aligned for a medium sized application service running for a single product.
    <br><br>
    <div class="table-responsive-md">
      <table class="auditors table-dark table-striped table align-middle">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Total Cost</div><span>(per test)</span></div></th>
            <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Supported Testing Methodologies</div></div></th>
            <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Infrastructure Pen Tests</div></div></th>
            <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Application Pen Tests</div></div></th>
            <th scope="col"><div>Note</div></th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.atredis.com/">Atredis</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://bishopfox.com/">Bishop Fox</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://bsk-security.com/">BSK Security</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  $4.5k+
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td>
              <ul>
                <li><span class="">Boutique pen testing shop</span></li>
                <li><span class="text-success">Very responsive</span></li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.cobalt.io/">Cobalt</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  ~$15k
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                  <span><i class="fa-solid fa-check text-success" /> OSSTMM</span>
                </small>
              </div>
            </td>
            <td><warning /></td>
            <td><warning /></td>
            <td>
              <ul>
                <li><span class="text-success">Free retests within 6 months</span></li>
                <li><span class="text-danger">Toxic marketing strategies</span></li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://cure53.de/">Cure53</a></th>
            <td><warning /></td>
            <td><danger /></td>
            <td><danger /></td>
            <td><success /></td>
            <td>Technically savvy and responsive.</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.doyensec.com/">Doyensec</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td><success /></td>
            <td class="text-danger">Retests are additional cost.</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://footholdsecurity.com">Foothold Security</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  €5k ~ €8k
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                  <span><i class="fa-solid fa-check text-success" /> OSSTMM</span>
                  <span><i class="fa-solid fa-check text-success" /> PTES</span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td>
              <ul>
                <li class="text-success">Free retests within 90 days</li>
                <li>Trainings available</li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://glitchsecure.com/">GlitchSecure</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  $10k
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td class="text-success">Free retests within 12 months</td>
          </tr>
            
          <tr>
            <th scope="row"><a target="_blank" href="https://www.includesecurity.com/">IncludeSec</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  $10k+
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td class="text-success">Free retests within 12 months</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://ioactive.com/">IOActive</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://kobalt.io/pentest/">Kobalt</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <VTooltip>
                  <span class="d-flex align-items-center justify-content-center pointer">
                    $32.5k <i class="ms-1 fa fa-info-circle" />
                  </span>
                  <template #popper>
                    $25k Pen Test + $7.5k Vulnerability Scan
                  </template>
                </VTooltip>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                </small>
              </div>
            </td>
            <td><danger /></td>
            <td><success /></td>
            <td class="text-warning">Retests cost 20% of total spend</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.leviathansecurity.com/">Leviathan Security Group</a></th>
            <td>
              <span class="d-flex align-items-center justify-content-center pointer">
                > $10k
              </span>
            </td>
            <td><danger /></td>
            <td><danger /></td>
            <td><success /></td>
            <td class="text-warning">&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.nccgroup.com/">NCC Group</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.netspi.com/">NetSPI</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.niiconsulting.com/services/security-assessment/penetration-testing-company.html">Network Intelligence</a></th>
            <td><warning /></td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf" target="_blank" rel="noopener">NIST</a></span>
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                  <span><i class="fa-solid fa-check text-success" /> OSSTMM</span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.optiv.com/">Optiv</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.praetorian.com/">Praetorian</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.rapid7.com/">Rapid7</a></th>
            <td><warning /></td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://owasp.org/www-project-application-security-verification-standard/" target="_blank" rel="noopener">OWASP ASVS</a></span>
                  <span><i class="fa-solid fa-check text-success" /> OSSTMM</span>
                  <span><i class="fa-solid fa-check text-success" /> PTES</span>
                </small>
              </div>
            </td>
            <td><danger /></td>
            <td><danger /></td>
            <td class="text-danger">
              <ul>
                <li>Not recommended</li>
                <li>Retests are additional cost.</li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://rhinosecuritylabs.com/">Rhino Security Labs</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td><warning /></td>
            <td class="text-success">Technically excellent, thorough</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.syslogicinc.com/services-application-security">SysLogic</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td><success /></td>
            <td class="text-danger">
              <ul>
                <li>Retests are additional cost.</li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.trailofbits.com/">Trail of Bits</a></th>
            <td><warning /></td>
            <td><warning /></td>
            <td><success /></td>
            <td><success /></td>
            <td class="">Expert Training Courses, R&D</td>
          </tr>

          <tr>
            <th scope="row"><a target="_blank" href="https://www.whiteoaksecurity.com/">White Oak Security</a></th>
            <td>
              <div class="d-flex justify-content-center">
                <span class="d-flex align-items-center justify-content-center">
                  ~$20k
                </span>
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center align-items-center">
                <small class="d-flex justify-content-center flex-column">
                  <span><i class="fa-solid fa-check text-success" /> <a href="https://www.whiteoaksecurity.com/stem-methodology-penetration-testing/" target="_blank" rel="noopener">STEM</a></span>
                </small>
              </div>
            </td>
            <td><success /></td>
            <td><success /></td>
            <td class="text-danger">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from './utilities';

import Danger from './danger.vue';
import Warning from './warning.vue';
import Success from './success.vue';

</script>
