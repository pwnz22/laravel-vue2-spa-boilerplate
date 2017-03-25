<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>

                <div class="panel-body">
                    <div class="alert alert-danger" v-if="errors.root">
                        {{ errors.root }}
                    </div>
                    <form class="form-horizontal" @submit.prevent="onSubmit" role="form">

                        <div class="form-group" :class="{ 'has-error': errors.email }">
                            <label for="email" class="col-md-4 control-label">Email</label>

                            <div class="col-md-6">
                                <input type="text" id="email" class="form-control" v-model="email" autofocus>
                                <span class="help-block" v-if="errors.email">
                                    {{ errors.email[0] }}
                                </span>
                            </div>
                        </div>

                        <div class="form-group" :class="{ 'has-error': errors.email }">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input type="password" id="password" class="form-control" v-model="password" autofocus>
                                <span class="help-block" v-if="errors.password">
                                    {{ errors.password[0] }}
                                </span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button class="btn btn-primary" type="sugmit">Register</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                email: null,
                password: null,
                errors: []
            }
        },

        methods: {
            ...mapActions({
                login: 'auth/login'
            }),
            onSubmit() {
                this.login({
                    payload: {
                        email: this.email,
                        password: this.password
                    },
                    context: this
                })
                .then(() => {
                    this.$router.replace({ name: 'home' })
                })
            }
        }
    }
</script>
