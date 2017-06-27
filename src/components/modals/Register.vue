<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h2>Register</h2>
    
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="credentials.email" class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                    </p>
                </div>
    
                <div class="field">
                    <p class="control has-icons-left">
                        <input v-model="credentials.password" class="input" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </p>
                </div>
    
                <div class="field is-grouped">
                    <p class="control">
                        <button @click="signUp" class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                        <button @click="$store.commit('HIDE_REGISTER')" class="button is-link">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('signUp', this.credentials)
                .catch(e => console.log(e))
                .then(() => {
                    this.$store.commit('HIDE_REGISTER');
                })
        }
    }
}
</script>
