<template>
  <div id="solutions" class="solutions-block">
    <h2 v-sanitized-html="title" class="solutions-block__text"></h2>
    <Button
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
    />
    <Button
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
    />
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="card in cardInfos" :key="card.title" class="swiper-slide">
          <Card
            ref="card"
            :imageName="card.image"
            :title="card.title"
            :description="card.description"
            :buttonText="card.button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import VSanitizedHTML from '@/directives/v-sanitized-html';

import { title, cardInfos } from '@/text-contents/solutions';

Vue.use(VSanitizedHTML);
Vue.use(VueAwesomeSwiper);

export default {
  name: 'SolutionsBlock',
  components: {
    Button,
    Card,
  },
  data() {
    return {
      cardInfos,
      title,
      swiperOption: {
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        threshold: 2,
        navigation: {
          nextEl: '.solutions-block__scroll-button--right',
          prevEl: '.solutions-block__scroll-button--left',
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.solutions-block {
  background-color: $grey-extralight;
  padding: 120px 120px 60px 120px;
  position: relative;

  @include phone {
    padding: 40px 20px 50px 20px;
  }
  @include tablet-portrait {
    padding: 80px 40px 50px 40px;
  }
  @include tablet-landscape {
    padding: 80px 80px 60px 80px;
  }
}

.solutions-block__text {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0;
  font-size: 47px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 70px 0;

  @include phone {
    font-size: 20px;
    margin: 0 0 60px 0;
  }
  @include tablet-portrait {
    font-size: 38px;
  }
  @include tablet-landscape {
    font-size: 42px;
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
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @include phone {
    height: 50px;
    width: 50px;
  }
}

.solutions-block__scroll-button--right {
  top: 285px;
  right: 120px;

  @include phone {
    top: 130px;
    right: 5px;
  }
  @include tablet-portrait {
    top: 200px;
    right: 40px;
  }
  @include tablet-landscape {
    top: 220px;
    right: 80px;
  }
}
.solutions-block__scroll-button--left {
  top: 285px;
  right: 200px;

  @include phone {
    top: 130px;
    right: 70px;
  }
  @include tablet-portrait {
    top: 200px;
    right: 110px;
  }
  @include tablet-landscape {
    top: 220px;
    right: 160px;
  }
}

::v-deep .card {
  margin-right: 100px;

  @include phone {
    margin-right: 50px;

    &:last-child {
      margin-right: 20px;
    }
  }
}

// Swiper styles
.swiper-container {
  overflow: visible;
}

.swiper-slide {
  width: 50%;
  padding-right: 7%;

  @include phone {
    width: 100%;
    padding-right: 10%;
  }
  @include tablet-portrait {
    padding-right: 5%;
  }
  @include tablet-landscape {
    padding-right: 5%;
  }
}

.swiper-button-disabled {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
