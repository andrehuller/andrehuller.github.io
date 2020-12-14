const DatePicker = {
  template: `
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="8">
          <v-card>
            <v-card-text>
              <v-menu
                ref="startMenu"
                v-model="startMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y max-width="290px" min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="startDateFmt"
                    v-mask="'##/##/####'"
                    label="Start date"
                    prepend-icon="mdi-calendar"
                    @blur="startDate = parseDate(startDateFmt)"
                    v-on="on" clearable
                  ></v-text-field>
                </template>
                <v-date-picker v-model="startDate" no-title
                  @input="startMenu = false"
                ></v-date-picker>
              </v-menu>

              <v-menu
                v-model="endMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="endDateFmt"
                    v-mask="'##/##/####'"
                    label="End date"
                    prepend-icon="mdi-calendar"
                    @blur="endDate = parseDate(endDateFmt)" v-on="on"
                    clearable
                  ></v-text-field>
                </template>
                <v-date-picker v-model="endDate" no-title
                  @input="endMenu = false"
                ></v-date-picker>
              </v-menu>
              
              <v-text-field
                v-mask="['(##) ####-####', '(##) #####-####']"
                prepend-icon="mdi-phone"
                clearable
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    `,
  data: () => ({
    startMenu: false,
    startDate: null,
    startDateFmt: null,

    endMenu: false,
    endDate: null,
    endDateFmt: null
  }),
  created: function() {
    this.startDate = new Date().toISOString().substr(0, 10);
    this.startDateFmt = this.formatDate(this.startDate);

    this.endDate = new Date().toISOString().substr(0, 10);
    this.endDateFmt = this.formatDate(this.endDate);
  },
  watch: {
    startDate: function(val) {
      this.startDateFmt = this.formatDate(this.startDate);
    },
    endDate: function(val) {
      this.endDateFmt = this.formatDate(this.endDate);
    }
  },
  methods: {
    formatDate: function(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate: function(date) {
      if (!date) return null
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}