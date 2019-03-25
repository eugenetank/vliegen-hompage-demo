<template>
  <div class="footer">
    <div>
      <p class="is-size-7">
        &copy; 2013 - {{ currentYear }} Vliegenenparkeren.nl - Alle rechten voorbehouden
      </p>
      <ul>
         <li v-for="(link, index) in navigationLinks" :key="index">
           <router-link :to="link.url">{{ link.title }}</router-link>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      navigationLinks: [
        { url: '#', title: 'Bedrijfsgegevens' },
        { url: '#', title: 'Privacy policy' },
        { url: '#', title: 'Algemene voorwaarden' },
        { url: '#', title: 'Sitemap' },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $regal-blue;
  padding: 20px;
  color: #ffffff;
  font-size: 0.84rem;

  > div {
    width: 75%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
}

ul {
  list-style-type: none;

  li {
    display: inline;

    a {
      color: #ffffff;
    }

    + li:before {
      content: ' / '
    }
  }
}

</style>
