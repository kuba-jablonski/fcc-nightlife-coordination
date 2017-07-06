<template>
    <div class="section container has-text-centered">
        <p>a <a href="https://www.freecodecamp.com" target="_blank">freeCodeCamp<i class="fa fa-free-code-camp"></i></a> Project</p>
        <p>build by <a href="https://github.com/kuba-jablonski" target="_blank"><i class="fa fa-github"></i>napstablook</a></p>
        <p>powered by <a href="https://www.yelp.com" target="_blank"><i class="fa fa-yelp"></i> yelp</a></p>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/settings.scss';

.section {
    background-color: #e6f2ff;
    p {
        color: $primary;
        font-size: 1.3rem;
    }
    .fa {
        position: relative;
        top: 5px;
    }
}
</style>
