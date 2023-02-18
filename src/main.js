import './styles/main.scss';

// https://v3.vuejs.org/api/application-api.html
import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import 'bootstrap/dist/js/bootstrap.js';

app.mount('#app');
