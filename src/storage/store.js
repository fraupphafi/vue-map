import Vue from "vue";
import Vuex from 'vuex';
import { mapState } from 'vuex';
import { coordConverter, getAverage, getAverageCoords } from '../helpers.js';

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
    state: {
        count: 0,
        outlets: [
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
        ],
        center: [0, 0]
    },
    getters: {
        outlets: state => {
            return state.outlets.map((outlet, index) => {
                outlet.coords = [coordConverter(outlet.latitude), coordConverter(outlet.longitude)];
                return outlet;
            });
        },
        center: state => {
            return getAverageCoords(state.outlets);
        },
        getOutletById: (state) => (id) => {
            return state.outlets.filter((outlet, index) => {
                return +outlet.id === +id
            })
        }
    },
    mutations: {
        centerUpdate(state, coords) {
            state.center = coords;
            console.log(state.center);
        }
    }
});