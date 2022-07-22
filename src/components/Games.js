const Games = {
  template: `
    <v-container fluid>
       <v-row>
        <v-col sm="12" md="6" lg="3"
          v-for="game in filtered"
          :key="game.title"
        >
          <v-card class="fill-height d-flex flex-column">
            <v-img
              :src="'assets/games/' + game.src"
              height="280px"
              max-height="280px"
            ></v-img>
            <v-card-title>{{ game.title }}</v-card-title>
            <v-card-subtitle>{{ game.subtitle }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-text class="pt-0">
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
    },
    search () {
      return this.$store.state.search
    }
  },
  data: () => ({
    games: [
      {
        "title": "Donkey Kong Country",
        "src": "Donkey Kong Country.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Donkey Kong Country 2", // Diddy's Kong Quest - Bonus Content: The Lost World
        "subtitle": "Diddy's Kong Quest",
        "src": "Donkey Kong Country 2: Diddy's Kong Quest.png",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Donkey Kong Country 3",
        "subtitle": "Dixie Kong's Double Trouble!",
        "src": "Donkey Kong Country 3.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Super Ghouls 'n Ghosts",
        "src": "Super Ghouls 'n Ghosts.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Teenage Mutant Ninja Turtles",
        "subtitle": "Turtles in Time",
        "src": "Turtles in Time.png",
        "rating": 4.5,
        "difficulty": 3.5
      },
      {
        "title": "Hagane",
        "src": "Hagane.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Maui Mallard in Cold Shadow", // Prefer (U) version
        "src": "Maui Mallard in Cold Shadow.jpg",
        "rating": 4,
        "difficulty": 3
      },
      {
        "title": "Animaniacs",
        "src": "Animaniacs.png",
        "rating": 4,
        "difficulty": 4
      },
      {
        "title": "Goof Troop",
        "src": "Goof Troop.jpg",
        "rating": 4,
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
      }
    ]
  })
}