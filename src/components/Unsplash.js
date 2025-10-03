const Unsplash = {
  template: `
    <v-container fluid>
     <v-row>
        <v-col
          v-for="image in images"
          :key="image.title"
          cols="12" sm="12" md="6" lg="4"
        >
          <v-card
            class="fill-height d-flex flex-column grey lighten-5"
            color="grey-lighten-5"
            flat tile
          >
            <v-img
              :src="image.src"
              height="335"
              style="border-radius: 8px"
              cover
            ></v-img>
            <!--
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ image.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            -->
            <v-card-title>
              {{ image.title }}
            </v-card-title>
            <v-card-text>
              <a :href="image.href">
                {{ image.href }}
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    images: locations
  })
}

