const Movies = {
  template: `
    <v-container fluid>
      <!--
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="2">
          <v-card>
            <v-img :src="image"></v-img>
            <v-card-title>
              The Haunting (1963)
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      -->
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.title"
          cols="12" sm="12" md="6" lg="3"
        >
          <v-card>
            <v-img :src="'assets/images/movies/' + item.title + '.jpg'"></v-img>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.director }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    image: 'assets/images/The Haunting (1963).jpg',
    items: [
      {
        "title": "The Gold Rush (1925)",
        "director": "Charles Chaplin"
      },
      {
        "title": "To Be or Not to Be (1942)",
        "director": "Ernst Lubitsch"
      },
      {
        "title": "Sansho the Bailiff (1954)",
        "director": "Kenji Mizoguchi"
      },
      {
        "title": "A Man Escaped (1956)",
        "director": "Robert Bresson"
      },
      {
        "title": "The Seventh Seal (1957)",
        "director": "Ingmar Bergman"
      },
      {
        "title": "Pickpocket (1959)",
        "director": "Robert Bresson"
      },
      {
        "title": "8½ (1963)",
        "director": "Federico Fellini"
      },
      {
        "title": "Blow-Up (1966)",
        "director": "Michelangelo Antonioni"
      },
      {
        "title": "A Clockwork Orange (1971)",
        "director": "Stanley Kubrick"
      },
      {
        "title": "Annie Hall (1977)",
        "director": "Woody Allen"
      },
      {
        "title": "My Neighbor Totoro (1988)",
        "director": "Hayao Miyazaki"
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
        "title": "Eternal Sunshine of the Spotless Mind (2004)",
        "director": "Michel Gondry"
      },
      {
        "title": "There Will Be Blood (2007)",
        "director": "Paul Thomas Anderson"
      }
    ]
  })
}