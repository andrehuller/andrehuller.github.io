const POI = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col class="pa-0">
          <div id="poiMap" style="width: 100%; height: 500px; z-index: 0;"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-tabs grow>
          <v-tab v-for="category in categories" :key="category">
            {{ category }}
          </v-tab>
          <v-tab-item v-for="category in categories" :key="category">
            <v-container fluid>
            <v-row>
              <v-col cols="12" lg="4"
                v-for="item in places(category)"
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
                    <v-list-item one-line>
                      <v-list-item-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-subtitle>
                          {{ item.phone }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>

      </v-row>
    </v-container>
  `,
  data: () => ({
    categories: [],
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
        phone: '(41) 3240-5500',
        lat: -25.435292,
        lon: -49.305486,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Federal do Paraná (UFPR)',
        href: 'https://www.ufpr.br/portalufpr/',
        address: 'Rua XV de Novembro, 1299, Centro, Curitiba - PR, 80060-000, Brazil',
        phone: '(41) 3360-5000',
        lat: -25.427144,
        lon: -49.261890,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
        href: 'http://www.utfpr.edu.br/',
        address: 'Av. Sete de Setembro, 3165 - Rebouças, Curitiba - PR, 80230-901',
        phone: '(41) 3310-4545',
        lat: -25.439137,
        lon: -49.269633,
        icon: 'mdi-school',
        mapIcon: 'university'
      },
      {
        title: 'CELEPAR',
        subtitle: 'Tecnologia da Informação e Comunicação do Paraná',
        address: 'Rua Mateus Leme, 1561 - Bom Retiro - 80520-174 - Curitiba - PR, Brasil',
        phone: '(41) 3200-5000',
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
        phone: '(41) 3512-9700',
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
        phone: '(41) 3363-2618',
        lat: -25.452087,
        lon: -49.261831,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      },
      {
        title: 'Sigma Dataserv Informática S.A.',
        href: 'http://www.sigma.com.br/',
        address: 'Tv. Pinheiro, 74-250 - Rebouças, Curitiba - PR, 82590-300',
        phone: '(41) 3028-7200',
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
      }
    ]
  }),
  mounted () {
    this.$nextTick(() => {
      this.categories = _.uniq(_.map(this.items, 'icon')).sort().slice(0, 6)

      this.map = L.map('poiMap') //.setView([-24.618588, -51.316993], 7)
      
      L.control.defaultExtent()
        .addTo(this.map);

      var university = new L.Icon({
        iconUrl: './assets/university.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      });

      var computers = new L.Icon({
        iconUrl: './assets/computers.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      })

      var icons = {
        'university': university,
        'computers': computers
      }

      this.layers = L.control.layers({
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
        'Imagery': L.esri.basemapLayer('Imagery'),
      }, {
        'GRUMP v1: Mean Geographic Unit Area': L.tileLayer.wms('https://sedac.ciesin.columbia.edu/geoserver/ows', {
          layers: 'grump-v1:grump-v1-land-geographic-unit-area',
          format: 'image/png',
          transparent: true
        }),
        'Terrestrial Biomes from WWF': L.tileLayer.wms('https://sedac.ciesin.columbia.edu/geoserver/ows', {
          layers: 'other:wwf-terrestrial-biomes',
          format: 'image/png',
          transparent: true
        }),
        'EPI 2010: Air Pollution Effects on Human Health': L.tileLayer.wms('https://sedac.ciesin.columbia.edu/geoserver/ows', {
          layers: 'epi:epi-environmental-performance-index-2010_air-pollution-effects-on-human-health',
          format: 'image/png',
          transparent: true
        }),
        'Wildareas: Last of the Wild v2': L.tileLayer.wms('https://sedac.ciesin.columbia.edu/geoserver/ows', {
          layers: 'wildareas-v2:wildareas-v2-last-of-the-wild-geographic',
          format: 'image/png',
          transparent: true
        })
      }, {
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

      function setSelectedLayers(layers) {
        // resetSelectedState();

        layers.forEach(layer => {
            if (layer instanceof L.Marker) {
              var icon = new L.Icon({
                className: 'selected',
                iconUrl: layer.getIcon().options.iconUrl,
                iconSize: [32, 37],
                // iconAnchor: [16, 18],
                popupAnchor: [0, -8]
              })

              layer.setIcon(icon)
              
              // layer.setIcon(new L.Icon.Default({ className: 'selected '}));
            } else if (layer instanceof L.Path) {
                layer.setStyle({ color: '#ff4620' });
            }
        });

        // lassoResult.innerHTML = layers.length ? `Selected ${layers.length} layers` : '';
      }
      
      L.control.lasso({
        position: 'topleft'
      })
        .addTo(this.map)

      this.map.on('lasso.finished', event => {
        setSelectedLayers(event.layers)
      })
    })
  },
  methods: {
    fitExtent (item) {
      var latlng = L.latLng(item.lat, item.lon)
      this.map.setView(latlng, 17)
    },
    places: function (category) {
      return this.items.filter(item => item.icon.localeCompare(category) === 0)
    }
  }
}
