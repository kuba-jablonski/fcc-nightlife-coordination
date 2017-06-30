import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as firebase from 'firebase';

import { yelp } from '../axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        searchResults: null,
        pendingData: null,
        chosenBars: null
    },
    mutations: {
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
        writeData({commit, state, getters}) {
            let chosenBars = getters.getChosenBars;

            if (state.pendingData !== null) {
                if (chosenBars.hasOwnProperty(state.pendingData)) {
                    const i = chosenBars[state.pendingData].indexOf(state.user.uid);

                    if (i === -1) {
                        chosenBars[state.pendingData].push(state.user.uid);
                    } else {
                        chosenBars[state.pendingData].splice(i, 1);
                    }
                } else {
                    chosenBars[state.pendingData] = [state.user.uid];
                }

                firebase.database().ref('bars').set(chosenBars)
                    .then(() => {
                        commit('SET_PENDING_DATA', null);
                    });
            }
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
    plugins: [createPersistedState({storage: window.sessionStorage})]
}); 