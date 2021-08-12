<template>
  <div class="intro-block">
    <div class="intro-block__left"></div>
    <div class="intro-block__right">
      <h1 class="intro-block__title">Votre litige,<br />nos solutions</h1>
      <p class="intro-block__text">
        Une <span class="bold">démarche collective</span> pour une issue
        commune.
      </p>
      <p class="intro-block__text">
        Des solutions <span class="bold">amiables</span>, plus
        <span class="bold">économiques</span> et plus
        <span class="bold">rapides</span> existent pour résoudre un litige en
        évitant un procès toujours long, aléatoire et coûteux.
      </p>
      <p class="intro-block__text">
        Nous pouvons vous guider et vous assister, au travers de
        <span class="bold">solutions juridiquement éprouvées</span>, pour mettre
        en place une telle démarche.
      </p>
      <p class="intro-block__text">
        <span class="bold">La condition : que tous le veuillent.</span>
      </p>
      <Button text="Savoir-faire" fontWeight="bold" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/ui/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';

.intro-block {
  display: flex;
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
  margin: 40px 0;
}

.bold {
  font-weight: bold;
  color: $blue;
}
</style>
