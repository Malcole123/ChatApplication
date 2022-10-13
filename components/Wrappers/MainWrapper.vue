<template>
    <div class="app-wrapper">
      <Navbar/>
        <slot></slot>
    </div>
</template>

<script>
import Navbar from '../Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style scoped>
    .app-wrapper{
      width:100%;
      min-height:100vh;
      padding-bottom:110px;
      padding-left:20px;
      padding-right:20px;
      display:flex;
      justify-content:center;
    }

</style>
