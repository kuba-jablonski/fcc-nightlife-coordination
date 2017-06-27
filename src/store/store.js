import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        showLoginModal: false
    },
    mutations: {
        'SHOW_LOGIN'(state) {
            state.showLoginModal = true;
        },
        "HIDE_LOGIN"(state) {
            state.showLoginModal = false;
        }
    }
}) 