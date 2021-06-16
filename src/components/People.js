const People = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>Speaker</strong>
        </v-col>
        <v-col sm="12" md="6" lg="3"
          v-for="speaker in speakers"
          :key="speaker.name"
        >
          <v-card class="fill-height d-flex flex-column" outlined>
            <v-card-title>
              <v-avatar color="primary" class="white--text mr-3">
                {{ speaker.name.charAt(0) }}
              </v-avatar>
              {{ speaker.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <template
            v-for="video in videos"
            :key="video"
          >
            <iframe
              width="560"
              height="315"
              :src="video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            &nbsp;
          </template>
          
        </v-col>
      </v-row>
      <v-row>
        <!--
        <v-col lg="4">
          <v-card outlined href="https://youtu.be/qOZqGUCrje8">
            <v-img src="https://i.ytimg.com/vi_webp/qOZqGUCrje8/sddefault.webp"></v-img>
            <v-card-title>
              What Happens When You Only Pursue Pleasure
            </v-card-title>
            <v-card-subtitle>
              Alan Watts
            </v-card-subtitle>
          </v-card
        </v-col>
        -->
        <v-col
          v-for="video in videos2"
          :key="video.id"
          cols="12" lg="4"
        >
          <v-card outlined :href="'https://youtu.be/' + video.id">
            <v-img :src="'https://i.ytimg.com/vi_webp/' + video.id + '/sddefault.webp'"></v-img>
            <v-card-title>
              {{ video.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ video.subtitle }}
            </v-card-subtitle>
          </v-card
        </v-col>
      </v-row>
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
                outlined
              >
                {{ category }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
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
    speakers: [
      { name: 'Alan Watts' },
      { name: 'Jordan Peterson' }
    ],
    videos: [
      'https://www.youtube.com/embed/wvdM_u4NZQw',
      'https://www.youtube.com/embed/b9GWqfNlWHI',
      'https://www.youtube.com/embed/wieRZoJSVtw',
      'https://www.youtube.com/embed/2O-iLk1G_ng',
      'https://www.youtube.com/embed/-KQGZa773sI',
      'https://www.youtube.com/embed/GO_rW0Bvy1I'
    ],
    videos2: [
      {
        "id": "qOZqGUCrje8",
        "title": "What Happens When You Only Pursue Pleasure",
        "subtitle": "Alan Watts"
      },
      {
        "id": "MzubNgsQsog",
        "title": "Why You Shouldn't Want To Live Forever",
        "subtitle": "Alan Watts"
      },
      {
        "id": "5G8Gwr5JJ6Y",
        "title": "It's NOT OK to be WEAK",
        "subtitle": "Jordan Peterson"
      }
    ]
  })
}