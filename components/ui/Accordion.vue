<template>
  <div class="accordion">
    <CollapsableItem
      v-for="item in accordionInfos"
      :key="item.id"
      :showContent="showContent === item.id"
      :title="item.title"
      :contentText="item.text"
      :buttonText="item.button"
      :imageName="item.image"
      @heightUpdated="updateAccordionHeight"
      @clicked="collapsableItemClicked(item.id)"
    />
  </div>
</template>

<script>
import CollapsableItem from '@/components/ui/CollapsableItem.vue';

import accordionInfos from '@/text-contents/accordion-infos';

export default {
  name: 'Accordion',
  components: {
    CollapsableItem,
  },
  data() {
    return {
      showContent: null,
      accordionInfos,
    };
  },
  methods: {
    updateAccordionHeight(height) {
      this.$emit('heightUpdated', height);
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

<style lang="scss" scoped>
.accordion {
  background-color: white;
  transition: height ease 1s;
}
</style>
