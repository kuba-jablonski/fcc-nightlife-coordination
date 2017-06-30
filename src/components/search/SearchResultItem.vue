<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img :src="result.image_url">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{ result.name }}</strong>
                    <span @click="go" class="tag is-success">Success</span>
                    <br>  {{ review }} 
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small">
                            <i class="fa fa-retweet"></i>
                        </span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small">
                            <i class="fa fa-heart"></i>
                        </span>
                    </a>
                </div>
            </nav>
        </div>
        <div class="media-right">
            <button class="delete"></button>
        </div>
    </article>
</template>

<script>
import { yelp } from '../../axios';

export default {
    props: ['result'],
    data() {
        return {
            review: '...'
        }
    },
    methods: {
        getReview() {
            yelp.get(`${this.result.id}/reviews`)
                .then(response => {
                    this.review = response.data.reviews[Math.floor(Math.random() * 3)].text
                })
                .catch(e => {
                    this.review = 'No review to display.';
                })
        },
        go() {
            this.$store.commit('SET_PENDING_DATA', this.result.id);
            this.$store.dispatch('signInWithProvider');
        }
    },
    created() {
        this.getReview();
    }
}
</script>

<style lang="scss" scoped>
.tag {
    cursor: pointer;
}
</style>
