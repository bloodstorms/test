<template>
  <div id="a-propos" class="about-block">
    <h2 v-sanitized-html="title" class="about-block__title"></h2>
    <h3 v-sanitized-html="subtitle" class="about-block__subtitle"></h3>
    <div class="about-block__accordions">
      <Accordion
        v-for="item in accordionsList"
        :key="item.name"
        :accordionInfos="item.accordionInfos"
        :title="item.name"
        @heightUpdated="updateAccordionHeight"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import VSanitizedHTML from '@/directives/v-sanitized-html';
import Accordion from '@/components/ui/Accordion.vue';

import { title, subtitle, accordionsList } from '@/text-contents/about';

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
      subtitle,
      accordionsList,
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

.about-block {
  background-color: $blue-extralight;
  padding: 80px 10%;

  @include phone {
    padding: 80px 20px;
  }
  @include tablet-portrait {
    padding: 80px 40px;
  }
  @include tablet-landscape {
    padding: 80px 80px;
  }
}

.about-block__title {
  font-family: 'Oswald', sans-serif;
  font-size: 52px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0;
  margin: 0;

  @include phone {
    font-size: 45px;
  }
}

.about-block__subtitle {
  font-size: 23px;
  line-height: 1.3;
  margin: 50px 0;

  @include phone {
    font-size: 16px;
    margin: 30px 0;
  }
}

.about-block__accordions {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @include device-portrait {
    flex-direction: column;
  }
}

// Custom styles
::v-deep .accordion {
  min-width: 270px;
  max-width: 30%;

  @include device-portrait {
    margin-bottom: 40px;
    max-width: 100%;
    width: 100%;
  }

  .collapsable-item {
    padding: 10px 20px 0 20px;

    &:last-child {
      margin-bottom: 10px;
    }
  }

  .collapsable-item__title {
    font-size: 20px;
    margin: 10px 0;
  }

  .collapsable-item__icon {
    font-size: 20px;
  }

  .collapsable-item__content {
    padding: 0;
  }

  .collapsable-item__separator {
    height: 0;
    box-shadow: none;
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
  }
}
</style>
