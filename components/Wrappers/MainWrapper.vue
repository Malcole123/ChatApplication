<template>
    <div class="app-wrapper">
      <Navbar :fname="user.name.first"/>
        <slot></slot>
    </div>
</template>

<script>
import Navbar from '../Navbar.vue';
export default {
    components: { Navbar },
    data(){
      return {

      }
    },
    computed:{
      user(){
        return this.$store.state.auth.user
      }
    }
}
</script>

<style scoped>
    .app-wrapper{
      width:100%;
      min-height:100vh;
      padding-bottom:110px;
      padding-left:10px;
      padding-right:6px;
      display:flex;
      justify-content:center;
    }

</style>
