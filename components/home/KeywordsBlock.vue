<template>
  <div class="keywords-block">
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
        colorHover="black"
        backgroundColor="blue"
        backgroundColorHover="green"
        iconColor="green"
        iconColorHover="blue"
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
@import '~/assets/styles/mixins';

.keywords-block {
  background-color: $grey-extralight;
  padding: 60px 0 150px 120px;

  @include phone {
    padding: 20px 0 80px 20px;
  }
  @include tablet-portrait {
    padding: 40px 0 100px 40px;
  }
  @include tablet-landscape {
    padding: 40px 0 100px 80px;
  }
}

.keywords-block__word {
  position: relative;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0;
  font-size: 150px;
  margin: 0;
  text-transform: uppercase;
  margin-left: 120px;
  line-height: 1.5;

  @include phone {
    font-size: 40px;
    margin-left: 40px;
  }
  @include tablet-portrait {
    font-size: 80px;
    margin-left: 60px;
  }
  @include tablet-landscape {
    font-size: 100px;
    margin-left: 80px;
  }

  &:nth-child(2) {
    margin-left: 300px;

    @include phone {
      margin-left: 80px;
    }
    @include tablet-portrait {
      margin-left: 150px;
    }
    @include tablet-landscape {
      margin-left: 220px;
    }
  }
}

.keywords-block__chevron {
  position: absolute;
  font-size: 200px;
  left: -120px;
  top: -60px;
  color: $green;

  @include phone {
    font-size: 70px;
    left: -40px;
    top: -30px;
  }
  @include tablet-portrait {
    font-size: 120px;
    left: -60px;
    top: -45px;
  }
  @include tablet-landscape {
    font-size: 155px;
    left: -80px;
    top: -60px;
  }
}
.keywords-block__plus {
  position: absolute;
  font-size: 240px;
  left: -140px;
  top: -70px;
  color: $blue-light;

  @include phone {
    font-size: 75px;
    left: -40px;
    top: -27px;
  }
  @include tablet-portrait {
    font-size: 140px;
    left: -70px;
    top: -47px;
  }
  @include tablet-landscape {
    font-size: 190px;
    left: -100px;
    top: -70px;
  }
}
.keywords-block__amp {
  position: absolute;
  font-size: 150px;
  left: -130px;
  top: 0px;
  color: $blue;

  @include phone {
    font-size: 40px;
    left: -35px;
  }
  @include tablet-portrait {
    font-size: 80px;
    left: -60px;
  }
  @include tablet-landscape {
    font-size: 100px;
    left: -80px;
  }
}

.keywords-block__text {
  font-size: 20px;

  @include phone {
    font-size: 16px;
  }
  @include tablet-portrait {
    font-size: 20px;
  }
  @include tablet-landscape {
    font-size: 20px;
  }
}

.keywords-block__button-container {
  width: 400px;
  margin-left: 130px;
  margin-top: 100px;

  @include phone {
    margin-left: 45px;
    margin-top: 50px;
  }
  @include tablet-portrait {
    margin-left: 70px;
  }
  @include tablet-landscape {
    margin-left: 90px;
  }
}
</style>
