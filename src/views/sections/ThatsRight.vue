c<template>
  <section
    id="thats-right"
    class="background"
  >
    <v-container style="display:flex; margin-bottom:-1em;">
      <v-row
        class="mb-6"
      >
        <v-col
          cols="12"
          sm="5"
          md="6"
        >
          <v-img
            class="svg-icon"
            :src="require('@/assets/logos/TAO_ISOTIPO.svg')"
          />
          <v-row>
            <v-col class="p">
              <h1 class="white--text display-2 my-2 text-center font-weight-black">
                <span
                  class="font-weight-black"
                  style="background-color:#115D74;padding:0 0.1em 0 0.1em"
                >That´s Right</span>
              </h1>
              <h1 class="accent--text text-left display-1 my-3">
                Here at <span class="font-weight-black">Top Artist Online</span> we believe in sharing and giving back,
              </h1>
              <p class="accent--text text-center">
                Thats why you´ll earn money and rewards each and every month in exchange for everything you do here with us.
              </p>
              <p class="accent--text text-center">
                Whether you are a content creator uploading quality content, an \n artist setting his/her shop and selling their products (physical of digital), an online teacher sharing is or her experience and knowledge or simply someone who wants to find the best lessons to improve do it fast, this is the place for you!!!
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          sm="5"
          offset-sm="2"
          md="6"
          offset-md="0"
        >
          <v-card
            elevation="16"
            class="mb-12 my-7"
            color="transparent"
          >
            <base-img
              max-width="100%"
              height="300px"
              :src="require('@/assets/elements/caratula_video.png')"
            />
            <v-card-text class="text-center">
              "As acreator it has given me every tool Ineed to grown my community fast and get an increasingly strong, consistent income each month, LOVE IT!!".
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  export default {
    name: 'SectionProChart',
    data: () => ({
      items: [
        { header: 'That´s Right' },
        { subtitle: 'Here at Top Artist Online we believe in sharing and giving back,' },
        { paragraph: 'Thats why you´ll earn money and rewards each and every month in exchange for everything you do here with us.' },
        { paragraph2: 'Whether you are a content creator uploading quality content, an \n artist setting his/her shop and selling their products(physical of' },
      ],
      backgroundsitem: [
        { src: "require('@/assets/elements/relleno_degradado_1.png')" },
        { src: "require('@/assets/logos/TAO_ISOTIPO.png')" },
      ],
    }),
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
<style scoped>
  body {
    font-family: 'Lato', sans-serif;
}
h1 {
    font-family: 'Lato bold', sans-serif;
}
 .background{
   height: 400px;
   width: 100%;
   background-image:url('../../assets/backgrounds/background_video.png'),linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 50%);
   background-position:right bottom;
   background-size:auto 54vmax, 100% auto;
   background-repeat: no-repeat;
 }
 .svg-icon{
   position: absolute;
   text-align: center;
   width: 32vmax;
   filter: invert(26%) sepia(49%) saturate(770%) hue-rotate(147deg) brightness(100%) contrast(92%) opacity(0.15);
  }
 .space{
   justify-content: flex-end;
 }
 .margin{
   margin: -2.5em 1.1em -3em 1.1em;
 }
 .blue-line{
   background-color: #115D74;
   width: 100%;
   height: 0.8em;
   margin: 3em;
 }
</style>

<style scoped>
  body {
    font-family: 'Lato', sans-serif;
}

h1 {
    font-family: 'Lato bold', sans-serif;
}
 .background{
   height: 520px;
   width: 100%;
   background-image:url('../../assets/backgrounds/background_video.png'),linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 50%);
   background-position:right bottom;
   background-size:auto 54vmax, 100% auto;
   background-repeat: no-repeat;
 }
 .svg-icon{
   position: absolute;
   left: 15em;
   bottom: 0em;
   width: 32vmax;
   filter: invert(26%) sepia(49%) saturate(770%) hue-rotate(147deg) brightness(100%) contrast(92%) opacity(0.15);
  }
 .space{
   justify-content: flex-end;
 }
 .margin{
   margin: -2.5em 1.1em -3em 1.1em;
 }
 .blue-line{
   background-color: #115D74;
   width: 100%;
   height: 0.8em;
   margin: 3em;
 }
</style>
