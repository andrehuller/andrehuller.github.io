const Games = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col>
          <v-toolbar flat color="#25305E" dark>
            <v-text-field
              v-model="search"
              clearable flat solo-inverted hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn @click="sort()">
              <v-icon left v-if="ascending">mdi-sort-alphabetical-ascending</v-icon>
              <v-icon left v-else>mdi-sort-alphabetical-descending</v-icon>
              Sort
            </v-btn>
          </v-toolbar>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="12" md="6" lg="3"
          v-for="game in filtered"
          :key="game.title"
        >
          <v-card>
            <v-img
              :src="game.src"
              height="280px"
            ></v-img>
            <v-card-title>
              {{ game.title }}
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <tr>
                  <td>
                    Rating:
                  </td>
                  <td align="right">
                    <v-rating
                      :value="game.rating"
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
                      :value="game.difficulty"
                      half-increments
                      readonly
                    ></v-rating>
                  </td>
                </tr>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  ` ,
  computed: {
    filtered: function () {
      if (!this.search) return this.games

      return this.games.filter(a => a.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  data: () => ({
    games: [
      {
        "title": "Donkey Kong Country",
        "src": "assets/games/Donkey Kong Country.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Donkey Kong Country 2", // Diddy's Kong Quest - Bonus Content: The Lost World
        "src": "assets/games/Donkey Kong Country 2: Diddy's Kong Quest.png",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Super Ghouls 'n Ghosts",
        "src": "assets/games/Super Ghouls 'n Ghosts.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Hagane",
        "src": "assets/games/Hagane.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Maui Mallard in Cold Shadow", // Prefer (U) version
        "src": "assets/games/Maui Mallard in Cold Shadow.jpg",
        "rating": 4,
        "difficulty": 3
      },
      {
        "title": "Animaniacs",
        "src": "assets/games/Animaniacs.png",
        "rating": 4,
        "difficulty": 4
      },
      {
        "title": "Super Castlevania IV",
        "src": "assets/games/Super Castlevania IV.jpg",
        "rating": 3.5,
        "difficulty": 2.5
      },
      {
        "title": "The Mask", // Really Tough Bosses
        "src": "assets/games/The Mask.jpg",
        "rating": 3,
        "difficulty": 3.5
      },
      {
        "title": "The Lion King", // Played in Normal
        "src": "assets/games/The Lion King.jpg",
        "rating": 2,
        "difficulty": 4
      }
    ],
    search: null,
    ascending: null
  }),
  methods: {
    sort: function () {
      if (!this.ascending) { // null or false
        this.games = this.games.sort((a, b) => a.title.localeCompare(b.title))
        this.ascending = true
      } else {
        this.games = this.games.sort((a, b) => b.title.localeCompare(a.title))
        this.ascending = false
      }
      console.log(this.ascending)
    }
  }
}