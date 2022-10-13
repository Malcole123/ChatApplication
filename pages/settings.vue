<template>
  <MainWrapper>
      <div class="row w-100 main-row g-0 gap-0">
        <div class="col-12 mb-4">
            <div class="w-100 main_column">
              <div class="search-wrapper">
                <input type="text" name="search" id="search-input-1" class="w-100 search-input" placeholder="Search messages, calls, friends...">
              </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="pt-2 pb-3 d-lg-none d-md-block d-sm-block"></div>
          <MainCard :size="'lg'" :heading="'Profile Settings'">
            <div class="w-100 lrg-list">
                      <div class="scrl-container app-list">

                      </div>

            </div>
          </MainCard>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
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

</style>
