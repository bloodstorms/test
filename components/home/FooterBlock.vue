<template>
  <footer id="footer" class="footer-block">
    <div class="footer-block__container">
      <div class="footer-block__left">
        <img
          class="footer-block__logo"
          src="~/assets/img/logo-white.png"
          alt="Logo"
        />
      </div>
      <div class="footer-block__right">
        <!-- right top -->
        <div
          class="
            footer-block__links-container footer-block__links-container--top
          "
        >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="footer-block__link"
            href="#accueil"
            >Accueil</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="footer-block__link"
            href="#savoir-faire"
            >Savoir-faire</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="footer-block__link"
            href="#a-propos"
            >À propos de nous</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="footer-block__link"
            href="#contact"
            >Contact</a
          >
        </div>
        <!-- right middle -->
        <div
          class="
            footer-block__links-container footer-block__links-container--middle
          "
        >
          <a class="footer-block__link footer-block__link--title"
            >Autres liens</a
          >
          <a class="footer-block__link" href="">Tarifs</a>
          <a class="footer-block__link" href="">Glossaire</a>
          <a class="footer-block__link" href="">Mentions Légales</a>
        </div>
        <!-- right bottom -->
        <div
          class="
            footer-block__links-container footer-block__links-container--bottom
          "
        >
          <a class="footer-block__link" href="">Lorem ipsum</a>
          <a class="footer-block__link" href="">Dolor sit amet</a>
          <a class="footer-block__link" href="">Consectetur</a>
          <a class="footer-block__link" href="">Adipiscing elit</a>
          <a class="footer-block__link" href="">Sed do</a>
          <a class="footer-block__link" href="">Eiusmod tempor</a>
        </div>
      </div>
    </div>
    <img class="footer-block__image" src="@/assets/img/footer.jpg" alt="" />
  </footer>
</template>

<script>
import Vue from 'vue';
import VueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(VueSmoothScroll);

export default {
  name: 'FooterBlock',
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.footer-block {
  background-color: $black;
}

.footer-block__container {
  display: flex;
  padding: 60px 10%;

  @include device-portrait {
    flex-direction: column;
  }
  @include phone {
    padding: 60px 8%;
  }
  @include tablet-landscape {
    padding: 60px 80px;
  }
}

.footer-block__left {
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  flex-grow: 1;

  @include device-portrait {
    border-bottom: none;
    margin-bottom: 40px;
  }
}

.footer-block__right {
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  width: 60%;
  max-width: 500px;

  @include device-portrait {
    border-bottom: none;
    max-width: none;
    width: 100%;
  }
}

.footer-block__logo {
  width: 120px;
}

.footer-block__links-container {
  display: flex;
  padding: 50px 0;
  justify-content: space-between;

  @include device-portrait {
    padding: 30px 0;
  }
}

.footer-block__links-container--top {
  padding-top: 15px;

  .footer-block__link {
    font-size: 16px;
  }

  @include device-portrait {
    flex-direction: column;
  }
}

.footer-block__links-container--middle {
  flex-direction: column;
  padding-bottom: 100px;

  @include device-portrait {
    padding-bottom: 50px;
  }
}

.footer-block__links-container--bottom {
  flex-wrap: wrap;

  @include device-portrait {
    padding-bottom: 0;
  }

  .footer-block__link {
    flex-basis: 33.33%;

    @include phone {
      flex-basis: 50%;
    }
  }
}

.footer-block__link {
  text-decoration: none;
  color: white;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
}

.footer-block__link--title {
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding-bottom: 4px;
  margin-bottom: 20px;
}

.footer-block__image {
  width: 100%;
}
</style>
