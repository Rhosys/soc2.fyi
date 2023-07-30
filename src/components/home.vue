<!-- eslint-disable max-len -->
<template>
  <div>
    <home-navbar />

    <div class="container pt-sm-4">
      <div class="p-4 p-md-5 mb-4 bg-dark text-light" style="border-radius: 0.5rem">
        <div class="container-fluid pt-4">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div class="me-md-5">
              <img :src="aicpaLogo" style="border-radius: 100%" height="250">
            </div>
            <div class="mt-4">
              <h1 class="display-5 fw-bold">The SOC2 Guide</h1>
              <h4 class="">Quickly figure out what you need and how much it will cost.</h4>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end flex-wrap">
          <div class="p-4 justify-content-end bg-secondary callout-section" style="border-radius: 0.5rem">
            <p>This is a completely open source quick guide, that focuses on comparing the available options.
              <br><br>
              We are SOC auditor agnostic. If you find something out of date, create an issue or make an update.
              <br>
            </p>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary btn-sm align-items-center" type="button" @click="() => openGithub(true)">
                <i class="fa-solid fa-ticket me-1" />Create an issue</button>
              <button class="btn btn-dark btn-sm ms-2 d-flex align-items-center" type="button" @click="() => openGithub(false)">
                <i class="fa-solid fa-bolt me-1" />Make an update</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mb-4 w-100">
        <div class="d-flex row">
          <div class="col-12 col-lg-6 mb-4 mb-lg-0">
            <div class="h-100 p-4 p-md-5 text-white bg-dark" style="border-radius: 0.5rem;">
              <h2>The FYI</h2>
              You already did the hard work of securing your technology, so getting the attestation proving it should be easy. But it still isn't.
              <br><br>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-arrows-left-right-to-line fa-2x me-4" />
                <div>
                  <h3>Gap Analysis</h3>
                  <div>Figure out where you are at versus where you should be. And then you can use this to know what automation to run.</div>
                </div>
              </div>
              
              <br>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-gears fa-2x me-4" />
                <div>
                  <h3>Security Automation</h3>
                  <div>Update your policies and infrastructure to fill in these gaps. Use the automation to ensure your technical policies are being followed.</div>
                </div>
              </div>
              <br>

              <div class="d-flex align-items-center">
                <i class="fa-solid fa-pencil fa-2x me-4" />
                <div>
                  <h3>Attestation</h3>
                  <div>Ask an auditor to sign off on your policies and infrastructure automation by giving you a badge and a report.</div>
                </div>
              </div>
              <br>
              <div class="d-flex justify-content-center">
                <h4>That's it, pretty simple right?</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="h-100 p-4 p-md-5 bg-light border" style="border-radius: 0.5rem;">
              <h2>So what is SOC 2 really?</h2>
              <p>SOC 2 is all about that attestation from an auditor. The SOC 2 audit has become a commodity so any licensed auditor can get you the two pieces you care about:
                <ul>
                  <br>
                  <li><strong>A compliance report</strong>: What you provide to your customers to prove you completed the audit.</li>
                  <br>
                  <li><strong>An attestation icon and url</strong>: They will provide you a link to put on your website. This proves they did the audit.</li>
                </ul>
              </p>

              <div>If you've already implemented the best practices found below then you are ready to get your audit.</div>
              <div class="mt-3">There's no need to shell out a lot of money, but don't be surprised if the first few companies you talk to quote you a very very high price.</div>
              <div class="mt-3">Appropriately priced auditors are out there, and you can use this site to find the one that works for you.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br id="auditors">
    <div class="w-100">
      <div class="m-0 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">Auditors</h2>
        
        <div class="table-responsive-md">
          <table class="auditors table-dark table-striped table align-middle">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Total Cost</div><span>(per year)</span></div></th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Audit</div><span>(licensed audit firm)</span></div></th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Audit Cost</div></div></th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Automation</div><span>Platform</span></div></th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Automation</div><span>Platform Cost</span></div></th>
                <th scope="col"><div>Note</div></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th scope="row"><a href="https://www.a-lign.com/">A-LIGN (A-SCEND)</a></th>
                <td>
                  <div class="d-flex justify-content-center">€26.8k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">€21k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">€5.8k</div>
                </td>
                <td class="text-danger">Very unresponsive (multiple months with no response)</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://akitra.com/">Akitra</a></th>
                <warning />
                <warning />
                <warning />
                <warning />
                <warning />
                <td class="text-danger" />
              </tr>

              <tr>
                <th scope="row"><a href="https://www.anecdotes.ai/">anecdotes</a></th>
                <td>
                  <div class="d-flex justify-content-center">$50k</div>
                </td>
                <danger />
                <danger />
                <success />
                <td>
                  <div class="d-flex justify-content-center">$50k</div>
                </td>
                <td><span class="text-danger">No Audit</span>, the audit requires a third party and fee</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://drata.com/">Drata</a></th>
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
              <danger />
                <danger />
                <success />
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
                <td><span class="text-danger">No Audit</span>, the audit requires a third party and fee</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://www.prescientassurance.com/">Prescient Assurance</a></th>
                <td>
                  <div class="d-flex justify-content-center">$8k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">$8k</div>
                </td>
                <danger />
                <danger />
                <td><span class="text-danger">No automation offered</span></td>
              </tr>

              <tr>
                <th scope="row"><a href="https://risk3sixty.com/">risk3sixty</a></th>
                <warning />
                <warning />
                <warning />
                <success />
                <warning />
                <td class="text-danger">&nbsp;</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://scytale.ai/soc-2/">Scytale</a></th>
                <warning />
                <warning />
                <warning />
                <success />
                <warning />
                <td class="text-danger">&nbsp;</td>
              </tr>
              
              <tr>
                <th scope="row"><a href="https://secureframe.com/">Secureframe</a></th>
                <td>
                  <div class="d-flex justify-content-center">$14k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">$6.5k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">$7.5k</div>
                </td>
                <td>Requires third party auditor (or more expensive in house audit)</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://thoropass.com/">Thoropass (Laika)</a></th>
                <td>
                  <div class="d-flex justify-content-center">$12k</div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                      <i class="fa-regular fa-circle fa-stack-2x" />
                      <i class="fa-solid fa-check fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">$5k</div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                      <i class="fa-regular fa-circle fa-stack-2x" />
                      <i class="fa-solid fa-check fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">$7.5k</div>
                </td>
                <td scope="row">Audit done in house</td>
              </tr>
              
              <tr>
                <th scope="row"><a href="https://www.trustcloud.ai/">TrustCloud (Kintent)</a></th>
                <td>
                  <div class="d-flex justify-content-center text-success">Free</div>
                </td>
                <danger />
                <danger />
                <success />
                <td>
                  <div class="d-flex justify-content-center text-success">Free</div>
                </td>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://sprinto.com/ignite/">Sprinto Ignite</a></th>
                <td>
                  <div class="d-flex justify-content-center">$5k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center">$5k</div>
                </td>
                <success />
                <td>
                  <div class="d-flex justify-content-center text-success">Free</div>
                </td>
                <td class="text-danger">Requires 3 year contract</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://www.vanta.com/">Vanta</a></th>
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
                <danger />
                <danger />
                <success />
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
                <td><span class="text-danger">No Audit</span>, the audit requires a third party and fee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br id="pen-tests">

        <h2 class="pb-2 border-bottom">Pen Testers</h2>
        
        <div class="table-responsive-md">
          <table class="auditors table-dark table-striped table align-middle">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col"><div class="d-flex justify-content-center align-items-center flex-column"><div>Total Cost</div><span>(per test)</span></div></th>
                <th scope="col"><div>Note</div></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th scope="row"><a href="https://www.cobalt.io/">Cobalt</a></th>
                <warning />
                <td class="text-danger">&nbsp;</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://www.rapid7.com/">Rapid7</a></th>
                <warning />
                <td class="text-danger">&nbsp;</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://kobalt.io/">Kobalt</a></th>
                <warning />
                <td class="text-danger">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <br id="process">
    <div class="container">
      <div class="align-items-lg-stretch mt-4">
        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <h2>What's the SOC 2 Process?</h2>
            <p>
              Earning a SOC 2 requires a Company to undergo a third-party examination by a Certified Public Accountant (CPA). The CPA is required to follow a set of AICPA standards to perform the audit and issue the report. Most companies follow a logical process to earning their SOC 2:
            </p>
            <p>
              <h3>Step 1:</h3>
              <div>Readiness examination: An exercise where your Company finds out the current status of the organization as it relates to SOC 2 controls. Organizations use readiness examinations to prepare for their SOC 2 assessment and learn what gaps they must resolve before earning their SOC 2.</div>
            </p>
            <p>
              <h3>Step 2:</h3>
              Earn a SOC 2 Type 1 - While it is not required for an organization to earn a SOC 2 Type 1 before a SOC 2 Type 2, the logical next step on the SOC 2 journey is to complete a SOC 2 Type 1 examination. The path from readiness to SOC 2 Type 1 is all dependent on how fast the organization can remediate gaps identified in the readiness assessment.
            </p>
            <p>
              <h3>Step 3:</h3>
              
              Earn your SOC 2 Type 2 - After a specified period of time (anywhere from 3-12 months) organizations earn their first SOC 2 Type 2. Typically the Type 2 review period begins the day after the date of the Type 1 review period. Step 4: Renew your SOC 2 Type 2 every 12 months. A SOC 2 Type 2 looks back in time and every year you'll need to undergo a Type 2 examination to keep your SOC 2 current.</p>
            <p>
              <h3>Step 4:</h3>
              Renew your SOC 2 Type 2 every 12 months. A SOC 2 Type 2 looks back in time and every year you'll need to undergo a Type 2 examination to keep your SOC 2 current.
            </p>

            <div class="d-flex justify-content-center"><small>Source:  <a href="https://sansorg.egnyte.com/dl/x9796IIIVP">SANS SOC2 Cheatsheet</a></small></div>
          </div>
        </div>
      </div>
    </div>

    <br id="guide">
    <div class="w-100">
      <div class="m-0 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">Pass the SOC 2 Type II Audit</h2>
        <div>The system description must be presented in accordance with the AICPA’s description criteria (DC 200). Each of the description criteria (DC) are described below:</div>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-cubes fa-2x fa-fw" />
            </div>
            <div>
              <h2>DC1: Types of services provided</h2>
              <p>Describe what services the service organization provides as it relates to the system in scope.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-seedling fa-2x fa-fw" />
            </div>
            <div><h2>DC2: Principal service commitments and system requirements</h2><p>This section lets the reader know what commitments and system requirements the service organization is making, and which documents the reader can find these commitments in (e.g. MSA, SLAs, Privacy Policy, etc.). This helps give the reader context as to what trust services categories are in-scope and why.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-code-branch fa-2x fa-fw" />
            </div>
            <div><h2>DC3: Components of the system</h2><p>The components described here include the infrastructure, software, people, procedures, and data that support and make up the system. For many Cloud Service Providers (CSP), the infrastructure section will include their hosting provider (such as Amazon Web Services). The software section should list the software and applications that support delivering the service in scope. The people section should include an overview of the departments or key personnel that support the system and what they do. Procedures should state what procedures are and their purpose. Data should discuss what the data is that the system processes (what is your customer data), as well as any other data that directly supports the system.</p></div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-shield-halved fa-2x fa-fw" />
            </div>
            <div><h2>DC4: System incidents</h2>
              <p>Describe any security incidents that rose to the level where your company failed to either meet criteria, your commitments to customers, or your system requirements.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-diagram-next fa-2x fa-fw" />
            </div>
            <div><h2>DC5: Applicable trust services criteria and related controls</h2><p>Describe the criteria that are in-scope so that the reader understands the criteria the service organization is being measured against. The service organization will also discuss in detail the control environment and describe the controls that support it. This is a narrative section that is essentially a lighter version of the information security policy.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-graduation-cap fa-2x fa-fw" />
            </div>
            <div>
              <h2>DC6: Complementary user entity controls (CUECs)</h2>
              <p>CUECs are the controls that the service organization’s customers need to have in place in order for the system and control environment to be complete and achieve its objectives. For example, maybe the customers need to have their own logical access controls in place so that only authorized users access the service, otherwise, unauthorized access may cause you to fail to meet your security commitments.</p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-regular fa-object-ungroup fa-2x fa-fw" />
            </div>
            <div><h2>DC7: Complementary subservice organization controls (CSOCs)</h2><p>The service organization will discuss the subservice organizations that support the system and control environment. Subservice organizations are vendors that you cannot meet your criteria, commitments, or system requirements without. For most CSPs, that is going to be the cloud hosting provider (AWS, GCP, Azure, etc.)</p></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import homeNavbar from './homeNavbar.vue';
import aicpaLogo from './aicpaLogo.png';
import logger from '../logger';
import Danger from './danger.vue';
import Warning from './warning.vue';
import Success from './success.vue';

const openGithub = gotoIssuePage => {
  const path = gotoIssuePage ? 'issues' : 'pulls';
  window.open(`https://github.com/Rhosys/soc2.fyi/${path}`, '_blank');
};

logger.track({ title: 'PageHit' });

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.networking-link {
  cursor: pointer;
  text-decoration: none;
  color: $light !important;
  &:hover, &:hover * {
    color: $dark !important;
  }
}

.callout-section {
  margin-top: 1rem;
  @include media-breakpoint-up(xl) {
    max-width: 50%;
  }
}

.d-flex .fa-brands + div {
  flex-shrink: 0;
}

.community-presence-item {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-width: 300px;
}

table.auditors th a {
  text-decoration: none;
}
</style>
