<template>
  <div class="card box-shadow">
    <img :src="getImgUrl(icon)">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'feature-card',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconUrl() {
      return `@/assets/services/${this.icon}.png`;
    },
  },
  methods: {
    getImgUrl(name) {
      const images = require.context('../assets/services', false, /\.png$/);
      return images(`./${name}.png`);
    },
  },

};
</script>

<style scoped lang="scss">
.card {
  border-bottom: 10px solid $primary;
  width: 250px;
  height: 300px;
  text-align: center;
  padding: 30px;
  margin-top: 80px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 15px 0;
}
</style>
