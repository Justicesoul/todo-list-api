<template>
  <router-link title="To the main page" class="header" :to="'/'">
    <img
      class="header__logo"
      src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
      alt="logo"
    />
    <h1 class="header__h1">To-Do List</h1>
  </router-link>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: flex;
  width: 100%;
  margin: 30px 0;
  align-items: center;
  justify-content: center;

  &__logo {
    width: 150px;
    object-fit: contain;
    margin-right: 30px;
    border-radius: 4px;
  }

  &__h1 {
    text-decoration: underline;
  }
}
</style>
