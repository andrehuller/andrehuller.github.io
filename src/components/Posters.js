const Posters = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.name"
          lg="2"
        >
          <v-card class="fill-height d-flex flex-column" flat tile>
            <div>
              <v-img v-if="item.href" height="325" :src="item.href"></v-img><!-- height="495" -->
            </div>
            <v-card-text align="center">
              {{ item.title }}
            </v-card-text>
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
        href: './assets/posters/Night of the Living Dead (1968).jpg',
        title: 'Night of the Living Dead (1968)'
      },
      {
        href: './assets/posters/Live and Let Die (1973).jpg',
        title: 'Live and Let Die (1973)'
      },
      {
        href: './assets/posters/The Gauntlet (1977).jpg',
        title: 'The Gauntlet (1977)'
      },
      {
        href: './assets/posters/Dawn of the Dead (1978).jpg',
        title: 'Dawn of the Dead (1978)'
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
        href: './assets/posters/Tron (1982).jpg',
        title: 'Tron (1982)'
      },
      {
        href: './assets/posters/WarGames (1983).jpg',
        title: 'WarGames (1983)'
      },
      {
        href: './assets/posters/The Terminator (1984).jpg',
        title: 'The Terminator (1984)'
      },
      {
        href: './assets/posters/Predator (1987).jpg',
        title: 'Predator (1987)'
      },
      {
        href: './assets/posters/RoboCop (1987).jpg',
        title: 'RoboCop (1987)'
      },
      {
        href: './assets/posters/Total Recall (1990).jpg',
        title: 'Total Recall (1990)'
      },
      {
        href: './assets/posters/Army of Darkness (1992).jpg',
        title: 'Army of Darkness (1992)'
      },
      {
        href: './assets/posters/Starship Troopers (1997).jpg',
        title: 'Starship Troopers (1997)'
      },
      {
        href: './assets/posters/Shaun of the Dead (2004).jpg',
        title: 'Shaun of the Dead (2004)'
      },
      {
        href: './assets/posters/Red Cliff (2008).jpg',
        title: 'Red Cliff (2008)'
      },
      {
        href: './assets/posters/Bãhubali The Beginning (2015).jpg',
        title: 'Bãhubali: The Beginning (2015)'
      }
    ]
  })
}
