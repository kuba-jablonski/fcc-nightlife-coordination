<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-96x96">
                <img :src="result.image_url">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{ result.name }}</strong>
                    <br> {{ review }}
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <a class="level-item">
                        <span @click="go" class="tag is-success">{{ usersGoing }} going</span>
                    </a>
                </div>
            </nav>
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
            if (!this.$store.state.user) {
                this.$store.dispatch('signInWithProvider');
            } else {
                this.$store.dispatch('writeData');
            }
        }
    },
    computed: {
        usersGoing() {
            let bars = this.$store.getters.getChosenBars;

            if (bars.hasOwnProperty(this.result.id)) {
                return bars[this.result.id].length;
            }

            return 0;
        }
    },
    created() {
        this.getReview();
    }
}
</script>

<style lang="scss">
@import '../../assets/styles/settings.scss';

.tag {
    cursor: pointer;
}
.image {
    top: 7px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    img {
        width: 100%;
        height: 100%;
    }
}
p {
    font-size: 1rem
}
</style>
