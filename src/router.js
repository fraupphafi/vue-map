import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './views/Main';
import OutletsMap from './views/OutletsMap.vue';
import OutletDescription from './views/OutletDescription.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/outlets-map',
        component: OutletsMap
    },
    {
        path: '/outlet-description/:id',
        name: 'outlet-description',
        component: OutletDescription
    }
];

export default new VueRouter({
    routes
});