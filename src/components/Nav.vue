<template>
    <nav class="nav has-shadow">
        <div class="nav-left">
            <a class="nav-item">
                Nightlife Coordination
            </a>
        </div>
    
        <div class="nav-center">
            <a class="nav-item">
                <span class="icon">
                    <i class="fa fa-github"></i>
                </span>
            </a>
        </div>
    
        <div v-if="!$store.state.user" class="nav-right">
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a @click="$store.commit('SHOW_LOGIN')" class="button">
                            <span class="icon">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Log in</span>
                        </a>
                    </p>
                </div>
            </div>
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a @click="$store.commit('SHOW_REGISTER')" class="button">
                            <span class="icon">
                                <i class="fa fa-user-plus"></i>
                            </span>
                            <span>Register</span>
                        </a>
                    </p>
                </div>
            </div>            
        </div>

        <div v-else class="nav-right">
            <div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a @click="$store.dispatch('signOut')" class="button">
                            <span class="icon">
                                <i class="fa fa-sign-out"></i>
                            </span>
                            <span>Log out</span>
                        </a>
                    </p>
                </div>
            </div>            
        </div>
    </nav>
</template>

