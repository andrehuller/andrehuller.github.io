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
          
          prepend-icon="mdi-calendar"
          clearable
          
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
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="4">
          <v-card>
            <v-card-text>
              <date-picker
                label="Start Date"
              ></date-picker>
              <date-picker
                label="End Date"
              ></date-picker>

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
                label="Phone"
                prepend-icon="mdi-phone"
                clearable
              ></v-text-field>

              <!--
              <v-text-field
                v-mask="'###.###.###-##'"
                label="CPF"
                clearable
              ></v-text-field>

              <v-text-field
                v-mask="'##.###.###/####-##'"
                label="CNPJ"
                clearable
              ></v-text-field>

              <v-text-field
                v-mask="'#####-###'"
                label="CEP"
                clearable
              ></v-text-field>
              -->
            </v-card-text>
          </v-card>
        </v-col>

        <!--
        <v-col lg="4">
          <v-card>
            <v-card-text>
              <v-select
                label="Chamada Pública"
                :items="chamadas"
                clearable
              ></v-select>

              <v-autocomplete
                label="Núcleo"
                :items="nucleos"
                clearable
              ></v-autocomplete>

              <v-autocomplete
                label="Município"
                :items="municipios"
                clearable
              ></v-autocomplete>

              <v-select
                label="Lista"
                :items="listas"
                clearable
              ></v-select>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>Pesquisar</v-btn>
              <v-btn>Limpar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        -->
        <!--
      <v-col cols="12" sm="12" md="12" lg="8">
        <v-card>
          <v-card-title class="teal white--text">
            Grupos
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              label="Pesquisar"
              hide-details
              prepend-inner-icon="mdi-magnify"
              solo small clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="gruposHeaders"
            :items="grupos"
            :search="search"
          >
            <template v-slot:item.exibir="{ item }">
              <v-btn fab small>
                <v-icon>mdi-information-variant</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.editar="{ item }">
              <v-btn fab small>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.excluir="{ item }">
              <v-btn fab small>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark elevation="2">Incluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      -->
      </v-row>
    </v-container>
    `,
  data: () => ({
    startMenu: false,
    startDate: null,
    startDateFmt: null,

    endMenu: false,
    endDate: null,
    endDateFmt: null,

    chamadas: ['001/2022', '001/2021', '001/2020'],
    nucleos: ['APUCARANA', 'CAMPO MOURÃO', 'CASCAVEL'],
    municipios: ['APUCARANA', 'ARAPONGAS', 'BOM SUCESSO'],
    listas: ['1- Pauta Geral', '2- Pauta CRAS e CREAS com perecíveis', '3- Pauta CRAS e CREAS sem perecíveis'],
    search: null,
    gruposHeaders: [
      { text: 'Descrição', value: 'descricao', width: '70%' },
      { text: 'Exibir', value: 'exibir', width: '10%' },
      { text: 'Editar', value: 'editar', width: '10%' },
      { text: 'Excluir', value: 'excluir', width: '10%' }
    ],
    grupos: [
      { descricao: 'Arroz' },
      { descricao: 'Complementos' },
      { descricao: 'Farinhas' }
    ]
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