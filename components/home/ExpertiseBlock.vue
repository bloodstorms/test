<template>
  <div class="expertise-block">
    <div class="expertise-block__container">
      <div class="expertise-block__left">
        <h1 class="expertise-block__title">Notre<br />savoir-faire</h1>
      </div>
      <div class="expertise-block__right"></div>
    </div>
    <div
      class="expertise-block__bottom"
      :style="{
        height: `${120 * accordionInfos.length + collapsableContentHeight}px`,
      }"
    >
      <div
        class="expertise-block__accordion"
        :style="{
          height: `${120 * accordionInfos.length + collapsableContentHeight}px`,
        }"
      >
        <CollapsableItem
          v-for="item in accordionInfos"
          :key="item.id"
          :showContent="showContent === item.id"
          :title="item.title"
          :contentText="item.text"
          :buttonText="item.button"
          :imageName="item.image"
          @heightUpdated="updateAccordionHeight($event, item.id)"
          @clicked="collapsableItemClicked(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CollapsableItem from '@/components/ui/CollapsableItem.vue';

import accordionInfos from '../text-contents/accordion-infos';

export default {
  name: 'ExpertiseBlock',
  components: {
    CollapsableItem,
  },
  data() {
    return {
      collapsableContentHeight: 0,
      showContent: null,
      accordionInfos,
    };
  },
  methods: {
    updateAccordionHeight(height, id) {
      this.collapsableContentHeight = height;
    },
    collapsableItemClicked(id) {
      if (this.showContent === id) {
        this.showContent = null;
      } else {
        this.showContent = id;
      }
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

.expertise-block__accordion {
  width: 70%;
  background-color: white;
  top: -100px;
  position: absolute;
  margin: 0 15%;
  transition: height ease 1s;
}
</style>
