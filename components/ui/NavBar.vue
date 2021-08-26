<template>
  <div>
    <nav id="desktop-nav">
      <a v-smooth-scroll class="logo-link" href="#accueil">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
      </a>
      <div class="links-container">
        <a v-smooth-scroll class="nav-link" href="#accueil">Accueil</a>
        <a v-smooth-scroll class="nav-link" href="#savoir-faire"
          >Savoir-faire</a
        >
        <a v-smooth-scroll class="nav-link" href="#a-propos"
          >À propos de nous</a
        >
        <a v-smooth-scroll class="nav-link" href="#contact">Contact</a>
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

    <nav id="phone-nav">
      <a class="logo-link" href="#accueil">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
      </a>
      <div id="hamburger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <div class="links-container">
          <a class="nav-link" href="#accueil">Accueil</a>
          <a class="nav-link" href="#savoir-faire">Savoir-faire</a>
          <a class="nav-link" href="#a-propos">À propos de nous</a>
          <a class="nav-link" href="#contact">Contact</a>
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
  #hamburger {
    display: block;
    position: relative;
    top: 4px;
    right: 0px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    width: 35px;
    margin-left: auto;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    right: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 10;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 3px;
    margin-bottom: 6px;
    position: relative;
    background: $black;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: $blue;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  input:checked ~ .links-container {
    transform: none;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    left: 0;
    top: 65px;
    height: 100%;
    padding: 40px 20px;
    background: white;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
