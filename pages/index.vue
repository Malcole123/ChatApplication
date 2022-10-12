<template>
  <MainWrapper>
      <div class="row w-100 main-row g-2">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="w-100 main_column">
                <MainCard :size="'sml'" :heading="'Groups'">

                </MainCard>
                <MainCard :size="'sml'" :heading="'Recents'">

                </MainCard>

          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="pt-2 pb-3 d-lg-none d-md-block d-sm-block"></div>
          <MainCard :size="'lg'" :heading="'Friends'">

          </MainCard>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="pt-2 pb-3 d-lg-none d-md-block d-sm-block"></div>
          <MainCard :size="'lg'" :heading="'Recent Calls'">

          </MainCard>
        </div>
      </div>
  </MainWrapper>
</template>

<script>
import MainWrapper from '~/components/Wrappers/MainWrapper.vue';
import MainCard from '~/components/Cards/MainCard.vue';
export default {
    name: "IndexPage",
    components: { MainWrapper, MainCard }
}
</script>
<style scoped>
  .main_column{
    display:flex;
    flex-direction:column;
    gap:30px;
  }

</style>
