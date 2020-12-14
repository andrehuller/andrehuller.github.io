const DataIterator = {
  template: `
    <v-container fluid>
      <v-row>
        <template v-for="country in countries">
          <v-col class="mt-2" cols="12">
            <strong>{{ country }}</strong>
          </v-col>
          <v-col cols="12">
            <v-data-iterator
              :items="images(country)"
            >
              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.title"
                    cols="12"
                    sm="12"
                    md="6"
                    lg="4"
                  >
                    <v-card
                      class="fill-height d-flex flex-column"
                    >
                      <v-img
                        :src="item.src"
                        height="335"
                      ></v-img>
                      <v-list>
                        <v-list-item @click="">
                          <v-list-item-icon>
                            <v-icon>mdi-map-marker</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ item.title }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                      <v-card-actions>
                        <a :href="item.href">
                          {{ item.href }}
                        </a>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-data-iterator>
          </v-col>
        </template>
      </v-row>
    </v-container>
  `,
  data: () => ({
    countries: null,
    items: locations
  }),
  mounted () {
    this.countries = _.uniq(_.map(this.items, 'country')).sort()
  },
  methods: {
    images: function (country) {
      return this.items.filter(item => item.country.localeCompare(country) === 0)
    }
  }
}