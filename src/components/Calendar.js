const Calendar = {
  template: `
    <v-container fluid>
      <v-sheet>
        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="700">
        <v-calendar
          ref="calendar"
          v-model="value"
          :events="events"
          @click:event="showEvent"
        ></v-calendar>

        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          max-width="350px"
          offset-x
        >
          <v-card flat>
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="selectedEvent.name"
                clearable
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-container>
  `,
  data: () => ({
    events: [
      {
        name: 'Weekly Meeting',
        start: '2020-09-14 9:00',
        end: '2020-09-17 10:00'
      },
      {
        name: 'Weekly Meeting 2',
        start: '2020-09-16 09:00',
        end: '2020-09-18 10:00'
      },
      {
        name: 'Weekly Meeting 3',
        start: '2020-09-17 09:00',
        end: '2020-09-19 10:00'
      },
      {
        name: 'Weekly Meeting 4',
        start: '2020-09-17 09:00',
        end: '2020-09-18 10:00'
      }
    ],
    value: '2020-09-01',
    selectedElement: null,
    selectedEvent: {},
    selectedOpen: false
  }),
  methods: {
    showEvent ({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      
      nativeEvent.stopPropagation()
    }
  }
}
