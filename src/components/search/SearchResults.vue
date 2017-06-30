<template>
    <section class="section container box">
        <app-search-result-item 
        v-for="result in searchResults"
        :key="result.id"
        :result="result"
        ></app-search-result-item>
    </section>
</template>

<script>
import SearchResultItem from './SearchResultItem.vue';

export default {
    components: {
        appSearchResultItem: SearchResultItem
    },
    computed: {
        searchResults() {
            return this.$store.getters.getSearchResults;
        }
    }
}
</script>
