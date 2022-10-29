<template>
  <div class="main-card" :class="size">
      <div class="card-head" v-if="!stdalone">
          <h2 class="card-title">{{heading}}</h2>
          <SeeMore :width="4" :height="20"/>
      </div>
      <slot></slot>
  </div>
</template>

<script>
import SeeMore from '../Icons/SeeMore.vue';
export default {
    props:['size', 'heading', 'stdalone'],
    components:{ SeeMore }
}
</script>

<style scoped>
    .x-sml{
      min-height:55px;
      padding:0px!important;
    }

    .sml{
      height:40vh;
      overflow:hidden;
    }

    .lg{
      height:85vh;
    }

    .stretch{
      height:100%;
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
