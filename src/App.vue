<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style lang="scss">
html {
  font-size: 12px;
}

body, p, ul {
  margin: 0;
  padding: 0;
}

body {
  min-width: 768px;
}

h3 {
  font-size: 2rem;
}

p {
  font-size: 1.25rem;
}

.box-shadow {
  box-shadow: 2px 2px 10px 8px rgba(212,212,212,1);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
