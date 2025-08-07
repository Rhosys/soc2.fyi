<!-- eslint-disable max-len -->
<template>
  <div class="m-0 px-4 px-md-5 py-4 bg-dark text-light">
    <br id="automation-platforms">
    <div>
      <h2 class="pb-2 border-bottom header-link" @click="() => navigateTo('automation-platforms')">Automation Platforms</h2>

      These are <strong class="text-info">Not Required</strong>, but your auditor may require that you use one. The collection of evidence for following policies can be challenging. Many auditors require you to manually upload screen shots that prove you are following your policies. These platforms exist to automatically collect evidence from your cloud providers and integrated third party tools.

      <br><br>

      For platforms that also perform the audit, you must pay both the automation <strong class="text-info">platform cost</strong> and the <strong class="text-info">audit cost</strong>. In some cases, you might be able to mix and match, and other cases it will be a packaged deal depending on the provider.
      <br><br>

      <small class="text-warning">
        Cost pricing amounts are per year.
      </small>
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
          v-model:serverOptions="sortOptions"
          :serverItemsLength="items.length"
          :items="items">
          <template #header="header">
            <span style="font-size: 16px">{{ header.text }}</span>
          </template>
          <template #item-name="item">
            <a :id="item.id || item.name" target="_blank" :href="item.link">{{ item.name }}</a>
          </template>
          <template #item-totalCost="item">
            <div v-if="item.automationPlatformCost === true">
              <span class="text-success">Free</span> {{ item.automationPlusAuditCost }}
            </div>
            <div v-else-if="typeof item.automationPlatformCost === 'string'">
              {{ item.automationPlusAuditCost }}
            </div>
            <div v-else><warning /></div>
          </template>
          <template #item-automationPlatformCost="item">
            <div v-if="item.automationPlatformCost === null"><warning /></div>
            <div v-else-if="item.automationPlatformCost === false"><danger /></div>
            <div v-else-if="item.automationPlatformCost === true"><span class="text-success">Free</span></div>
            <div v-else>{{ item.automationPlatformCost }}</div>
          </template>
          <template #item-licensed="item">
            <div v-if="item.licensed === null"><warning /></div>
            <div v-else-if="item.licensed === false"><danger /></div>
            <div v-else-if="item.licensed === 'PARTNERS'"><small class="">Contracted Partners</small></div>
            <div v-else><success /></div>
          </template>
          <template #item-auditCost="item">
            <div v-if="item.auditCost === null"><warning /></div>
            <div v-else-if="item.auditCost === false"><danger /></div>
            <div v-else-if="item.auditCost === true"><span class="text-success">Free</span></div>
            <div v-else>+ {{ item.auditCost }}</div>
          </template>
          <template #item-hasAutomationPlatform="item">
            <div v-if="item.hasAutomationPlatform === null"><warning /></div>
            <div v-else-if="item.hasAutomationPlatform === false"><danger /></div>
            <div v-else><success /></div>
          </template>
          <template #item-integrationCount="item">
            <div v-if="!item.integrationCount"><warning /></div>
            <div v-else-if="item.integrationCount.match(/0+/)[0].length >= 3"><span class="text-success">{{ item.integrationCount }}</span></div>
            <div v-else-if="item.integrationCount.match(/0+/)[0].length >= 2"><span class="text-warning">{{ item.integrationCount }}</span></div>
            <div v-else-if="item.integrationCount.match(/0+/)[0].length >= 1"><span class="text-danger">{{ item.integrationCount }}</span></div>
            <div v-else><danger /></div>
          </template>
          <template #item-note="item">
            <div style="text-align: left; width: 100%; max-width: 300px; justify-content: start">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="item.note" />
            </div>
          </template>
          <!-- <template #expand="item">
            <template v-if="item.callout">
              <div class="ms-5">
                <div v-html="item.callout" />
              </div>
            </template>
          </template> -->
        </EasyDataTable>
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

import { ref, watch } from 'vue';

const headers = [
  { text: 'Company', value: 'name', sortable: true },
  { text: 'Total Cost (per year)', value: 'totalCost', sortable: true },
  { text: 'Automation Platform Cost', value: 'automationPlatformCost', sortable: true },
  { text: 'Also Performs Audit', value: 'licensed', sortable: true },
  { text: 'Additional Audit Cost', value: 'auditCost', sortable: true },
  { text: 'Total integrations', value: 'integrationCount', sortable: true },
  { text: 'Note', value: 'note' }
];

const companies = [
  { link: 'https://akitra.com/',
    name: 'Akitra',
    automationPlatformCost: null,
    licensed: null,
    auditCost: null,
    automationPlusAuditCost: null,
    integrationCount: null,
    note: '' },
  { link: 'https://www.a-lign.com/',
    name: 'A-LIGN (A-SCEND)',
    automationPlatformCost: '€5.8k',
    licensed: true,
    auditCost: '€21k',
    automationPlusAuditCost: '~ €26.8k',
    integrationCount: null,
    note: '<span class="text-danger">Very unresponsive (multiple months with no response)</span>' },
  { link: 'https://www.anecdotes.ai/',
    name: 'anecdotes',
    automationPlatformCost: '$50k',
    licensed: false,
    auditCost: false,
    automationPlusAuditCost: '$50k + Audit',
    note: '' },
  { link: 'https://aws.amazon.com/audit-manager/',
    name: 'AWS Audit Manager',
    automationPlatformCost: 'USAGE',
    licensed: false,
    auditCost: false,
    automationPlusAuditCost: 'Usage Based + $8k Audit',
    integrationCount: null,
    note: '<li><span class="text-warning">Does any auditor accept evidence from AWS?</span></li><li><span>$1.25 / 1k resources</span></li>' },
  { link: 'https://drata.com/',
    name: 'Drata',
    automationPlatformCost: '$15k',
    licensed: false,
    auditCost: false,
    automationPlusAuditCost: '$15k + Audit',
    integrationCount: '100+',
    note: 'Forward focused on being agile.' },
  { link: 'https://delve.co/',
    name: 'Delve',
    automationPlatformCost: '$12k',
    licensed: true,
    auditCost: '$12k',
    automationPlusAuditCost: '$22k',
    integrationCount: null,
    note: '<li>AI everything</li><li>Also handles the audit.</li>' },
  { link: 'https://www.getprobo.com/',
    name: 'Probo',
    automationPlatformCost: 'INFRA',
    licensed: 'PARTNERS',
    auditCost: '$8k',
    automationPlusAuditCost: 'Infra + $8k Audit',
    integrationCount: false,
    note: '<li>Self hosted</li><li>Some third party auditors supported</li>'
  },
  {
    link: 'https://realciso.io/',
    name: 'RealCISO',
    automationPlatformCost: '$6k',
    licensed: 'PARTNERS',
    auditCost: '$24k',
    automationPlusAuditCost: '~ $30k',
    integrationCount: '10',
    note: 'Only works with <a href="https://www.bonadio.com/">Bonadio CPA</a>.'
  },

  {
    link: 'https://risk3sixty.com/',
    name: 'risk3sixty',
    automationPlatformCost: null,
    licensed: null,
    auditCost: null,
    automationPlusAuditCost: null,
    integrationCount: null,
    note: '' },

  { link: 'https://www.scrut.io/',
    name: 'Scrut',
    automationPlatformCost: null,
    licensed: false,
    auditCost: false,
    automationPlusAuditCost: null,
    integrationCount: null,
    note: '' },

  { link: 'https://scytale.ai/soc-2/',
    name: 'Scytale',
    automationPlatformCost: null,
    licensed: null,
    auditCost: null,
    automationPlusAuditCost: null,
    integrationCount: null,
    note: '' },

  { link: 'https://secureframe.com/',
    name: 'Secureframe',
    automationPlatformCost: '$7.5k',
    licensed: null,
    auditCost: '$6.5k',
    automationPlusAuditCost: '~ $14k',
    integrationCount: '100+',
    note: 'Provides an in house audit or works with third party auditors. Includes automated answers to vendor questionnaires.' },

  { link: 'https://sprinto.com/ignite/',
    name: 'Sprinto',
    automationPlatformCost: '$7k',
    licensed: 'PARTNERS',
    auditCost: '$2k+',
    automationPlusAuditCost: '~ $9k',
    integrationCount: '200+',
    note: '<span class="text-danger">Aggressive Marketing</span>' },

  { link: 'https://thoropass.com/',
    name: 'Thoropass (Laika)',
    automationPlatformCost: '$7k',
    licensed: true,
    auditCost: '$100k',
    automationPlusAuditCost: '~ $127k',
    integrationCount: null,
    note: 'Audit only done in house.' },

  { link: 'https://www.trustcloud.ai/',
    name: 'TrustCloud (Kintent)',
    automationPlatformCost: true,
    licensed: false,
    auditCost: false,
    automationPlusAuditCost: '+ $8k Audit',
    integrationCount: '10',
    note: 'Improving UX.' },
  { link: 'https://trustero.com/',
    name: 'Trustero',
    automationPlatformCost: null,
    licensed: null,
    auditCost: null,
    automationPlusAuditCost: null,
    integrationCount: '10',
    note: 'Can be difficult to work with.' },
  
  { link: 'https://tugboatlogic.com/',
    name: 'Tugboat (onetrust)',
    automationPlatformCost: null,
    licensed: null,
    auditCost: null,
    automationPlusAuditCost: null,
    integrationCount: false,
    note: 'Verify limited platform' },

  { link: 'https://www.vanta.com/',
    id: 'vanta',
    name: 'Vanta',
    automationPlatformCost: '$15k',
    licensed: 'PARTNERS',
    auditCost: '$10k',
    automationPlusAuditCost: '~ $25k',
    integrationCount: '1000+',
    note: 'Has list of Audit Partners, and always charges a fixed price. However generally considered expensive.'
  }
];
const items = ref(companies);
const sortOptions = ref({
  sortBy: 'name',
  sortType: 'desc'
});

const convertStringNumberToActualNumber = vStr => {
  if (typeof vStr !== 'string') {
    return vStr === true ? 0 : Infinity;
  }
  return Number(vStr.replace(/[^\d.]/gi, '')) * (vStr.match(/k[+]?$/) ? 1000 : 1);
};

watch(sortOptions, ({ sortBy, sortType }) => {
  const initialSortOrder = companies.sort((aResource, bResource) => {
    const a = aResource[sortBy];
    const b = bResource[sortBy];

    if (sortBy === 'licensed') {
      const sortOrder = [true, 'PARTNERS', null, false];
      return sortOrder.findIndex(v => v === a) - sortOrder.findIndex(v => v === b);
    }

    if (sortBy === 'integrationCount') {
      return Number(`${a}`.replace(/[^\d]/g, '') || 0) - Number(`${b}`.replace(/[^\d]/i, '') || 0);
    }

    if (sortBy === 'automationPlatformCost') {
      const calcSortValue = v => v === true && 0.00001 || v === 'USAGE' && 1 || !v && Infinity || convertStringNumberToActualNumber(v);
      return calcSortValue(a) - calcSortValue(b);
    }

    if (sortBy === 'auditCost') {
      const calcSortValue = v => (['NUMBER', true, null, false].findIndex(i => i === v) + 1) || convertStringNumberToActualNumber(v);
      return calcSortValue(a) - calcSortValue(b);
    }

    if (sortBy === 'totalCost') {
      const aCost = aResource.automationPlusAuditCost;
      const bCost = bResource.automationPlusAuditCost;

      const calcSortValue = v => v === '+ Audit' && 0.00001 || v === 'USAGE' && 1 || !v && Infinity || convertStringNumberToActualNumber(v);
      return calcSortValue(aCost) - calcSortValue(bCost);
    }

    return !!a - !!b
      || !a ? 1
      : a.match(/[~.\dk]/) ? a.replace(/[^\d.]/gi, '') - b.replace(/[^\d.]/gi, '') : a.localeCompare(b);
  });

  items.value = sortType === 'desc' ? initialSortOrder.reverse() : initialSortOrder;
});

// eslint-disable-next-line no-unused-vars
const showRow = clickedElement => {
  // const target = clickedElement.target.closest('tr');
  // const companyId = target?.children?.[1]?.children?.[0]?.id;
  // if (companies.find(c => c.id === companyId)?.callout) {
  //   target.children[0].click();
  // }
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
    // cursor: pointer;
    .expand-icon {
      opacity: 0;
    }
  }

  :deep(td) {
    border-top: 1px solid rgb(55, 59, 62);
  }
}

:deep(.sortable.none .sortType-icon) {
  transform: rotate(90deg) !important;
  position: relative;
  left: 3px;
}
</style>
