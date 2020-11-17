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
          <v-card outlined :href="item.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
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
        title: 'Softplan Planejamento e Sistemas',
        href: 'https://www.softplan.com.br/',
        address: 'Sapiens Parque - Av. Luiz Boiteux Piazza, 1302 - lote 87/89 - Cachoeira do Bom Jesus, Florianópolis - SC, 88056-000',
        phone: '+55 48 3027 8000',
        lat: -27.431112,
        lon: -48.442223,
        icon: 'mdi-desktop-classic',
        mapIcon: 'computers'
      }
    ]
  }),
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('poiMap') // .setView([-24.618588, -51.316993], 7);
      
      L.control.defaultExtent()
        .addTo(this.map);
      
      var university = new L.Icon({
        iconUrl: './assets/university.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      });

      var office = new L.Icon({
        iconUrl: './assets/office-building.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      })

      var computers = new L.Icon({
        iconUrl: './assets/computers.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      })

      var icons = {
        'university': university,
        'office': office,
        'computers': computers
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
        
        marker.bindPopup(L.Util.template('<b>{title}</b>', this.items[i]))
        markers.addLayer(marker)
      }

      this.map.addLayer(markers)
      this.map.fitBounds(L.latLngBounds(latlngs))
    })
  },
}