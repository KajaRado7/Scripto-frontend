<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/add_script">Add Script</router-link>
      |
      <router-link to="/my_account">My Account</router-link>
      |
      <router-link to="/my_downloads">My Downloads</router-link>
      |
      <router-link to="/script">Script</router-link>
      |
      <router-link to="/search_results">Search Results</router-link>
      |
      <router-link to="/study">Study</router-link>
      |
      <router-link to="/subject">Subject</router-link>
      |
      <router-link to="/university">University</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
