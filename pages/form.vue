<template>
  <div id="form">
    <div class="form__left"></div>
    <div class="form__right">
      <h1 v-sanitized-html="title" class="form__title"></h1>
      <div v-sanitized-html="text" class="form__text"></div>
    </div>
  </div>
</template>

<script>
import { title, text } from '@/text-contents/form';

export default {
  name: 'Form',
  components: {},
  data() {
    return {
      title,
      text,
    };
  },
  created() {
    console.log(this.$route.query.customer);
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

#form {
  display: flex;
  position: relative;

  @include device-portrait {
    flex-direction: column;
  }
}

.form__left {
  width: 55%;
  background-image: url('~/assets/img/form.jpg');
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

.form__right {
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

.form__title {
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

.form__text {
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

::v-deep .form__text p {
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

::v-deep .form__text span {
  color: $blue;
  font-weight: 500;
}
</style>
