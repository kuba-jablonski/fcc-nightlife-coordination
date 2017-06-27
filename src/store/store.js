import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        modals: {
            showLogin: false,
            showRegister: false
        },
        user: null
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
        },
        'SET_USER'(state, user) {
            state.user = user;
        } 
    },
    actions: {
        watchUser({commit}) {
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    commit('SET_USER', user);
                } else {
                    commit('SET_USER', null);
                }
            })
        },
        signUp({commit}, credentials) {
            const {email, password} = credentials;
            return firebase.auth().createUserWithEmailAndPassword(email, password);
        },
        signOut({commit}) {
            return firebase.auth().signOut();
        }
            
    }
}) 