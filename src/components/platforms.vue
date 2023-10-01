<!-- eslint-disable max-len -->
<template>
  <div class="m-0 px-4 px-md-5 py-4 bg-dark text-light">
    <br id="automation-platforms">
    <div>
      <h2 class="pb-2 border-bottom">Automation Platforms</h2>

      These are <strong class="text-info">Not Required</strong>, but your auditor may require that you use one. The collection of evidence for following policies can be challenging. Many auditors require you to manually upload screen shots that prove you are following your policies. These platforms exist to automatically collect evidence from your cloud providers and integrated third party tools.

      <br><br>

      <div class="table-responsive-md">
        <EasyDataTable id="platformsTable"
          :hide-footer="true"
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
            <div v-else-if="item.licensed === 'PARTNERS'"><small class="text-success">Contracted Partners</small></div>
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
            <div v-else><danger /></div>
          </template>
          <template #item-integrationCount="item">
            <div v-if="item.integrationCount === null"><warning /></div>
            <div v-else-if="item.integrationCount >= 1000"><span class="text-success">Many</span></div>
            <div v-else-if="item.integrationCount >= 100"><span class="text-warning">Some</span></div>
            <div v-else-if="item.integrationCount >= 10"><span class="text-danger">Few</span></div>
            <div v-else><danger /></div>
          </template>
          <template #item-pitch="item">
            <div v-if="item.pitch">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="item.note" />
            </div>
            <div v-else>-</div>
          </template>
          <template #item-note="item">
            <div style="text-align: left; width: 100%; max-width: 300px; justify-content: start">
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

    </div>
  </div>
</template>

<script setup>
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import Danger from './danger.vue';
import Warning from './warning.vue';
import Success from './success.vue';

import { ref } from 'vue';

const headers = [
  { text: 'Company', value: 'name' },
  { text: 'Automation Platform Cost (per year)', value: 'totalCost' },
  { text: 'Also Performs Audit', value: 'licensed' },
  { text: 'Additional Audit Cost', value: 'auditCost' },
  { text: 'Total integrations', value: 'integrationCount' },
  { text: 'Pitch', value: 'pitch' },
  { text: 'Note', value: 'note' }
];

const companies = [
  { link: 'https://www.a-lign.com/',
    name: 'A-LIGN (A-SCEND)',
    totalCost: '€5.8k',
    licensed: true,
    auditCost: '+ €21k',
    integrationCount: null,
    note: '<span class="text-danger">Very unresponsive (multiple months with no response)</span>' },
  { link: 'https://akitra.com/',
    name: 'Akitra',
    totalCost: null,
    licensed: null,
    auditCost: null,
    integrationCount: null,
    note: '' },
  { link: 'https://www.anecdotes.ai/',
    name: 'anecdotes',
    totalCost: '$50k',
    licensed: false,
    auditCost: false,
    note: '' },

  { link: 'https://drata.com/',
    name: 'Drata',
    totalCost: '$15k',
    licensed: false,
    auditCost: false,
    integrationCount: 100,
    note: 'Forward focused on being agile.' },

  {
    link: 'https://realciso.io/',
    name: 'RealCISO',
    totalCost: '$30k',
    licensed: false,
    auditCost: false,
    integrationCount: 10,
    note: 'Only works with <a href="https://www.bonadio.com/">Bonadio CPA</a>.'
  },

  {
    link: 'https://risk3sixty.com/',
    name: 'risk3sixty',
    totalCost: null,
    licensed: null,
    auditCost: null,
    integrationCount: null,
    note: '' },

  { link: 'https://www.scrut.io/',
    name: 'Scrut',
    totalCost: null,
    licensed: false,
    auditCost: false,
    integrationCount: null,
    note: '' },

  { link: 'https://scytale.ai/soc-2/',
    name: 'Scytale',
    totalCost: null,
    licensed: null,
    auditCost: null,
    integrationCount: null,
    note: '' },

  { link: 'https://secureframe.com/',
    name: 'Secureframe',
    totalCost: '$7.5k',
    licensed: true,
    auditCost: '+ $6.5k',
    integrationCount: 100,
    pitch: 'Audit defense',
    note: 'Provides an in house audit or works with third party auditors. Includes automated answers to vendor questionnaires.' },

  { link: 'https://sprinto.com/ignite/',
    name: 'Sprinto Ignite',
    totalCost: '$5k',
    licensed: true,
    auditCost: true,
    integrationCount: 100,
    note: 'Requires 3 year contract, frequently requires manual actions.' },

  { link: 'https://thoropass.com/',
    name: 'Thoropass (Laika)',
    totalCost: '$7k',
    licensed: true,
    auditCost: '+ $5k',
    integrationCount: null,
    note: 'Audit only done in house.' },

  { link: 'https://www.trustcloud.ai/',
    name: 'TrustCloud (Kintent)',
    totalCost: true,
    licensed: false,
    auditCost: false,
    integrationCount: 10,
    pitch: 'Has been Free for low usage!',
    note: 'Poor UX. <span class="text-danger">No OAuth</span>.' },

  { link: 'https://trustero.com/',
    name: 'Trustero',
    totalCost: null,
    licensed: null,
    auditCost: null,
    integrationCount: 10,
    pitch: 'Customer Support + Audit Readiness',
    note: 'Can we difficult to work with.' },
  
  { link: 'https://tugboatlogic.com/',
    name: 'Tugboat (onetrust)',
    totalCost: null,
    licensed: null,
    auditCost: null,
    integrationCount: false,
    pitch: 'Flexible',
    note: 'Verify limited platform' },

  { link: 'https://www.vanta.com/',
    id: 'vanta',
    name: 'Vanta',
    totalCost: '$15k',
    licensed: 'PARTNERS',
    auditCost: '+ $10k',
    integrationCount: 1000,
    pitch: 'Integrations',
    note: 'Has list of Audit Partners, and always charges a fixed price. However generally considered expensive.',
    callout: `
      <span>Standardize pricing through third party auditors:</span>
      <ul><li>Type I Pricing: $7k</li><li>Type II Pricing: $10k</li>`
  }
];
const items = ref(companies);

const showRow = clickedElement => {
  const target = clickedElement.target.closest('tr');
  const companyId = target?.children?.[1]?.children?.[0]?.id;
  if (companies.find(c => c.id === companyId)?.callout) {
    target.children[0].click();
  }
};

const navigateTo = target => {
  if (!target) {
    window.scrollTo(0, -window.scrollY);
    return;
  }
  const element = document.getElementById(target);
  window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 200);
  setTimeout(() => {
    if (Math.abs(element.getBoundingClientRect().top - 60) > 10) {
      window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 200);
    }
  }, 10);
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
    cursor: pointer;
    .expand-icon {
      opacity: 0;
    }
  }

  :deep(td) {
    border-top: 1px solid rgb(55, 59, 62);
  }
}
</style>
