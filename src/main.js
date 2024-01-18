import './styles/main.scss';

// https://v3.vuejs.org/api/application-api.html
import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import 'bootstrap/dist/js/bootstrap.js';

import FloatingVue from 'floating-vue';
app.use(FloatingVue, {
    
});
// Stylesheet
import 'floating-vue/dist/style.css';

app.mount('#app');
