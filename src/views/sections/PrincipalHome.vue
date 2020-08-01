<template>
  <section
    id="principal-home"
    class="background"
  >
    <v-img
      :min-height="minHeight"
    >
      <v-container
        v-for="(crowntitle) in crowntitles"
        :key="crowntitle"
        v-bind="crowntitle"
        class="px-4 py-4"
      >
        <v-responsive
          class="home"
          max-width="750"
        >
          <h1
            class="display-2"
          >
            Welcome to <span
              class="font-weight-black"
            >{{ crowntitle.title }}</span>
          </h1>
          <span class="text-h4">The place</span>
          <span
            class="subtitle text-h5"
          > {{ crowntitle.subtitle }}</span>
          <base-body class="my-6 text-h6">
            {{ crowntitle.paragraph }}
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
    data: () => ({
      crowntitles: [
        {
          title: 'Top Artist Online',
          subtitle: ' where everbody Learn Earns!',
          paragraph: 'Join us now and start reaping the benefits from being part of our ever growing community',
        },
      ],
    }),
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
<style scoped>
  .background
  {
    max-width: 100%;
    background-image:url('../../assets/logos/tao_isotipo_cut_left.svg'), url('../../assets/backgrounds/background_desktop.png'), linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 50%);
    background-position: left bottom, right bottom, bottom;
    -webkit-background-size: contain , contain, 100% auto;
    -moz-background-size: contain , contain, 100% auto;
    background-size: contain , contain, 100% auto;
    background-repeat: no-repeat;

  }
h1{
  color: #115D74;
  margin: 1px;
}
.subtitle{
  color: #115D74;
  font-family: 'Lato';
}
.home{
  display: flex;
  justify-content: space-between;
  align-self: center;
  height: auto;
  width:"100%"
}
</style>
