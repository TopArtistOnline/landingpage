<template>
  <base-section id="theme-features">
    <div class="text-center text-h4">
      <v-btn
        class="ma-2"
        outlined
        large
        fab
        color="blue"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <span color="accent">LEARNING</span>
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature) in features"
          :key="feature"
          md="6"
        >
          <base-avatar-card-personalizada
            v-bind="feature"
            align="left"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Retina Ready',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Image Parallax',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Seo Optimized',
          icon: 'mdi-ice-pop',
        },
        {
          title: '24/7 Support',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
