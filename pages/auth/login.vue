<template>
  <div class="container pt-4 pb-4">
    <h2 class="text-center mb-4">Log In</h2>
    <div class="auth-form">
      <b-form @submit.prevent="onSubmit" @reset="onReset">

        <b-form-group
          id="input-group-8"
          label="Email address:"
          label-for="input-8"
          :state="authError"
          :invalid-feedback="authFeedback"
        >
          <b-form-input
            id="input-8"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            :state="authError"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-password"
          label="Create password:"
          label-for="input-password"
          :state="authError"
          :invalid-feedback="authFeedback"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
            :state="authError"

          ></b-form-input>
        </b-form-group>

        <div class="w-100">
          <b-button type="submit" variant="dark" class="w-100">Sign Up</b-button>
        </div>
        <div class="w-100 mt-3">
          <p>Don't have an account ? <NuxtLink to="/auth/register">Sign up here</NuxtLink></p>
        </div>

      </b-form>
    </div>
  </div>
  </template>

  <script>
  export default {
      data(){
        return {
          form:{
            password:"",
            email:"",
          },
          authError:null
        }
      },
      methods:{
        async onSubmit(){
          const { ok } = await this.$store.dispatch('user/login', this.form);
          if(ok){
            this.$router.push('/')
          }else{
            this.authError = true;
          }
        },
        onReset(){
          alert('run')
        }
      },
      computed:{
        authFeedback(){
          if(this.authError === true){
            return 'Incorrect email or password'
          }
        },
      }
  }
  </script>

  <style scoped>
    .auth-form{
      width:60%;
      margin:0 auto;
    }
    @media(max-width:768px) {
      .auth-form{
        width:95%;
      }
    }
  </style>
