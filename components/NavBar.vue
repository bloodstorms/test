<template>
  <nav>
    <a class="logo-link" href="#0">
      <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
    </a>
    <div>
      <a class="nav-link" href="#1">Lien 1</a>
      <a class="nav-link" href="#2">Lien 2</a>
      <a class="nav-link" href="#3">Lien 3</a>
      <a class="nav-link" href="#4">Lien 4</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: static;
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
}
</style>
