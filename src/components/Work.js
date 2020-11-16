// https://mapmaker.nationalgeographic.org/

const Work = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card :href="project.href" :dark="project.dark"
            align="center"
            class="fill-height d-flex flex-column"
            outlined
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                
                  class="headline"
                  v-text="project.title"
                ></v-card-title>
                <v-card-subtitle
                  v-text="project.subtitle"
                ></v-card-subtitle>
              </div>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    projects: [
      {
        title: 'PIÁ',
        subtitle: 'Paraná Inteligência Artificial',
        href: 'https://www.pia.pr.gov.br/',
        src: 'assets/pia_logo.png',
        width: 207,
        height: 67,
        dark: true
      },
      {
        title: 'Portal de Mapas',
        subtitle: 'DER/PR',
        href: 'http://sider.der.pr.gov.br/mapainterativo/webgis/map#',
        src: 'http://sider.der.pr.gov.br/mapainterativo/tema/derpr/imagens/frTopo-logo.png',
        width: 186,
        height: 50,
        dark: false
      },
      {
        title: 'Governo Federal',
        subtitle: 'gov.br',
        href: 'https://www.gov.br/pt-br',
        src: 'https://www.gov.br/++theme++padrao_govbr/img/govbr-logo-large.png',
        width: 111,
        height: 40,
        dark: false
      },
      {
        title: 'INDE',
        subtitle: 'Infraestrutura Nacional de Dados Espaciais',
        href: 'https://www.inde.gov.br/',
        src: 'https://www.inde.gov.br/img/INDE%20Logo_2.png',
        width: 170,
        dark: false
      },
      
      {
        title: 'Mapa da Cultura',
        subtitle: 'Mapas.cultura.gov.br',
        href: 'http://mapas.cultura.gov.br/',
        src: 'http://mapas.cultura.gov.br/assets/mapas.cultura.gov.br/svg/logo-mapas-culturais-br.svg',
        width: 70,
        height: 70,
        dark: false
      }
    ]
  })
}