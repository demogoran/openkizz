<template>
  <div id="app">
    <MDContainer />
  </div>
</template>

<script>
import MDContainer from './components/MDContainer.vue';

export default {
  name: 'app',
  components: {
    MDContainer
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
