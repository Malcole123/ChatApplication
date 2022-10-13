<template>
  <MainWrapper>
      <div class="row w-100 main-row g-0 gap-0">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="w-100 main_column">
              <div class="search-wrapper">
                <input type="text" name="search" id="search-input-1" class="w-100 search-input" placeholder="Search messages, calls, friends...">
              </div>
                <!---->
                <MainCard :size="'sml'" :heading="'Groups'">
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
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="pt-2 pb-3 d-lg-none d-md-block d-sm-block"></div>
          <MainCard :size="'lg'" :heading="'Friends'">
            <div class="w-100 lrg-list">
                      <div class="scrl-container app-list">

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
export default {
    name: "IndexPage",
    components: { MainWrapper, MainCard, ListCard, DateDisplay, ReadReceipt }
}
</script>
<style scoped>
  .main_column{
    display:flex;
    flex-direction:column;
    gap:30px;
  }

  .chat-actions{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
  }

  .sml-list{
    height:332px;
    overflow:hidden;
  }

  .lrg-list{
    height:80%;
    overflow:hidden;
  }


  .app-list > *:nth-child(even){
    border-top:1px solid rgba(0,0,0,0.2);
    border-bottom:1px solid rgba(0,0,0,0.2);

  }

  .app-list > *:nth-last-child(){
    border-bottom:none;

  }
  .search-wrapper{
    border-radius:var(--prim-curve);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background:white;
  }
  .search-input{
    height:55px;
    width:100%;
    outline:none;
    border-radius:10px;
    padding-left:20px;
    border:none;
    background:white;
  }
</style>
