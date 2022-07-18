const Portfolio = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card outlined :href="project.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ project.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ project.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ project.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12">
          <strong>References</strong>
        </v-col>
        <v-col cols="12" lg="4"
          v-for="reference in references"
          :key="reference.title"
        >
          <v-card outlined :href="reference.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ reference.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ reference.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ reference.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  `,
  data: () => ({
    projects: [
      {
        title: 'Portal da Cultura',
        icon: 'mdi-drama-masks',
        href: 'https://cultura.mapas.pr.gov.br',
        subtitle: 'https://cultura.mapas.pr.gov.br'
      },
      {
        title: 'Rede de Proteção à Criança e ao Adolescente',
        icon: 'mdi-shield-account-outline',
        href: 'https://fortis.mapas.pr.gov.br',
        subtitle: 'http://fortis.mapas.pr.gov.br'
      },
      {
        title: 'DER/PR',
        icon: 'mdi-road-variant',
        href: 'https://der.mapas.pr.gov.br',
        subtitle: 'http://der.mapas.pr.gov.br'
      }
      /*
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
      }
      */
    ],
    references: [
      {
        title: 'Sistemas de Informação da Cultura - Paraná',
        icon: 'mdi-drama-masks',
        href: 'http://www.sic.cultura.pr.gov.br',
        subtitle: 'www.sic.cultura.pr.gov.br'
      },
      {
        title: 'Infância Segura - Redes de Proteção',
        icon: 'mdi-shield-account-outline',
        href: 'http://www.infanciasegura.pr.gov.br/Redes-de-Protecao',
        subtitle: 'http://www.infanciasegura.pr.gov.br/Redes-de-Protecao'
      },
      {
        title: 'Mapas Rodoviários',
        icon: 'mdi-road-variant',
        href: 'http://www.der.pr.gov.br/Pagina/Mapas-Rodoviarios#',
        subtitle: 'http://www.der.pr.gov.br/Pagina/Mapas-Rodoviarios#'
        // screenshot: 'assets/screenshots/Mapas Rodoviários.png'
      }
    ]
  })
}