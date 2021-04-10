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
      <v-divider></v-divider>
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
      <v-divider></v-divider>
      
      <v-row>
        <v-col cols="12" lg="4"
          v-for="prototype in prototypes"
          :key="prototype.title"
        >
          <v-card outlined :href="prototype.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ prototype.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ prototype.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ prototype.subtitle }}</v-list-item-subtitle>
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
        href: 'http://cultura.mapas.pr.gov.br',
        subtitle: 'http://cultura.mapas.pr.gov.br'
      },
      {
        title: 'Rede de Proteção à Criança e ao Adolescente',
        icon: 'mdi-shield-account-outline',
        href: 'http://geojsapitre.pr.gov.br/sejuf/index.html#/',
        subtitle: 'http://geojsapitre.pr.gov.br/sejuf/index.html#/'
      },
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
      }
    ],
    prototypes: [
      {
        title: 'Material-UI',
        href: './material-ui.html',
        icon: 'mdi-material-ui',
        subtitle: 'React + Material-UI'
      }
    ]
  })
}