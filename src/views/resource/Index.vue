<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Resource',

    metaInfo: { title: 'Resources' },

    extends: View,

    mixins: [
      LoadSections([
        'resources',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'resource',
      },
    },
  }
</script>
