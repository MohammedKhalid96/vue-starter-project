<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style scoped>
</style>
