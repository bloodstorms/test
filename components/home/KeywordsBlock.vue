<template>
  <div id="keywords-block">
    <h2 class="keywords-block__word">
      <span class="keywords-block__chevron">></span>
      {{ keyword1 }}
    </h2>
    <h2 class="keywords-block__word">
      <span class="keywords-block__plus">+</span>
      {{ keyword2 }}
    </h2>
    <h2 class="keywords-block__word">
      <span class="keywords-block__amp">&amp;</span>
      {{ keyword3 }}
    </h2>
    <div class="keywords-block__button-container">
      <p v-sanitized-html="text" class="keywords-block__text"></p>
      <Button
        :text="buttonText"
        color="white"
        backgroundColor="blue"
        iconColor="white"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import VSanitizedHTML from '@/directives/v-sanitized-html';

import Button from '@/components/ui/Button.vue';
import {
  keyword1,
  keyword2,
  keyword3,
  text,
  buttonText,
} from '@/text-contents/keywords';

Vue.use(VSanitizedHTML);

export default {
  name: 'KeywordsBlock',
  components: {
    Button,
  },
  data() {
    return {
      keyword1,
      keyword2,
      keyword3,
      text,
      buttonText,
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';

#keywords-block {
  background-color: $grey-extralight;
  padding: 60px 0 150px 120px;
}

.keywords-block__word {
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-size: 150px;
  margin: 0;
  text-transform: uppercase;
  margin-left: 120px;
  line-height: 1.5;

  &:nth-child(2) {
    margin-left: 300px;
  }
}

.keywords-block__chevron {
  position: absolute;
  font-size: 200px;
  left: -120px;
  top: -60px;
  color: $green;
}
.keywords-block__plus {
  position: absolute;
  font-size: 240px;
  left: -140px;
  top: -70px;
  color: $blue-light;
}
.keywords-block__amp {
  position: absolute;
  font-size: 150px;
  left: -130px;
  top: 0px;
  color: $blue;
}

.keywords-block__button-container {
  width: 400px;
  margin-left: 170px;
  margin-top: 100px;
}
</style>
