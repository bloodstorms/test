<template>
  <div class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        :src="require(`@/assets/img/cards/${imageName}.jpg`)"
        :alt="imageName"
      />
      <Button class="card__button" :text="buttonText" fontWeight="bold" />
    </div>
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
    buttonText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';

.card {
  width: 100%;
  flex-shrink: 0;
}

.card__image-container {
  position: relative;
}

.card__image {
  height: auto;
  width: 100%;
}

.card__button {
  position: absolute;
  bottom: -18px;
  right: 20px;
}

.card__title {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 24px;
}

.card__description {
  font-size: 14px;
  line-height: 1.4;
}
</style>
