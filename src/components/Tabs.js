const Tabs = {
  template: `
    <v-container fluid pa-0>
      <v-tabs grow>
        <v-tab v-for="country in countries" :key="country">
          {{ country }}
        </v-tab>
        <v-tab-item v-for="country in countries" :key="country">
          <!--
            class="grey lighten-3"
          -->
          <v-container fluid>
            <v-row>
              <v-col
                v-for="image in images(country)"
                :key="image.title"
                cols="12" sm="12" md="6" lg="4"
              >
                <v-card
                  class="fill-height d-flex flex-column"
                >
                  <v-img
                    :src="image.src"
                    height="335"
                  ></v-img>
                  <v-list>
                    <v-list-item @click="">
                      <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ image.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-card-actions>
                    <a :href="image.href">
                      {{ image.href }}
                    </a>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    countries: null,
    items: locations
  }),
  mounted () {
    this.countries = _.uniq(_.map(this.items, 'country')).sort().slice(0, 6)
  },
  methods: {
    images: function (country) {
      return this.items.filter(item => item.country.localeCompare(country) === 0)
    }
  }
}