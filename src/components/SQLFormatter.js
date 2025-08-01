const SQLFormatter = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Input SQL Lines"
                  v-model="inputText"
                  rows="10"
                  hide-details="auto"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="12" class="d-flex justify-space-evenly">
                <v-btn color="primary" @click="transformText">Transform to Java</v-btn>
                <v-btn color="primary" @click="transformToSQL">Transform to SQL</v-btn>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Transformed Output"
                  v-model="outputText"
                  rows="10"
                  readonly
                  hide-details="auto"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    inputText: null,
    outputText: null
  }),
  methods: {
    transformText: function () {
      const lines = this.inputText.split('\n')
      this.outputText = lines
        .map(line => `sql.append(" ${line.trim()}");`)
        .join('\n')
    },
    transformToSQL: function () {
      const lines = this.inputText.split('\n')
      this.outputText = lines
        .map(line => line.trim().replace('sql.append(" ', '').replace('");', ''))
        .join('\n')
    }
  }

}
