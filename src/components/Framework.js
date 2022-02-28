const Frameworks = {
  template: `
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <v-timeline>
            <v-timeline-item
              v-for="framework in frameworks"
              :key="framework.name"
            >
              <v-card>
                <v-img
                  v-if="framework.src"
                  :src="framework.src"
                  height="180px"
                ></v-img>
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
        "release": "02/2014",
        "src": "assets/frameworks/vue.png"
      },
      {
        "name": "React",
        "release": "29/05/2013",
        "src": "assets/frameworks/react.png"
      },
      {
        "name": "Ember.js",
        "release": "08/12/2011",
        "src": "assets/frameworks/ember.png"
      },
      {
        "name": "AngularJS",
        "release": "20/10/2010",
        "src": "assets/frameworks/angular.png"
      },
      {
        "name": "Backbone.js",
        "release": "13/10/2010",
        "src": "assets/frameworks/backbone.png"
      },
      {
        "name": "Knockout.js",
        "release": "05/07/2010",
        "src": "assets/frameworks/knockout.png"
      },
      {
        "name": "jQuery",
        "release": "01/2006",
        "src": "assets/frameworks/jquery.png"
      },
      {
        "name": "Prototype",
        "release": "02/2005",
        "src": "assets/frameworks/prototype.png"
      }
    ]
  })
}