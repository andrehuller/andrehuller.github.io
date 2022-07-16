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
          }
        ]
      }
    ]
  })
}