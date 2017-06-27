import Vue from 'vue';
import App from './App.vue';
import * as firebase from 'firebase';

import { store } from './store/store';
import { config } from './firebaseConfig';

Vue.prototype.$firebase = firebase.initializeApp(config);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})