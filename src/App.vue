<template>
  <div id="app">
    <folio></folio>
  </div>
</template>

<script>
import Folio from "./components/Folio";

export default {
  name: "app",
  components: {
    Folio
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Comfortaa");

#app {
  font-family: "Comfortaa", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
