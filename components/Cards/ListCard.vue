<template>
<div class="w-100 list-card bg-white" @click="()=>{this.$emit('click')}">
    <div class="card-wrapper">
      <div class="profile-wrapper h-100">
        <div class="display-img"></div>
      </div>
      <div class="list-content">
            <h5>Name Here</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus a dolor possimus laborum fugit explicabo pariatur at odit excepturi.</p>
        </div>
      <div class="chat-action-wrapper">
        <slot></slot>
      </div>
    </div>
</div>
</template>

<script>
export default {
  emits:['click'],
  props:['name', 'body_text', 'img_']
}
</script>

<style scoped>
.card-wrapper{
  display:flex;
  gap:0.2em;
  position:relative;
}

.profile-wrapper{
  height:100%;
}

.chat-action-wrapper{
  width:12%;
  position:absolute;
  top:0;
  right:0;
  height:100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
}
.display-img{
    width:3em;
    height:3em;
    border-radius:9999999px;
    background-color:var(--prim-bg);
  }

  .list-content{
    flex:1;
    padding:0.125em 0.2em;
    max-width:65%;
  }

  .list-content h5{
    font-size:1em;
    font-weight:600;
  }

  .list-content p{
    width:100%;
    height:27px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    font-size:14px;
    color:rgba(77,77,77,0.75)
  }
</style>
