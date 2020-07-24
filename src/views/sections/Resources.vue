<style scoped>
  .background{
    height: 100%;
    width: 100%;
    background-image:url('../../assets/elements/microphone.png'), url('../../assets/logos/TAO_ISOTIPO_CUT.svg'), url('../../assets/backgrounds/background_video_reverse.png'), linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 50%);
    background-position: left bottom, right bottom, left bottom;
    background-size:40em auto , 30em auto, 80em auto, 100% auto;
    -webkit-background-size:40em auto , 30em auto, 80em auto, 100% auto;;
    -moz-background-size:40em auto , 30em auto, 80em auto, 100% auto;;
    background-size: 40em auto , 30em auto, 80em auto, 100% auto;
    background-repeat: no-repeat;
  }
  .space{
     justify-content:flex-end;
  }
  .blue-line{
    background-color:#115D74;
    width: 100%;
    height: 0.8em;
    margin:0 0 2.5% 3em;
  }

  .svg-icon{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32vmax;
    filter: invert(26%) sepia(49%) saturate(770%) hue-rotate(147deg) brightness(100%) contrast(92%) opacity(0.15);
  }
  .svg-icon-2{
    filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg) brightness(108%) contrast(108%);
    width:2.8em;
    top:0.2em;
  }
</style>

<template>
  <section
    id="theme-features"
    class="background"
  >
    <v-img
      :src="require('@/assets/logos/TAO_ISOTIPO_CUT.svg')"
      class="svg-icon"
    />
    <v-container>
      <v-row>
        <v-col
          v-for="(crowntitle) in crowntitles"
          :key="crowntitle"
          style="margin:-2.7em 0 -2.7em 0"
          md="4"
        >
          <base-crown-title
            v-bind="crowntitle"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>

    <v-img
      class="blue-line"
    />

    <v-container>
      <v-row
        style="margin:2.5% 0 2.5% 0"
      >
        <v-col
          cols="5"
          sm="5"
          md="8"
        >
          <v-avatar
            style="border: 0.3em solid #ffc301;
                  border-radius:50%;
                  height: 76px;
                  width: 76px;
                  background-color:#115D74; float:right;"
          >
            <center>
              <v-img
                :src="require('@/assets/logos/learning_icon.svg')"
                class="svg-icon-2"
              />
            </center>
          </v-avatar>
        </v-col>
        <v-col>
          <span
            class="secondary--text text-h5"
            style="background-color:#115D74; padding:0.1em 1.5em 0.1em 1.5em; margin: 0.8em 2em 1em -1.5em; position:absolute; text-align:center"
          >Learning</span>
        </v-col>
      </v-row>
      <v-row
        class="space"
        style="margin:2.5% 0 2.5% 0"
      >
        <v-col
          v-for="(lesson) in lessons"
          :key="lesson"
          style="margin:-1em 1.1em -2em 1.1em"
          md="1"
        >
          <base-avatar-card-personalizada
            v-bind="lesson"
            horizontal
          />
        </v-col>
      </v-row>
      <v-row
        style="margin:2.5% 0 2.5% 0"
      >
        <v-col
          cols="5"
          sm="5"
          md="8"
          style="margin:2.5% 0 2.5% 0"
        />
        <v-col>
          <span
            class="accent--text text-h5"
            style="margin:-0.4em 2em 1em -1.5em; position:absolute; text-align:center"
          >and more...</span>
        </v-col>
      </v-row>
      <v-row
        style="margin:2.5% 0 2.5% 0"
      >
        <v-col
          cols="5"
          sm="5"
          md="8"
        >
          <v-avatar
            style="border: 0.3em solid #ffc301;
                  border-radius:50%;
                  height: 76px;
                  width: 76px;
                  background-color:#115D74; float:right;
                  left:-1em"
          >
            <center>
              <v-img
                :src="require('@/assets/logos/learning_icon.svg')"
                class="svg-icon-2"
              />
            </center>
          </v-avatar>
        </v-col>
        <v-col>
          <span
            class="secondary--text text-h5"
            style="background-color:#115D74; padding:0.1em 1.5em 0.1em 1.5em; margin: 0.8em 2em 1em -2.1em; position:absolute; text-align:center"
          >Marketplace</span>
        </v-col>
      </v-row>
      <v-row class="space">
        <v-col
          v-for="(marketplace) in marketplaces"
          :key="marketplace"
          style="margin:-1em 1em -2em 0em"
          md="3"
        >
          <base-avatar-card-personalizada
            v-bind="marketplace"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      lessons: [
        {
          title: 'Technique',
          src: '/circles/circle_01.png',
        },
        {
          title: 'Ear training',
          src: '/circles/circle_02.png',
        },
        {
          title: 'Music theory',
          src: '/circles/circle_03.png',
        },
        {
          title: 'Music style patterns',
          src: '/circles/circle_04.png',
        },
        {
          title: 'Sound tutorials',
          src: '/circles/circle_05.png',
        },
      ],
      marketplaces: [
        {
          src: '/logos/Logotipo-Ebay.png',
        },
        {
          src: '/logos/Logotipo-Amazon.png',
        },
      ],
      crowntitles: [
        {
          src: '/logos/cup.svg',
          title: 'Resources',
        },
      ],
    }),
  }
</script>
