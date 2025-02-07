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
            <v-card-title align="center">
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
        href: './assets/posters/The 7th Voyage of Sinbad (1958).jpg',
        title: 'The 7th Voyage of Sinbad (1958)'
      },
      {
        href: './assets/posters/Flash Gordon (1980).jpg',
        title: 'Flash Gordon (1980)'
      },
      {
        href: './assets/posters/Clash of the Titans (1981).jpg',
        title: 'Clash of the Titans (1981)'
      },
      {
        href: './assets/posters/Excalibur (1981).jpg',
        title: 'Excalibur (1981)'
      },
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
