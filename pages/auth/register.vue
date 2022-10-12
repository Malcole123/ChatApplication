<template>
<div class="container pt-4 pb-4">
  <h2 class="text-center mb-4">Register</h2>
  <div class="auth-form">
    <b-form @submit.prevent="onSubmit" @reset="onReset">

      <b-form-group id="input-group-fname" label="Your First Name:" label-for="input-fname">
        <b-form-input
          id="input-fname"
          v-model="form.fname"
          placeholder="Enter first name..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-lname" label="Your Last Name:" label-for="input-lname">
        <b-form-input
          id="input-lname"
          v-model="form.lname"
          placeholder="Enter last name..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-password"
        label="Create password:"
        label-for="input-password"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <div class="w-100">
        <b-button type="submit" variant="dark" class="w-100">Sign Up</b-button>
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
          fname:"",
          lname:"",
          password:"",
          email:"",

        }
      }
    },
    methods:{
      onSubmit(){
          this.$store.dispatch('user/signup',this.form)
      },
      onReset(){
        alert('run')
      }
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
