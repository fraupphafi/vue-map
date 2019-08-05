<template>
  <div id="app" class="app">
     <router-view></router-view>
  </div>
</template>

<script>
import router from './router.js';

export default {
  name: 'app',
  components: {
    router
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
  background-color: #fff7f7;
}
.app {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
