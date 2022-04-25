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
        "src": "assets/frameworks/vue.png"
      },
      {
        "name": "React",
        "release": "29/05/2013",
        "src": "assets/frameworks/React.png"
      },
      {
        "name": "Ember.js",
        "src": "assets/frameworks/ember.png"
      },
      {
        "name": "AngularJS",
        "src": "assets/frameworks/angular.png"
      },
      {
        "name": "Backbone.js",
        "src": "assets/frameworks/backbone.png"
      },
      {
        "name": "Knockout.js",
        "src": "assets/frameworks/knockout.png"
      },
      {
        "name": "jQuery",
        "src": "assets/frameworks/jquery.png"
      },
      {
        "name": "Prototype",
        "src": "assets/frameworks/prototype.png"
      }
    ]
  })
}