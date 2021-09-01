<template>
  <div>
    <nav id="desktop-nav">
      <a
        v-smooth-scroll="{ offset: -65, container: '#container' }"
        class="logo-link"
        href="#accueil"
      >
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
      </a>
      <div class="links-container">
        <a
          v-smooth-scroll="{ offset: -65, container: '#container' }"
          class="nav-link"
          href="#accueil"
          >Accueil</a
        >
        <a
          v-smooth-scroll="{ offset: -65, container: '#container' }"
          class="nav-link"
          href="#savoir-faire"
          >Savoir-faire</a
        >
        <a
          v-smooth-scroll="{ offset: -65, container: '#container' }"
          class="nav-link"
          href="#a-propos"
          >À propos de nous</a
        >
        <a
          v-smooth-scroll="{ offset: -65, container: '#container' }"
          class="nav-link"
          href="#contact"
          >Contact</a
        >
        <Button
          text="Formulaire"
          :icon="['far', 'comment-dots']"
          color="white"
          colorHover="black"
          backgroundColor="blue"
          backgroundColorHover="green"
          iconColor="green"
          iconColorHover="blue"
        />
      </div>
    </nav>

    <nav id="phone-nav" :class="{ active: isNavOpened }">
      <a class="logo-link" href="#accueil">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
      </a>
      <div id="hamburger" @click="click">
        <span class="hamburger-stick hamburger-stick--top"></span>
        <span class="hamburger-stick hamburger-stick--middle"></span>
        <span class="hamburger-stick hamburger-stick--bottom"></span>
      </div>
      <div class="nav-container">
        <div class="nav-links">
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="nav-link"
            href="#accueil"
            @click="click"
            >Accueil</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="nav-link"
            href="#savoir-faire"
            @click="click"
            >Savoir-faire</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="nav-link"
            href="#a-propos"
            @click="click"
            >À propos de nous</a
          >
          <a
            v-smooth-scroll="{ offset: -65, container: '#container' }"
            class="nav-link"
            href="#contact"
            @click="click"
            >Contact</a
          >
        </div>
        <div class="other-links">
          <a class="nav-link" href="">Tarifs</a>
          <a class="nav-link" href="">Glossaire</a>
          <a class="nav-link" href="">Mentions Légales</a>
        </div>
        <div class="bottom-container">
          <p class="nav-slogan">
            Réglons ensemble votre litige,<br />simplement
          </p>
          <Button
            text="Formulaire"
            :icon="['far', 'comment-dots']"
            color="white"
            colorHover="black"
            backgroundColor="blue"
            backgroundColorHover="green"
            iconColor="green"
            iconColorHover="blue"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
import VueSmoothScroll from 'vue2-smooth-scroll';

import Button from '@/components/ui/Button.vue';

Vue.use(VueSmoothScroll);

export default {
  name: 'NavBar',
  components: {
    Button,
  },
  data() {
    return {
      isNavOpened: false,
    };
  },
  methods: {
    click() {
      this.isNavOpened = !this.isNavOpened;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

nav {
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  font-family: 'Rubik', sans-serif;
  padding: 15px 40px;
  height: 65px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @include phone {
    padding: 15px 20px;
  }
}

#desktop-nav {
  @include device-portrait {
    display: none;
  }
}

#phone-nav {
  display: none;

  @include device-portrait {
    display: flex;
  }
}

.logo-link {
  height: 100%;
}

.logo {
  height: 100%;
}

.nav-link {
  color: $black;
  margin-right: 40px;
  text-decoration: none;
}

// Phone
#phone-nav {
  &.active {
    .hamburger-stick {
      background: $blue;
    }
    .hamburger-stick--top {
      opacity: 1;
      transform: rotate(45deg) translate(4px, -3px);
    }
    .hamburger-stick--middle {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    .hamburger-stick--bottom {
      transform: rotate(-45deg) translate(2px, 2px);
    }
    .nav-container {
      transform: none;
    }
  }

  #hamburger {
    display: block;
    user-select: none;
  }

  .hamburger-stick {
    display: block;
    width: 33px;
    height: 3px;
    margin: 6px 0;
    position: relative;
    background: $black;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  .hamburger-stick--middle {
    transform-origin: 50% 100%;
  }

  .nav-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    left: 0;
    top: 65px;
    height: 100%;
    padding: 30px 20px;
    background: white;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #aaa;
    padding-bottom: 30px;
  }

  .other-links {
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    .nav-link {
      font-size: 18px;
      margin: 5px 0;
    }
  }

  .bottom-container {
    position: absolute;
    bottom: 100px;
  }

  .nav-link {
    margin: 10px 0;
    font-size: 20px;

    &:focus,
    &:active {
      background: transparent;
    }
  }
}
</style>
