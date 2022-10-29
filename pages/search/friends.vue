<template>
  <MainWrapper>
      <div class="w-100 search-main-wrapper">
          <div class="search-cntrl-wrapper">
            <div class="search-input-wrapper">
                <input type="text" name="search" id="search-input-1" class="w-100 friend-search search-input" placeholder="Search for friends by email or name..." v-model.trim="search.input">
                <button v-if="search.input.length > 0 && isFetching === false" type="button" class="btn btn-dark" @click="searchCntrl">Search</button>
                <b-spinner label="Spinning" v-if="isFetching"></b-spinner>
            </div>
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
import CallType from '~/components/utils/callType.vue';
import CallIndicator from '~/components/utils/callIndicator.vue';
export default {
    name: "SearchFriendsPage",
    components: { MainWrapper, MainCard, ListCard, DateDisplay, ReadReceipt, CallType, CallIndicator },
    middleware:'auth',
    async mounted(){

    },
    data(){
      return {
        isFetching:false,
        search:{
          searchType:"name", //detected from Input
          input:"",
          results:[],
          offset:7,
        }
      }
    },
    methods:{
      async searchCntrl(e){
        this.isFetching = true;
        await this.searchQuery(this.search.input);
      },
      async searchQuery(search){
        const { data , err}= await this.$axios.post('/api/search/users',{
          search:search
        }).then(data=>{return data}).catch(err=>{return err});
        if(data.ok){
          this.search.results = data.data;
        }
        console.log(err)
        console.log(data)
        this.isFetching = false;
      },
      searchBreakdown(){
          //Regex test for email
          let emailTest = this.search.input.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          this.search.searchType = emailTest === true ? 'email' : 'name';
          let ret = {
            searchType:this.search.searchType,
            search:{
              first:"",
              last:"",
              full:"",
              email:"",
            }
          };
          switch(this.search.searchType){
            case "email":
              ret.search.full = this.search.input;
              break
            case "name":
              // Detect first and last name
              let sep = " ";
              let arr_ = this.search.input.split(sep);
              ret.search.first = arr_[0];
              ret.search.last = arr_[1];
              break
          }
          ret.search.full = this.search.input;
          return ret
      },
      async addFriend(id, name){
        await this.$axios.post('/api/user/friend/request', {
          requestType:'friends',
          toUser:id,
        }).then(data=>{
          if(data.status === 200){
           this.userNotify({
            message:`Your friend request has been sent to ${name}. We'll let you know when they accept.`,
            title:'Your friend request has been sent',
            aHideDelay:5000,
           })
          }else{
            this.userNotify({
              message:data.message,
              title:"Oh no.",
              aHideDelay:6000,
            })
          }
          return data;
        }).catch(err=>{
          this.userNotify({
              message:'Something went wrong please try again later',
              title:"Oh no.",
              aHideDelay:6000,
          })
        })

      },
      userNotify({message,title, aHideDelay}){
        this.$bvToast.toast(message, {
              title,
              autoHideDelay:aHideDelay || 5000,
              appendToast:true
        })
      }
      //State Cntrls
    },
    computed:{
      userSummary(){
        let me = this.$store.state.auth.user;
        return me;
      }
    }
}
</script>
<style scoped>
  .search-main-wrapper{
    height:90vh;
    width:100%;
    position:relative;
  }

  .search-cntrl-wrapper{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:100%;
    display:flex;
    justify-content:center;
  }

  .search-input-wrapper{
    position:relative;
    width:40vw;
    display:flex;
    flex-direction:column;
    gap:1em;
    align-items:center;
  }


  @media(max-width:768px) {
    .search-cntrl-wrapper{
      width:100%;
    }

    .search-input-wrapper{
      width:85%;
    }

  }
</style>
