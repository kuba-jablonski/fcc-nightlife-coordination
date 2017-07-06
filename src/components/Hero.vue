<template>
    <section class="hero is-primary is-medium">
        <div v-if="user" class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-right">
                        <p class="nav-item">
                            {{ user.email }}
                        </p>
                        <span class="nav-item">
                            <a @click="$store.dispatch('signOut')" class="button is-primary is-inverted">
                                <span class="icon">
                                    <i class="fa fa-sign-out"></i>
                                </span>
                                <span>Logout</span>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
        </div>
    
        <div class="hero-body">
            <div id="hero" class="container has-text-centered is-flex">
                <h1 class="title is-1">
                    Nightlife Coordination
                </h1>
                <br>
                <p class="subtitle is-5">
                    Where are you heading out tonight?
                </p>
                <div class="field has-addons">
                    <p class="control">
                        <input @keypress.enter="search" v-model="location" class="input" type="text" placeholder="Search for location..">
                    </p>
                    <br>
                    <p class="control">
                        <a @click="search" :class="{'is-loading': loading}" class="button is-success">
                            Search
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { yelp } from '../axios';

export default {
    data() {
        return {
            location: '',
            loading: false
        }
    },
    methods: {
        search() {
            this.loading = true;
            yelp.get(`search?term=bar&location=${this.location}`)
                .then(response => {
                    this.$store.commit('SEARCH_RESULTS', response.data.businesses);
                    this.loading = false;
                });
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    }
}
</script>


<style lang="scss">
#hero {
    flex-direction: column;
    align-items: center;
}
</style>
