require('./bootstrap');

import store from './vuex/store.js';
import VueRouter from 'vue-router';
import router from './router';


window.Vue = require('vue');
Vue.use(VueRouter);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('nav-bar', require('./components/nav').default)


const app = new Vue({
    store,
    router,
    el: '#app',
});
