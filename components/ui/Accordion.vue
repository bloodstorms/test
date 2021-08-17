<template>
  <div class="accordion">
    <div v-if="title" class="accordion__header">
      <h4 class="accordion__title">{{ title }}</h4>
    </div>
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

export default {
  name: 'Accordion',
  components: {
    CollapsableItem,
  },
  props: {
    accordionInfos: {
      type: Array,
      default() {
        return [];
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showContent: null,
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
@import '@/assets/styles/colors';

.accordion {
  background-color: white;
  transition: height ease 1s;
  box-shadow: 0 0 4px -2px;
}

.accordion__header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-bottom: 1px solid #ccc;
}

.accordion__title {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  margin: 0;
}
</style>
