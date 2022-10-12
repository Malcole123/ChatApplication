<template>
  <div class="main-card" :class="size">
      <div class="card-head">
          <h2 class="card-title">{{heading}}</h2>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:['size', 'heading']
}
</script>

<style scoped>
    .sml{
      height:347px;
    }

    .lg{
      height:80vh;
    }

    .card-head{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .card-title{
      font-weight:600;
      font-size:20px;
      line-height:30px;
    }
</style>
