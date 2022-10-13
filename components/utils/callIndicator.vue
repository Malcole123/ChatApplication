<template>
  <div>
    <div class="icon accepted-call" v-if="type === 'accepted'">
      <svg :width="width" :height="height" fill="#00FF38" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
    </div>
    <div class="icon rejected-call" v-if="type === 'rejected'">
      <svg :width="width" :height="height" fill="#FF0000" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
    </div>

  </div>
</template>

<script>
export default {
  props:['type', 'height', 'width'],
  computed:{
    appearance(){
      if(this.type === 'active'){
        return "#00D0FF"
      }else{
        return '#A4A4A4'
      }
    }
  }
}
</script>

<style scoped>
  .accepted-call{
    transform:rotate(-45deg)
  }

  .rejected-call{
    transform:rotate(-45deg)
  }
</style>
