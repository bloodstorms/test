<template>
  <div class="solutions-block">
    <h2 class="solutions-block__text">
      Nous proposons l'étude<br />
      et l'élaboration de solutions<br />
      au travers de nouveaux modes<br />
      de règlements alternatifs
    </h2>
    <FontAwesomeIcon
      v-if="canSwipeRight"
      class="
        solutions-block__scroll-button solutions-block__scroll-button--right
      "
      icon="chevron-right"
      @click="swipeRight"
    />
    <FontAwesomeIcon
      v-else
      class="
        solutions-block__scroll-button solutions-block__scroll-button--left
      "
      icon="chevron-left"
      @click="swipeLeft"
    />
    <div ref="scrollableContent" class="solutions-block__cards">
      <Card
        v-for="card in cardInfos"
        :key="card.title"
        :imageName="card.image"
        :title="card.title"
        :description="card.description"
        margin="0 100px 0 0"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/ui/Card.vue';
import scrollTo from '@/utils/scrollTo';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import cardInfos from './card-texts';

library.add(faChevronRight, faChevronLeft);

export default {
  name: 'SolutionsBlock',
  components: {
    Card,
    FontAwesomeIcon,
  },
  data() {
    return {
      canSwipeRight: true,
      cardInfos,
    };
  },
  methods: {
    swipeLeft() {
      scrollTo(this.$refs.scrollableContent, -1000, 600);
      this.canSwipeRight = true;
    },
    swipeRight() {
      scrollTo(this.$refs.scrollableContent, 1000, 600);
      this.canSwipeRight = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';

.solutions-block {
  background-color: $grey-extralight;
  padding: 120px 0 60px 120px;
  position: relative;
}

.solutions-block__text {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  line-height: 1.2;
  margin: 0;
}

.solutions-block__scroll-button {
  position: absolute;
  color: $blue;
  border: 3px solid $blue;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  padding: 14px;
  cursor: pointer;
}

.solutions-block__scroll-button--right {
  top: 300px;
  right: 120px;
}
.solutions-block__scroll-button--left {
  top: 300px;
  right: 120px;
}

.solutions-block__cards {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin-top: 70px;
}
</style>
