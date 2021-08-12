<template>
  <div class="card" :style="`margin: ${margin}`">
    <img
      class="card__image"
      :src="require(`@/assets/img/cards/${imageName}.jpg`)"
      :alt="imageName"
    />
    <Button class="card__button" text="Savoir plus" fontWeight="bold" />
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';

export default {
  name: 'Card',
  components: {
    Button,
  },
  props: {
    imageName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    margin: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 500px;
  width: 470px;
  flex-shrink: 0;
}

.card__image {
  height: auto;
  width: 100%;
}

.card__button {
  position: absolute;
  top: 320px;
  right: 20px;
}

.card__title {
  font-family: 'Oswald', sans-serif;
  font-weight: 100;
  font-size: 24px;
}

.card__description {
  font-size: 14px;
  line-height: 1.4;
}
</style>
