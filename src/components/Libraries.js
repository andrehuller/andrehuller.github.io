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
          style="background-color: #FAFAFA"
        >
          {{ category.name }}
        </v-tab>
        <v-tab-item
          v-for="category in categories"
          :key="category.name"
        ><!-- overflow-y: auto; max-height: 856px; -->
          <v-data-iterator
            :items="category.items"
            :items-per-page="40"
            :search="search"
            :footer-props="{'items-per-page-options':[20, 40, 80, -1]}"
            @update:page="$vuetify.goTo(0)"
            class="grey lighten-5"
          >
            <template v-slot:default="props">
              <v-container fluid class="grey lighten-5">
                <v-row>
                  <v-col sm="12" md="6" lg="3"
                    v-for="library in props.items"
                    :key="library.title"
                  >
                    <v-card class="fill-height d-flex flex-column" flat tile class="grey lighten-5">
                      <a :href="library.href" target="_blank">
                        <v-img
                          :src="library.src"
                          height="198px"
                          style="border-radius: 8px"
                        ></v-img>
                        <!-- style="border-top-left-radius: 4px; border-top-right-radius: 4px;" -->
                      </a>
                      <v-card-title>
                        {{ library.title }}
                        <v-spacer></v-spacer>
                        <v-icon v-if="library.highlight" color="indigo">
                          mdi-alert-circle-outline
                        </v-icon>
                      </v-card-title>
                      <v-card-text>
                        {{ library.subtitle }}
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </v-data-iterator>
        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    headers: [
      { text: 'Nome', value: 'title', width: '25%' },
      { text: 'Descrição', value: 'subtitle', width: '75%' }
    ],
    categories: null
  }),
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  mounted () {
    this.categories = categories
  }
}
