const People = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          v-for="video in videos"
          :key="video.id"
          cols="12" lg="4"
        >
          <v-card
            :href="'https://youtu.be/' + video.id"
            class="fill-height d-flex flex-column"
          >
            <v-img
              :src="'https://i.ytimg.com/vi_webp/' + video.id + '/hqdefault.webp'"
              style="background: black;"
            ></v-img>
            <v-card-title>
              {{ video.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ video.subtitle }}
            </v-card-subtitle>
          </v-card
        </v-col>
      </v-row>
      <!--
      <v-row>
        <v-col sm="12" md="6" lg="3"
          v-for="person in people"
          :key="person.name"
        >
          <v-card class="fill-height d-flex flex-column" outlined>
            <v-card-title>
              <v-avatar color="primary" class="white--text mr-3">
                {{ person.name.charAt(0) }}
              </v-avatar>
              {{ person.name }}
            </v-card-title>
            <v-card-text>
              <v-chip
                v-for="category in person.categories"
                :key="category"
                outlined
              >
                {{ category }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      -->
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
                  ></v-rating>
                </td>
              </tr>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    people: [
      { name: 'Aisling Bea', categories: ['Comedian'] },
      { name: 'Alfred Hitchcock', categories: ['Film Director'] },
      { name: 'Amira Willighagen', categories: ['Singer'] },
      { name: 'Bill Burr' },
      { name: 'Bill Maher' },
      { name: 'Bob Dylan' },
      { name: 'Christopher Hitchens' },
      { name: 'Françoise Hardy' },
      { name: 'Frankie Boyle' },
      { name: 'George Carlin' },
      { name: 'Joe Rogan' },
      { name: 'Marc Maron' },
      { name: 'Richard Dawkins' },
      { name: 'Ricky Gervais '},
      { name: 'Sam Harris' },
      { name: 'Tim Minchin' }
    ],
    videos: [
      {
        "id": "qOZqGUCrje8",
        "title": "What Happens When You Only Pursue Pleasure",
        "subtitle": "Alan Watts"
      },
      {
        "id": "MzubNgsQsog",
        "title": "Why You Shouldn't Want To Live Forever",
        "subtitle": "Alan Watts"
      },
      {
        "id": "5G8Gwr5JJ6Y",
        "title": "It's NOT OK to be WEAK",
        "subtitle": "Jordan Peterson"
      },
      {
        "id": "wvdM_u4NZQw",
        "title": "Joe Rogan Experience #692",
        "subtitle": "Jay Leno"
      },
      {
        "id": "b9GWqfNlWHI",
        "title": "Joe Rogan Experience #909",
        "subtitle": "Bill Burr"
      },
      {
        "id": "wieRZoJSVtw",
        "title": "Joe Rogan Experience #1233",
        "subtitle": "Brian Cox"
      },
      {
        "id": "2O-iLk1G_ng",
        "title": "Joe Rogan Experience #1330",
        "subtitle": "Bernie Sanders"
      },
      {
        "id": "-KQGZa773sI",
        "title": "Joe Rogan Experience #1413",
        "subtitle": "Bill Maher"
      },
      {
        "id": "GO_rW0Bvy1I",
        "title": "Joe Rogan Experience #1491",
        "subtitle": "Bill Burr"
      }
    ],
    games: [
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
        "title": "The Lion King", // Played in Normal
        "src": "assets/images/The Lion King.jpg",
        "rating": 2,
        "difficulty": 4
      }
    ]
  })
}