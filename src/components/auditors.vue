<!-- eslint-disable max-len -->
<template>
  <div class="m-0 px-4 px-md-5 py-4 bg-dark text-light">
    <div>
      <br id="auditors">
      <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('auditors')">Auditors</h2>

      There are many auditors, this is only a short list because of their usage of one of the <a href="#" @click.prevent="navigateTo('automation-platforms')">Automation Platforms</a>.
      Auditors are the only ones that grant you the SOC 2 certification, they may or may not require that you use an Automation Platform to complete your audit.

      <br><br>

      <div class="table-responsive-md">
        <EasyDataTable id="auditorTable"
          :hide-footer="true"
          no-hover
          table-class-name="customize-table"
          header-text-direction="center"
          body-text-direction="center"
          @click="showRow"
          :alternating="true"
          :headers="headers"
          :items="items">
          <template #header="header">
            <span style="font-size: 16px">{{ header.text }}</span>
          </template>
          <template #item-name="item">
            <a :id="item.id || item.name" target="_blank" :href="item.link">{{ item.name }}</a>
          </template>
          <template #item-totalCost="item">
            <div v-if="item.totalCost === null"><warning /></div>
            <div v-else-if="item.totalCost === false"><danger /></div>
            <div v-else-if="item.totalCost === true"><span class="text-success">Free</span></div>
            <div v-else>{{ item.totalCost }}</div>
          </template>
          <template #item-licensed="item">
            <div v-if="item.licensed === null"><warning /></div>
            <div v-else-if="item.licensed === false"><danger /></div>
            <div v-else><success /></div>
          </template>
          <template #item-auditCost="item">
            <div v-if="item.auditCost === null"><warning /></div>
            <div v-else-if="item.auditCost === false"><danger /></div>
            <div v-else-if="item.auditCost === true"><span class="text-success">Free</span></div>
            <div v-else>{{ item.auditCost }}</div>
          </template>
          <template #item-hasAutomationPlatform="item">
            <div v-if="item.hasAutomationPlatform === null"><warning /></div>
            <div v-else-if="item.hasAutomationPlatform === false"><danger /></div>
            <div v-else><success /></div>
          </template>
          <template #item-automationPlatformCost="item">
            <div v-if="item.automationPlatformCost === null"><warning /></div>
            <div v-else-if="item.automationPlatformCost === true"><span class="text-success">Free</span></div>
            <div v-else-if="item.automationPlatformCost"><span>{{ item.automationPlatformCost }}</span></div>
            <div v-else><danger /></div>
          </template>
          <template #item-note="item">
            <div style="text-align: left; width: 100%; justify-content: start">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="item.note" />
            </div>
          </template>
          <template #expand="item">
            <template v-if="item.callout">
              <div class="ms-5">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="item.callout" />
              </div>
            </template>
          </template>
        </EasyDataTable>
      </div>

      <pen-tests />

      <br id="consultants">

      <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('consultants')">Security Consultants</h2>

      Most of the reports from the above providers are pretty easy to read, but you get stuck and need help reviewing them or you need a consultant to help you implement the controls to allow you to pass the audit, one of these might help.
      <br><br>

      <ul>
        <li><span class="text-info">Infrastructure security</span> - Includes Cloud Provider auditing automation, third party tool integration, environment setup, and SAST, DAST best practices.</li>
        <li><span class="text-info">Application architecture</span> - Includes setting up OIDC, authorization, secrets management, mTLS, service meshes, ZeroTrust application access.</li>
      </ul>

      <br><br>

      <div class="table-responsive-md">
        <table class="auditors table-dark table-striped table align-middle">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>SOC 2 Report Review</div></div></th>
              <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Infra implementation assistance</div></div></th>
              <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Application architecture reviews</div></div></th>
              <th scope="col"><div>Note</div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><a target="_blank" href="https://kobalt.io">Kobalt</a></th>
              <td><success /></td>
              <td><danger /></td>
              <td><danger /></td>
              <td>Works only with <a href="#" @click.prevent="navigateTo('vanta')">Vanta</a></td>
            </tr>

            <tr>
              <th scope="row"><a target="_blank" href="https://www.latacora.com/">Latacora</a></th>
              <td><warning /></td>
              <td><success /></td>
              <td><success /></td>
              <td class="text-danger">&nbsp;</td>
            </tr>

            <tr>
              <th scope="row"><a target="_blank" href="https://rhymetec.com/vciso/">Rhymetic</a></th>
              <td><warning /></td>
              <td><warning /></td>
              <td><warning /></td>
              <td class="text-danger">&nbsp;</td>
            </tr>

            <tr>
              <th scope="row"><a target="_blank" href="https://sidechannel.com/">SideChannel</a></th>
              <td><success /></td>
              <td><success /></td>
              <td><success /></td>
              <td class="text-danger">&nbsp;</td>
            </tr>

            <tr>
              <th scope="row"><a target="_blank" href="https://www.violetx.com/">Violetx</a></th>
              <td><warning /></td>
              <td><warning /></td>
              <td><warning /></td>
              <td class="text-danger">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { navigateTo } from './utilities';

import Danger from './danger.vue';
import Warning from './warning.vue';
import Success from './success.vue';
import PenTests from './pen-tests.vue';

import { ref } from 'vue';

const headers = [
  { text: 'Company', value: 'name' },
  { text: 'Total Cost (per year)', value: 'totalCost' },
  { text: 'Automation Platform (included in price)', value: 'hasAutomationPlatform' },
  { text: 'Note', value: 'note' }
];

const companies = [
  { link: 'https://www.prescientassurance.com/',
    name: 'Prescient Assurance',
    totalCost: '$8k',
    hasAutomationPlatform: false,
    note: '' },

  { link: 'https://sprinto.com/ignite/',
    name: 'Sprinto Ignite',
    totalCost: '$5k',
    includesPlatform: true,
    hasAutomationPlatform: true,
    note: 'Requires 3 year contract' },

  { link: 'https://thoropass.com/',
    name: 'Thoropass (Laika)',
    totalCost: '$12k',
    includesPlatform: true,
    hasAutomationPlatform: true,
    note: 'Also includes <a href="#automation-platforms">automation platform</a>' }
];
const items = ref(companies);

const showRow = clickedElement => {
  const target = clickedElement.target.closest('tr');
  const companyId = target?.children?.[1]?.children?.[0]?.id;
  if (companies.find(c => c.name === companyId)?.callout) {
    target.children[0].click();
  }
};

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.d-flex .fa-brands + div {
  flex-shrink: 0;
}

table.auditors th a {
  text-decoration: none;
}

.customize-table {
  --easy-table-header-font-size: 16px;
  --easy-table-body-row-font-size: 16px;
  --easy-table-message-font-size: 16px;
  --easy-table-body-row-font-color: white;
  --easy-table-body-even-row-font-color: white;
  --easy-table-body-row-background-color: var(--bs-table-bg);
  --easy-table-header-background-color: var(--bs-table-bg);
  --easy-table-body-even-row-background-color: #2c3034;
  --easy-table-header-font-color: white;
  --easy-table-row-border: white;
  --easy-table-body-item-padding: 0.5rem;
  --easy-table-border: none;
  a {
    text-decoration: none;
  }

  tr, th {
    > div, .header > span {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  :deep(tr) {
    .expand-icon {
      opacity: 0;
    }
  }

  :deep(td) {
    border-top: 1px solid rgb(55, 59, 62);
  }
}
</style>
