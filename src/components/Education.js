const Education = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col>
          <div id="educationMap" style="width: 100%; height: 500px; z-index: 0;"></div>
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
        icon: 'mdi-school'
      },
      {
        title: 'Universidade Positivo',
        href: 'https://universidade.up.edu.br/',
        address: 'R. Prof. Pedro Viriato Parigot de Souza, 5300 - Cidade Industrial De Curitiba, Curitiba - PR, 81280-330',
        lat: -25.446390,
        lon: -49.358559,
        icon: 'mdi-school'
      }
    ]
  }),
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('educationMap').setView([-24.618588, -51.316993], 7);
      
      L.control.defaultExtent()
        .addTo(this.map);
      
      var schoolIcon = new L.Icon({
        iconUrl: './assets/university.png',
        iconSize: [32, 37],
        // iconAnchor: [16, 18],
        popupAnchor: [0, -8]
      });

      this.layers = L.control.layers({
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
        'ImageryClarity': L.esri.basemapLayer('ImageryClarity')
      }, null, {
        collapsed: false
      }).addTo(this.map);

      for (var i = 0; i < this.items.length; i++) {
        var lat = this.items[i].lat
        var lon = this.items[i].lon
        L.marker([lat, lon], {
          icon: schoolIcon
        })
          .bindPopup(L.Util.template('{title}', this.items[i]))
          .addTo(this.map)
      }
      
    })
  },
}