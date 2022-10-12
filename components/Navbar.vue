<template>
  <nav class="navbar">

  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar{
    width:12vw;
    border-radius:var(--prim-curve);
    position:fixed;
    top:34px;
    bottom:34px;
    left:32px;
    background:var(--app-prim);
    z-index:99;
  }

  @media(max-width:768px) {
    .navbar{
      width:100%;
      top:auto;
      left:0;
      right:0;
      bottom:0px;
      height:80px;
      border-radius:0px;

    }
  }
</style>
