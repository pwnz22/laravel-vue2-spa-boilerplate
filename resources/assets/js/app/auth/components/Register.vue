<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>

                <div class="panel-body">
                    <form class="form-horizontal" @submit.prevent="onSubmit" role="form">

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Name</label>

                            <div class="col-md-6">
                                <input type="text" id="name" class="form-control" v-model="name" autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">Email</label>

                            <div class="col-md-6">
                                <input type="text" id="email" class="form-control" v-model="email" autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input type="password" id="password" class="form-control" v-model="password" autofocus>
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
                name: null,
                email: null,
                password: null
            }
        },

        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            onSubmit() {
                this.register({
                    payload: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                })
            }
        }
    }
</script>