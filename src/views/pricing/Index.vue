<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pricing',

    metaInfo: { title: 'Pricing Features' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'pro-features',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pricing',
      },
    },
  }
</script>
