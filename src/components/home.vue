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
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">€21k</div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">€5.8k</div>
                </td>
                <td class="text-danger">Very unresponsive (multiple months with no responses</td>
              </tr>

              <tr>
                <th scope="row"><a href="https://secureframe.com/">Drata</a></th>
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
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
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">$8k</div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td><span class="text-danger">No automation offered</span></td>
              </tr>
              
              <tr>
                <th scope="row"><a href="https://secureframe.com/">Secureframe</a></th>
                <td>
                  <div class="d-flex justify-content-center">$14k</div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">$6.5k</div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
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
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
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
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">$5k</div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
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
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-content-center">
                    <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-danger">
                      <i class="fa-solid fa-xmark fa-stack-1x" />
                    </span>
                  </div>
                </td>
                <td><div class="d-flex justify-content-center">
                  <span class="fa-stack fa-1x d-flex align-items-center justify-content-center text-success">
                    <i class="fa-regular fa-circle fa-stack-2x" />
                    <i class="fa-solid fa-check fa-stack-1x" />
                  </span>
                </div></td>
                <td>
                  <div class="d-flex justify-content-center">$15k</div>
                </td>
                <td><span class="text-danger">No Audit</span>, the audit requires a third party and fee</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div id="footer" class="w-100">
      <div class="m-0 p-4 p-md-5 bg-primary text-light">
        <div class="g-4 my-2 row">
          <div class="d-flex justify-content-around">
            <div class="d-flex flex-column">
              <h5>SOC 2.FYI</h5>
              <small>Making companies more secure</small>
              <small>© Rhosys AG 2017-2023</small>
              <div><a class="networking-link" href="https://rhosys.ch" target="_blank">About Us</a></div>
              <div><a class="networking-link" href="https://rhosys.ch" target="_blank">Contact Us</a></div>
            </div>

            <div class="d-flex">
              <div class="d-flex flex-column me-5">
                <h5>References</h5>
                <small><a class="networking-link" href="#">Home</a></small>
                <small><a class="networking-link" href="#guide">Guide</a></small>
                <small><a class="networking-link" href="#auditors">Auditors</a></small>
              </div>
              <div class="d-flex flex-column">
                <h5>Contribute</h5>
                <small><a class="networking-link" @click="() => openGithub()">GitHub</a></small>
                <small><a class="networking-link" @click="() => openGithub()">Contribute</a></small>
                <small><a class="networking-link" @click="() => openGithub(true)">Suggest an improvement</a></small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Testimonials: https://docs.google.com/document/d/1-tPEjvbxgoP0sOS7P_TFKyibh_mkp0jpYmM3xW50_rE/edit#heading=h.z4vfzgar6saq -->

  </div>
</template>

<script setup>
import homeNavbar from './homeNavbar.vue';
import aicpaLogo from './aicpaLogo.png';
import logger from '../logger';

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
