<template>
    <div id="map">
        <l-map :zoom="zoom" :center="center" @click="log()" @mousedown="mouseDown()">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import { Icon } from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    delete Icon.Default.prototype._getIconUrl;

    export default {
        name: 'Map',
        components: { LMap, LTileLayer, LMarker },
        data() {
            return {
                zoom:13,
                center: L.latLng(47.413220, -1.219482),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
            }
        },
        methods: {
            log() {
                console.log('click');
            },
            mouseDown() {
                console.log('key-down');
            }
        }
    }
</script>

<style>
    #map {
        height: 400px;
    }
</style>

