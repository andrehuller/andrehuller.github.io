const Movies = {
  template: `
    <v-container fluid>
      <v-data-iterator
        :items="filteredItems"
        :items-per-page="16"
        :search="search"
        :footer-props="{'items-per-page-options':[20, 40, 80, -1]}"
      >
        <!--
        <template v-slot:header>
          <v-row>
            <v-col lg="6">
              <v-text-field
                v-model="search"
                clearable
                flat solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
            </v-col>
            <!--
            <v-col lg="4">
              <v-autocomplete
                label="Director"
                :items="directors"
                hide-details
                clearable
                flat solo-inverted
                prepend-inner-icon="mdi-magnify"
              ></v-autocomplete>
            </v-col>
            -->
            <!--
            <v-col lg="4">
              <v-select
                clearable
                flat solo-inverted
                hide-details
              ></v-select>
            </v-col>
            -->
          </v-row>
        </template>
        -->
        <template v-slot:default="props">
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
                ></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>
                  {{ item.director }} / {{ item.year }} / {{ item.country }}
                </v-card-subtitle>

                <v-spacer></v-spacer>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  `,
  data: () => ({
    items: [],
    filteredItems: [],
    directors: []
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

      if ("?".localeCompare(this.items[i].rating) != 0 && this.items[i].rating != 8 && this.items[i].rating != 7 && this.items[i].rating != 5) {
        this.filteredItems.push(this.items[i])
      }
    }

    this.directors = this.directors.sort()
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