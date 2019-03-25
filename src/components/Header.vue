<template>
  <header>
    <div class="sky">
      <img class="logo" src="@/assets/logo.svg">
      <display-rating :maxRating="10" :rating="7.5" :reviews="5084" />
    </div>
    <div class="separator"></div>
  </header>
</template>

<script>
import DisplayRating from '@/components/DisplayRating.vue';

export default {
  name: 'app-header',
  components: {
    DisplayRating,
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: linear-gradient(#ffffff, #bafffa);
}

.sky {
  background-image: url("../assets/clouds.svg");
  background-repeat-y: no-repeat;
  background-position-y: bottom;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  /deep/ .rating-container {
    margin: 0 0 20px 50px;
    flex: 0.7;
  }
}

.logo {
  width: 300px;
  position: relative;
  top: 20px;
  margin-left: 30px;
}

.separator {
  width: 100%;
  height: 40px;
  background-color: $primary;
}
</style>
