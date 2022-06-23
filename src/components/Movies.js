const Movies = {
  template: `
    <v-container fluid>
      <v-data-iterator
        :items="items"
        items-per-page="40"
        :search="search"
      >
        <template v-slot:header>
          <v-toolbar
            dark
            color="grey darken-3"
            class="mb-3"
          >
            <v-container fluid>
              <v-row>
                <v-col lg="4">
                  <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
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
                <v-card-subtitle>
                  <b>{{ item.title }}</b>
                </v-card-subtitle>
                <v-card-text>
                  {{ item.director }} / {{ item.year }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  `,
  data: () => ({
    items: [
      {
        "title": "The Gold Rush",
        "director": "Charles Chaplin",
        "year": 1925
      },
      {
        "title": "The General",
        "director": "Buster Keaton",
        "year": 1926
      },
      {
        "title": "Metropolis",
        "director": "Fritz Lang",
        "year": 1927
      },
      {
        "title": "Casablanca",
        "director": "Michael Curtiz",
        "year": 1942
      },
      {
        "title": "To Be or Not to Be",
        "director": "Ernst Lubitsch",
        "year": 1942
      },
      {
        "title": "Sunset Blvd.",
        "director": "Billy Wilder",
        "year": 1950
      },
      {
        "title": "Sansho the Bailiff",
        "director": "Kenji Mizoguchi",
        "year": 1954
      },
      {
        "title": "A Man Escaped",
        "director": "Robert Bresson",
        "year": 1956
      },
      {
        "title": "The Seventh Seal",
        "director": "Ingmar Bergman",
        "year": 1957
      },
      {
        "title": "Wild Strawberries",
        "director": "Ingmar Bergman",
        "year": 1957
      },
      {
        "title": "Touch of Evil",
        "director": "Orson Welles",
        "year": 1958
      },
      {
        "title": "Pickpocket",
        "director": "Robert Bresson",
        "year": 1959
      },
      {
        "title": "L'Avventura",
        "director": "Michelangelo Antonioni",
        "year": 1960
      },
      {
        "title": "Viridiana",
        "director": "Luis Buñuel",
        "year": 1961
      },
      {
        "title": "Lawrence of Arabia",
        "director": "David Lean",
        "year": 1962
      },
      {
        "title": "8½",
        "director": "Federico Fellini",
        "year": 1963
      },
      {
        "title": "Au hasard Balthazar",
        "director": "Robert Bresson",
        "year": 1966
      },
      {
        "title": "Blow-Up",
        "director": "Michelangelo Antonioni",
        "year": 1966
      },
      {
        "title": "Once Upon a Time in the West",
        "director": "Sergio Leone",
        "year": 1968
      },
      {
        "title": "A Clockwork Orange",
        "director": "Stanley Kubrick",
        "year": 1971
      },
      {
        "title": "Amarcord",
        "director": "Federico Fellini",
        "year": 1973
      },
      {
        "title": "Barry Lyndon (1975)",
        "director": "Stanley Kubrick"
      },
      {
        "title": "Annie Hall",
        "director": "Woody Allen",
        "year": 1977
      },
      {
        "title": "Blade Runner",
        "director": "Ridley Scott",
        "year": 1982
      },
      {
        "title": "My Neighbor Totoro (1988)",
        "director": "Hayao Miyazaki"
      },
      {
        "title": "Goodfellas",
        "director": "Martin Scorsese",
        "year": 1990
      },
      {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": 1994
      },
      {
        "title": "Yi yi (2000)",
        "director": "Edward Yang"
      },
      {
        "title": "Mulholland Dr. (2001)",
        "director": "David Lynch"
      },
      {
        "title": "Spirited Away (2001)",
        "director": "Hayao Miyazaki"
      },
      {
        "title": "Eternal Sunshine of the Spotless Mind",
        "director": "Michel Gondry",
        "year": 2004
      },
      {
        "title": "There Will Be Blood (2007)",
        "director": "Paul Thomas Anderson"
      }
    ],
    directors: [],
    search: null
  }),
  mounted: function () {
    // this.directors = []
    for (var i = 0; i < this.items.length; i++) {
      if (this.directors.indexOf(this.items[i].director) < 0) {
        this.directors.push(this.items[i].director)
      }
    }
    this.directors = this.directors.sort()
  }
}