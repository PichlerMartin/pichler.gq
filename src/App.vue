<template>
  <div id="nav">
    <router-link to="/">Lebenslauf</router-link> |
    <router-link to="/en">Resume</router-link>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap');

body {
  background-color: #DACA56;
}

#nav{
  background-color: #9ACD32;
}

#app {
  font-family: Oxygen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.resumecomponent, .lebenslaufcomponenet {
  position: relative;
  padding: 20px;
  margin: 10px auto;
  background-color: #9ACD32;
  border: 20px solid #403E39;
  text-align: left;
  max-width: 800px;
}

#nav {
  padding: 20px;
  border: 20px solid #403E39;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #7D5D44;
}

a {
  color: #7D5D44;
}
</style>