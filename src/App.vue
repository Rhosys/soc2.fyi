<template>
  <div>
    <home />

    <a href="#">
      <aside class="contact-group">
        <div class="contact-button">
          <i class="fa-solid fa-up-long" />
        </div>
      </aside>
    </a>
  </div>
</template>

<script setup>
// import { computed } from 'vue';

import Home from './components/home.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Contact Aside */
.contact-group {
  position: fixed;
  right: 0.25em;
  bottom: 0.5em;
  align-self: flex-end;
}

.contact-button {
  position: relative;
  right: 0;
  bottom: 0;
  color: white;
  background-color: $primary;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  box-shadow: 0 2px 5px #1D2F3B1A;
  cursor: pointer;
  z-index: 10000;

  a {
    color: unset;
    text-decoration: none;
  }
}
</style>
