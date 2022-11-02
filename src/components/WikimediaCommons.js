const WikimediaCommons = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.name"
          lg="3"
        >
          <v-card class="fill-height d-flex flex-column" flat tile>
            <div>
              <v-img height="475" :src="'assets/wikimedia/' + item.name + '.jpg'"></v-img>
            </div>
            <v-card-title>
              {{ item.name }}
              <v-spacer></v-spacer>
              <v-dialog width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon flat v-bind="attrs" v-on="on">
                    <v-icon>mdi-information-outline</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    {{ item.name }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item
                      v-for="(movie, i) in item.movies"
                      :key="i"
                    >
                      {{ movie }}
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-dialog>
            </v-card-title>
            <v-card-text>
              <span v-html="item.attribution"></span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    items: [
      {
        name: 'Brian de Palma',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Brian_De_Palma_Deauville_2011.jpg">Georges Biard</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
        movies: [
          'Phantom of the Paradise (1974)'
        ]
      },
      {
        name: 'John Carpenter',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:John_Carpenter.JPG">Nathan Hartley Maas</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
        movies: [
          'The Thing (1982)',
          'Prince of Darkness (1987)'
        ]
      },
      /*
      {
        name: 'Alfred Hitchcock',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Hitchcock,_Alfred_02.jpg">Ante Brkan</a>, Public domain, via Wikimedia Commons'
      },
      */
      {
        name: 'Joseph L. Mankiewicz',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Joseph_L._Mankiewicz_(1950).jpg">English:  Photographer unknown; work-for-hire on behalf of 20th Century Fox.</a>, Public domain, via Wikimedia Commons',
        movies: [
          'All About Eve (1950)',
          'No Way Out (1950)',
          'Suddenly, Last Summer (1959)'
        ]
      },
      {
        name: 'Sidney Poitier',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Poitier_cropped.jpg">U.S. Information Agency. Press and Publications Service.  (ca. 1953 - ca. 1978)</a>, Public domain, via Wikimedia Commons',
        movies: [
          'No Way Out (1950)',
          'Blackboard Jungle (1955)',
          "Guess Who's Coming to Dinner (1967)",
          'In the Heat of the Night (1967)'
        ]
      },
      /*,
      {
      	name: 'Parasite (2019)',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Parasite2019_(cropped).jpg">Kinocine PARKJEAHWAN4wiki</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons'
      }
      */
    ]
  })
}
