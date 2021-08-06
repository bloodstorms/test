<template>
  <nav>
    <a class="logo-link" href="#0">
      <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
    </a>
    <div>
      <a class="nav-link" href="#1">Accueil</a>
      <a class="nav-link" href="#2">Savoir-faire</a>
      <a class="nav-link" href="#3">A propos</a>
      <a class="nav-link" href="#4">Contact</a>
    </div>
  </nav>
</template>

<style scoped>
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
}

.logo-link {
  height: 100%;
}

.logo {
  height: 100%;
}

.nav-link {
  margin-left: 40px;
  text-decoration: none;
}
</style>
