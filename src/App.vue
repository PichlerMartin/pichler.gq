<template>
  <div id="nav">
    <router-link to="/">Lebenslaufs</router-link> |
    <router-link to="/en">Resume</router-link>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap');

:root {
  --bg-color-light:#007CC7;
  --bg-color-dark:#12232E;
  --font:#EEFBFB;
  --link:#D1C9BA;
  --grey:#203647;
}

body {
  background-color: var(--bg-color-light);
}

#nav{
  background-color: var(--bg-color-light);
}

#app {
  font-family: Oxygen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font);
}

.resumecomponent, .lebenslaufcomponenet {
  position: relative;
  padding: 20px;
  margin: 10px auto;
  background-color: var(--bg-color-light);
  border: 20px solid var(--grey);
  text-align: left;
  max-width: 800px;
}

#nav {
  padding: 20px;
  border: 20px solid var(--grey);
}

#nav a {
  font-weight: bold;
  color: var(--grey);
}

#nav a.router-link-exact-active {
  color: var(--link);
}

a {
  color: var(--link);
}
</style>