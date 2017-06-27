import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import { yelp } from '../axios';

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
        },
        logIn({commit}, credentials) {
            const {email, password} = credentials;
            return firebase.auth().signInWithEmailAndPassword(email, password);
        },
        searchYelp({commit}, location) {
            yelp.get(`search?term=food&location=${location}`).then(r => console.log(r));
        }            
    }
}) 