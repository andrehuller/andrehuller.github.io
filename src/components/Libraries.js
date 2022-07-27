const Libraries = {
  template: `
    <v-container fluid class="pa-0">
      <!--
      <v-toolbar color="grey lighten-4" class="mb-4" rounded>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" lg="3">
              <v-autocomplete
                label="Category"
                prepend-inner-icon="mdi-magnify"
                flat solo-inverted hide-details
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="6">
            </v-col>
            <v-col cols="12" lg="3">
              <v-text-field
                label="Search"
                prepend-inner-icon="mdi-magnify"
                flat solo-inverted hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container> 
      </v-toolbar>
      -->
      <v-tabs fixed-tabs>
        <v-tab
          v-for="category in categories"
          :key="category.name"
        >
          {{ category.name }}
        </v-tab>
        <v-tab-item
          v-for="category in categories"
          :key="category.name"
          style="background-color: #FAFAFA;"
        ><!-- overflow-y: auto; max-height: 856px; -->
          <v-container fluid>
            <v-row>
              <v-col sm="12" md="6" lg="3"
                v-for="library in category.items"
                :key="library.title"
              >
                <v-card class="fill-height d-flex flex-column">
                  <a :href="library.href" target="_blank">
                    <v-img
                      :src="library.src"
                      height="198px"
                      style="border-top-left-radius: 4px; border-top-right-radius: 4px;"
                    ></v-img>
                  </a>
                  <v-divider></v-divider>
                  <v-card-title>
                    {{ library.title }}
                    <v-spacer></v-spacer>
                    <v-icon v-if="library.highlight" color="indigo">mdi-alert-circle-outline</v-icon>
                  </v-card-title>
                  <v-card-text>
                    {{ library.subtitle }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    search: null,
    headers: [
      { text: 'Nome', value: 'title', width: '25%' },
      { text: 'Descrição', value: 'subtitle', width: '75%' }
    ],
    categories: null
  }),
  mounted () {
    this.categories = categories
  }
}
