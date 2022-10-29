<template>
  <div class="d-flex justify-content-center align-items-center profile-img" :class="size" :style="`width:${width};height:${height}`">
    {{namePreview.short}}
  </div>
</template>

<script>
export default {
    props:['size', 'width', 'height', 'desc'],
    computed:{
      namePreview(){
        if(!this.desc){return ''}
        let short = this.desc.length > 1 ? this.desc.substr(0,1) : '';
        return {
          short,
          all:this.desc
        }
      }
    }
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
