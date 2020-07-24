
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'principal-home',
        // 'contact-us',
        // 'resources',
        // 'features',
        // 'affiliates',
        // 'social-media',
        // 'keep-in-touch',
        // 'newsletter',
        // 'pro-features',
        // 'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
