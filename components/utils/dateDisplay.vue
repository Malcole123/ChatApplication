<template>
  <div class="date-display">
      {{dateDisplay}}
  </div>
</template>

<script>
export default {
  props:['date' , 'format'],
  computed:{
    dateDisplay(){
      let now_ = new Date().getTime();
      let diff_ = now_ - this.date * 1000
      let date_ = new Intl.RelativeTimeFormat('en');

      switch(this.format){
         case "relative":
             return date_.format(diff_, 'day');
            break
      }
    }
  }
}
</script>

<style scoped>
  .date-display{
    font-size:15px;
    color:rgba(0, 0, 0, 0.5);
  }
</style>
