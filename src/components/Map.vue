<template>
    <div id="map">
        <l-map :zoom="zoom" :center="center" @click="log()" >
            <l-tile-layer
                :url="url" 
                :attribution="attribution"/>
            <l-marker 
                v-for="(outlet, index) in outlets"
                :lat-lng="outlet.coords" 
                :key="index" 
                :icon="icon"
                @click="move(outlet.coords)"/>
        </l-map>
    </div>
</template>

<script>
    import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
    import { latLng, icon  } from "leaflet";

    export default {
        name: 'Map',
        props: ['outlets', 'center'],
        components: { LMap, LTileLayer, LMarker, LIcon },
        data() {
            return {
                zoom: 15,
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    icon: icon({
                        iconUrl: "cheese.png",
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    }),
                markerList: [
                    [50.095653, 118.031298],
                    [50.097982, 118.031225],
                    [50.097706, 118.025636],
                    [50.098187, 118.031780]
                ]
            };
        },
        methods: {
            move(coord) {
                this.$emit('changecenter', coord);
            },
            log() {
                console.log('click');
            }
        }
    }
</script>

<style>
    @import '~leaflet/dist/leaflet.css';
    #map {
        height: 400px;
    }

    .leaflet-pane {
        transition: all 300ms ease;
    }

</style>

