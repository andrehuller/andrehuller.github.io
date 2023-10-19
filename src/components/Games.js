const Games = {
  template: `
    <v-container fluid>
      <v-container fluid>
      <v-row>
      <v-col>
      <v-img
        src="assets/ps4/Mass Effect.jpg"
        width="281.5"
        height="400"
      ></v-img>
      </v-col>
      <v-col>
      <v-img
        src="assets/ps4/Mass Effect 2.jpg"
        width="281.5"
        height="400"
      ></v-img>
      </v-col>
      <v-col>
      <v-img
        src="assets/ps4/Mass Effect 3.jpg"
        width="281.5"
        height="400"
      ></v-img>
      </v-col>
      <v-col>
      <v-img
        src="assets/ps4/Mass Effect Andromeda.jpg"
        width="281.5"
        height="400"
      ></v-img>
      </v-col>
      </v-row>
        <v-row>
          <v-col>
            <v-img
              src="assets/ps4/Ion Fury.png"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Horizon Zero Dawn.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Sonic Mania.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Doom.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Resident Evil.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Claire Redfield.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Jill Valentine.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Resident Evil 3.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Titanfall 2.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Injustice Gods Among Us.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Rise of the Tomb Raider.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/God of War III.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Uncharted Drake's Fortune.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Uncharted 2.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="assets/ps4/Shadow of the Colossus.jpg"
              width="480"
              height="270"
            ></v-img>
          </v-col>
        </v-row>
        <!--
              width="640"
              height="360"
        -->

      </v-container>
      <v-data-iterator
        :items="games"
        :items-per-page="20"
        :search="search"
        :footer-props="{'items-per-page-options':[20, 40, 80, -1]}"
        @update:page="$vuetify.goTo(0)"
      >
        <template v-slot:header>
          <v-container fluid px-0 pt-0>
            <v-row>
              <v-col cols="12" lg="9">
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="search"
                  label="Search..." prepend-inner-icon="mdi-magnify"
                  flat solo-inverted clearable hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template v-slot:default="props">
          <v-row>
            <v-col sm="12" md="6" :lg="item.ps4 ? 2 : 3"
              v-for="item in props.items"
              :key="item.title"
            >
              <v-card class="fill-height d-flex flex-column grey lighten-5" flat tile>
                <v-img
                  :src="'assets/games/' + item.src"
                  :height="item.ps4 ? '300px' : '275px'"
                  :max-height="item.ps4 ? '300px' : '275px'"
                  style="border-radius: 8px"
                ></v-img><!-- max-height: 275 -->

                <v-card-title style="overflow-wrap: anywhere; word-wrap: break-word; word-break: normal; hyphens: auto;">
                  {{ item.name }}
                  <!--
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
                  -->
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
  `,
  data: () => ({
    games: [],
    search: null
  }),
  mounted () {
    this.games = listGames
  }
}
