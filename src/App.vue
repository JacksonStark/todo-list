<template>
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
// NO NEED TO IMPORT COMPONENTS YET SINCE ROUTER IS BEING UTILIZED
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Bungee');

body {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  background-size: cover;
  background-attachment: fixed
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
    width: 90%;
}

nav {
  position: absolute;
  top: 3.5vh;
  right: 2.5vw
}

nav a {
  margin-right: 20px;
  text-decoration: none;
  font-family: "Montserrat";
  font-size: 1em
}
</style>
