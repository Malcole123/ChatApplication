<template>
    <div class="container-fluid">
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
    .container-fluid{
      min-height:100vh;
      width:100%;
      padding-bottom:110px;
    }
</style>
