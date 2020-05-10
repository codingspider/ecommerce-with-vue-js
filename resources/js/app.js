require('./bootstrap');

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import {routes} from './router';
import MainApp from './components/Main.vue';
import {initialize} from './helpers/general';
import StoreData from './store';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});