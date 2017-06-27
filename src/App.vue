<template>
    <div>
        <app-register v-if="$store.state.modals.showRegister"></app-register>
        <app-nav></app-nav>
        <app-hero></app-hero>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';
import Register from './components/modals/Register.vue';

export default {
    components: {
        appNav: Nav,
        appHero: Hero,
        appRegister: Register
    }
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
</style>
