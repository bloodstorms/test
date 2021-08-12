<template>
  <div class="container">
    <NavBar />
    <IntroBlock />
  </div>
</template>

<script>
import IntroBlock from '~/components/home/IntroBlock.vue';
import NavBar from '~/components/ui/NavBar.vue';

export default {
  components: {
    NavBar,
    IntroBlock,
  },
};
</script>

<style scoped>
.container {
  margin-top: 65px;
}
</style>
