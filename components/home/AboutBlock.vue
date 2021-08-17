<template>
  <div id="about-block">
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

#about-block {
  background-color: $blue-extralight;
  padding: 80px 10%;
}

.about-block__title {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  line-height: 1.1;
  margin: 0;
}

.about-block__subtitle {
  font-size: 25px;
  font-weight: 100;
  line-height: 1.3;
  margin: 50px 0;
}

.about-block__accordions {
  display: flex;
  justify-content: space-between;
}

// Custom styles
::v-deep .accordion {
  min-width: 300px;
  max-width: 30%;

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
