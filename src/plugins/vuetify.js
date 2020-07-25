/* eslint-disable semi */
//
// eslint-disable-next-line semi
import Vue from 'vue';
// eslint-disable-next-line semi
import Vuetify from 'vuetify/lib/framework';
// eslint-disable-next-line semi
import { VCol, VRow } from 'vuetify/lib';
// libreria para el carousel multiple
// eslint-disable-next-line semi
import VueCarousel from 'vue-carousel';

Vue.use(Vuetify, {
    components: {
        VCol,
        VRow,
        VueCarousel,
    },
    // eslint-disable-next-line semi
});
export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#0E7F69', // Verde Apoyo
                secondary: '#FBE79B', // Amarillo Apoyo
                accent: '#115D74', // Azul Logo
            },
            dark: {},
        },
    },
    // eslint-disable-next-line eol-last
});