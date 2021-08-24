<template>
  <div id="solutions" class="solutions-block">
    <h2 v-sanitized-html="title" class="solutions-block__text"></h2>
    <Button
      v-if="canSwipeRight"
      class="
        solutions-block__scroll-button solutions-block__scroll-button--right
      "
      icon="chevron-right"
      backgroundColor="white"
      backgroundColorHover="black"
      borderColor="black"
      borderColorHover="black"
      iconColor="black"
      iconColorHover="white"
      @click="swipeRight"
    />
    <Button
      v-else
      class="
        solutions-block__scroll-button solutions-block__scroll-button--left
      "
      icon="chevron-left"
      backgroundColor="white"
      backgroundColorHover="black"
      borderColor="black"
      borderColorHover="black"
      iconColor="black"
      iconColorHover="white"
      @click="swipeLeft"
    />
    <div ref="scrollableContent" class="solutions-block__cards">
      <Card
        v-for="card in cardInfos"
        :key="card.title"
        :imageName="card.image"
        :title="card.title"
        :description="card.description"
        :buttonText="card.button"
        margin="0 100px 0 0"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import scrollTo from '@/utils/scrollTo';
import VSanitizedHTML from '@/directives/v-sanitized-html';

import { title, cardInfos } from '@/text-contents/solutions';

Vue.use(VSanitizedHTML);

export default {
  name: 'SolutionsBlock',
  components: {
    Button,
    Card,
  },
  data() {
    return {
      canSwipeRight: true,
      cardInfos,
      title,
    };
  },
  methods: {
    swipeLeft() {
      scrollTo(this.$refs.scrollableContent, -1500, 800);
      this.canSwipeRight = true;
    },
    swipeRight() {
      scrollTo(this.$refs.scrollableContent, 1500, 800);
      this.canSwipeRight = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.solutions-block {
  background-color: $grey-extralight;
  padding: 120px 0 60px 120px;
  position: relative;

  @include phone {
    padding: 20px 0 50px 20px;
  }
  @include tablet-portrait {
    padding: 40px 0 50px 40px;
  }
  @include tablet-landscape {
    padding: 80px 0 60px 80px;
  }
}

.solutions-block__text {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0;
  font-size: 50px;
  line-height: 1.2;
  margin: 0;

  @include phone {
    font-size: 23px;
  }
  @include tablet-portrait {
    font-size: 40px;
  }
  @include tablet-landscape {
    font-size: 45px;
  }
}

.solutions-block__scroll-button {
  position: absolute;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  padding: 14px;
  cursor: pointer;
  z-index: 1;
}

.solutions-block__scroll-button--right {
  top: 300px;
  right: 120px;

  @include phone {
    top: 300px;
    right: 20px;
  }
  @include tablet-portrait {
    top: 170px;
    right: 40px;
  }
  @include tablet-landscape {
    top: 235px;
    right: 80px;
  }
}
.solutions-block__scroll-button--left {
  top: 300px;
  right: 120px;

  @include phone {
    top: 300px;
    right: 20px;
  }
  @include tablet-portrait {
    top: 170px;
    right: 40px;
  }
  @include tablet-landscape {
    top: 235px;
    right: 80px;
  }
}

.solutions-block__cards {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin-top: 70px;
}
</style>
