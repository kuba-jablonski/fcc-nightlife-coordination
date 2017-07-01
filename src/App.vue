<template>
    <div>
        <app-hero></app-hero>
        <app-search-results v-if="$store.state.searchResults"></app-search-results>
        <app-details v-else></app-details>
    </div>
</template>

<script>
import Hero from './components/Hero.vue';
import SearchResults from './components/search/SearchResults.vue';
import Details from './components/Details.vue';

export default {
    components: {
        appHero: Hero,
        appSearchResults: SearchResults,
        appDetails: Details
    },
    created() {
        this.$store.dispatch('watchUser');
        this.$store.dispatch('watchRedirect');
        this.$store.dispatch('dbListen');
    }
}
</script>

<style lang="scss">
@import './assets/styles/settings.scss';
@import '~bulma/bulma.sass';

html {
    height: 100%;
}
body {
    min-height: 100%;
    background-color: #e6f2ff;
}
</style>
