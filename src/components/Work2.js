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
        <v-tab-item
          v-for="(category, i) in categories"
          :key="i"
        >
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
                      height="279.933"
                      style="border-top-left-radius: 4px; border-top-right-radius: 4px;"
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
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-if="project.homolog"
                          :href="project.homolog"
                          target="_blank"
                          fab small outlined
                          v-bind="attrs"
                          v-on="on"
                        >
                          H
                        </v-btn>
                      </template>
                      <span>Homologação</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-if="project.prod"
                          :href="project.prod"
                          target="_blank"
                          fab small outlined
                          v-bind="attrs"
                          v-on="on"
                          class="ml-2"
                        >
                          P
                        </v-btn>
                      </template>
                      <span>Produção</span>
                    </v-tooltip>
                    
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
            title: 'geocultura',
            subtitle: 'SECC',
            href: 'http://cultura.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geocultura.jpg',
            homolog: 'http://geojsapitre.pr.gov.br/geocultura/#/',
            prod: 'http://cultura.mapas.pr.gov.br'
          },
          {
            title: 'geodc',
            subtitle: 'CEDC',
            href: 'http://geojsapitre.pr.gov.br/geodc/#/',
            screenshot: 'assets/screenshots/geodc.png',
            homolog: 'http://geojsapitre.pr.gov.br/geodc/#/'
          },
          {
            title: 'geodc/editor-area-atencao',
            subtitle: 'CEDC',
            href: 'http://geojsapitre.pr.gov.br/editor/#/',
            screenshot: 'assets/screenshots/editor-area-atencao.png',
            homolog: 'http://geojsapitre.pr.gov.br/editor/#/'
          },
          {
            title: 'geoder',
            subtitle: 'DER',
            href: 'http://der.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geoder.png',
            homolog: 'http://geojsapitre.pr.gov.br/geoder/#/',
            prod: 'http://der.mapas.pr.gov.br'
          },
          {
            title: 'geoidr',
            subtitle: 'IDR',
            href: 'http://idr.mapas.pr.gov.br',
            screenshot: 'assets/screenshots/geoidr.png',
            homolog: 'http://geojsapitre.pr.gov.br/geoidr/#/',
            prod: 'http://idr.mapas.pr.gov.br'
          },
          {
            title: 'geosga',
            subtitle: 'IAT',
            href: 'http://geojsapitre.pr.gov.br/geosga/#',
            screenshot: 'assets/screenshots/geosga.png',
            homolog: 'http://geojsapitre.pr.gov.br/geosga/#'
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
            title: 'SIGLON',
            subtitle: 'Sistema de Informação Geográfica de Londrina',
            href: 'https://geo.londrina.pr.gov.br/portal/apps/webappviewer/index.html?id=5360a454d15146a3bcf4ebdbe8e49e03',
            screenshot: 'assets/screenshots/SIGLON.png'
          },
          {
            title: 'Portal GeoMaringá',
            subtitle: 'Prefeitura Municipal de Maringá',
            href: 'http://geoproc.maringa.pr.gov.br:8090/SIGMARINGA/?itemid=d0b136c94c274dc7863b2acd768ec07e',
            screenshot: 'assets/screenshots/Portal GeoMaringá.jpg'
          },
          {
            title: 'Geoprocessamento Corporativo',
            subtitle: 'Prefeitura Municipal de Ponta Grossa',
            href: 'http://geoweb.pontagrossa.pr.gov.br/',
            screenshot: 'assets/screenshots/Geoprocessamento Corporativo.png'
          },
          {
            title: 'Mapa da Cultura',
            subtitle: 'mapas.cultura.gov.br',
            href: 'http://mapas.cultura.gov.br/',
            screenshot: 'assets/screenshots/mapa-da-cultura.png'
          },
          {
            title: 'Mapa Solar',
            subtitle: 'COPEL',
            href: 'https://solar.copel.com/solar/',
            screenshot: 'assets/screenshots/Mapa Solar.jpg'
          },
          {
            title: 'paranainterativo',
            subtitle: 'https://paranainterativo.pr.gov.br/',
            href: 'https://paranainterativo.pr.gov.br/',
            screenshot: 'assets/screenshots/parana-interativo.jpg'
          },
          {
            title: 'Rodízio Curitiba e RMC',
            subtitle: 'SANEPAR',
            href: 'http://site.sanepar.com.br/mapa-rodizio-abastecimento-curitiba-rmc',
            screenshot: 'assets/screenshots/mapa-rodizio-abastecimento-curitiba-rmc.png'
          },
          {
            title: 'sider',
            subtitle: 'DER/PR',
            href: 'http://sider.der.pr.gov.br/mapainterativo/webgis/map#',
            screenshot: 'assets/screenshots/sider.png'
          },
          {
            title: 'Uso e Cobertura da Terra',
            subtitle: 'SEDEST (2012 - 2016)',
            href: 'https://geo.iat.pr.gov.br/portal/apps/opsdashboard/index.html#/0f98b800a957463fb4dec673cb336331',
            screenshot: 'assets/screenshots/uso-cobertura-terra.png'
          },

          {
            title: 'Flowchart COVID-19',
            subtitle: 'CEDC',
            href: 'https://app.powerbi.com/view?r=eyJrIjoiYTY2NmNiOGUtZTA5Ni00NTA0LWIwZTEtOTE3ZWFmMjQ3MTk0IiwidCI6ImZiYWYzMWQzLWU4ZjgtNGE3MC1iNjMzLWJlMzdiNjJmNTQyNSJ9',
            screenshot: 'assets/screenshots/Flowchart COVID-19.png'
          },
          {
            title: 'Mapa de Obras',
            subtitle: 'PRED',
            href: 'http://www.paranaedificacoes.pr.gov.br/Pagina/Mapa-de-Obras',
            screenshot: 'assets/screenshots/mapa-de-obras.png'
          },

          {
            title: 'Mapas Rodoviários',
            subtitle: 'DER',
            href: 'http://www.der.pr.gov.br/Pagina/Mapas-Rodoviarios#',
            screenshot: 'assets/screenshots/Mapas Rodoviários.png'
          },

          {
            title: 'Mapas',
            subtitle: 'SEDU',
            href: 'http://www.desenvolvimentourbano.pr.gov.br/Pagina/Mapas',
            screenshot: 'assets/screenshots/mapas-sedu.png'
          },
          {
            title: 'URS', // Unidades Regionais de Sanidade Agropecuária
            subtitle: 'ADAPAR',
            href: 'http://www.adapar.pr.gov.br/Pagina/Unidades-Regionais-de-Sanidade-Agropecuaria-URS',
            screenshot: 'assets/screenshots/URS.png'
          },

          {
            title: 'Operações Portuárias',
            subtitle: 'Portos do Paraná',
            href: 'http://www.portosdoparana.pr.gov.br/Operacional',
            screenshot: 'assets/screenshots/Operações Portuárias.png'
          },
          {
            title: 'SISPEHIS',
            subtitle: 'COHAPAR',
            href: 'https://www.sistemas.cohapar.pr.gov.br/PEHISPUBLICO/listaFormMunicipio.php',
            screenshot: 'assets/screenshots/SISPEHIS.png'
          }
        ]
      }
    ]
  })
}