<template>
  <v-theme-provider>
    <section id="about-carousel">
      <v-container
        class="center_crown_title"
      >
        <div
          v-for="(crowntitle) in crowntitles"
          :key="crowntitle"
        >
          <base-crown-title
            v-bind="crowntitle"
          />
        </div>
      </v-container>
      <carousel
        autoplay="true"
        :autoplay-timeout="4000"
        navigation-enabled="true"
        :navigate-to="someLocalProperty"
        :loop="true"
        :per-page-custom="perPageCustom"
        pagination-active-color="#115D74"
        pagination-position="bottom-overlay"
      >
        <slide
          v-for="(cardi) in caritems"
          :key="cardi"
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <v-card
            class="card-slide mx-auto"
            max-width="100%"
            height="100%"
            color="white"
            tile
          >
            <v-list-item two-line>
              <v-img
                :src="cardi.src"
                min-height="100px"
                max-height="100%"
                width="1"
              />
              <v-list-item-content>
                <v-list-item-title
                  class="headline mb-1 white--text ml-4"
                  v-text="cardi.title"
                />
                <v-list-item-subtitle
                  class="item-subtitule secondary--text my-2 ml-4"
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

    provide: {
      heading: { align: 'center' },
    },

    data: () => ({
      title: '',
      perPageCustom:
        [
          // array para el tamaño de slides
          [200, 1], [320, 1], [480, 1], [600, 1], [790, 1], [960, 2], [1264, 2], [1900, 2],
        ],
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
<style scoped>
 .v-sheet.v-card:not(.v-sheet--outlined){
   box-shadow: none;
 }
 .container{
    margin: 0em;
    padding: .3em .2em .0em .6em;
    display: flex;
    text-align: center;
    max-width: 100%;
}
.card-slide{
  background:linear-gradient(to bottom, #ffffff 10%, #115D74 10%, #115D74 90%, #115D74 90%, #ffffff 90%, #ffffff 100%) !important;
}
.item-subtitule{
  white-space: normal;
  word-wrap: break-word;
  text-overflow: clip;
  font-family: cursive;
  font-size: large;
}
  .center_crown_title{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
