const DatePicker = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12">
        <v-card outlined>
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
                  v-mask="['(##) ####-####', '(##) #####-####']"
                  label="Phone"
                  prepend-inner-icon="mdi-phone"
                  density="comfortable"
                  outlined clearable hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="cpf"
                  v-mask="'###.###.###-##'"
                  label="CPF"
                  density="comfortable"
                  outlined clearable hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="cnpj"
                  v-mask="'##.###.###/####-##'"
                  label="CNPJ"
                  density="comfortable"
                  outlined clearable hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  v-model="cep"
                  v-mask="'#####-###'"
                  label="CEP"
                  density="comfortable"
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
  `,
  data: () => ({
    phone: null,
    cpf: null,
    cnpj: null,
    cep: null
  })
}
