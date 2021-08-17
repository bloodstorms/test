<template>
  <div id="intro-block">
    <div class="intro-block__left"></div>
    <div class="intro-block__right">
      <h1 v-sanitized-html="title" class="intro-block__title"></h1>
      <div v-sanitized-html="text" class="intro-block__text"></div>
      <Button :text="buttonText" fontWeight="bold" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';

import { buttonText, title, text } from '@/text-contents/intro';

export default {
  name: 'IntroBlock',
  components: {
    Button,
  },
  data() {
    return {
      title,
      text,
      buttonText,
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';

#intro-block {
  display: flex;
  padding-top: 65px;
}

.intro-block__left {
  width: 55%;
  background-image: url('~/assets/img/intro.jpg');
  background-size: cover;
  background-position: center;
}
.intro-block__right {
  width: 45%;
  padding: 40px;
  background-color: $blue-extralight;
}

.intro-block__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 74px;
  line-height: 1.2;
  margin-top: 0;
}

.intro-block__text {
  font-size: 23px;
}

::v-deep .intro-block__text p {
  margin: 40px 0;
}

::v-deep .intro-block__text span {
  font-weight: bold;
  color: $blue;
}
</style>
