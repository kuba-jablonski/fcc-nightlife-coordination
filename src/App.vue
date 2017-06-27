<template>
    <div>
        <app-register v-if="$store.state.modals.showRegister"></app-register>
        <app-login v-if="$store.state.modals.showLogin"></app-login>
        <app-nav></app-nav>
        <app-hero></app-hero>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';
import Register from './components/modals/Register.vue';
import Login from './components/modals/Login.vue';

import { yelp } from './axios';

export default {
    components: {
        appNav: Nav,
        appHero: Hero,
        appRegister: Register,
        appLogin: Login
    }
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
</style>
