<template>
  <div :class="styleMessage">
    <span class="message-text">{{msg}}</span>
  </div>
</template>

<script>
export default {
    props:['tst','msg'],
    components:{},
    computed:{
      styleMessage(){
        //Temporary for development
        if(this.tst%2 === 0){
          return 'message-bubble sender-bubble'
        }else{
          return 'message-bubble recipient-bubble'
        }

      }
    }
}
</script>

<style scoped>
    .message-bubble{
      --msg-bg:#CFCFCF;
      --sndr-bg:#1A66FF;
      width:fit-content;
      max-width:60%;
      height:fit-content;
      font-weight:bold;
      padding:6px 10px 6px 15px;
      position:relative;
      border-radius:var(--prim-curve);
    }

    .message-bubble::after{
      content:"";
      display:block;
      position:absolute;
      bottom:0%;
    }

    .sender-bubble{
        background:var(--sndr-bg);
        color:white;
        margin-left:auto;
    }

    .sender-bubble::after{
      right:-2%;
      border-bottom:20px solid var(--sndr-bg);
      border-right:20px solid transparent;
    }

    .recipient-bubble{
      background:var(--msg-bg);
      color:black;
    }

    .recipient-bubble::after{
      left:-2%;
      border-bottom:20px solid var(--msg-bg);
      border-left:20px solid transparent;

    }

    @media(max-width:768px){
      .message-bubble{
        max-width:80%;
      }
    }

</style>
