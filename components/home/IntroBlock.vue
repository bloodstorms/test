<template>
  <div id="accueil" class="intro-block">
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
@import '~/assets/styles/mixins';

.intro-block {
  display: flex;
  position: relative;

  @include device-portrait {
    flex-direction: column;
  }
}

.intro-block__left {
  width: 55%;
  background-image: url('~/assets/img/intro.jpg');
  background-size: cover;
  background-position: center;

  @include device-portrait {
    width: 100%;
  }

  @include phone {
    height: 300px;
  }

  @include tablet-portrait {
    height: 550px;
  }
}

.intro-block__right {
  width: 45%;
  padding: 40px;
  background-color: $blue-extralight;

  @include device-portrait {
    width: 100%;
  }
  @include phone {
    padding: 20px;
    padding-bottom: 40px;
  }
  @include tablet-portrait {
    padding-bottom: 60px;
  }
  @include tablet-landscape {
    padding: 30px;
  }
}

.intro-block__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
  font-size: 70px;
  line-height: 1.2;
  margin-top: 0;
  font-weight: 500;

  @include device-portrait {
    position: absolute;
    color: white;
    text-shadow: 1px 1px 2px $black;
  }
  @include phone {
    font-size: 45px;
    top: 175px;
    left: 20px;
  }
  @include tablet-portrait {
    font-size: 65px;
    top: 355px;
    left: 40px;
  }
  @include tablet-landscape {
    font-size: 60px;
  }
}

.intro-block__text {
  font-size: 23px;

  @include phone {
    font-size: 16px;
  }
  @include tablet-portrait {
    font-size: 22px;
  }
  @include tablet-landscape {
    font-size: 20px;
  }
}

::v-deep .intro-block__text p {
  margin: 40px 0;

  @include phone {
    margin: 20px 0;
  }
  @include tablet-portrait {
    margin: 25px 0;
  }
  @include tablet-landscape {
    margin: 20px 0;
  }
}

::v-deep .intro-block__text span {
  color: $blue;
  font-weight: 500;
}
</style>
