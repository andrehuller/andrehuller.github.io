const YouTube = {
  template: `
    <v-container fluid>
      <v-data-iterator
        :items="filteredItems"
        :items-per-page="12"
        :search="search"
      >
        <template v-slot:header>
            <v-container fluid py-0>
              <v-row>
                <v-col cols="12" lg="4">
                  <v-autocomplete
                    v-model="guest"
                    label="Guest"
                    :items="guests"
                    prepend-inner-icon="mdi-magnify"
                    flat solo-inverted
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
                    flat solo-inverted
                    multiple chips deletable-chips
                    clearable hide-details
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-text-field
                    v-model="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    flat solo-inverted clearable hide-details
                  ></v-text-field>                  
                </v-col>
              </v-row>
            </v-container>
        </template>
        <template v-slot:default="props">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.id"
                cols="12" lg="3"
              >
                <v-card class="fill-height d-flex flex-column" flat tile>
                  <a :href="'https://youtu.be/' + item.id" target="_blank">
                    <v-img
                      :src="'https://i.ytimg.com/vi_webp/' + item.id + '/hqdefault.webp'"
                      style="background: black;"
                      height="225px"
                      max-height="225px"
                    ></v-img>
                  </a>
                  <v-card-title>{{ item.subtitle }}</v-card-title>
                  <v-card-subtitle>{{ item.title }}</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-iterator>

      <!--
      <v-row>
        <v-col sm="12" md="6" lg="3"
          v-for="person in people"
          :key="person.name"
        >
          <v-card class="fill-height d-flex flex-column" outlined>
            <v-card-title>
              <v-avatar color="primary" class="white--text mr-3">
                {{ person.name.charAt(0) }}
              </v-avatar>
              {{ person.name }}
            </v-card-title>
            <v-card-text>
              <v-chip
                v-for="category in person.categories"
                :key="category"
                outlined
              >
                {{ category }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      -->
    </v-container>
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
          if (item[property].localeCompare(array[i]) == 0) {
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
    ],
    videos: [
      {
        "id": "qOZqGUCrje8",
        "title": "What Happens When You Only Pursue Pleasure",
        "subtitle": "Alan Watts",
        "channel": "After Skool"
      },
      {
        "id": "MzubNgsQsog",
        "title": "Why You Shouldn't Want To Live Forever",
        "subtitle": "Alan Watts",
        "channel": "After Skool"
      },
      {
        "id": "dx4yW0mjezw",
        "title": "The Benefit of Living With No Purpose",
        "subtitle": "Alan Watts",
        "channel": "After Skool"
      },
      {
        "id": "5G8Gwr5JJ6Y",
        "title": "It's NOT OK to be WEAK",
        "subtitle": "Jordan Peterson",
        "channel": "After Skool"
      },
      {
        "id": "wvdM_u4NZQw",
        "title": "Joe Rogan Experience #692",
        "subtitle": "Jay Leno",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "b9GWqfNlWHI",
        "title": "Joe Rogan Experience #909",
        "subtitle": "Bill Burr",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "UQTfyjhvfH8",
        "title": "Joe Rogan Experience #993",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "wieRZoJSVtw",
        "title": "Joe Rogan Experience #1233",
        "subtitle": "Brian Cox",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "sCD9zjf_YRU",
        "title": "Joe Rogan Experience #1276",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "2O-iLk1G_ng",
        "title": "Joe Rogan Experience #1330",
        "subtitle": "Bernie Sanders",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "-KQGZa773sI",
        "title": "Joe Rogan Experience #1413",
        "subtitle": "Bill Maher",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "GO_rW0Bvy1I",
        "title": "Joe Rogan Experience #1491",
        "subtitle": "Bill Burr",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "hl0iNRXcUbE",
        "title": "Joe Rogan Experience #1512",
        "subtitle": "Ben Shapiro",
        "channel": "Joe Rogan Experience"
      },
      {
        "id": "6SfPf-_OavY",
        "title": "IF",
        "subtitle": "Rudyard Kipling",
        "channel": "Joe Rogan Experience"
      }
    ]
  })
}
