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
              <h2>The 3 Phases</h2>
              SOC 2 Is all about securing your infrastructure practices. You might hear things like
              <strong>Security, Availability, Processing Integrity, Confidentiality, and Privacy</strong>. What does that mean?
              <br><br>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-arrows-left-right-to-line fa-2x me-4" />
                <div>Figure out where you are at versus where you should be. This is known as the Gap Analysis.</div>
              </div>
              
              <br>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-gears fa-2x me-4" />
                <div>Update your policies and infrastructure to fill in these gaps.</div>
              </div>
              <br>

              <div class="d-flex align-items-center">
                <i class="fa-solid fa-pencil fa-2x me-4" />
                <div>Ask an auditor to sign off on your policies and infrastructure automation.</div>
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
</style>
