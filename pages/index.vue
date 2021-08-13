<template>
  <div class="container">
    <NavBar />
    <IntroBlock />
    <SolutionsBlock />
    <KeywordsBlock />
  </div>
</template>

<script>
import IntroBlock from '~/components/home/IntroBlock.vue';
import SolutionsBlock from '~/components/home/SolutionsBlock.vue';
import KeywordsBlock from '~/components/home/KeywordsBlock.vue';
import NavBar from '~/components/ui/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    IntroBlock,
    SolutionsBlock,
    KeywordsBlock,
  },
};
</script>

<style scoped>
.container {
  margin-top: 65px;
}
</style>
