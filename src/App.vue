<template>
  <div id="app" class="app">
    <Header />
    <Map />
    <OutletsList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Map from './components/Map.vue';
import OutletsList from './components/OutletsList.vue';

export default {
  name: 'app',
  components: {
    Header,
    Map,
    OutletsList
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
