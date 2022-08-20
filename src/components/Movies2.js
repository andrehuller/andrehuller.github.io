const Movies2 = {
  template: `
    <v-container fluid pa-0>
      <v-tabs fixed-tabs>
        <v-tab
          v-for="list in lists"
          :key="list.name"
        >
          {{ list.name }}
        </v-tab>
        <v-tab-item
          v-for="list in lists"
          :key="list.name"
        >
          <v-data-iterator
            :items="list.items"
            :items-per-page="20"
            :search="search"
            :footer-props="{'items-per-page-options':[20, 40, 80, -1]}"
            @update:page="$vuetify.goTo(0)"
          >
            <template v-slot:default="props">
              <v-container fluid>
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.title"
                  cols="12" sm="12" md="6" lg="3"
                >
                  <v-card class="fill-height d-flex flex-column">
                  <!-- :color="item.rating == 10 ? '#dacfa1' : item.rating == 9 ? '#bcbec0' : '#967444'" -->
                    <v-img
                      :src="imageSrc(item)"
                      height="198px"
                      max-height="198px"
                    ></v-img>
                    <v-card-title style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;">
                      {{ item.title }}<v-spacer></v-spacer>
                      <v-menu left offset-y>
                        <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item @click="">
                            <v-list-item-title>Not interested</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="">
                            <v-list-item-title>Report</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-card-title>
                    <v-card-subtitle>
                      {{ item.director }} / {{ item.year }} / {{ item.country }}
                    </v-card-subtitle>

                    <v-spacer></v-spacer>
                  </v-card>
                </v-col>
              </v-row>
              </v-container>
            </template>
          </v-data-iterator>

        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    items: [],
    directors: [],
    lists: []
  }),
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  mounted: function () {
    this.items = movies
    // this.directors = []
    for (var i = 0; i < this.items.length; i++) {
      if (this.directors.indexOf(this.items[i].director) < 0) {
        this.directors.push(this.items[i].director)
      }
    }

    this.directors = this.directors.sort()

    this.lists = lists
  },
  methods: {
    imageSrc: function (item) {
      if (item.image) {
        return 'assets/images/' + item.image + '.jpg'
      }
      return 'assets/images/' + item.title + '.jpg'
    }
  }
}