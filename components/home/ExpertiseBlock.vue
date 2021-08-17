<template>
  <div id="expertise-block">
    <div class="expertise-block__container">
      <div class="expertise-block__left">
        <h1 v-sanitized-html="title" class="expertise-block__title"></h1>
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

.expertise-block__container {
  display: flex;
}

.expertise-block__left {
  width: 50%;
  padding: 250px 0 250px 120px;
  background-color: black;
}
.expertise-block__right {
  width: 50%;
  background-image: url('~/assets/img/expertise.jpg');
  background-size: cover;
  background-position: center;
}

.expertise-block__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 100px;
  line-height: 1.2;
  color: white;
  margin: 0;
}

.expertise-block__bottom {
  position: relative;
  width: 100%;
  background-color: $blue-extralight;
  transition: height ease 1s;
}

::v-deep .accordion {
  top: -100px;
  position: absolute;
  margin: 0 15%;
}
</style>
