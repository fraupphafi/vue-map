<template>
  <div id="app" class="app">
    <Header transition="slide" />
    <Map :outlets="outlets" :center="center" @changecenter="move"/>
    <OutletsList :outlets="outlets" :center="center" @changecenter="move"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Map from './components/Map.vue';
import OutletsList from './components/OutletsList.vue';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Header,
    Map,
    OutletsList
  },
  computed: mapGetters([
    'outlets', 'center'
  ]), 
  methods: {
    move(coord) {
      this.center = coord;
    }
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
