Vue.component('date-picker', {
  props: ['label'],
  data: () => ({
    date: null,
    dateFmt: null,
    menu: false
  }),
  template: `
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      max-width="290px"
      min-width="290px"
      offset-y
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="dateFmt"
          v-mask="'##/##/####'"
          v-on="on"
          :label="label"
          prepend-inner-icon="mdi-calendar"
          clearable hide-details outlined
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        @input="menu = false"
        no-title
      ></v-date-picker>
    </v-menu>
  `,
  methods: {
    formatDate: function (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate: function (date) {
      if (!date) return null
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
})

const DatePicker = {
  template: `
    <v-container fluid>
      <v-row>
      <v-col>
      <v-card>
        <v-container fluid>
<!--
          <v-row>
            <v-col cols="12" lg="2">
              <date-picker
                label="Start Date"
              ></date-picker>
            </v-col>
            <v-col cols="12" lg="2">
              <date-picker
                label="End Date"
              ></date-picker>
            </v-col>
          </v-row>
-->
          <v-row>
            <v-col cols="12" lg="2">
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
                    label="Start Date"
                    prepend-inner-icon="mdi-calendar"
                    @blur="startDate = parseDate(startDateFmt)"
                    v-on="on"
                    clearable hide-details outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="startDate" no-title
                  @input="startMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" lg="2">
              <v-menu
                v-model="endMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="endDateFmt"
                    v-mask="'##/##/####'"
                    label="End Date"
                    prepend-inner-icon="mdi-calendar"
                    @blur="endDate = parseDate(endDateFmt)" v-on="on"
                    clearable hide-details outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="endDate" no-title
                  @input="endMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" lg="2">
              <v-text-field
                v-mask="['(##) ####-####', '(##) #####-####']"
                label="Phone"
                prepend-inner-icon="mdi-phone"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="2">
              <v-text-field
                v-mask="'###.###.###-##'"
                label="CPF"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="2">
              <v-text-field
                v-mask="'##.###.###/####-##'"
                label="CNPJ"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="2">
              <v-text-field
                v-mask="'#####-###'"
                label="CEP"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn width="200">Pesquisar</v-btn>
          <v-btn width="200">Limpar</v-btn>
        </v-card-actions>
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
