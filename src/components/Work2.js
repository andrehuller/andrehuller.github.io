const Work2 = {
  template: `
    <v-container fluid pa-0>
      <v-tabs color="#244EA2" fixed-tabs show-arrows>
        <v-tab
          v-for="(category, i) in categories"
          :key="i"
        >
          {{ category.name }}
        </v-tab>
        <v-tab-item v-for="(category, i) in categories" :key="i">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="project in category.items"
                :key="project.title"
                cols="12"
                lg="4"
              >
                <v-card
                  class="fill-height d-flex flex-column"
                  outlined
                >
                  <a :href="project.href" target="_blank">
                    <v-img
                      v-if="project.screenshot"
                      :src="project.screenshot"
                      height="265.233"
                    ></v-img>
                  </a>
                  <v-card-title
                    class="headline"
                    v-text="project.title"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="project.subtitle"
                  ></v-card-subtitle>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn fab small outlined :href="project.homolog" v-if="project.homolog">
                      H
                    </v-btn>
                    <v-btn fab small outlined :href="project.prod" v-if="project.prod">
                      P
                    </v-btn>
                  </v-card-actions>
                  <!--
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar class="ma-3" :width="project.width" height="project.height" tile>
                      <v-img :src="project.src"
                        :width="project.width"
                        :height="project.height"
                        :max-width="project.width"
                        :max-height="project.height"
                        class="ma-4 dark-green"
                      ></v-img>
                    </v-avatar>
                  </div>
                  -->
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  `,
  data: () => ({
    categories: [
      {
        name: 'Vue + Leaflet',
        items: [
          {
            title: 'geocge',
            subtitle: 'CGE/PR',
            href: 'http://geojsapitre.pr.gov.br/geocge/#/',
            screenshot: 'assets/screenshots/geocge.jpg',
            homolog: 'http://geojsapitre.pr.gov.br/geocge/#/'
          },
          {
            title: 'geocultura',
            subtitle: 'SECC-PR',
            href: 'http://cultura.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geocultura.jpg',
            homolog: 'http://geojsapitre.pr.gov.br/geocultura/#/',
            prod: 'http://cultura.mapas.pr.gov.br'
          },
          {
            title: 'geodc',
            subtitle: 'CEDC-PR',
            href: 'http://geojsapitre.pr.gov.br/geodc/#/',
            screenshot: 'assets/screenshots/geodc.png',
            homolog: 'http://geojsapitre.pr.gov.br/geodc/#/'
          },
          {
            title: 'geoder',
            subtitle: 'DER/PR',
            href: 'http://der.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geoder.png',
            homolog: 'http://geojsapitre.pr.gov.br/geoder/#/',
            prod: 'http://der.mapas.pr.gov.br'
          },
          {
            title: 'geoidr',
            subtitle: 'IDR/PR',
            href: 'http://idr.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geoidr.png',
            homolog: 'http://geojsapitre.pr.gov.br/geoidr/#/',
            prod: 'http://idr.mapas.pr.gov.br'
          },
          {
            title: 'vue-sga',
            subtitle: 'http://geojsapitre.pr.gov.br/vue-sga/#/',
            href: 'http://geojsapitre.pr.gov.br/vue-sga/#/',
            screenshot: 'assets/screenshots/vue-sga.jpg',
            homolog: 'http://geojsapitre.pr.gov.br/vue-sga/#/'
          }
        ]
      },
      {
        name: 'Ext + OpenLayers',
        items: [
          {
            title: 'geogpi',
            subtitle: 'SEAP',
            href: 'http://www.geogpi.pr.gov.br/geogpi/publico',
            screenshot: 'assets/screenshots/geogpi.png'
          },
          {
            title: 'geoseti',
            subtitle: 'SETI',
            href: 'http://www.geoseti.pr.gov.br/geoseti/publico',
            screenshot: 'assets/screenshots/geoseti.png'
          },
          {
            title: 'geosga',
            subtitle: 'http://www.geosga.pr.gov.br/geosga',
            href: 'http://www.geosga.pr.gov.br/geosga',
            screenshot: 'assets/screenshots/geosga.png'
          }
        ]
      },
      {
        name: 'RESOURCES',
        items: [
          {
            title: 'GeoNetwork',
            subtitle: 'CELEPAR',
            href: 'http://geojsapitre.pr.gov.br/geonetwork/srv/eng/catalog.search#/home',
            screenshot: 'assets/screenshots/GeoNetwork.png',
            prod: 'http://geonetwork.pr.gov.br/geonetwork/srv/eng/catalog.search#/home'
          }
        ]
      },
      {
        name: 'THIRD PARTY',
        items: [
          {
            title: 'consultaescolas',
            subtitle: 'http://www.consultaescolas.pr.gov.br/',
            href: 'http://www.consultaescolas.pr.gov.br/',
            screenshot: 'assets/screenshots/consulta-escolas.png'
          },
          {
            title: 'Geoprocessamento Corporativo',
            subtitle: 'Prefeitura Municipal de Ponta Grossa',
            href: 'http://geoweb.pontagrossa.pr.gov.br/',
            screenshot: 'assets/screenshots/Geoprocessamento Corporativo.png'
          },
          {
            title: 'Mapa da Cultura',
            subtitle: 'Mapas.cultura.gov.br',
            href: 'http://mapas.cultura.gov.br/',
            screenshot: 'assets/screenshots/mapa-da-cultura.png'
          },
          {
            title: 'paranainterativo',
            subtitle: 'https://paranainterativo.pr.gov.br/',
            href: 'https://paranainterativo.pr.gov.br/',
            screenshot: 'assets/screenshots/parana-interativo.jpg'
          },
          {
            title: 'sider',
            subtitle: 'DER/PR',
            href: 'http://sider.der.pr.gov.br/mapainterativo/webgis/map#',
            screenshot: 'assets/screenshots/sider.png'
          }
        ]
      }
    ]
  })
}