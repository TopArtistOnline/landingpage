<template>
  <v-theme-provider>
    <section id="carousel">
      <v-row
        justify="center"
      >
        <base-crown-title
          v-bind="crowntitle"
          horizontal
        />
        <v-col
          v-for="(crowntitle) in crowntitles"
          :key="crowntitle"
          md="2"
        >
          <base-crown-title
            v-bind="crowntitle"
            horizontal
          />
        </v-col>
      </v-row>

      <carousel
        class="margin-carousel"
        :per-page="2"
        :navigate-to="someLocalProperty"
        :mouse-drag="true"
        :autoplay="true"
        :scroll-per-page="true"
        pagination-active-color="#115D74"
        :loop="true"
        :navigation-enabled="true"
      >
        <slide
          v-for="(cardi) in caritems"
          :key="cardi"
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <v-card
            class="mx-auto"
            max-width="100%"
            color="accent white"
          >
            <v-list-item two-line>
              <v-img
                :src="cardi.src"
                height="220"
                width="150"
              />
              <v-list-item-content>
                <v-list-item-title
                  class="headline mb-1 white--text"
                  v-text="cardi.title"
                />
                <v-list-item-subtitle
                  class="secondary--text"
                  v-text="cardi.subtitle"
                />
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </slide>
      </carousel>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import {
    Carousel,
    Slide,
  } from 'vue-carousel'

  export default {
    name: 'SectionCarousel',

    components: {
      Carousel,
      Slide,
    },

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
      crowntitles: [
        {
          src: '/logos/cup.svg',
          title: 'Testimonials',
        },
      ],
      caritems: [
        {
          src: require('@/assets/carousel/slider_01.png'),
          title: 'Marty Music',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
        {
          src: require('@/assets/carousel/slider_02.png'),
          title: 'Rob Scalon',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
        {
          src: require('@/assets/carousel/slider_01.png'),
          title: 'Marty Music',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
        {
          src: require('@/assets/carousel/slider_02.png'),
          title: 'Rob Scalon',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
        {
          src: require('@/assets/carousel/slider_01.png'),
          title: 'Marty Music',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
        {
          src: require('@/assets/carousel/slider_02.png'),
          title: 'Rob Scalon',
          subtitle: 'A no brainer investment for anyone who wants to learn pr teach music....',
        },
      ],
    }),
  }
</script>
