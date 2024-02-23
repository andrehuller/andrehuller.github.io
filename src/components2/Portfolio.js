const Portfolio = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <strong>Projects</strong>
        </v-col>
        <v-col cols="12" lg="4"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card :href="project.href" color="grey-lighten-1" variant="outlined">
            <v-list>
              <v-list-item
                :title="project.title"
                :subtitle="project.subtitle"
              >
                <template v-slot:prepend>
                  <v-avatar color="indigo">
                    <v-icon :icon="project.icon" color="white"></v-icon>
                  </v-avatar>
                </template>
                <template v-slot:append>
                  <v-icon>mdi-arrow-right</v-icon>
                </template>
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
          <v-card :href="reference.href" color="grey-lighten-1" variant="outlined">
            <v-list>
              <v-list-item
                :title="reference.title"
                :subtitle="reference.subtitle"
              >
                <template v-slot:prepend>
                  <v-avatar color="indigo">
                    <v-icon :icon="reference.icon" color="white"></v-icon>
                  </v-avatar>
                </template>
                <template v-slot:append>
                  <v-icon>mdi-arrow-right</v-icon>
                </template>
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
