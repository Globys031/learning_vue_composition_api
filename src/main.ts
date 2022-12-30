import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('fa', FontAwesomeIcon);

app.mount('#app');
