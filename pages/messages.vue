<template>
  <MainWrapper>
      <div class="row w-100 main-row g-0 gap-0">
        <div class="col-lg-5 col-md-12 col-sm-12">
          <div class="w-100 main_column">
              <div class="search-wrapper">
                <input type="text" name="search" id="search-input-1" class="w-100 search-input" placeholder="Search messages, calls, friends...">
              </div>
                <!---->
                <MainCard :size="'sml'" :heading="'Groups'">
                  <div class="w-100 sml-list">
                      <div class="scrl-container app-list">
                        <ListCard v-for="n in 3" :key="'test' + n" @click="toggleChat">
                        <div class="w-100 chat-actions">
                          <DateDisplay :date="1665590154" :format="'relative'"/>
                          <ReadReceipt state='active'/>
                        </div>
                        </ListCard>
                      </div>

                    </div>
                </MainCard>
                <MainCard :size="'sml'" :heading="'Recents'">
                    <div class="w-100 sml-list">
                      <div class="scrl-container app-list">
                        <ListCard v-for="n in 3" :key="'test' + n">
                        <div class="w-100 chat-actions">
                          <DateDisplay :date="1665590154" :format="'relative'"/>
                          <ReadReceipt state='active'/>
                        </div>
                        </ListCard>
                      </div>

                    </div>
                </MainCard>

          </div>
        </div>
        <div :class="state.class.messageClass">
          <MainCard :size="'lg'" :heading="'Chat'" :stdalone="true" class="chat-card">
              <div class="w-100 message-area-head message-padding">
                <div class="message-profile-img">
                  <div class="focus-profile-img"></div>
                </div>
                <div class="message-description">
                  <h4 class="message-area-heading">Test Name</h4>
                </div>
                <div class="message-options chat-actions chat-actions-row">
                  <CallType :type="'voice'" :width="28" :height="20"/>
                  <CallType :type="'video'" :width="28" :height="20"/>
                  <SeeMore :width="4" :height="20"/>
                </div>
              </div>
              <div class="w-100 message-area-body">
                  <div class="conversation-wrapper">
                    <div class="w-100 pt-3 pb-3" v-for="n in 44" :key="'test' + n">
                          <MessageBubble :tst="n" :msg="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptates molestiae et animi iste, minima, doloremque sint blanditiis aliquam nam odit repudiandae, illo quidem fugiat consequatur magni culpa quos. Sint.'"/>
                    </div>
                  </div>
              </div>
              <div class="w-100 message-area-footer message-padding">
                <div class="row h-100 g-2">
                  <div class="col-10 h-100 d-flex flex-column align-items-center justify-content-center">
                    <textarea name="userMessage" id="messageInput" class="message-input w-100"></textarea>
                  </div>
                  <div class="col-2 h-100 d-flex flex-column align-items-center justify-content-center">
                    <div class="row h-100">
                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                        Camera
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                        Mic
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </MainCard>
        </div>

      </div>
  </MainWrapper>
</template>

<script>
import MainWrapper from '~/components/Wrappers/MainWrapper.vue';
import MainCard from '~/components/Cards/MainCard.vue';
import ListCard from '~/components/Cards/ListCard.vue';
import DateDisplay from '~/components/utils/dateDisplay.vue';
import ReadReceipt from '~/components/utils/readReceipt.vue';
import ProfileImage from '~/components/utils/profileImage.vue';
import SeeMore from '~/components/Icons/SeeMore.vue';
import CallType from '~/components/utils/callType.vue';
import MessageBubble from '~/components/ChatComponents/MessageBubble.vue';
export default {
    name: "IndexPage",
    components: { MainWrapper, MainCard, ListCard, DateDisplay, ReadReceipt, ProfileImage, SeeMore, CallType, MessageBubble },
    data(){
      return {
        messageOpen:false,
        state:{
          class:{
            messageClass:"col-lg-7 col-md-12 col-sm-12 message-area"
          }
        }
      }
    },
    computed:{
        messageArea(){
          if(process.client){
              let width = window.innerWidth;
              if(width <= 768){

              }else{
                return 'col-lg-8 col-md-12 col-sm-12'
              }
          }else{
            return 'col-lg-8 col-md-12 col-sm-12'
          }

        }
    },
    methods:{
      toggleChat(){
        this.messageOpen = true;
         if(this.messageOpen){
            this.state.class.messageClass =  'col-lg-8 col-md-12 col-sm-12 message-area message-open';
          }else{
            this.state.class.messageClass =  'col-lg-8 col-md-12 col-sm-12 message-area';
          }
      }
    }
}
</script>
<style scoped>
  .message-area{
    height:100%;
  }

  .chat-card{
    height:90vh;
    padding:0px;
  }

  .focus-profile-img{
      width:2.5em;
      height:2.5em;
      border-radius:99999px;
      background:rgba(0,0,0,0.2);
  }

  .message-area-head{
    display:flex;
    align-items:center;
    gap:18px;
    height:10%;
    border-bottom:0.1px solid rgba(0,0,0,0.1);
  }
  .message-area-heading{
      font-size:1.1em;
      font-weight:700;;
  }

  .message-description{
    flex:1;
  }

  .message-options{
    margin-left:auto;
  }

  .message-area-body{
    height:80%;
    max-height:70vh;
    width:100%;
    overflow-y:scroll;
    overflow-x:hidden;
  }

  .conversation-wrapper{
    height:fit-content;
    display:flex;
    flex-direction:column;
    padding:20px 14px;
  }

  .message-area-footer{
    height:10%;
    border-top:0.1px solid rgba(0,0,0,0.2);
  }

  .message-padding{
    padding-right:12px;
    padding-left:12px;
  }

  .message-input{
    background:#E0E0E0;
    height:50%;
    outline:none;
    border:none;
    resize:none;
    padding:5px 8px;
    border-radius:var(--prim-curve)
  }

  .message-input::-webkit-scrollbar{
    width:0.125em;
  }

  .message-input::-webkit-scrollbar-track{
    width:0.125em;
  }

  .message-input::-webkit-scrollbar-thumb{
    width:0.125em;
    background:black;
    border-radius:0px var(--prim-curve) var(--prim-curve) 0px;
  }
  @media(max-width:768px){
    .message-area{
      position:fixed;
      top:0;
      right:-100%;
      z-index:5;
      padding:0px;
      z-index:9999;
    }

    .chat-card{
      height:100%;
    } 

    .message-area-body{
      max-height:80%;
    }

    .message-area .stretch{
      border-radius:0px!important;
      width:100%;
    }

    .message-open{
      transform:translateX(-100%);

    }
  }

</style>
