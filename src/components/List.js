const List = {
  data: () => ({
    sum: 0
  }),
  template: `
    <v-container fluid>
      <v-row no-gutters>
        <v-col lg="4">
          <v-list two-line>
            <v-list-item>
              <v-list-item-action class="mr-6">
                <v-checkbox></v-checkbox>
              </v-list-item-action>
              <v-list-item-avatar class="mr-6 ml-0">
                <v-img src="assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Christopher Campbell</v-list-item-title>
                <v-list-item-subtitle>A</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item @click="">
              <template v-slot:default="{ active }">
                <v-list-item-action class="mr-6">
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>
                <v-list-item-avatar class="mr-6 ml-0">
                  <v-img src="assets/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>Luis Villasmil</v-list-item-title>
              </template>
            </v-list-item>
            
            <v-list-item @click="">
              <v-list-item-avatar>
                <v-img src="assets/gian-cescon-00ByEXKcSkA-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>Gian Cescon</v-list-item-title>
            </v-list-item>
            
            <v-list-item @click="">
              <v-list-item-avatar>
                <v-img src="assets/brooke-cagle-Nm70URdtf3c-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>Brooke Cagle</v-list-item-title>
            </v-list-item>
            
            <v-list-item @click="">
              <v-list-item-avatar>
                <v-img src="assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>Ayo Ogunseinde</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list two-line>
            <v-list-item @click="">
              <v-list-item-avatar>
                <v-img src="assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>Christopher Campbell</v-list-item-title>
            </v-list-item>
            <v-list-item @click="">
              <v-list-item-avatar>
                <v-img src="assets/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>Luis Villasmil</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          {{ sum }}
        </v-col>
      </v-row>
    </v-container>
  `,
  created () {
    for (var i = 3; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        this.sum += i
      }
    }
  }
}