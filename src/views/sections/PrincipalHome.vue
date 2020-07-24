<template>
  <section id="principal-home">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/backgrounds/background_desktop.png')"
      color="primary"
    >
      <v-container class="px-4 py-4">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <h1 class="accent--text display-2 my-3">
            Welcome to<span class="font-weight-black">Top Artist Online</span>
          </h1>
          <span class="accent--text display-1">The place where everbody Learn n' Earns!</span>
          <base-body class="my-3">
            Join us now and start reaping the benefits
            from being part of our ever growing community
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn link="register">
              Free Trial
            </base-btn>

            <span class="teal--text ml-6 mr-4 my-4" />

            <base-btn>
              Join Us
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionPrincipalHome',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
