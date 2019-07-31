<template>
  <div id="app" class="app">
    <Header />
    <Map :outlets="outlets" :center="center" @changecenter="move"/>
    <OutletsList :outlets="outlets" :center="center" @changecenter="move"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Map from './components/Map.vue';
import OutletsList from './components/OutletsList.vue';

let outlets = [
  {
      "id": 281474996574951,
      "name": "ИП МИХАЙЛЕНКО АЛЕКСАНДР ЕВГЕНЬЕВ",
      "address": "Г. КРАСНОКАМЕНСК; МКР. 5-Й; Д.508; ВЕСНА",
      "latitude": 5005.7459,
      "longitude": 11801.8784
  }, {
      "id": 281474996575049,
      "name": "ИП ТУРАНОВА АЛЬБИНА СЕМЕНОВНА",
      "address": "Г. КРАСНОКАМЕНСК; МКР.7; Д.6Ц; МПК; 4Ц",
      "latitude": 5005.7025,
      "longitude": 11802.5978
  }, {
      "id": 281474996575426,
      "name": "ИП ВАСАЛАТИЙ АЛЕКСЕЙ ИВАНОВИЧ",
      "address": "Г. КРАСНОКАМЕНСК; 1-Й МКР.; Д.117;",
      "latitude": 5005.7868,
      "longitude": 11802.1059
  }, {
      "id": 281474996575427,
      "name": "ИП ВАСАЛАТИЙ АЛЕКСЕЙ ИВАНОВИЧ",
      "address": "Г. КРАСНОКАМЕНСК; 6-Й МКР.; Д.630;",
      "latitude": 5005.7792,
      "longitude": 11802.4228
  }, {
      "id": 281474996575558,
      "name": "ИП КОРНЮХ БОРИС ВЛАДИМИРОВИЧ",
      "address": "Г. КРАСНОКАМЕНСК; МКРН 6; Д.608А",
      "latitude": 5005.9664,
      "longitude": 11802.8254
  }
];

outlets.map(function (outlet, index) {
  return outlet.coords = [coordConverter(outlet.latitude), coordConverter(outlet.longitude)];
});

export default {
  name: 'app',
  components: {
    Header,
    Map,
    OutletsList
  },
  data() {
    return {
      outlets: outlets,
      center: getAverageCoords(outlets)
    }
  },
  methods: {
    move(coord) {
      this.center = coord;
    }
  }
}

// * Помогаторы
function coordConverter(coord) {
  return +(Math.floor(coord / 100) + (coord - Math.floor(coord / 100) * 100) / 60).toFixed(6);
}

function getAverage(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

function getAverageCoords(outlets) {
  let latitude = [];
  let longitude = [];

  outlets.forEach(outlet => {
    latitude.push(outlet.latitude);
    longitude.push(outlet.longitude);
  });

  return ([coordConverter(getAverage(latitude)), coordConverter(getAverage(longitude))]);
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
