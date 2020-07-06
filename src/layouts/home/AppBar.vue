<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/img/logo-top-artist-online.png')"
        contain
        max-width="128"
        width="100%"
      />
      <v-spacer />
      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, navi) in navitems"
            :key="navi"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            color="purple"
            active-class="text--primary"
            class="font-weight-bold blue--text"
            min-width="96"
          >
            {{ name }}
          </v-tab>
          <v-tab>
            <v-text-field
              append-icon="mdi-magnify"
              flat
              hide-details
              solo-inverted
              style="max-width: 300px;"
              background-color="blue lighten-5"
            />
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :navitems="navitems"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      navitems: [
        'Home',
        'About',
        'Resources',
        'Contact',
        'Pricing',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
