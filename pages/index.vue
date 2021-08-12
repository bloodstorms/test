<template>
  <div class="container">
    <NavBar />
    <IntroBlock />
    <SolutionsBlock />
  </div>
</template>

<script>
import IntroBlock from '~/components/home/IntroBlock.vue';
import SolutionsBlock from '~/components/home/SolutionsBlock.vue';
import NavBar from '~/components/ui/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    IntroBlock,
    SolutionsBlock,
  },
};
</script>

<style scoped>
.container {
  margin-top: 65px;
}
</style>
