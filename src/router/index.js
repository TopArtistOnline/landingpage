// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash }
        if (savedPosition) return savedPosition

        return { x: 0, y: 0 }
    },
    routes: [{
            path: '/',
            component: () =>
                import ('@/layouts/home/Index.vue'),
            children: [{
                    path: '',
                    name: 'Home',
                    component: () =>
                        import ('@/views/home/Index.vue'),
                },
                {
                    path: 'about',
                    name: 'About',
                    component: () =>
                        import ('@/views/about/Index.vue'),
                    meta: { src: require('@/assets/img/landing-testimonials.jpg') },
                },
                {
                    path: 'resources',
                    name: 'Resources',
                    component: () =>
                        import ('@/views/resource/Index.vue'),
                },
                {
                    path: 'contact-us',
                    name: 'Contact',
                    component: () =>
                        import ('@/views/contact-us/Index.vue'),
                    meta: { src: require('@/assets/contact.jpg') },
                },
                {
                    path: 'pricing',
                    name: 'Pricing',
                    component: () =>
                        import ('@/views/pricing/Index.vue'),
                    meta: { src: require('@/assets/pro.jpg') },
                },
                {
                    path: '*',
                    name: 'FourOhFour',
                    component: () =>
                        import ('@/views/404/Index.vue'),
                },
            ],
        },

    ],
})
export default router