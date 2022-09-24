
require('./bootstrap');

import { createApp } from 'vue'
import App from './App.vue'
import router from "./Router/router.js";
import store from "./Store/store.js";


const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');
