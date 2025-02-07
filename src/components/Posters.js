const Posters = {
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
              <v-img v-if="item.href" height="495" :src="item.href"></v-img>
            </div>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  `,
  data: () => ({
    items: [
      {
        href: './assets/posters/Conan the Barbarian (1982).jpg',
        title: 'Conan the Barbarian (1982)'
      },
      {
        href: './assets/posters/Predator (1987).jpg',
        title: 'Predator (1987)'
      }

    ]
  })
}
