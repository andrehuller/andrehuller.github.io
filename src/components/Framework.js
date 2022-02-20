const Frameworks = {
  template: `
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <v-timeline>
            <v-timeline-item
              v-for="framework in frameworks"
              :key="framework.name"
              color="#25305E"
            >
              <v-card>
                <v-card-title>{{ framework.name }}</v-card-title>
                <v-card-text v-if="framework.release">
                  {{ framework.release }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    frameworks: [
      {
        "name": "Vue.js",
        "release": "02/2014"
      },
      {
        "name": "React",
        "release": "29/05/2013"
      },
      {
        "name": "Ember.js",
        "release": "08/12/2011"
      },
      {
        "name": "AngularJS",
        "release": "20/10/2010"
      },
      {
        "name": "Backbone.js",
        "release": "13/10/2010"
      },
      {
        "name": "Knockout.js",
        "release": "05/07/2010"
      },
      {
        "name": "jQuery",
        "release": "01/2006"
      },
      {
        "name": "Prototype",
        "release": "02/2005"
      }
    ]
  })
}