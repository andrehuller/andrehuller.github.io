const SvgMaps = {
  template: `
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <svg-map
            :map="states"
          ></svg-map>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    states: states
  }),
  components: {
    "svg-map": VueSvgMap.SvgMap
  }
}