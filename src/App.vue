<template lang='pug'>
  <div id="app">
    <router-link to="/">Home</router-link>
    |&nbsp;
    <router-link to="/about">About</router-link>
    |&nbsp;
    <router-link to="/signin">Signin</router-link>
    |&nbsp;
    router-link(to="/user")
      |User
    |&nbsp;
    router-link(to="/upload")
      |Up file
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
