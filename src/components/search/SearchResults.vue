<template>
    <transition name="slide">
        <section id="results" class="section container box">
            <app-search-result-item 
            v-for="result in searchResults"
            :key="result.id"
            :result="result"
            ></app-search-result-item>
        </section>
    </transition>
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

<style lang="scss" scoped>
@media (min-width: 769px) {
    #results {
        top: -40px
    }
}

.slide-enter {
	animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

</style>
