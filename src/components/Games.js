const Games = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="6" lg="3"
          v-for="game in games"
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
  data: () => ({
    games: [
      {
        "title": "Donkey Kong Country",
        "src": "assets/images/Donkey Kong Country.jpg",
        "rating": 4.5,
        "difficulty": 3
      },
      {
        "title": "Super Ghouls 'n Ghosts",
        "src": "assets/images/Super Ghouls 'n Ghosts.jpg",
        "rating": 4.5,
        "difficulty": 4
      },
      {
        "title": "Maui Mallard in Cold Shadow", // Prefer (U) version
        "src": "assets/images/Maui Mallard in Cold Shadow.jpg",
        "rating": 4,
        "difficulty": 3
      },
      {
        "title": "Animaniacs",
        "src": "assets/images/Animaniacs.png",
        "rating": 4,
        "difficulty": 4
      },
      {
        "title": "Super Castlevania IV",
        "src": "assets/images/Super Castlevania IV.jpg",
        "rating": 3.5,
        "difficulty": 2.5
      },
      {
        "title": "The Mask", // Really Tough Bosses
        "src": "assets/images/The Mask.jpg",
        "rating": 3,
        "difficulty": 3.5
      },
      {
        "title": "The Lion King", // Played in Normal
        "src": "assets/images/The Lion King.jpg",
        "rating": 2,
        "difficulty": 4
      }
    ]
  })
}