<style scoped>
  .container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
      -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
.container span{
  position:absolute;
  font-size: 0.9em;
  padding: 1.8em 2em 1.7em 2em !important;
  font-weight: 700;
  text-transform: uppercase;
}
.container img{
  width: 115%;
  height: 115%;
  margin-top: 1.1em;
  margin-left:-0.2em;
}

.v-btn{
  white-space: normal;
  word-wrap: break-word;
  transition: all 100ms ease-in-out;
}
.v-btn:hover{
  filter: brightness(1.15);
}
</style>
<template>
  <v-container>
    <v-row>
      <v-col>
        <div
          :class="classes"
          class="base-avatar d-inline-flex"
        >
          <v-btn
            icon
            flat
            height="98"
            width="98"
            class="bnt"
            style="margin:-1em;"
          >
            <v-avatar
              :size="size"
            >
              <div class="container">
                <center>
                  <img
                    :src="require('@/assets'+src)"
                  >
                </center>
              </div>
              <span class="white--text">{{ title }}</span>
            </v-avatar>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseAvatarCardPersonalizada',

    mixins: [Heading],

    props: {
      align: {
        type: String,
        default: 'left',
      },
      color: String,
      dark: Boolean,
      horizontal: Boolean,
      space: {
        type: [Number, String],
        default: 6,
      },
      size: {
        type: [Number, String],
        default: 120,
      },
      text: String,
      title: String,
      src: String,
    },

    computed: {
      classes () {
        return [
          this.outlined && 'base-avatar--outlined',
        ]
      },
      outlineSize () {
        return Number(this.size) + (this.size / this.multiply)
      },
      styles () {
        const margin = this.size / (this.multiply * 2)

        return {
          // Aligns the outline content with the content
          margin: `-${margin}px 0 0 -${margin}px`,
        }
      },
    },
  }
</script>
