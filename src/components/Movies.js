const Movies = {
  template: `
    <v-container fluid>
      <v-data-iterator
        :items="filteredItems"
        :items-per-page="40"
        :search="search"
      >
        <template v-slot:header>
          <v-toolbar
            class="mb-3"
          >
            <v-container fluid>
              <v-row>
                <v-col lg="4">
                  <v-text-field
                    v-model="search"
                    clearable
                    flat solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                  ></v-text-field>
                </v-col>
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
                <v-col lg="4">
                  <v-select
                    clearable
                    flat solo-inverted
                    hide-details
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-toolbar>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.title"
              cols="12" sm="12" md="6" lg="3"
            >
              <v-card>
                <v-img
                  :src="'assets/images/' + item.title + '.jpg'"
                  height="198px"
                ></v-img>
                <v-card-title>
                  {{ item.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ item.director }} / {{ item.year }}
                </v-card-subtitle>                
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
    directors: [],
    search: null
  }),
  mounted: function () {
    this.items = movies
    // this.directors = []
    for (var i = 0; i < this.items.length; i++) {
      if (this.directors.indexOf(this.items[i].director) < 0) {
        this.directors.push(this.items[i].director)
      }
      // if (!this.items[i].rating) {
        this.filteredItems.push(this.items[i])
      // }
    }

    this.directors = this.directors.sort()
  }
}