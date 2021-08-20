<template>
  <nav>
    <a v-smooth-scroll class="logo-link" href="#accueil">
      <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
    </a>
    <div>
      <a v-smooth-scroll class="nav-link" href="#accueil">Accueil</a>
      <a v-smooth-scroll class="nav-link" href="#solutions">Solutions</a>
      <a v-smooth-scroll class="nav-link" href="#savoir-faire">Savoir-faire</a>
      <a v-smooth-scroll class="nav-link" href="#a-propos">À propos de nous</a>
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
  z-index: 1;
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
</style>
