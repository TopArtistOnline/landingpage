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
        :src="require('@/assets/logos/top_final_blanco.svg')"
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
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="accent--text"
            class="b accent--text"
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
              background-color="teal lighten-5"
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
      :items="items"
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
      items: [
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

    .theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input
      color: #115D74

    body
      font-family: 'Lato bold', sans-serif

    h1
      font-family: 'Lato', sans-serif

</style>
