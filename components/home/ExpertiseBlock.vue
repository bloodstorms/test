<template>
  <div id="savoir-faire" class="expertise-block">
    <div class="expertise-block__container">
      <div class="expertise-block__left">
        <h2 v-sanitized-html="title" class="expertise-block__title"></h2>
      </div>
      <div class="expertise-block__right"></div>
    </div>
    <div
      class="expertise-block__bottom"
      :style="{
        height: `${120 * accordionInfos.length + collapsableContentHeight}px`,
      }"
    >
      <Accordion
        :accordionInfos="accordionInfos"
        :style="{
          height: `${120 * accordionInfos.length + collapsableContentHeight}px`,
        }"
        @heightUpdated="updateAccordionHeight"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import VSanitizedHTML from '@/directives/v-sanitized-html';
import Accordion from '@/components/ui/Accordion.vue';

import { title, accordionInfos } from '@/text-contents/expertise';

Vue.use(VSanitizedHTML);

export default {
  name: 'ExpertiseBlock',
  components: {
    Accordion,
  },
  data() {
    return {
      collapsableContentHeight: 0,
      title,
      accordionInfos,
    };
  },
  methods: {
    updateAccordionHeight(height) {
      this.collapsableContentHeight = height;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.expertise-block__container {
  display: flex;
  position: relative;

  @include device-portrait {
    flex-direction: column;
  }
}

.expertise-block__left {
  width: 50%;
  padding: 250px 0 250px 120px;
  background-color: black;

  @include device-portrait {
    padding: 0;
    width: 100%;
  }
  @include tablet-landscape {
    padding: 80px 0 170px 80px;
  }
}
.expertise-block__right {
  width: 50%;
  background-image: url('~/assets/img/expertise.jpg');
  background-size: cover;
  background-position: center;

  @include device-portrait {
    width: 100%;
  }
  @include phone {
    height: 300px;
  }
  @include tablet-portrait {
    height: 450px;
  }
}

.expertise-block__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 100px;
  line-height: 1.2;
  color: white;
  margin: 0;

  @include device-portrait {
    position: absolute;
    text-shadow: 1px 1px 0 #424242;
  }
  @include phone {
    font-size: 50px;
    top: 40px;
    left: 20px;
  }
  @include tablet-portrait {
    font-size: 80px;
    top: 80px;
    left: 40px;
  }
  @include tablet-landscape {
    font-size: 70px;
  }
}

.expertise-block__bottom {
  position: relative;
  width: 100%;
  background-color: $grey-extralight;
  transition: height ease 1s;
}

::v-deep .accordion {
  top: -100px;
  position: absolute;
  margin: 0 10%;

  @include phone {
    margin: 0 20px;
  }
  @include tablet-portrait {
    margin: 0 40px;
  }
  @include tablet-landscape {
    margin: 0 80px;
  }
}
</style>
