const WikimediaCommons = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column" flat tile>
            <v-card-img>
              <v-img height="500" src="assets/wikimedia/Brian de Palma.jpg"></v-img>
            </v-card-img>
            <v-card-title>
              Brian de Palma
              <v-spacer></v-spacer>
              <v-btn icon flat>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>                
            </v-card-title>
            <v-card-text>
              <a href="https://commons.wikimedia.org/wiki/File:Brian_De_Palma_Deauville_2011.jpg">Georges Biard</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column" flat tile>
            <v-card-img>
              <v-img height="500" src="assets/wikimedia/John Carpenter.jpg"></v-img>
            </v-card-img>
            <v-card-title>
              John Carpenter
              <v-spacer></v-spacer>
              <v-btn icon flat>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>                
            </v-card-title>
            <v-card-text>
              <a href="https://commons.wikimedia.org/wiki/File:John_Carpenter.JPG">Nathan Hartley Maas</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
            </v-card-text>
          </v-card>
        </v-col>
<!--
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column" flat tile>
            <v-card-img>
              <v-img height="500" src="assets/wikimedia/Kurt Russell.jpg"></v-img>
            </v-card-img>
            <v-card-title>
              Kurt Russell
              <v-spacer></v-spacer>
              <v-btn icon flat>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>                
            </v-card-title>
            <v-card-text>
              <a href="https://commons.wikimedia.org/wiki/File:Kurt_Russell_1974.JPG">ABC Television</a>, Public domain, via Wikimedia Commons
            </v-card-text>
          </v-card>
        </v-col>
-->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column" flat tile>
            <v-card-img>
              <v-img height="500" src="assets/wikimedia/Sidney Poitier.jpg"></v-img>
            </v-card-img>
            <v-card-title>
              Sidney Poitier
              <v-spacer></v-spacer>
              <v-dialog width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon flat v-bind="attrs" v-on="on">
                    <v-icon>mdi-information-outline</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    Sidney Poitier
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item>
                      No Way Out (1950)
                    </v-list-item>
                    <v-list-item>
                      Blackboard Jungle (1955)
                    </v-list-item>
                    <v-list-item>
                      Guess Who's Coming to Dinner (1967)
                    </v-list-item>
                    <v-list-item>
                      In the Heat of the Night (1967)
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-dialog>

            </v-card-title>
            <v-card-text>
              <a href="https://commons.wikimedia.org/wiki/File:Poitier_cropped.jpg">U.S. Information Agency. Press and Publications Service.  (ca. 1953 - ca. 1978)</a>, Public domain, via Wikimedia Commons
            </v-card-text>
          </v-card>
        </v-col>
<!--
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column" flat tile>
            <v-card-img>
              <v-img height="500" src="assets/wikimedia/Woody Allen.jpg"></v-img>
            </v-card-img>
            <v-card-title>
              Woody Allen
              <v-spacer></v-spacer>
              <v-btn icon flat>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <a href="https://commons.wikimedia.org/wiki/File:Woody_Allen_-_Kup.JPG">Jerry Kupcinet - photographer</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons
            </v-card-text>
          </v-card>
        </v-col>
-->
      </v-row>
    </v-container>
  `,
  data: () => ({
  })
}
