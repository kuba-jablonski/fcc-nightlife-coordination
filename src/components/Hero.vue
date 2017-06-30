<template>
    <main class="section container is-flex">
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
    </main>
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
    }
}
</script>


<style lang="scss">
.section {
    flex-direction: column;
    align-items: center;
}
</style>
