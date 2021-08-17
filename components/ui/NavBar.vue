<template>
  <nav>
    <a class="logo-link" href="#0">
      <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
    </a>
    <div>
      <a class="nav-link" href="#accueil">Accueil</a>
      <a class="nav-link" href="#savoir-faire">Savoir-faire</a>
      <a class="nav-link" href="#a-propos">A propos</a>
      <a class="nav-link" href="#contact">Contact</a>
      <Button
        text="Formulaire"
        :icon="['far', 'comment-dots']"
        color="white"
        backgroundColor="blue"
        iconColor="white"
      />
    </div>
  </nav>
</template>

<script>
import Button from '~/components/ui/Button.vue';

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
