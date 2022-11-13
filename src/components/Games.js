const Games = {
  template: `
    <v-container fluid>
      <v-data-iterator
        :items="filtered"
        :items-per-page="20"
        :search="search"
        :footer-props="{'items-per-page-options':[20, 40, 80, -1]}"
        @update:page="$vuetify.goTo(0)"
      >
        <template v-slot:header>
          <v-card>
            <v-toolbar
              class="mb-4"
              color="red lighten-1"
              dark flat
            >
              <v-container fluid class="pa-0"> 
                <v-row no-gutters>
                  <v-col cols="12" lg="8">
                  </v-col>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      v-model="search"
                      label="Search..." prepend-inner-icon="mdi-magnify"
                      flat solo-inverted clearable hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-toolbar>
          </v-card>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col sm="12" md="6" lg="3"
              v-for="item in props.items"
              :key="item.title"
            >
              <v-card class="fill-height d-flex flex-column">
                <v-img
                  :src="'assets/games/' + item.src"
                  height="275px"
                  max-height="275px"
                ></v-img>

                <v-card-title style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;">
                  {{ item.title }}
                  <v-spacer></v-spacer>
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
                <v-card-subtitle v-if="item.developer">
                  {{ item.developer }} / {{ item.year }}
                </v-card-subtitle>
                <v-spacer></v-spacer>

                <!--
                <v-card-text class="pt-0">
                  <v-simple-table>
                    <tr>
                      <td>
                        Rating:
                      </td>
                      <td align="right">
                        <v-rating
                          :value="item.rating"
                          half-increments
                          readonly
                        ></v-rating>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Difficulty:
                      </td>
                      <td align="right">
                        <v-rating
                          :value="item.difficulty"
                          half-increments
                          readonly
                        ></v-rating>
                      </td>
                    </tr>
                  </v-simple-table>
                </v-card-text>
                -->
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  ` ,
  computed: {
    filtered: function () {
      if (!this.search) return this.games

      return this.games.filter(a => a.title.toLowerCase().includes(this.search.toLowerCase()))
    }
    /* ,
    search () {
      return this.$store.state.search
    }
    */
  },
  data: () => ({
    search: null,
    games: [
      {
        "title": "Contra III: The Alien Wars",
        "developer": "Konami",
        "year": 1992,
        "src": "Contra III: The Alien Wars.jpg",
        "rating": 5,
        "difficulty": 3.5
      },
      {
        "title": "Super Ghouls 'n Ghosts",
        "developer": "Capcom",
        "year": 1991,
        "src": "Super Ghouls 'n Ghosts.jpg",
        "rating": 5,
        "difficulty": 4
      },
      {
        "title": "Super Metroid",
        "developer": "Nintendo",
        "year": 1994,
        "src": "Super Metroid.jpg",
        "rating": 5,
        "difficulty": 3
      },
      {
        "title": "Super Street Fighter II",
        "subtitle": "The New Challengers",
        "developer": "Capcom",
        "year": 1993,
        "src": "Super Street Fighter II - The New Challengers.jpg",
        "rating": 5,
        "difficulty": 4
      },
      {
        "title": "Donkey Kong Country",
        "developer": "Rare",
        "year": 1994,
        "src": "Donkey Kong Country.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Donkey Kong Country 2", // Bonus Content: The Lost World
        "subtitle": "Diddy's Kong Quest",
        "developer": "Rare",
        "year": 1995,
        "src": "Donkey Kong Country 2: Diddy's Kong Quest.jpg",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Donkey Kong Country 3",
        "subtitle": "Dixie Kong's Double Trouble!",
        "developer": "Rare",
        "year": 1996,
        "src": "Donkey Kong Country 3.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Hagane",
        "developer": "CAProduction",
        "year": 1994,
        "src": "Hagane.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Mega Man X",
        "developer": "Capcom",
        "year": "1993",
        "src": "Mega Man X.jpg",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Super Star Wars",
        "developer": "LucasArts",
        "year": 1992,
        "src": "Super Star Wars.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Turtles in Time",
        "developer": "Konami",
        "year": 1991,
        "src": "Turtles in Time.png",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Wild Guns",
        "developer": "Natsume",
        "year": 1994,
        "src": "Wild Guns.png",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Maui Mallard in Cold Shadow", // Prefer (U) version
        "developer": "Disney Interactive Studios",
        "year": 1995,
        "src": "Maui Mallard in Cold Shadow.jpg",
        "rating": 4,
        "difficulty": 3
      },
      {
        "title": "Animaniacs",
        "developer": "Konami",
        "year": 1994,
        "src": "Animaniacs.png",
        "rating": 4,
        "difficulty": 4
      },
      {
        "title": "Castlevania: Dracula X", // Missing: Good Ending
        "developer": "Konami",
        "year": 1995,
        "src": "Castlevania: Dracula X.png",
        "rating": 4,
        "difficulty": 3.5
      },
      {
        "title": "Goof Troop",
        "developer": "Capcom",
        "year": 1993,
        "src": "Goof Troop.jpg",
        "rating": 4,
        "difficulty": 2
      },
      {
      	"title": "Metal Warriors",
        "developer": "LucasArts",
        "year": 1995,
      	"src": "Metal Warriors.jpg",
      	"rating": 4,
      	"difficulty": 3
      },
      {
        "title": "Super Mario Kart",
        "developer": "Nintendo",
        "year": 1992,
        "src": "Super Mario Kart.jpg",
        "rating": 4,
        "difficulty": 2.5
      },
      {
      	"title": "Super Double Dragon",
      	"developer": "Technōs Japan",
      	"year": 1992,
      	"src": "Super Double Dragon.jpg",
        "rating": 4,
        "difficulty": 3
      },
      {
        "title": "The Empire Strikes Back",
        "developer": "LucasArts",
        "year": 1993,
        "src": "Super Star Wars: The Empire Strikes Back.png",
        "rating": 4,
        "difficulty": 4
      }, // Return of the Jedi - Some of the bosses are really terrible
      {
        "title": "Zombies Ate My Neighbors",
        "src": "Zombies Ate My Neighbors.png",
        "rating": 4,
        "difficulty": 2.5
      },
      {
        "title": "Aladdin",
        "src": "Aladdin.jpg",
        "rating": 3.5,
        "difficulty": 2.5
      },
      {
        "title": "Mighty Morphin Power Rangers", // Short game - 5 stages + 2/3 bosses
        "src": "Mighty Morphin Power Rangers.jpg",
        "rating": 3.5,
        "difficulty": 2
      },
      {
        "title": "Mighty Morphin Power Rangers: The Movie",
        "src": "Mighty Morphin Power Rangers: The Movie.jpg",
        "rating": 3.5,
        "difficulty": 2
      },
      {
        "title": "Super Castlevania IV",
        "src": "Super Castlevania IV.jpg",
        "rating": 3.5,
        "difficulty": 2.5
      },
      {
        "title": "The Mask", // Really Tough Bosses
        "src": "The Mask.jpg",
        "rating": 3,
        "difficulty": 3.5
      },
      {
        "title": "The Lion King", // Played in Normal
        "src": "The Lion King.jpg",
        "rating": 2,
        "difficulty": 4
      },
      {
        "title": "Sailor Moon", // Normal - Sailor Mars // Really Tedious Game
        "src": "Sailor Moon.jpg",
        "rating": 2,
        "difficulty": 2
      }
    ]
  })
}
