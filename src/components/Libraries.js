const Libraries = {
  template: `
    <v-container class="pa-0" fluid>
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab
          v-for="category in categories"
          :value="category.name"
        >{{ category.name }}</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item
          v-for="category in categories"
          :value="category.name"
        >
          <v-data-iterator
            :items="category.items"
          >
            <template v-slot:default="{ items }">
              <v-container class="pa-2" fluid>
                <v-row dense>
                  <v-col
                    v-for="item in category.items"
                    :key="item.title"
                    cols="auto"
                    md="3"
                    class="pa-3 d-flex flex-column"
                  >
                    <v-card :href="item.href" class="elevation-5 fill-height">
                      <!-- <a :href="item.href" target="_blank"></a> -->
                      <v-img
                        :src="item.src"
                        height="198px"
                        cover
                      ></v-img>
                      <v-divider></v-divider>
                      <!-- style="border-radius: 8px" -->
                      <v-card-title>
                        {{ item.title }}
                      </v-card-title>
                      <v-card-text>
                        {{ item.subtitle }}
                      </v-card-text>
                    </v-card>

                  </v-col>
                </v-row>
              </v-container>
            </template>
          </v-data-iterator>
        </v-window-item>
      </v-window>

    </v-container>
  `,
  data: () => ({
    categories: categories,
    tab: null
  })
}
