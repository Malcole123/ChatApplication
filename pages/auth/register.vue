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
        id="input-group-8"
        label="Email address:"
        label-for="input-8"
        description="We'll never share your email with anyone else."
        :state="authErrors.email"
        :invalid-feedback="emailFeedback"
      >
        <b-form-input
          id="input-8"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          :state="authErrors.email"
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
        },
        authErrors:{
          email:null,
        }
      }
    },
    methods:{
      async onSubmit(){
          let res_ = await this.$store.dispatch('user/signup',this.form);
          if(res_.ok){
            let lgin = await this.$auth.loginWith('local', {
            data:{
              email:this.form.email,
              password:this.form.password,
            }
          })
          this.$router.push("/");
          }else{
            this.authErrors.email = false;
          }
      },
      onReset(){
        alert('run')
      }
    },
    computed:{
      emailFeedback(){
        if(this.authErrors.email=== false){
          return 'Your email has already been registered !'
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
