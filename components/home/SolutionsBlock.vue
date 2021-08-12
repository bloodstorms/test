<template>
  <div class="solutions-block">
    <h2 class="solutions-block__text">
      Nous proposons l'étude<br />
      et l'élaboration de solutions<br />
      au travers de nouveaux modes<br />
      de règlements alternatifs
    </h2>
    <div class="solutions-block__cards">
      <Card
        v-for="card in cardInfos"
        :key="card.title"
        :imageName="card.image"
        :title="card.title"
        :description="card.description"
        margin="0 100px 0 0"
      />
    </div>
  </div>
</template>

<script>
import cardInfos from './card-texts';
import Card from '~/components/ui/Card.vue';

export default {
  name: 'SolutionsBlock',
  components: {
    Card,
  },
  data() {
    return {
      cardInfos,
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';

.solutions-block {
  background-color: $grey-extralight;
  padding: 120px 0 150px 120px;
}

.solutions-block__text {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  line-height: 1.2;
  margin: 0;
}

.solutions-block__cards {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin-top: 70px;
}
</style>
