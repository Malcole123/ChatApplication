<template>
  <MainWrapper>
      <div class="row w-100 main-row g-0 gap-0">
        <div class="col-12">
          <div class="col-lg-4 col-md-10 col-sm-12 main_column">
              <div class="search-wrapper">
                <input type="text" name="search" id="search-input-1" class="w-100 search-input" placeholder="Search for friends by email or name..." v-model.trim="search.input" @keyup="searchCntrl">
              </div>
          </div>
          <div class="col-12">
            <div class="page-loader d-flex justify-content-center align-items-center" v-if="isFetching">
                <div>
                  <b-spinner label="Loading..."></b-spinner>
                </div>
            </div>
            <div class="w-100 row mt-5 search-results" v-if="!isFetching">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="(item,index) in search.results" :key="'f-email-search-crd' + index">
                    <b-card
                      :title="`${item.fname} ${item.lname}`"
                      style="max-width: 20rem;"
                    >
                      <b-card-text>
                        {{item.email}}
                      </b-card-text>

                      <b-button href="#" variant="primary">Add Friend</b-button>
                    </b-card>
                </div>
            </div>
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
        //Offest 6 key char;
        if(this.search.offset = 0){
          this.search.offset = 7;
          return
        }else{
            let s = this.searchBreakdown();
            if(this.search.input.length === 0){ return }
            let res = await this.searchQuery(s);
          return
        }

      },
      async searchQuery(search){
        const { data , err}= await this.$axios.post('/api/search/users',{
          search
        }).then(data=>{return data}).catch(err=>{return err});
        if(data.ok){
          this.search.results = data.data;
        }
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
      async addFriend(email){
        let add_ = await this.$store.state.commit('user/addFriend', {
          email
        });
        console.log(add_)
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
  .page-loader{
      height:60vh;
      width:100%;
  }

  .search-results{
    transition:0.4s ease-in-out
  }
</style>
