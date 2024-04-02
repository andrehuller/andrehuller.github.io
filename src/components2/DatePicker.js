const DatePicker = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12">
        <v-card variant="outlined">
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
                  v-model="phone"
                  label="Phone"
                  prepend-inner-icon="mdi-phone"
                  density="comfortable"
                  variant="outlined"
                  clearable hide-details
                ></v-text-field><!-- v-mask="['(##) ####-####', '(##) #####-####']" -->
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="cpf"
                  label="CPF"
                  density="comfortable"
                  variant="outlined"
                  clearable hide-details
                ></v-text-field><!-- v-mask="'###.###.###-##'" -->
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="cnpj"
                  v-maska="{ mask: '#-#' }"
                  label="CNPJ"
                  density="comfortable"
                  variant="outlined"
                  clearable hide-details
                ></v-text-field><!-- v-mask="'##.###.###/####-##'" -->
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-maska
                  data-maska="###"
                  label="CEP"
                  density="comfortable"
                  variant="outlined"
                  clearable hide-details
                ></v-text-field><!-- v-model="cep" v-mask="'#####-###'" -->
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
  `,
  data: () => ({
    phone: null,
    cpf: null,
    cnpj: null,
    cep: null
  })
}
