const SvgMaps = {
  template: `
    <v-container fluid pa-0>
      <v-tabs grow>
        <v-tab>
          States
        </v-tab>
        <v-tab-item class="grey lighten-5">
          <v-container fluid>
            <v-row justify="center">
              <v-col cols="12" lg="6">
                <svg-map
                  :map="states"
                ></svg-map>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab>
          Cities
        </v-tab>
        <v-tab-item class="grey lighten-5">
          <v-row justify="center">
            <v-col cols="12" lg="9">
              <svg-map
                :map="cities"
                :location-class="getLocationClass"
              ></svg-map>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    states: states,
    cities: cities
  }),
  components: {
    "svg-map": VueSvgMap.SvgMap
  },
  methods: {
    getLocationClass (location, index) {
			// Generate heat map
			return `svg-map__location svg-map__location--heat${index % 4}`
		}
  }
}