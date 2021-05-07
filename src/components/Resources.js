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
        "title": "Vuex",
        "subtitle": "Vuex is a state management pattern + library for Vue.js applications.",
        "href": "https://vuex.vuejs.org/",
        "screenshot": "assets/resources/Vuex.png"
      },
      {
        "title": "Vue Router",
        "subtitle": "Vue Router is the official router for Vue.js.",
        "href": "https://router.vuejs.org/",
        "screenshot": "assets/resources/Vue Router.png"
      },
      {
        "title": "Vuetify",
        "subtitle": "Material Design Framework",
        "href": "https://vuetifyjs.com/en/",
        "screenshot": "assets/resources/Vuetify.png"
      },
      {
        "title": "Material Design",
        "subtitle": "Build beautiful products, faster.",
        "href": "https://material.io/",
        "screenshot": "assets/screenshots/material.png"
      },
      {
        "title": "Lodash",
        "subtitle": "A modern JavaScript utility library delivering modularity, performance & extras.",
        "href": "https://lodash.com/",
        "screenshot": "assets/screenshots/Lodash.png",
        "install": "npm install lodash",
        "commands": [ "isArray", "isEmpty" ]
      },
      {
        "title": "Leaflet",
        "href": "https://leafletjs.com/",
        "screenshot": "assets/resources/Leaflet.png"
      },
      {
        "title": "Leaflet Geoman",
        "subtitle": "Geometry editing tools.",
        "href": "https://geoman.io/leaflet-geoman",
        "screenshot": "assets/resources/Leaflet-Geoman.png",
        "install": "npm i @geoman-io/leaflet-geoman-free"
      },
      {
        "title": "Leaflet markercluster",
        "href": "http://leaflet.github.io/Leaflet.markercluster/",
        "screenshot": "assets/resources/Leaflet markercluster.png"
      },
      {
        "title": "ColorBrewer",
        "subtitle": "Color Advice for Maps",
        "href": "https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3",
        "screenshot": "assets/resources/ColorBrewer.png"
      },
      {
        "title": "Map Icons",
        "href": "https://mapicons.mapsmarker.com/",
        "screenshot": "assets/resources/Map Icons.png"
      },

      {
        "title": "Pelias",
        "subtitle": "A modular, open-source search engine for our world.",
        "href": "https://www.pelias.io/",
        "screenshot": "assets/resources/Pelias Geocoder.png"
      },
      {
        "title": "Batch geocoder for journalists",
        "subtitle": "Locations to coordinates at rocket speed",
        "href": "https://geocode.localfocus.nl/",
        "screenshot": "assets/screenshots/geocode.localfocus.png"
      },

      {
        "title": "Openrouteservice",
        "subtitle": "Openpoiservice allows you to find places of interest around or within given geographic coordinates.",
        "href": "https://openrouteservice.org/",
        "screenshot": "assets/screenshots/openrouteservice.png"
      },
      {
        "title": "VROOM",
        "subtitle": "Vehicle Routing Open-source Optimization Machine",
        "href": "http://vroom-project.org/",
        "screenshot": "assets/screenshots/VROOM.png"
      },

      {
        "title": "GeoSolutions",
        "href": "https://www.geosolutionsgroup.com/",
        "screenshot": "assets/resources/GeoSolutions.png"
      },
      {
        "title": "Unsplash",
        "subtitle": "The internet’s source of freely-usable images. Powered by creators everywhere.",
        "href": "https://unsplash.com/",
        "screenshot": "assets/screenshots/unsplash.png"
      },
      {
        "title": "TinyPNG",
        "subtitle": "Smart PNG and JPEG compression",
        "href": "https://tinypng.com/",
        "screenshot": "assets/screenshots/tinypng.png"
      }
    ]
  })
}