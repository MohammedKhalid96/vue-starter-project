<template>
  <v-app>
    <v-content>
      <v-container>
        <NavBar />
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
