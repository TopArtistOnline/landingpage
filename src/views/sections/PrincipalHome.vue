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
          <base-heading
            title="Welcome to Artist Online"
          />

          <base-body>
            Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality.
            incubator seed round massmarket.
            buyer agile development growth hacking business-to-consumer ecosystem
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
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
