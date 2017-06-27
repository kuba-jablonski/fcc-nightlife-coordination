import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        modals: {
            showLogin: false,
            showRegister: false
        }
    },
    mutations: {
        'SHOW_LOGIN'(state) {
            state.modals.showLogin = true;
        },
        "HIDE_LOGIN"(state) {
            state.modals.showLogin = false;
        },
        'SHOW_REGISTER'(state) {
            state.modals.showRegister = true;
        },
        'HIDE_REGISTER'(state) {
            state.modals.showRegister = false;
        }
    }
}) 