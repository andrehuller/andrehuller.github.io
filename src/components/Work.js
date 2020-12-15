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
        screenshot: 'assets/screenshots/mapmaker.jpg'
      },
      {
        title: 'MapQuest',
        subtitle: 'https://www.mapquest.com/',
        href: 'https://www.mapquest.com/',
        screenshot: 'assets/screenshots/mapquest.png'
      },
      {
        title: 'OneZoom Tree of Life Explorer',
        subtitle: 'https://www.onezoom.org/',
        href: 'https://www.onezoom.org/',
        screenshot: 'assets/screenshots/onezoom.png'
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
        href: 'https://www.inde.gov.br/'
      },
      {
        title: 'Governo do Estado do Paraná',
        subtitle: 'http://www.parana.pr.gov.br/',
        href: 'http://www.parana.pr.gov.br/',
        screenshot: 'assets/screenshots/governo-parana.png'
      },
      {
        title: 'CEDC',
        subtitle: 'Coordenadoria Estadual da Defesa Civil',
        href: 'http://www.defesacivil.pr.gov.br/',
        screenshot: 'assets/screenshots/defesacivil.jpg'
      },
      {
        title: 'COPEL',
        subtitle: 'Companhia Paranaense de Energia',
        href: 'https://www.copel.com/',
        screenshot: 'assets/screenshots/copel.png'
      },
      {
        title: 'DER',
        subtitle: 'Departamento de Estradas de Rodagem',
        href: 'http://www.der.pr.gov.br/',
        screenshot: 'assets/screenshots/der.png'
      },
      {
        title: 'IPARDES',
        subtitle: 'Instituto Paranaense de Desenvolvimento Econômico e Social',
        href: 'http://www.ipardes.pr.gov.br/',
        screenshot: 'assets/screenshots/ipardes.png'
      },
      {
        title: 'IPEM/PR',
        subtitle: 'Instituto de Pesos e Medidas do Estado do Paraná',
        href: 'http://www.ipem.pr.gov.br/',
        screenshot: 'assets/screenshots/ipem.png'
      },
      {
        title: 'SEAB',
        subtitle: 'Secretaria da Agricultura e do Abastecimento',
        href: 'http://www.agricultura.pr.gov.br/',
        screenshot: 'assets/screenshots/agricultura.jpg'
      },
      {
        title: 'SECC',
        subtitle: 'Secretaria da Comunicação Social e da Cultura',
        href: 'http://www.comunicacao.pr.gov.br/',
        screenshot: 'assets/screenshots/comunicacao.png'
      },
      {
        title: 'SEFA',
        subtitle: 'Secretaria de Estado da Fazenda',
        href: 'http://www.fazenda.pr.gov.br/',
        screenshot: 'assets/screenshots/fazenda.png'
      },
      {
        title: 'SEIL',
        subtitle: 'Secretaria de Infraestrutura e Logística',
        href: 'http://www.infraestrutura.pr.gov.br/',
        screenshot: 'assets/screenshots/infraestrutura.jpg'
      },
      {
        title: 'SIMEPAR',
        href: 'http://www.simepar.br/'
      },
      {
        title: 'TRE-PR',
        subtitle: 'Tribunal Regional Eleitoral do Paraná',
        href: 'https://www.tre-pr.jus.br/',
        screenshot: 'assets/screenshots/tre-pr.png'
      },
      {
        title: 'Nota Paraná',
        subtitle: 'http://www.notaparana.pr.gov.br/',
        href: 'http://www.notaparana.pr.gov.br/',
        screenshot: 'assets/screenshots/nota-parana.png'
      },
      {
        title: 'Paraná Turismo',
        subtitle: 'http://www.turismo.pr.gov.br/',
        href: 'http://www.turismo.pr.gov.br/',
        screenshot: 'assets/screenshots/parana-turismo.jpg'
      },
      {
        title: 'Portos do Paraná',
        subtitle: 'http://www.portosdoparana.pr.gov.br',
        href: 'http://www.portosdoparana.pr.gov.br/',
        screenshot: 'assets/screenshots/portosdoparana.png'
      },
      {
        title: 'Viaje Paraná',
        subtitle: 'http://www.viajeparana.com/',
        href: 'http://www.viajeparana.com/',
        screenshot: 'assets/screenshots/viaje-parana.png'
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
        title: 'Consulta Escolas',
        subtitle: 'http://www.consultaescolas.pr.gov.br/',
        href: 'http://www.consultaescolas.pr.gov.br/',
        screenshot: 'assets/screenshots/consulta-escolas.png'
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