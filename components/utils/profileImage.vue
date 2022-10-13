<template>
  <div class="d-flex justify-content-center align-items-center profile-img" :class="size">
    I
  </div>
</template>

<script>
export default {
    props:['size']
}
</script>

<style scoped>
    .profile-img{
      border-radius:99999px;
      background-size:cover;
      background-position:center;
      background-color:var(--prim-bg);
      min-height:70px;
      min-width:70px;
    }

    .lg-profile{
      height:95px;
      width:95px;
    }
</style>
