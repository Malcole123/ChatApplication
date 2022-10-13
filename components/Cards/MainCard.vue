<template>
  <div class="main-card" :class="size">
      <div class="card-head" v-if="!stdalone">
          <h2 class="card-title">{{heading}}</h2>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:['size', 'heading', 'stdalone']
}
</script>

<style scoped>
    .x-sml{
      min-height:55px;
      padding:0px!important;
    }

    .sml{
      min-height:347px;
    }

    .lg{
      min-height:87vh;
    }

    .card-head{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .card-title{
      font-weight:700;
      font-size:20px;
      line-height:30px;
    }
</style>
