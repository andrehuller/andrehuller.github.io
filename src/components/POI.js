const POI = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col>
          <div id="poiMap" style="width: 100%; height: 500px; z-index: 0;"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4"
          v-for="item in items"
          :key="item.title"
        >
          <v-card outlined>
            <v-list>
              <v-list-item three-line>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                      <v-btn icon
                        @click="fitExtent(item)"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-magnify</v-icon>
                      </v-btn>    
                    </template>
                    <span>Zoom To</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{on, attrs}">
                      <v-btn icon
                        :href="item.href"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-open-in-new</v-icon>
                      </v-btn>
                    </template>
                    <span>Open Website</span>
                  </v-tooltip>

                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    items: [
      {
        title: 'PUCPR',
        subtitle: 'Pontifícia Universidade Católica do Paraná',
        href: 'https://www.pucpr.br/',
        address: 'Rua Imaculada Conceição, 1155 - Prado Velho, Curitiba - PR, 80215-901',
        lat: -25.451547,
        lon: -49.252736,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Positivo',
        href: 'https://universidade.up.edu.br/',
        address: 'R. Prof. Pedro Viriato Parigot de Souza, 5300 - Cidade Industrial De Curitiba, Curitiba - PR, 81280-330',
        lat: -25.446390,
        lon: -49.358559,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Tuiuti do Paraná',
        href: 'https://www.tuiuti.edu.br/',
        address: 'Rua Sydnei Antônio Rangel, 238, Sto. Inácio, Curitiba - PR, 82010-330, Brazil',
        lat: -25.423501,
        lon: -49.318351,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Faculdade Evangélica do Paraná (FEPAR)',
        href: 'https://www.mackenzie.br/faculdades/curitiba/home/',
        address: 'Rua Padre Anchieta, 2770, Bigorrilho, Curitiba - PR, 80730-000, Brazil',
        phone: '+55 41 3240 5500',
        lat: -25.435292,
        lon: -49.305486,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Federal do Paraná (UFPR)',
        href: 'https://www.ufpr.br/portalufpr/',
        address: 'Rua XV de Novembro, 1299, Centro, Curitiba - PR, 80060-000, Brazil',
        phone: '+55 41 3360 5000',
        lat: -25.427144,
        lon: -49.261890,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
        href: 'http://www.utfpr.edu.br/',
        address: 'Av. Sete de Setembro, 3165 - Rebouças, Curitiba - PR, 80230-901',
        phone: '+55 41 3310 4545',
        lat: -25.439137,
        lon: -49.269633,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'CELEPAR',
        subtitle: 'Tecnologia da Informação e Comunicação do Paraná',
        address: 'Rua Mateus Leme, 1561 - Bom Retiro - 80520-174 - Curitiba - PR, Brasil',
        phone: '+55 41 3200 5000',
        href: 'http://www.celepar.pr.gov.br/',
        lat: -25.413639,
        lon: -49.272659,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'CINQ Technologies',
        address: 'Av. Sete de Setembro, 2451 - 4º andar - Rebouças, Curitiba - PR, 80230-010',
        href: 'https://www.cinqtechnologies.com/',
        phone: '+1 855-800-2467',
        lat: -25.436372,
        lon: -49.262555,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'DISYS do Brasil',
        address: 'R. Heitor Stockler de França, 396 - Centro Cívico, Curitiba - PR, 80030-030',
        phone: '+554135129700',
        href: 'https://www.disys.com.br/',
        lat: -25.420166,
        lon: -49.268549,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'ICI - Instituto das Cidades Inteligentes',
        href: 'https://www.ici.curitiba.org.br/',
        address: 'Rua São Pedro, 910 - Cabral - Curitiba - PR, 80035-020',
        lat: -25.413914,
        lon: -49.250496,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'Fábrica de Software - Wise Systems',
        href: 'http://www.wises.com.br/',
        address: 'Av. Mal. Floriano Peixoto, 2610 - Loja 4 - Parolin, Curitiba - PR, 80220-000',
        phone: '+55 (41) 3363-2618',
        lat: -25.452087,
        lon: -49.261831,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'Sigma Dataserv Informática S.A.',
        href: 'http://www.sigma.com.br/',
        address: 'Tv. Pinheiro, 74-250 - Rebouças, Curitiba - PR, 82590-300',
        phone: '+55 41 3028-7200',
        lat: -25.438491,
        lon: -49.261936,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'MPS Informática',
        href: 'https://www.mps.com.br/',
        address: 'R. Tapajós, 186 - São Francisco, Curitiba - PR, 80510-330',
        phone: '+55 41 2141-9500',
        lat: -25.421150,
        lon: -49.281453,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'Softplan Planejamento e Sistemas',
        href: 'https://www.softplan.com.br/',
        address: 'Sapiens Parque - Av. Luiz Boiteux Piazza, 1302 - lote 87/89 - Cachoeira do Bom Jesus, Florianópolis - SC, 88056-000',
        phone: '+55 (48) 3027-8000',
        lat: -27.431112,
        lon: -48.442223,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'Visionnaire',
        href: 'https://www.visionnaire.com.br/',
        address: 'Parque de Software de Curitiba - R. Eng. Roberto Fischer, 208 - Cidade Industrial De Curitiba, Curitiba - PR, 81250-025',
        phone: '+55 (41) 3337-1000',
        lat: -25.469624,
        lon: -49.347067,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },

      {
        title: 'Secretaria de Estado da Fazenda',
        href: 'http://www.fazenda.pr.gov.br/',
        address: 'Av. Vicente Machado, 445 - Centro, Curitiba - PR, 80420-010',
        phone: '+554132358000',
        lat: -25.435028,
        lon: -49.280940,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado da Agricultura e do Abastecimento',
        href: 'http://www.agricultura.pr.gov.br/',
        address: 'R. dos Funcionários, 1559 - Cabral, Curitiba - PR, 80035-050',
        phone: '+554133134000',
        lat: -25.410861,
        lon: -49.247484,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado do Desenvolvimento Urbano e de Obras Públicas',
        href: 'http://www.desenvolvimentourbano.pr.gov.br/',
        address: 'Rua Jacy Loureiro de Campos, s/n - 2º andar - Centro Cívico - 80530-140 - Curitiba - PR',
        phone: '41 3250-7200',
        lat: -25.414820,
        lon: -49.269492,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado da Educação e do Esporte',
        href: 'http://www.educacao.pr.gov.br/',
        address: 'Av. Água Verde, 2140 - Vila Izabel - 80240-900 - Curitiba - PR',
        phone: '41 3340-1500',
        lat: -25.453883,
        lon: -49.292544,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado de Infraestrutura e Logística',
        href: 'http://www.infraestrutura.pr.gov.br/',
        address: 'Avenida Iguaçu, 420 - Rebouças - 80230-020 - Curitiba - PR',
        phone: '41 3304-8000',
        lat: -25.440573,
        lon: -49.266232,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado da Justiça, Família e Trabalho',
        href: 'http://www.justica.pr.gov.br/',
        address: 'Rua Jacy Loureiro de Campos, s/n - Centro Cívico - 80530-915 - Curitiba - PR',
        phone: '+55 41 3210-2411',
        lat: -25.414825,
        lon: -49.269491,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado do Desenvolvimento Sustentável e do Turismo',
        href: 'http://www.sedest.pr.gov.br/',
        address: 'Rua Desembargador Motta, 3384 - Mercês, Curitiba - PR, 80430-200',
        phone: '(41) 3304-7700',
        lat: -25.426203,
        lon: -49.287005,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado da Saúde',
        href: 'https://www.saude.pr.gov.br/',
        address: 'Rua Piquiri 170 - Rebouças- 80230-140 - Curitiba - PR',
        phone: '41 3330-4300',
        lat: -25.443233,
        lon: -49.261808,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },
      {
        title: 'Secretaria de Estado da Segurança Pública',
        href: 'http://www.seguranca.pr.gov.br/',
        address: 'Rua Deputado Mário de Barros, 1290 - Ed. Caetano Munhoz da Rocha - Centro Cívico - 80530-280 - Curitiba - PR',
        phone: '41 3313-1900',
        lat: -25.412163,
        lon: -49.266950,
        icon: 'mdi-bank',
        mapIcon: 'congress'
      },

      {
        title: 'Hospital Pilar',
        href: 'http://www.hospitalpilar.com.br/',
        address: 'Av. Desembargador Hugo Simas, 322 - Bom Retiro, Curitiba - PR, 80520-250',
        phone: '+55 41 3072-7272',
        lat: -25.415551,
        lon: -49.278964,
        icon: 'mdi-hospital',
        mapIcon: 'hospital'
      }
    ]
  }),
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('poiMap') // .setView([-24.618588, -51.316993], 7);
      
      L.control.defaultExtent()
        .addTo(this.map);
      
      var congress = new L.Icon({
        iconUrl: './assets/congress.png',
        iconSize: [32, 37],
        popupAnchor: [0, -8]
      })

      var university = new L.Icon({
        iconUrl: './assets/university.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      });

      var office = new L.Icon({
        iconUrl: './assets/office-building.png',
        iconSize: [32, 37],
        popupAnchor: [0, -8]
      })

      var computers = new L.Icon({
        iconUrl: './assets/computers.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      })

      var hospital = new L.Icon({
        iconUrl: './assets/hospital-building.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      })

      var icons = {
        'congress': congress,
        'university': university,
        'office': office,
        'computers': computers,
        'hospital': hospital
      }

      this.layers = L.control.layers({
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
        'ImageryClarity': L.esri.basemapLayer('ImageryClarity')
      }, null, {
        collapsed: false
      }).addTo(this.map)

      var latlngs = []

      var markers = L.markerClusterGroup({
        chunkedLoading: true
      })

      for (var i = 0; i < this.items.length; i++) {
        var lat = this.items[i].lat
        var lon = this.items[i].lon

        var icon = icons[this.items[i].mapIcon]
        if (this.items[i].address.includes('Curitiba')) {
          latlngs.push([lat, lon])
        }

        var marker = L.marker([lat, lon], {
          icon: icon
        })

        marker.bindPopup(L.Util.template('<b>{title}</b><p>{address}</p>', this.items[i]))
        markers.addLayer(marker)
      }

      this.map.addLayer(markers)
      this.map.fitBounds(L.latLngBounds(latlngs))
    })
  },
  methods: {
    fitExtent (item) {
      var latlng = L.latLng(item.lat, item.lon)
      this.map.setView(latlng)
    }
  }
}