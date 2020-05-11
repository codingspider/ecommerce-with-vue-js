<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Register </h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" v-on:submit.prevent="register()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="categoryId">Name </label>
                                    <input type="text" class="form-control" placeholder="Name" v-model="form.name" name="name" :class="{ 'is-invalid': form.errors.has('name') }">
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="categoryId">Email </label>
                                    <input type="text" class="form-control" placeholder="Email" v-model="form.email" name="email" :class="{ 'is-invalid': form.errors.has('email') }">
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for="categoryId">Password</label>
                                    <input type="text" class="form-control" placeholder="Password" v-model="form.password" name="password" :class="{ 'is-invalid': form.errors.has('password') }">
                                    <has-error :form="form" field="password"></has-error>
                                </div>

                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->

                </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
import Vue from 'vue'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

    export default {
        name: "New",
        data(){
            return {
                form: new Form({
                    name:'',
                    email:'',
                    password:'',
                })
            }
        },
        methods:{
            register(){
                axios.post('/api/register')
                    .then((response)=>{
                       this.$router.push('/login')
                        Toast.fire({
                          icon: 'success',
                          title: 'Registration successfully'
                        })
                    })
                    .catch(()=>{
                      Toast.fire({
                          icon: 'error',
                          title: 'Something went wrong! '
                        })
                    })
            }
        }
    }
</script>

<style scoped>
</style>