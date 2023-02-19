<template>
  <div style="margin-bottom: 4rem;">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SOC2.fyi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#guide">Guide</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#auditors">Auditors</a>
            </li>
          </ul>
          <div class="d-flex">
            <div class="btn-group d-flex">
              <span style="cursor: pointer;" class="btn fa" @click="openGithub()" title="Check out the source at Github.com"><img src="./github-logo.svg" height="28"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const openGithub = () => { window.open('https://github.com/Rhosys/soc2.fyi#soc-2-compliance-website', '_blank'); };
</script>

