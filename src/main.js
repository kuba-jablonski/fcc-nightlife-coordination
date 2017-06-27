import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import * as firebase from 'firebase';

import { store } from './store/store';
import { config } from './firebaseConfig';

Vue.prototype.$firebase = firebase.initializeApp(config);
Vue.prototype.$http = axios.create({
    baseURL: 'https://nightlife-882b0.firebaseio.com'
});

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})