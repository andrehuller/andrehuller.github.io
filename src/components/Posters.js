const Posters = {
  template: `
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab value="1930">1930</v-tab>
      <v-tab value="1950">1950</v-tab>
      <v-tab value="1960">1960</v-tab>
      <v-tab value="1970">1970</v-tab>
      <v-tab value="1980">1980</v-tab>
      <v-tab value="1990">1990</v-tab>
      <v-tab value="2000">2000</v-tab>
      <v-tab value="2010">2010</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
    <v-tabs-window-item value="1930">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              Michael Curtiz
            </v-card-title>
              <v-container fluid class="pt-0">
                <v-row>
        <v-col
          v-for="item in items0"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="1950">
    <v-container fluid>
      <v-row>

        <v-col cols="4">
          <v-card variant="outlined">
            <v-card-title>
              Cecil B. DeMille
            </v-card-title>
    <v-container fluid class="pt-0">
      <v-row>
        <v-col
          v-for="item in items6"
          :key="item.name"
          lg="6"
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
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-card variant="outlined">
            <v-card-title>
              Charles H. Schneer & Ray Harryhausen
            </v-card-title>
    <v-container fluid class="pt-0">
      <v-row>
        <v-col
          v-for="item in items1"
          :key="item.name"
          lg="3"
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
          </v-card>
        </v-col>

      </v-row>
    </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="1960">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              George A. Romero
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items2"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="1970">

    <v-container fluid>
      <v-row>

        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              Clint Eastwood
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items70_1"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              Guy Hamilton
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items5"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>


      </v-row>
    </v-container>
    </v-tabs-window-item>


    <v-tabs-window-item value="1980">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              James Cameron
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items7"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              John McTiernan
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items8"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              John Badham
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items11"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              John Carpenter
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_5"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              Mike Hodges
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_2"
          :key="item.name"
          lg="12"
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
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              John Boorman
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_1"
          :key="item.name"
          lg="12"
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
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              John Milius
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_3"
          :key="item.name"
          lg="12"
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
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              Steven Lisberger
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_4"
          :key="item.name"
          lg="12"
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
          </v-card>
        </v-col>

        <v-col cols="2">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              Russell Mulcahy
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items80_6"
          :key="item.name"
          lg="12"
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
          </v-card>
        </v-col>



      </v-row>
    </v-container>
    </v-tabs-window-item>


    <v-tabs-window-item value="1990">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined" class="fill-height d-flex flex-column">
            <v-card-title>
              Paul Verhoeven
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items3"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card variant="outlined">
            <v-card-title>
              Sam Raimi
            </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items4"
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
          </v-card>
        </v-col>

      </v-row>
    </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="2000">
    <v-container fluid>
      <v-row>

        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              Edgar Wright
            </v-card-title>
            <v-container fluid>
              <v-row>
        <v-col
          v-for="item in items12"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              John Woo
            </v-card-title>
              <v-container fluid>
                <v-row>
        <v-col
          v-for="item in items9"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="2010">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card variant="outlined">
            <v-card-title>
              S.S. Rajamouli
            </v-card-title>
              <v-container fluid>
                <v-row>
        <v-col
          v-for="item in items10"
          :key="item.name"
          lg="4"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-tabs-window-item>

    </v-tabs-window>
  `,
  data: () => ({
    tab: null,
    items0: [
      {
        href: './assets/posters/Captain Blood (1935).jpg',
        title: 'Captain Blood (1935)'
      },
      {
        href: './assets/posters/The Adventures of Robin Hood (1938).jpg',
        title: 'The Adventures of Robin Hood (1938)'
      },
      {
        href: './assets/posters/The Sea Hawk (1940).jpg',
        title: 'The Sea Hawk (1940)'
      }
    ],
    items1: [
      {
        href: './assets/posters/The 7th Voyage of Sinbad (1958).jpg',
        title: 'The 7th Voyage of Sinbad (1958)'
      },
      {
        href: './assets/posters/Sinbad and the Eye of the Tiger (1977).jpg',
        title: 'Sinbad and the Eye of the Tiger (1977)'
      },
      {
        href: './assets/posters/Clash of the Titans (1981).jpg',
        title: 'Clash of the Titans (1981)'
      },
      {
        href: './assets/posters/Jason and the Argonauts (1963).jpg',
        title: 'Jason and the Argonauts (1963)'
      }
    ],
    items2: [
      {
        href: './assets/posters/Night of the Living Dead (1968).jpg',
        title: 'Night of the Living Dead (1968)'
      },
      {
        href: './assets/posters/Dawn of the Dead (1978).jpg',
        title: 'Dawn of the Dead (1978)'
      },
      {
        href: './assets/posters/Day of the Dead (1985).jpg',
        title: 'Day of the Dead (1985)'
      }
    ],
    items3: [
      {
        href: './assets/posters/RoboCop (1987).jpg',
        title: 'RoboCop (1987)'
      },
      {
        href: './assets/posters/Total Recall (1990).jpg',
        title: 'Total Recall (1990)'
      },
      {
        href: './assets/posters/Starship Troopers (1997).jpg',
        title: 'Starship Troopers (1997)'
      }
    ],
    items4: [
      {
        href: './assets/posters/The Evil Dead (1981).jpg',
        title: 'The Evil Dead (1981)'
      },
      {
        href: './assets/posters/Evil Dead II (1987).jpg',
        title: 'Evil Dead II (1987)'
      },
      {
        href: './assets/posters/Darkman (1990).jpg',
        title: 'Darkman (1990)'
      },
      {
        href: './assets/posters/Army of Darkness (1992).jpg',
        title: 'Army of Darkness (1992)'
      },
      {
        href: './assets/posters/Spider-Man (2002).jpg',
        title: 'Spider-Man (2002)'
      },
      {
        href: './assets/posters/Drag Me to Hell (2009).jpg',
        title: 'Drag Me to Hell (2009)'
      }
    ],
    items5: [
      {
        href: './assets/posters/Diamonds Are Forever (1971).jpg',
        title: 'Diamonds Are Forever (1971)'
      },
      {
        href: './assets/posters/Live and Let Die (1973).jpg',
        title: 'Live and Let Die (1973)'
      },
      {
        href: './assets/posters/The Man with the Golden Gun (1974).jpg',
        title: 'The Man with the Golden Gun (1974)'
      }
    ],
    items6: [
      {
        href: './assets/posters/Samson and Delilah (1949).jpg',
        title: 'Samson and Delilah (1949)'
      },
      {
        href: './assets/posters/The Ten Commandments (1956).jpg',
        title: 'The Ten Commandments (1956)'
      }
    ],
    items7: [
      {
        href: './assets/posters/The Terminator (1984).jpg',
        title: 'The Terminator (1984)'
      },
      {
        href: './assets/posters/Aliens (1986).jpg',
        title: 'Aliens (1986)'
      }
    ],
    items8: [
      {
        href: './assets/posters/Predator (1987).jpg',
        title: 'Predator (1987)'
      },
      {
        href: './assets/posters/Die Hard (1988).jpg',
        title: 'Die Hard (1988)'
      },
    ],
    items9: [
      {
        href: './assets/posters/Red Cliff (2008).jpg',
        title: 'Red Cliff (2008)'
      },
      {
        href: './assets/posters/Red Cliff II (2009).jpg',
        title: 'Red Cliff II (2009)'
      }
    ],
    items10: [
      {
        href: './assets/posters/Bãhubali The Beginning (2015).jpg',
        title: 'Bãhubali: The Beginning (2015)'
      },
      {
        href: './assets/posters/Bãhubali 2 The Conclusion (2017).jpg',
        title: 'Bãhubali 2: The Conclusion (2017)'
      }
    ],
    items11: [
      {
        href: './assets/posters/Dracula (1979).jpg',
        title: 'Dracula (1979)'
      },
      {
        href: './assets/posters/WarGames (1983).jpg',
        title: 'WarGames (1983)'
      },
    ],
    items12: [
      {
        href: './assets/posters/Shaun of the Dead (2004).jpg',
        title: 'Shaun of the Dead (2004)'
      }
    ],
    items70_1: [
      {
        href: './assets/posters/The Gauntlet (1977).jpg',
        title: 'The Gauntlet (1977)'
      }
    ],
    items80_1: [
      {
        href: './assets/posters/Excalibur (1981).jpg',
        title: 'Excalibur (1981)'
      }
    ],
    items80_2: [
      {
        href: './assets/posters/Flash Gordon (1980).jpg',
        title: 'Flash Gordon (1980)'
      }
    ],
    items80_3: [
      {
        href: './assets/posters/Conan the Barbarian (1982).jpg',
        title: 'Conan the Barbarian (1982)'
      }
    ],
    items80_4: [
      {
        href: './assets/posters/Tron (1982).jpg',
        title: 'Tron (1982)'
      }
    ],
    items80_5: [
      {
        href: './assets/posters/The Thing (1982).jpg',
        title: 'The Thing (1982)'
      }
    ],
    items80_6: [
      {
        href: './assets/posters/Highlander (1986).jpg',
        title: 'Highlander (1986)'
      }
    ]
  })
}
