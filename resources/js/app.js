require('./bootstrap');

import store from './vuex/store.js';
import VueRouter from 'vue-router';
import router from './router/index';
import Root from './components/Root';
import Notifications from 'vue-notification';
import Vuetify from 'vuetify'
import VueGraph from 'vue-graph'


window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(Vuetify);
Vue.use(VueGraph)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('nav-bar', require('./components/nav').default)
Vue.component('root-component', Root)



const app = new Vue({
    store,
    router,
    el: '#app',
    vuetify: new Vuetify(),

});
