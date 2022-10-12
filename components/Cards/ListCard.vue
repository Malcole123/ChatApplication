<template>
<div class="w-100 list-card bg-white">
    <div class="row p-0 g-0">
      <div class="col-2">
        <div class="display-img"></div>
      </div>
      <div class="col-6">
        <div class="list-content">
            <h5>Name Here</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus a dolor possimus laborum fugit explicabo pariatur at odit excepturi.</p>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <slot></slot>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props:['name', 'body_text', 'img_']
}
</script>

<style scoped>
  .display-img{
    width:70px;
    height:70px;
    border-radius:9999999px;
    background-color:var(--prim-bg);
  }

  .list-content{
    width:100%;
  }

  .list-content h5{
    font-size:18px;
    line-height:27px;
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
