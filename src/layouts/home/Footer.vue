<template>
  <v-footer
    id="home-footer"
    color="white"
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="s in downloads">
              <v-btn
                :key="s.icon"
                class="mx-2"
                v-bind="s.icon"
                large
                text
                :href="s.link"
                target="_blank"
              >
                <v-icon size="50">
                  {{ s.icon }}
                </v-icon>
              </v-btn>
              <v-responsive
                v-if="i < downloads.length - 1"
                :key="`divider-${s.icon}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center accent--text text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2020 Top Artist Online, Sa de Cv.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      downloads: [
        { icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCqyDqDjlHDXrt9MQFuMWHog' },
        { icon: 'mdi-facebook', link: 'http://www.facebook.com/topartistonline' },
        { icon: 'mdi-instagram', link: 'http://www.instagram.com/topartistonline' },
        { icon: 'mdi-twitter', link: 'http://www.twitter.com/topartistonline' },
      ],

    }),
  }
</script>

<style lang="sass">
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
    background-color: transparent

  .theme--light.v-btn
    color: #115D74
  #home-footer a
    text-decoration: none
</style>
<style scoped>
.v-btn{
  white-space: normal;
  word-wrap: break-word;
  transition: all 200ms ease-in-out;
}
.v-btn:hover{
  filter: brightness(1.5);
}
</style>
