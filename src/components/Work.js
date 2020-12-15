const Work = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card
            :href="project.href"
            target="_blank"
            align="center"
            class="fill-height d-flex flex-column"
            outlined
          >
            <v-img
              v-if="project.screenshot"
              :src="project.screenshot"
              height="265.233"
            ></v-img>
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
        title: 'MapMaker Interactive',
        subtitle: 'National Geographic',
        href: 'https://mapmaker.nationalgeographic.org/',
        src: 'https://mapmaker.nationalgeographic.org/images/logos/nglogo-inline-black.min.svg',
        width: 170,
        screenshot: 'assets/screenshots/mapmaker.jpg'
      },
      {
        title: 'MapQuest',
        subtitle: 'https://www.mapquest.com/',
        href: 'https://www.mapquest.com/',
        screenshot: 'assets/screenshots/mapquest.png'
      },
      {
        title: 'Governo Federal',
        subtitle: 'gov.br',
        href: 'https://www.gov.br/pt-br',
        // src: 'https://www.gov.br/++theme++padrao_govbr/img/govbr-logo-large.png',
        // width: 111,
        // height: 40,
        screenshot: 'assets/screenshots/governo-federal.png'
      },
      {
        title: 'IBGE',
        subtitle: 'Instituto Brasileiro de Geografia e Estatística',
        href: 'https://www.ibge.gov.br/',
        screenshot: 'assets/screenshots/ibge.png',
      },
      {
        title: 'CNEFE',
        subtitle: 'Cadastro Nacional de Endereços para Fins Estatísticos',
        href: 'https://censo2010.ibge.gov.br/cnefe/',
        screenshot: 'assets/screenshots/cnefe.png'
      },
      {
        title: 'INDE',
        subtitle: 'Infraestrutura Nacional de Dados Espaciais',
        href: 'https://www.inde.gov.br/',
        src: 'https://www.inde.gov.br/img/INDE%20Logo_2.png',
        width: 170
      },
      {
        title: 'Governo do Estado do Paraná',
        subtitle: 'http://www.parana.pr.gov.br/',
        href: 'http://www.parana.pr.gov.br/',
        screenshot: 'assets/screenshots/governo-parana.png'
      },
      {
        title: 'SIMEPAR',
        href: 'http://www.simepar.br/'
      },
      {
        title: 'Nota Paraná',
        subtitle: 'http://www.notaparana.pr.gov.br/',
        href: 'http://www.notaparana.pr.gov.br/',
        screenshot: 'assets/screenshots/nota-parana.png'
      },
      {
        title: 'PIÁ',
        subtitle: 'Paraná Inteligência Artificial',
        href: 'https://www.pia.pr.gov.br/',
        screenshot: 'assets/screenshots/pia.jpg'
      },
      {
        title: 'Portal da Transparência',
        subtitle: 'http://www.transparencia.pr.gov.br',
        href: 'http://www.transparencia.pr.gov.br',
        screenshot: 'assets/screenshots/portal-transparencia.jpg'
      },
      {
        title: 'Mapa da Cultura',
        subtitle: 'Mapas.cultura.gov.br',
        href: 'http://mapas.cultura.gov.br/',
        screenshot: 'assets/screenshots/mapa-da-cultura.png'
      },
      {
        title: 'Paraná Interativo',
        subtitle: 'https://paranainterativo.pr.gov.br/',
        href: 'https://paranainterativo.pr.gov.br/',
        screenshot: 'assets/screenshots/parana-interativo.jpg'
      },
      {
        title: 'Portal de Mapas',
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
        title: 'Portal da Cultura',
        subtitle: 'http://www.portalgeo.pr.gov.br/geocultura/#/',
        href: 'http://www.portalgeo.pr.gov.br/geocultura/#/',
        screenshot: 'assets/screenshots/geocultura.jpg'
      }
      
    ]
  })
}