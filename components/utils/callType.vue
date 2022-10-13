<template>
  <div>
    <div class="icon" v-if="type === 'video'">
      <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" fill="#1A66FF" viewBox="0 0 24 24"><path d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z"/></svg>
    </div>
    <div class="icon" v-if="type === 'voice'">
      <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" fill="#1A66FF" viewBox="0 0 24 24">
        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
      </svg>
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

<style>

</style>
