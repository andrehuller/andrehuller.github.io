const YouTube = {
  template: `
    <v-data-iterator
      :items="filteredItems"
      :items-per-page="12"
      :search="search"
      :page="page"
    >
      <template v-slot:header>
        <v-container fluid pb-0>
          <v-row>
            <v-col cols="12" lg="4">
              <v-autocomplete
                v-model="guest"
                label="Guest"
                :items="guests"
                prepend-inner-icon="mdi-magnify"
                flat variant="outlined" density="comfortable"
                multiple chips deletable-chips
                clearable hide-details
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="4">
              <v-autocomplete
                v-model="channel"
                label="Channel"
                :items="channels"
                prepend-inner-icon="mdi-magnify"
                flat variant="outlined" density="comfortable"
                multiple chips deletable-chips
                clearable hide-details
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" lg="4">
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                flat variant="outlined" density="comfortable"
                clearable hide-details
              ></v-text-field>                  
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot:default="{ items }">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12" lg="3"
            >
              <v-card class="fill-height d-flex flex-column" color="grey-lighten-5" flat tile>
                <a :href="'https://youtu.be/' + item.raw.id" target="_blank">
                  <v-img
                    :src="item.raw.src"
                    style="background: black; border-radius: 8px;"
                    height="225px"
                    max-height="225px"
                    cover
                  ></v-img>
                  <!--
                  :src="'https://i.ytimg.com/vi_webp/' + item.raw.id + '/hqdefault.webp'"
                  -->
                </a>
                <v-card-title>{{ item.raw.subtitle }}</v-card-title>
                <v-card-subtitle>{{ item.raw.title }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  `,
  computed: {
    filteredItems () {
      if ((!this.guest || this.guest.length == 0)
        && (!this.channel || this.channel.length == 0)) {
        return this.videos
      }

      function matchAny (item, property, array) {
        if (!array || array.length == 0) {
          return true
        }
        for (var i = 0; i < array.length; i++) {
          if (item[property] && item[property].localeCompare(array[i]) == 0) {
            return true
          }
        }
        return false
      }      
      return this.videos.filter(item => {
        if (matchAny(item, 'subtitle', this.guest)
          && matchAny(item, 'channel', this.channel)) {
          return true
        }
        return false
      })
    }
  },
  data: () => ({
    channel: null,
    channels: ['After Skool', 'Joe Rogan Experience'],
    guest: null,
    guests: ['Alan Watts', 'Ben Shapiro', 'Bill Burr', 'Jordan Peterson'],
    search: null,
    page: 1,
    people: [
      { name: 'Aisling Bea', categories: ['Comedian'] },
      { name: 'Alfred Hitchcock', categories: ['Film Director'] },
      { name: 'Amira Willighagen', categories: ['Singer'] },
      { name: 'Bill Burr' },
      { name: 'Bill Maher' },
      { name: 'Bob Dylan' },
      { name: 'Christopher Hitchens' },
      { name: 'Françoise Hardy' },
      { name: 'Frankie Boyle' },
      { name: 'George Carlin' },
      { name: 'Joe Rogan' },
      { name: 'Marc Maron' },
      { name: 'Richard Dawkins' },
      { name: 'Ricky Gervais '},
      { name: 'Sam Harris' },
      { name: 'Tim Minchin' }
      // #1896 - Bjorn Lomborg
      // #1921 - Peter Zeihan
    ],
    videos: [
      {
        "id": "qOZqGUCrje8",
        "title": "What Happens When You Only Pursue Pleasure",
        "subtitle": "Alan Watts",
        "channel": "After Skool",
        "src": "assets/ytimg/qOZqGUCrje8.webp"
      },
      {
        "id": "MzubNgsQsog",
        "title": "Why You Shouldn't Want To Live Forever",
        "subtitle": "Alan Watts",
        "channel": "After Skool",
        "src": "assets/ytimg/MzubNgsQsog.webp"
      },
      {
        "id": "dx4yW0mjezw",
        "title": "The Benefit of Living With No Purpose",
        "subtitle": "Alan Watts",
        "channel": "After Skool",
        "src": "assets/ytimg/dx4yW0mjezw.webp"
      },
      {
        "id": "5G8Gwr5JJ6Y",
        "title": "It's NOT OK to be WEAK",
        "subtitle": "Jordan Peterson",
        "channel": "After Skool",
        "src": "assets/ytimg/5G8Gwr5JJ6Y.webp"
      },
      {
        "id": "wvdM_u4NZQw",
        "title": "Joe Rogan Experience #692",
        "subtitle": "Jay Leno",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/wvdM_u4NZQw.webp"
      },
      {
        "id": "b9GWqfNlWHI",
        "title": "Joe Rogan Experience #909",
        "subtitle": "Bill Burr",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/b9GWqfNlWHI.webp"
      },
      {
        "id": "UQTfyjhvfH8",
        "title": "Joe Rogan Experience #993",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/UQTfyjhvfH8.webp"
      },
      {
        "id": "wieRZoJSVtw",
        "title": "Joe Rogan Experience #1233",
        "subtitle": "Brian Cox",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/wieRZoJSVtw.webp"
      },
      {
        "id": "sCD9zjf_YRU",
        "title": "Joe Rogan Experience #1276",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/sCD9zjf_YRU.webp"
      },
      {
        "id": "2O-iLk1G_ng",
        "title": "Joe Rogan Experience #1330",
        "subtitle": "Bernie Sanders",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/2O-iLk1G_ng.webp"
      },
      {
        "id": "-KQGZa773sI",
        "title": "Joe Rogan Experience #1413",
        "subtitle": "Bill Maher",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/-KQGZa773sI.webp"
      },
      {
        "id": "GO_rW0Bvy1I",
        "title": "Joe Rogan Experience #1491",
        "subtitle": "Bill Burr",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/GO_rW0Bvy1I.webp"
      },
      {
        "id": "hl0iNRXcUbE",
        "title": "Joe Rogan Experience #1512",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience",
        "src": "assets/ytimg/hl0iNRXcUbE.webp"
      },
      {
        "id": "6SfPf-_OavY",
        "title": "IF",
        "subtitle": "Rudyard Kipling",
        "channel": null,
        "src": "assets/ytimg/6SfPf-_OavY.webp"
      },
      {
      	// https://sp.rmbl.ws/s8/1/K/o/S/t/KoSth.OvCc.2-small-Elons-Banning-Spree-and-The.jpg
      	"title": "Elon’s Banning Spree & The Media’s Sudden Conversion to Free Speech Absolutists",
      	"subtitle": "SYSTEM UPDATE #5",
      	"src": "assets/rumble/KoSth.OvCc.2-small-Elons-Banning-Spree-and-The.jpg"
      }
    ]
  })
}

