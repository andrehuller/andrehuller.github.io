const Work = {
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
        name: 'GOVERNADORIA',
        items: [
          {
            title: 'Governadoria',
            subtitle: 'http://www.parana.pr.gov.br',
            href: 'http://www.parana.pr.gov.br',
            screenshot: 'assets/screenshots/governo-parana.png'
          },
          {
            title: 'CGE',
            subtitle: 'Controladoria Geral do Estado',
            href: 'http://www.cge.pr.gov.br/',
            screenshot: 'assets/screenshots/cge.png'
          },
          {
            title: 'PGE',
            subtitle: 'Procuradoria Geral do Estado',
            href: 'http://www.pge.pr.gov.br/',
            screenshot: 'assets/screenshots/pge.png'
          },
          {
            title: 'SETI',
            subtitle: 'Superintendência Geral de Ciência, Tecnologia e Ensino Superior',
            href: 'http://www.seti.pr.gov.br/',
            screenshot: 'assets/screenshots/seti.png'
          },
          {
            title: 'CC',
            subtitle: 'Casa Civil',
            href: 'http://www.casacivil.pr.gov.br',
            screenshot: 'assets/screenshots/casacivil.png'
          },
          {
            title: 'CM',
            subtitle: 'Casa Militar',
            href: 'http://www.casamilitar.pr.gov.br/',
            screenshot: 'assets/screenshots/casamilitar.png'
          },
          {
            title: 'CEDC',
            subtitle: 'Coordenadoria Estadual da Defesa Civil',
            href: 'http://www.defesacivil.pr.gov.br/',
            screenshot: 'assets/screenshots/defesacivil.jpg'
          },
          {
            title: 'SECC',
            subtitle: 'Secretaria de Estado da Comunicação Social e da Cultura',
            href: 'http://www.comunicacao.pr.gov.br/',
            screenshot: 'assets/screenshots/comunicacao.png'
          },
          {
            title: 'SEPL',
            subtitle: 'Secretaria de Estado do Planejamento e Projetos Estruturantes',
            href: 'http://www.planejamento.pr.gov.br/',
            screenshot: 'assets/screenshots/planejamento.png'
          },
        ]
      },
      {
        name: 'Secretarias de Estado',
        items: [
          {
            title: 'SEFA',
            subtitle: 'Secretaria de Estado da Fazenda',
            href: 'http://www.fazenda.pr.gov.br/',
            screenshot: 'assets/screenshots/fazenda.png'
          },

          {
            title: 'SEAB',
            subtitle: 'Secretaria de Estado da Agricultura e do Abastecimento',
            href: 'http://www.agricultura.pr.gov.br/',
            screenshot: 'assets/screenshots/agricultura.jpg'
          },
          {
            title: 'SEDU',
            subtitle: 'Secretaria de Estado do Desenvolvimento Urbano e de Obras Públicas',
            href: 'http://www.desenvolvimentourbano.pr.gov.br/',
            screenshot: 'assets/screenshots/desenvolvimentourbano.png'
          },
          {
            title: 'SEED',
            subtitle: 'Secretaria de Estado da Educação e do Esporte',
            href: 'http://www.educacao.pr.gov.br/',
            screenshot: 'assets/screenshots/educacao.png'
          },
          {
            title: 'SEIL',
            subtitle: 'Secretaria de Estado de Infraestrutura e Logística',
            href: 'http://www.infraestrutura.pr.gov.br/',
            screenshot: 'assets/screenshots/infraestrutura.jpg'
          },
          {
            title: 'SEJUF',
            subtitle: 'Secretaria de Estado da Justiça, Família e Trabalho',
            href: 'http://www.justica.pr.gov.br/',
            screenshot: 'assets/screenshots/justica.png'
          },
          {
            title: 'SEDEST',
            subtitle: 'Secretaria de Estado do Desenvolvimento Sustentável e do Turismo',
            href: 'http://www.sedest.pr.gov.br/',
            screenshot: 'assets/screenshots/sedest.png'
          },
          {
            title: 'SESA',
            subtitle: 'Secretaria de Estado da Saúde',
            href: 'https://www.saude.pr.gov.br/',
            screenshot: 'assets/screenshots/saude.png'
          },
          {
            title: 'SESP',
            subtitle: 'Secretaria de Estado da Segurança Pública',
            href: 'http://www.seguranca.pr.gov.br/',
            screenshot: 'assets/screenshots/seguranca.png'
          }
        ]
      },
      {
        name: 'SOCIEDADES DE ECONOMIA MISTA ',
        items: [
          {
            title: 'FOMENTO PARANÁ',
            subtitle: 'Agência de Fomento do Paraná S.A',
            href: 'http://www.fomento.pr.gov.br/',
            screenshot: 'assets/screenshots/fomento.png'
          },
          {
            title: 'CEASA',
            subtitle: 'Centrais de Abastecimento do Paraná S/A',
            href: 'http://www.ceasa.pr.gov.br/',
            screenshot: 'assets/screenshots/ceasa.png'
          },
          {
            title: 'COHAPAR',
            subtitle: 'Companhia de Habitação do Paraná',
            href: 'http://www.cohapar.pr.gov.br/',
            screenshot: 'assets/screenshots/cohapar.png'
          },
          {
            title: 'SANEPAR',
            subtitle: 'Companhia de Saneamento do Paraná',
            href: 'http://site.sanepar.com.br/',
            screenshot: 'assets/screenshots/sanepar.png'
          },
          {
            title: 'CELEPAR',
            subtitle: 'Companhia de Tecnologia da Informação e Comunicação do Paraná',
            href: 'http://www.celepar.pr.gov.br',
            screenshot: 'assets/screenshots/celepar.png'
          },
          {
            title: 'COPEL',
            subtitle: 'Companhia Paranaense de Energia',
            href: 'https://www.copel.com/',
            screenshot: 'assets/screenshots/copel.png'
          },
          {
            title: 'PRSEC',
            subtitle: 'Companhia Paranaense de Securitização',
            href: 'http://www.prsec.pr.gov.br/',
            screenshot: 'assets/screenshots/PRSEC.png'
          },
          {
            title: 'FERROESTE',
            subtitle: 'Estrada de Ferro Paraná Oeste S.A.',
            href: 'http://www.ferroeste.pr.gov.br/',
            screenshot: 'assets/screenshots/FERROESTE.png'
          }
        ]
      },
      {
        name: 'Autarquias',
        items: [
          {
            title: 'ADAPAR',
            subtitle: 'Agência de Defesa Agropecuária do Paraná',
            href: 'http://www.adapar.pr.gov.br/',
            screenshot: 'assets/screenshots/adapar.png'
          },
          {
            title: 'DER',
            subtitle: 'Departamento de Estradas de Rodagem',
            href: 'http://www.der.pr.gov.br',
            screenshot: 'assets/screenshots/der.png'
          },
          {
            title: 'DETRAN',
            subtitle: 'Departamento de Trânsito do Paraná',
            href: 'http://www.detran.pr.gov.br',
            screenshot: 'assets/screenshots/detran.jpg'
          },
          {
            title: 'IPARDES',
            subtitle: 'Instituto Paranaense de Desenvolvimento Econômico e Social',
            href: 'http://www.ipardes.pr.gov.br',
            screenshot: 'assets/screenshots/ipardes.png'
          },
          {
            title: 'IDR',
            subtitle: 'Instituto de Desenvolvimento Rural do Paraná',
            href: 'http://www.idrparana.pr.gov.br/',
            screenshot: 'assets/screenshots/IDR-Paraná.png'
          },
          {
            title: 'IPEM/PR',
            subtitle: 'Instituto de Pesos e Medidas do Estado do Paraná',
            href: 'http://www.ipem.pr.gov.br',
            screenshot: 'assets/screenshots/ipem.png'
          },
          {
            title: 'PARANÁ EDIFICAÇÕES',
            subtitle: 'Paraná Edificações',
            href: 'http://www.paranaedificacoes.pr.gov.br',
            screenshot: 'assets/screenshots/parana-edificacoes.png'
          },
          {
            title: 'PARANÁ TURISMO',
            subtitle: 'Paraná Turismo',
            href: 'http://www.turismo.pr.gov.br',
            screenshot: 'assets/screenshots/parana-turismo.jpg'
          },
          {
            title: 'UEL',
            subtitle: 'Universidade Estadual de Londrina',
            href: 'http://portal.uel.br/home/',
            screenshot: 'assets/screenshots/uel.png'
          },
          {
            title: 'UEM',
            subtitle: 'Universidade Estadual de Maringá',
            href: 'http://www.uem.br/',
            screenshot: 'assets/screenshots/uem.png'
          },
          {
            title: 'UEPG',
            subtitle: 'Universidade Estadual de Ponta Grossa',
            href: 'https://www.uepg.br',
            screenshot: 'assets/screenshots/uepg.jpg'
          },
          {
            title: 'UNICENTRO',
            subtitle: 'Universidade Estadual do Centro Oeste do Paraná',
            href: 'https://www3.unicentro.br/',
            screenshot: 'assets/screenshots/UNICENTRO.png'
          },
          {
            title: 'UENP',
            subtitle: 'Universidade Estadual do Norte do Paraná',
            href: 'https://uenp.edu.br/',
            screenshot: 'assets/screenshots/UENP.png'
          },
          {
            title: 'UNIOESTE',
            subtitle: 'Universidade Estadual do Oeste do Paraná',
            href: 'https://www.unioeste.br/portal/',
            screenshot: 'assets/screenshots/UNIOESTE.jpg'
          },
          {
            title: 'UNESPAR',
            subtitle: 'Universidade Estadual do Paraná',
            href: 'http://www.unespar.edu.br/',
            screenshot: 'assets/screenshots/UNESPAR.png'
          }
        ]
      },
      {
        name: 'EMPRESAS PÚBLICAS',
        items: [
          {
            title: 'APPA',
            subtitle: 'Administração dos Portos de Paranaguá e Antonina',
            href: 'http://www.portosdoparana.pr.gov.br',
            screenshot: 'assets/screenshots/portosdoparana.png'
          },
          {
            title: 'TECPAR',
            subtitle: 'Instituto de Tecnologia do Paraná',
            href: 'http://www.tecpar.br/',
            screenshot: 'assets/screenshots/tecpar.jpg'
          }
        ]
      },
      {
        name: 'SERVIÇOS SOCIAIS AUTÔNOMOS',
        items: [
          {
            title: 'Invest Paraná',
            subtitle: 'Invest Paraná',
            href: 'http://www.investparana.org.br/',
            screenshot: 'assets/screenshots/Invest Paraná.png'            
          },
          {
            title: 'PALCOPARANÁ',
            subtitle: 'Serviço Social Autônomo PALCOPARANÁ',
            href: 'http://www.teatroguaira.pr.gov.br/',
            screenshot: 'assets/screenshots/Teatro Guaíra.jpg'
          },
          {
            title: 'PARANÁ PROJETOS',
            subtitle: 'Serviço Social Autônomo PARANÁ PROJETOS',
            href: 'http://www.paranaprojetos.pr.gov.br/',
            screenshot: 'assets/screenshots/paranaprojetos.png'
          },
          {
            title: 'PARANACIDADE',
            subtitle: 'Serviço Social Autônomo PARANACIDADE',
            href: 'http://www.paranacidade.org.br/',
            screenshot: 'assets/screenshots/paranacidade.png'
          },
          {
            title: 'PARANAEDUCAÇÃO',
            subtitle: 'Serviço Social Autônomo PARANAEDUCAÇÃO',
            href: 'http://www.paranaeducacao.pr.gov.br/',
            screenshot: 'assets/screenshots/paranaeducacao.png'
          },
          {
            title: 'PARANAPREVIDÊNCIA',
            subtitle: 'Serviço Social Autônomo PARANAPREVIDÊNCIA',
            href: 'http://www.paranaprevidencia.pr.gov.br/',
            screenshot: 'assets/screenshots/PARANAPREVIDÊNCIA.png'
          },
          {
            title: 'SIMEPAR',
            subtitle: 'Sistema Meteorológico do Paraná',
            href: 'http://www.simepar.br/'
          },
        ]
      },
      {
        name: 'CELEPAR',
        items: [
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
            title: 'Viaje Paraná',
            subtitle: 'http://www.viajeparana.com/',
            href: 'http://www.viajeparana.com/',
            screenshot: 'assets/screenshots/viaje-parana.png'
          }
        ]
      },
      {
        name: 'Outros',
        items: [
          {
            title: 'Here',
            subtitle: 'https://www.here.com/',
            href: 'https://www.here.com/',
            screenshot: 'assets/screenshots/here.jpg'
          },
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
            screenshot: 'assets/screenshots/governo-federal.png'
          },
          {
            title: 'Coronavírus Brasil',
            subtitle: 'https://covid.saude.gov.br/',
            href: 'https://covid.saude.gov.br/',
            screenshot: 'assets/screenshots/covid-saude.png'
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
            screenshot: 'assets/screenshots/inde.png'
          },
          {
            title: 'TRE-PR',
            subtitle: 'Tribunal Regional Eleitoral do Paraná',
            href: 'https://www.tre-pr.jus.br/',
            screenshot: 'assets/screenshots/tre-pr.png'
          },
          {
            title: 'Mapa da Cultura',
            subtitle: 'Mapas.cultura.gov.br',
            href: 'http://mapas.cultura.gov.br/',
            screenshot: 'assets/screenshots/mapa-da-cultura.png'
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
            title: 'Mapas',
            subtitle: 'SEDU',
            href: 'http://www.desenvolvimentourbano.pr.gov.br/Pagina/Mapas',
            screenshot: 'assets/screenshots/mapas-sedu.png'
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
            title: 'Mapa Solar',
            subtitle: 'COPEL',
            href: 'https://solar.copel.com/solar/',
            screenshot: 'assets/screenshots/Mapa Solar.jpg'
          },
          {
            title: 'Rodízio Curitiba e RMC',
            subtitle: 'SANEPAR',
            href: 'http://site.sanepar.com.br/mapa-rodizio-abastecimento-curitiba-rmc',
            screenshot: 'assets/screenshots/mapa-rodizio-abastecimento-curitiba-rmc.png'
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
          },
          {
            title: 'GeoNetwork',
            subtitle: 'CELEPAR',
            href: 'http://geojsapitre.pr.gov.br/geonetwork/srv/eng/catalog.search#/home',
            prod: 'http://geonetwork.pr.gov.br/geonetwork/srv/eng/catalog.search#/home',
            screenshot: 'assets/screenshots/GeoNetwork.png'
          },
          {
            title: 'geocge',
            subtitle: 'http://geojsapitre.pr.gov.br/geocge/#/',
            href: 'http://geojsapitre.pr.gov.br/geocge/#/',
            screenshot: 'assets/screenshots/geocge.jpg'
          },
          {
            title: 'geoder',
            subtitle: 'DER/PR',
            href: 'http://www.portalgeo.pr.gov.br/geoder/#/',
            screenshot: 'assets/screenshots/geoder.png',
            homolog: 'http://geojsapitre.pr.gov.br/geoder/#/'
          },
          {
            title: 'geoidr',
            subtitle: 'http://geojsapitre.pr.gov.br/geoidr/#/',
            href: 'http://geojsapitre.pr.gov.br/geoidr/#/',
            screenshot: 'assets/screenshots/geoidr.png'
          },
          {
            title: 'geogpi',
            subtitle: 'SEAP',
            href: 'http://www.geogpi.pr.gov.br/geogpi/publico',
            screenshot: 'assets/screenshots/geogpi.png'
          },
          {
            title: 'geosga',
            subtitle: 'http://www.geodc.pr.gov.br/geosga',
            href: 'http://www.geodc.pr.gov.br/geosga',
            screenshot: 'assets/screenshots/geosga.png'
          },
          {
            title: 'geoseti',
            subtitle: 'SETI',
            href: 'http://www.geoseti.pr.gov.br/geoseti/publico',
            screenshot: 'assets/screenshots/geoseti.png'
          },
          {
            title: 'vue-sga',
            subtitle: 'http://geojsapitre.pr.gov.br/vue-sga/#/',
            href: 'http://geojsapitre.pr.gov.br/vue-sga/#/',
            screenshot: 'assets/screenshots/vue-sga.jpg'
          }
        ]
      }
    ]
  })
}