<style scoped>
.container{
    margin: 1em;
    display: flex;
}
.crown_img{
    max-width: 5em;
}
</style>

<template>
  <v-container class="container">
    <v-img
      :src="require('@/assets'+src)"
      class="crown_img"
    />
    <span
      class="accent--text text-h5 ma-3"
    >{{ title }}</span>
  </v-container>
</template>

<script>
  export default {
    name: 'BaseCrownTitle',
    props: {
      align: {
        type: String,
        default: 'left',
      },
      color: String,
      dark: Boolean,
      title: String,
      src: String,
    },
  }
</script>
