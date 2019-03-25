<template>
  <div class="rating-container">
    <div class="app-star-rating">
      <ul class="stars">
        <li v-for="star in starsAmount" :key="star">
          <img v-if="isStarFullfilled(star)" src="@/assets/star.svg" />
          <img v-if="!isStarFullfilled(star) && !isStarEmpty(star)" src="@/assets/star_half.svg" />
          <img v-if="isStarEmpty(star)" src="@/assets/star_empty.svg"/>
        </li>
      </ul>
      <div class="points">
        <strong>{{ rating }}</strong>
        <span>/ {{ maxRating }}</span>
      </div>
    </div>
    <div class="reviews">
      <p>Lees onze {{ this.reviews }} beoordelingen</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display-rating',
  props: {
    maxRating: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      starsAmount: 5,
    };
  },
  computed: {
    pointsPerStar() {
      return this.maxRating / this.starsAmount;
    },
  },
  methods: {
    isStarFullfilled(star) {
      return star * this.pointsPerStar < this.rating;
    },
    isStarEmpty(star) {
      const starsToMax = Math.floor((this.maxRating - this.rating) / this.pointsPerStar);

      return this.starsAmount - starsToMax < star;
    },
  },
};
</script>

<style scoped lang="scss">
.rating-container {
  display: flex;
}

.app-star-rating {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
}

li {
  width: 20px;

  + li {
    margin-left: 10px;
  }
}

.points {
  margin-left: 10px;

  strong {
    font-size: 1.5rem;
  }
  span {
    color: $picton-blue;
    font-size: 0.8rem;
    vertical-align: top;
    margin-left: 5px;
  }
}

.reviews {
  background-image: url("../assets/feedbackcompany.svg");
  width: 190px;
  height: 34px;
  margin-left: 25px;

  p {
    font-size: 0.8rem;
    text-align: right;
  }
}
</style>
