<template>
  <div class="home">
    <div class="jumbo">
      <div class="content">
        <div class="left-block box-shadow">
          <h3>Bent u onze<br />nieuwe partner?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc- ing elit. Nam consequat arcu sed nulla
            lacinia, quis blandit eros facilisis. Mauris mattis nec sem nec finibus. Nunc eget leo
            ut diam imperdiet vehicula ac non elit. Pellentesque nisi neque, sodales nec sem et,
            condimentum congue ligula. Integer non ullamcorper lacus, sed luctus sapien.
          </p>
          <b-dropdown hoverable aria-role="list">
            <button class="button is-info is-medium" slot="trigger">
              <span>De mogelijkheden</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
          </b-dropdown>
        </div>
        <img src="@/assets/timo_partner.svg"/>
      </div>
      <div class="background"></div>
    </div>
    <div class="features">
      <feature-card v-for="(feature, index) in featureCards"
                    :key="index"
                    :icon="feature.icon"
                    :title="feature.title"
                    :description="feature.content" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FeatureCard from '@/components/FeatureCard.vue';

export default {
  name: 'home',
  data() {
    return {
      featureCards: [
        {
          title: 'Groot bereik',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'range',
        },
        {
          title: 'Gratis aanmelden',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'freeSignup',
        },
        {
          title: 'Klantenservice',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'service',
        },
        {
          title: 'Support en inzage',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'support',
        },
        {
          title: 'Verdien geld',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'money',
        },
        {
          title: 'Kwalitatief aanbod',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'quality',
        },
        {
          title: 'Maatwerk oplossingen',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'wrench',
        },
        {
          title: 'Gemak',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'thumbs',
        },

      ],
    };
  },
  components: {
    FeatureCard,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: $light-grey;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 100px;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  position: relative;
  padding: 50px 0;
  width: 950px;
  margin: auto;
}

.background {
  width: 110%;
  height: 80%;
  position: absolute;
  bottom: -90px;
  transform: rotate(-7deg);
  background-color: #fff;
}

.jumbo {
  overflow: hidden;
  position: relative;

  img {
    height: 300px;
  }
}

.left-block {
  padding: 25px;
  width: 400px;
  background-color: #ffffff;

  /deep/ .button {
    background-color: $primary;
  }
}

.features {
  width: 950px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: auto;
}

@media (max-width: 980px) {
  .features {
    width: 720px;
  }

  .content {
    width: 720px;

    img {
      height: 150px;
    }
  }
}
</style>
