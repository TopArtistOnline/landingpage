//
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { VCol, VRow } from 'vuetify/lib'
Vue.use(Vuetify, {
    components: {
        VCol,
        VRow,
    },
})
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
})