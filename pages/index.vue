<template>
  <div class="container">
    <NavBar />
    <IntroBlock />
    <SolutionsBlock />
    <KeywordsBlock />
    <ExpertiseBlock />
    <AboutBlock />
    <FooterBlock />
  </div>
</template>

<script>
import IntroBlock from '@/components/home/IntroBlock.vue';
import SolutionsBlock from '@/components/home/SolutionsBlock.vue';
import KeywordsBlock from '@/components/home/KeywordsBlock.vue';
import ExpertiseBlock from '@/components/home/ExpertiseBlock.vue';
import AboutBlock from '@/components/home/AboutBlock.vue';
import FooterBlock from '@/components/home/FooterBlock.vue';
import NavBar from '@/components/ui/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    IntroBlock,
    SolutionsBlock,
    KeywordsBlock,
    ExpertiseBlock,
    AboutBlock,
    FooterBlock,
  },
};
</script>

<style scoped></style>
