import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

import './assets/css/index.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
