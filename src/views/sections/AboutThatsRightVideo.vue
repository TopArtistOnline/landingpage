<template>
  <section
    id="about-thats-right-video"
    class="background"
  >
    <v-container
      v-for="item in items"
      :key="item"
      class="container"
    >
      <v-row>
        <v-col
          md="6"
          style="white-space: normal;word-wrap: break-word;"
          class="svg-icon"
        >
          <h1 class="h1 display-2 my-2 text-center">
            <span
              class="fontthat font-weight-black"
            >{{ item.title }}</span>
          </h1>
          <h1 class="h2 subtitle">
            Here at <span class="h3">Top Artist Online</span> we believe in sharing and giving back.
          </h1>
          <p class="h2 my-6 p">
            Thats why<span class="h3"> you´ll earn money and rewards</span> each and every month in exchange for<span class="h3"> everything you do</span> here with us.
          </p>
          <p class="h2 my-6 p">
            Whether you are a content creator<span class="h3"> uploading quality content,</span> an artist setting his/her shop and<span class="h3"> selling their products</span> (physical of digital), an<span class="h3"> online teacher sharing</span> his or her experience and knowledge or simply<span class="h3"> someone who wants to find the best lessons</span> to improve do it fast, this is the place for you!!!
          </p>
        </v-col>
        <v-col md="6">
          <v-card
            elevation="16"
            class="mb-12 my-7 transparent"
            color="transparent"
          >
            <base-img
              max-width="100%"
              :src="require('@/assets/elements/caratula_video.png')"
            />
            <v-card-text class="text-center font-weight-bold">
              "As acreator<span class="h3 font-weight-black"> it has given me every tool I need</span> to grown my community fast and get an increasingly strong,<span class="h3 font-weight-black"> consistent income each month,</span>LOVE IT!!"
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
        {
          title: 'That´s Right',
          subtitle: 'Here at Top Artist Online we believe in sharing and giving back',
          paragraph: 'Thats why you´ll earn money and rewards each and every month in exchange for everything you do here with us.',
          paragraph2: 'Whether you are a content creator uploading quality content, an artist setting his/her shop and selling their products (physical of digital), an online teacher sharing his or her experience and knowledge or simply someone who wants to find the best lessons to improve do it fast, this is the place for you!!!',
          card: '"As acreator it has given me every tool I need to grown my community fast and get an increasingly strong, consistent income each month, LOVE IT!!"',
        },
      ],
      backgroundsitem: [
        { src: "require('@/assets/elements/relleno_degradado_1.png')" },
        { src: "require('@/assets/logos/tao_isotipo.svg')" },
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
.home{
  display: flex;
  justify-content: space-between;
  align-self: center;
  height: auto;
  width:"100%";
  position: relative;
}
 .background{
   background-image:url('../../assets/backgrounds/background_video.png'),linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 60%);
   background-position: right bottom, bottom;
   background-size: 125vmax 60vmax, contain;
   background-repeat: no-repeat;
 }
 .svg-icon{
  background-image:url('../../assets/logos/tao_isotipo.svg');
  background-position:center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 7vmin;
  }
 .space{
   justify-content: flex-end;
 }
 .margin{
   margin: -2.5em 1.1em -3em 1.1em;
 }
 .container{
   margin-bottom: -1em;
   max-width: 95%;
   margin-top: 0vmax;
 }
 .h1{
   color: white;
   font-family: Arial;
 }
 .subtitle{
   font-size: 25px;
 }
 .h2{
   color: #115D74;
   text-align: center;
 }
 .h3{
   font-family: Arial, Helvetica, sans-serif;
 }
 .fontthat{
   color: white;
   background-color:#115D74;
   padding:0 0.1em 0 0.1em;
 }
 .p{
   font-size: 20px;
 }
.transparent{
  -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
}
</style>
