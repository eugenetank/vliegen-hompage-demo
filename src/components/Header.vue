<template>
  <header>
    <div class="sky">
      <img class="logo" src="@/assets/logo.svg">
    </div>
    <div class="separator"></div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
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
}

.logo {
  width: 300px;
  position: relative;
  top: 20px;
  left: 30px;
}

.separator {
  width: 100%;
  height: 40px;
  background-color: $primary;
}
</style>
