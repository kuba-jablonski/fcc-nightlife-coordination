<template>
    <div>
        <app-nav></app-nav>
        <app-hero></app-hero>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';

export default {
    components: {
        appNav: Nav,
        appHero: Hero
    }
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
</style>
