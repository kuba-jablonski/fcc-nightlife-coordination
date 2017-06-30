import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as firebase from 'firebase';

import { yelp } from '../axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        modals: {
            showLogin: false,
            showRegister: false
        },
        user: null,
        searchResults: null,
        pendingData: null,
        chosenBars: null
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
        },
        'SEARCH_RESULTS'(state, results) {
            state.searchResults = results;
        },
        'SET_PENDING_DATA'(state, id) {
            state.pendingData = id;
        },
        'SET_CHOSEN_BARS'(state, data) {
            state.chosenBars = data;
        }
    },
    actions: {
        watchUser({commit, dispatch}) {
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    commit('SET_USER', user);
                    dispatch('writeData');
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
            yelp.get(`search?term=bar&location=${location}`)
                .then(response => {
                    console.log(response);
                    commit('SEARCH_RESULTS', response.data.businesses);
                });
        },
        signInWithProvider({commit}) {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        },
        watchRedirect({commit}) {
            firebase.auth().getRedirectResult();        
        },
        writeData({commit, state}) {
            firebase.database().ref('bars').set(state.pendingData)
                .then(() => {
                    commit('SET_PENDING_DATA', null);
                });
        },
        dbListen({commit}) {
            firebase.database().ref('bars')
                .on('value', snapshot => {
                    commit('SET_CHOSEN_BARS', snapshot.val());
                });
        }            
    },
    getters: {
        getSearchResults(state) {
            return state.searchResults;
        },
        getChosenBars(state) {
            if (state.chosenBars === null) {
                return {};
            }

            return state.chosenBars;
        }
    },
    plugins: [createPersistedState()]
}); 