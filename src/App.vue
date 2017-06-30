<template>
    <div>
        <app-hero></app-hero>
        <app-search-results></app-search-results>
    </div>
</template>

<script>
import Hero from './components/Hero.vue';
import SearchResults from './components/search/SearchResults.vue';

export default {
    components: {
        appHero: Hero,
        appSearchResults: SearchResults
    },
    created() {
        this.$store.dispatch('watchUser');
        this.$store.dispatch('watchRedirect');
        this.$store.dispatch('dbListen');
    }
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
</style>
