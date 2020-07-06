<template>
  <v-theme-provider>
    <section id="carousel">
      <v-carousel height="350">
        <v-carousel-item
          v-for="(caritem,cari) in caritems"
          :key="cari"
          :src="caritem.src"
          max-width="100%"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-row
            v-if="title"
            align="center"
            class="ma-0 text-center"
            justify="center"
          >
            <v-col cols="12">
              <base-heading
                :title="title"
                space="2"
                weight="500"
              />

              <base-divider
                color="primary"
                dense
              />

              <v-breadcrumbs
                :items="items"
                class="justify-center pa-0"
                divider=">"
              />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import {
    HexToRGBA,
    RGBAtoCSS,
  } from 'vuetify/lib/util/colorUtils'

  export default {
    name: 'SectionCarousel',

    metaInfo () {
      return {
        changed: meta => (this.title = meta.titleChunk.toUpperCase()),
      }
    },

    provide: {
      heading: { align: 'center' },
    },

    data: () => ({
      title: '',
      caritems: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }),

    computed: {
      gradient () {
        const color = `${this.$vuetify.theme.themes.light.secondary}CC`
        const overlay = RGBAtoCSS(HexToRGBA(color))

        return `to top, ${overlay}, ${overlay}`
      },
      items () {
        return [
          { text: 'HOME', to: '/' },
          { text: this.title },
        ]
      },
    },
  }
</script>

<style lang="sass">
  #hero-alt
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
