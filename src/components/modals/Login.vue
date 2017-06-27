<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h2>Login</h2>

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
    
                <div v-if="error.show" class="notification is-danger">
                    <button @click="error.show = false" class="delete"></button>
                    {{ error.message }}
                </div>

                <div class="field is-grouped">
                    <p class="control">
                        <button @click="logIn" class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                        <button @click="$store.commit('HIDE_LOGIN')" class="button is-link">Cancel</button>
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
            },
            error: {
                message: '',
                show: false
            }
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('logIn', this.credentials)
                .catch(e => Promise.reject(e))
                .then(() => {
                    this.$store.commit('HIDE_LOGIN');
                })
                .catch(e => {
                    console.log(e);
                    this.error.message = e.message;
                    this.error.show = true;
                });
        }
    }  
}
</script>
