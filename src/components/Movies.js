const Movies = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="2">
          <v-card>
            <v-img :src="image"></v-img>
            <v-card-title>
              The Haunting (1963)
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    image: 'assets/images/The Haunting (1963).jpg'
  })
}