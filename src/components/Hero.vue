<template>
    <!--<main class="section container is-flex">
                            <h1>Search for your location</h1>
                            <br>
                            <div class="field has-addons">
                                <p class="control">
                                    <input v-model="location" class="input" type="text" placeholder="Search...">
                                </p>
                                <br>
                                <p class="control">
                                    <a @click="search" class="button is-info">
                                        Search
                                    </a>
                                </p>
                            </div>
                        </main>-->
    
    <section class="hero is-primary is-bold is-medium">
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
                <div class="field has-addons">
                    <p class="control">
                        <input v-model="location" class="input" type="text" placeholder="Search...">
                    </p>
                    <br>
                    <p class="control">
                        <a @click="search" class="button is-success">
                            Search
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            location: ''
        }
    },
    methods: {
        search() {
            this.$store.dispatch('searchYelp', this.location);
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
