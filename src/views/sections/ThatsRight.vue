<template>
  <base-section
    id="thats-right"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
        >
          <h1>Hola Mundo</h1>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-card
            elevation="16"
            class="mb-12"
          >
            <base-img
              max-width="100%"
              src="https://cdn.vuetifyjs.com/store/themes/zero/pro.png"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Components', 23, '40+'],
        ['Example Pages', 3, 10],
        ['Bugfixes and Issues', true, true],
        ['Vue CLI Support', true, true],
        ['News, Project, and Pricing Pages', false, true],
        ['6 Months Free Updates', false, true],
        ['Price', 'Free', '$60'],
      ],
    }),
  }
</script>
