const WikimediaCommons = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.name"
          :lg="item.size ? 6 : 3"
        >
          <v-card class="fill-height d-flex flex-column" flat tile>
            <div>
              <v-img height="475" :src="'assets/wikimedia/' + item.name + '.jpg'"
              	style="border-radius: 8px"
              ></v-img>
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
        name: 'Angie Dickinson',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Stump_the_Stars_1963.jpg">CBS Television</a>, Public domain, via Wikimedia Commons',
        movies: [
          'Rio Bravo (1959)'
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
      {
        name: 'Joss Whedon',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Joss_Whedon_by_Gage_Skidmore_4.jpg">Gage Skidmore</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
        movies: [
          'Firefly (2002)',
          'The Cabin in the Woods (2011)',
          "Dr. Horrible's Sing-Along Blog (2008)"
        ]
      },
      {
      	name: 'Sam Raimi',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Sam_Raimi_by_Gage_Skidmore_2.jpg">Gage Skidmore</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
      	movies: [
      	  'Army of Darkness (1992)',
      	  'Darkman (1990)',
      	  'Evil Dead II (1987)'
      	]
      },
      {
      	name: 'Alan Tudyk',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Alan_Tudyk_by_Gage_Skidmore.jpg">Gage Skidmore</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons'
      },
      {
      	name: 'Nathan Fillion',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Nathan_Fillion_by_Gage_Skidmore.jpg">Gage Skidmore</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons'
      },
      {
      	name: 'Amy Acker',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Person_Of_Interest_-_Panel_(9353660946).jpg">Thibault from Paris, France</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>, via Wikimedia Commons',
      	size: 'large'
      },
      {
        name: 'Fran Kranz',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Fran_Kranz_by_Gage_Skidmore.jpg">Gage Skidmore</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons'
      },
      {
        name: 'Tomm Moore',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Tomm_moore_headshot.jpg">Dylan Vaughan</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
        size: 'large'
      },
      {
      	name: 'Parasite (2019)',
      	attribution: '<a href="https://commons.wikimedia.org/wiki/File:Parasite2019_(cropped).jpg">Kinocine PARKJEAHWAN4wiki</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons',
      	size: 'large'
      }
    ]
  })
}
