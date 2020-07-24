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
                    // eslint-disable-next-line func-call-spacing
                    import ('@/layouts/home/Index.vue'),
                children: [{
                        path: '',
                        name: 'Home',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/home/Index.vue'),
                    },
                    {
                        path: 'about',
                        name: 'About',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/about/Index.vue'),
                        meta: { src: require('@/assets/img/landing-testimonials.jpg') },
                    },
                    {
                        path: 'resources',
                        name: 'Resources',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/resource/Index.vue'),
                    },
                    {
                        path: 'register',
                        name: 'Register',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/register/Index.vue'),
                    },
                    {
                        path: 'contact-us',
                        name: 'Contact',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/contact-us/Index.vue'),
                        meta: { src: require('@/assets/contact.jpg') },
                    },
                    {
                        path: 'pricing',
                        name: 'Pricing',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/pricing/Index.vue'),
                        meta: { src: require('@/assets/pro.jpg') },
                    },
                    {
                        path: '*',
                        name: 'FourOhFour',
                        component: () =>
                            // eslint-disable-next-line func-call-spacing
                            import ('@/views/404/Index.vue'),
                    },
                ],
            },

        ],
    })
    // eslint-disable-next-line eol-last
export default router