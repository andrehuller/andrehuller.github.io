Vue.component('date-picker', {
  props: ['label'],
  data: () => ({
    date: null,
    dateFmt: null,
    menu: false
  }),
  template: `
    <v-menu
      ref="menu"
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
          @blur="date = parseDate(dateFmt)"
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
  created: function () {
    this.date = new Date().toISOString().substr(0, 10)
    this.dateFmt = this.formatDate(this.date)
  },
  watch: {
    date: function (val) {
      this.dateFmt = this.formatDate(this.date)
    }
  },
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
      <v-col cols="12" lg="12">
      <v-card flat tile>
        <v-container fluid>
          <v-row>
            <v-col cols="12" lg="3">
              <date-picker
                label="Start Date"
              ></date-picker>
            </v-col>
            <v-col cols="12" lg="3">
              <date-picker
                label="End Date"
              ></date-picker>
            </v-col>
            <v-col cols="12" lg="3">
              <v-text-field
                v-mask="['(##) ####-####', '(##) #####-####']"
                label="Phone"
                prepend-inner-icon="mdi-phone"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3">
              <v-text-field
                v-mask="'###.###.###-##'"
                label="CPF"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3">
              <v-text-field
                v-mask="'##.###.###/####-##'"
                label="CNPJ"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="3">
              <v-text-field
                v-mask="'#####-###'"
                label="CEP"
                outlined clearable hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <!--
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn width="200">Pesquisar</v-btn>
          <v-btn width="200">Limpar</v-btn>
        </v-card-actions>
        -->
      </v-card>
      </v-col>
      </v-row>
    </v-container>
  `
}
