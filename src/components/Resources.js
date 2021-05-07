const Resources = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="resource in resources"
          :key="resource.title"
        >
          <v-card class="fill-height d-flex flex-column">
            <a :href="resource.href" target="_blank">
                <v-img
                  v-if="resource.screenshot"
                  :src="resource.screenshot"
                  height="265.233"
                ></v-img>
              </a>
            <v-card-title>
              {{ resource.title }}
            </v-card-title>
            <v-card-text>
              {{ resource.subtitle }}
              <p>
                <kbd v-if="resource.install">
                  {{ resource.install }}
                </kbd>
              </p>
              <p>
              <v-divider></v-divider>
              </p>
              <kbd v-for="command in resource.commands" class="mr-2">
                {{ command }}
              </kbd>
            </v-card-text>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    resources: [
      {
        "title": "Vue",
        "href": "https://vuejs.org/",
        "screenshot": "assets/screenshots/Vue.png"
      },
      {
        "title": "Vue CLI",
        "href": "https://cli.vuejs.org/",
        "screenshot": "assets/screenshots/Vue CLI.png",
        "commands": [ "vue create nome_projeto" ]
      },
      {
        "title": "Lodash",
        "href": "https://lodash.com/",
        "screenshot": "assets/screenshots/Lodash.png",
        "install": "npm install lodash",
        "commands": [ "isArray", "isEmpty" ]
      },
      {
        "title": "Batch geocoder for journalists",
        "subtitle": "Locations to coordinates at rocket speed",
        "href": "https://geocode.localfocus.nl/",
        "screenshot": "assets/screenshots/geocode.localfocus.png"
      },
      {
        "title": "Material Design",
        "subtitle": "Build beautiful products, faster.",
        "href": "https://material.io/",
        "screenshot": "assets/screenshots/material.png"
      },
      {
        "title": "Openrouteservice",
        "subtitle": "Openpoiservice allows you to find places of interest around or within given geographic coordinates.",
        "href": "https://openrouteservice.org/",
        "screenshot": "assets/screenshots/openrouteservice.png"
      },
      {
        "title": "Project Euler",
        "subtitle": "Project Euler exists to encourage, challenge, and develop the skills and enjoyment of anyone with an interest in the fascinating world of mathematics.",
        "href": "https://projecteuler.net/",
        "screenshot": "assets/screenshots/projecteuler.png"
      },
      {
        "title": "TinyPNG",
        "subtitle": "Smart PNG and JPEG compression",
        "href": "https://tinypng.com/",
        "screenshot": "assets/screenshots/tinypng.png"
      },
      {
        "title": "Unsplash",
        "subtitle": "The internet’s source of freely-usable images. Powered by creators everywhere.",
        "href": "https://unsplash.com/",
        "screenshot": "assets/screenshots/unsplash.png"
      },
      {
        "title": "VROOM",
        "subtitle": "Vehicle Routing Open-source Optimization Machine",
        "href": "http://vroom-project.org/",
        "screenshot": "assets/screenshots/VROOM.png"
      }
    ]
  })
}