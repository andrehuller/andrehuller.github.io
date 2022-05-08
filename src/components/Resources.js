const Resources = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="resource in resources"
          :key="resource.title"
        >
          <v-card class="fill-height d-flex flex-column" outlined>
            <a :href="resource.href" target="_blank">
              <v-img
                v-if="resource.screenshot"
                :src="resource.screenshot"
                height="265.233"
                style="border-top-left-radius: 4px; border-top-right-radius: 4px;"
              ></v-img>
            </a>
            <v-divider></v-divider>
            <v-card-title>
              {{ resource.title }}
            </v-card-title>
            <v-list dense>
              <v-list-item>
                {{ resource.subtitle }}
              </v-list-item>
              <v-list-item v-if="resource.install">
                <kbd v-if="resource.install">
                  {{ resource.install }}
                </kbd>
              </v-list-item>
              <v-list-item v-if="!_.isNil(resource.commands)">
                <kbd v-for="command in resource.commands" class="mr-2">
                  {{ command }}
                </kbd>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    resources: [
      {
        "title": "Vue",
        "subtitle": "The Progressive JavaScript Framework",
        "href": "https://vuejs.org/",
        "screenshot": "assets/screenshots/Vue.png"
      },
      {
        "title": "Material Design",
        "subtitle": "Build beautiful products, faster.",
        "href": "https://material.io/",
        "screenshot": "assets/screenshots/material.png"
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
        "screenshot": "assets/resources/tinypng.png"
      },
      {
        "title": "Airflow",
        "subtitle": "Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.",
        "href": "https://airflow.apache.org/",
        "screenshot": "assets/resources/Airflow.png"
      }
    ]
  })
}