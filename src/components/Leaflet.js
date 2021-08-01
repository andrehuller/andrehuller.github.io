const Leaflet = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="12">
          <v-card outlined>
            <div id="map" style="height: 855px"></div>
          </v-card>
        </v-col>
      
        <v-col cols="12" lg="4"
          v-for="plugin in sortedPlugins"
          :key="plugin.title"
        >
          <v-card outlined :href="plugin.href">
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="indigo darken-1">
                  <v-icon dark>{{ plugin.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ plugin.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ plugin.subtitle }}</v-list-item-subtitle>
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
    plugins: [
      {
        "icon": "mdi-map",
        "title": "Leaflet.GestureHandling",
        "subtitle": "Gesture Handling",
        "href": "https://github.com/elmarquis/Leaflet.GestureHandling"
      },
      {
        "icon": "mdi-home",
        "title": "Leaflet.defaultextent",
        "subtitle": "Default Extent Button",
        "href": "https://github.com/nguyenning/Leaflet.defaultextent"
      },
      {
        "icon": "mdi-map-marker",
        "title": "Leaflet.markercluster",
        "subtitle": "Marker Cluster",
        "href": "https://github.com/Leaflet/Leaflet.markercluster"
      },
      {
        "icon": "mdi-map-marker-plus",
        "title": "leaflet-geoman",
        "subtitle": "the best geometry editing for Leaflet Maps",
        "href": "https://geoman.io/leaflet-geoman"
      },
      {
        "icon": "mdi-lasso",
        "title": "leaflet-lasso",
        "subtitle": "Lasso selection plugin for Leaflet",
        "href": "https://github.com/zakjan/leaflet-lasso"
      },
      {
        "icon": "mdi-crosshairs-gps",
        "title": "leaflet-locatecontrol",
        "subtitle": "A customizable locate control",
        "href": "https://github.com/domoritz/leaflet-locatecontrol/"
      },
      {
        "icon": "mdi-map",
        "title": "leaflet.wms",
        "subtitle": "Enhanced WMS support for Leaflet",
        "href": "https://github.com/heigeo/leaflet.wms"
      }
    ]
  }),
  computed: {
    sortedPlugins () {
      return _.sortBy(this.plugins, 'title')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.map = L.map('map').setView([-24.618588, -51.316993], 8);
      
      L.control.defaultExtent()
        .addTo(this.map);
      
      L.control.locate().addTo(this.map);
      
      this.layers = L.control.layers({
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
        'ImageryClarity': L.esri.basemapLayer('ImageryClarity'),
        'ImageryFirefly': L.esri.basemapLayer('ImageryFirefly')
      }, null, {
        collapsed: false
      }).addTo(this.map);
      
      this.init();
    })
  },
  methods: {
    init () {
      /*
      var style = function (feature) {       
        var colors = {
          4108: '#67001f',
          4102: '#b2182b',
          4105: '#d6604d',
          4110: '#f4a582',
          4101: '#fddbc7',
          4103: '#d1e5f0',
          4104: '#92c5de',
          4106: '#4393c3',
          4109: '#2166ac',
          4107: '#053061'
        }
        return {
          fillColor: colors[feature.properties.cod_regiao],
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
      */
      // itcg:municipios_pol_p31982_e50
      // ipardes:mesorregiao_pol_p4674_a2015
      var myStyle = {
        "color": "#0570b0",
      };

      var geojson = L.geoJson(null, {
        style: myStyle
      }).addTo(this.map)
      
      geojson.addData(r297484)
      geojson.addData(r297485)
      geojson.addData(r297486)
      geojson.addData(r297487)
      geojson.addData(r297488)
      geojson.addData(r297489)
      geojson.addData(r297490)
      geojson.addData(r297491)
      geojson.addData(r297492)
      geojson.addData(r297493)
      geojson.addData(r297494)
      geojson.addData(r297495)
      geojson.addData(r297496)
      geojson.addData(r297497)
      geojson.addData(r297498)
      geojson.addData(r297499)
      geojson.addData(r297500)
      geojson.addData(r297501)
      geojson.addData(r297502)
      geojson.addData(r297503)
      geojson.addData(r297504)
      geojson.addData(r297505)
      geojson.addData(r297506)
      geojson.addData(r297507)
      geojson.addData(r297508)
      geojson.addData(r297509)
      geojson.addData(r297510)
      geojson.addData(r297511)
      geojson.addData(r297512)
      geojson.addData(r297513)
      geojson.addData(r297514)
      geojson.addData(r297515)
      geojson.addData(r297516)
      geojson.addData(r297517)
      geojson.addData(r297518)
      geojson.addData(r297519)
      geojson.addData(r297520)

      geojson.addData(r297533)

      geojson.addData(r297610)
      geojson.addData(r297611)

      geojson.addData(r297651)

      geojson.addData(r297719)

      geojson.addData(r297756)

      geojson.addData(r297796)

      geojson.addData(r297846)
      
      /*
      axios.get('https://geoserver.pr.gov.br/geoserver/wfs', {
        params: {
          service: 'wfs',
          version: '2.0.0',
          outputFormat: 'application/json',
          request: 'GetFeature',
          typeNames: 'itcg:municipios_pr_pol_p29192_e1000_a2013',
          srsName: 'EPSG:4674'
        }
      })
        .then(response => {
          // store.commit('setMesorregiao', response.data.features)
          var geojson = L.geoJson(response.data, {
            // style: style,
            onEachFeature: (feature, layer) => {
              // layer.bindPopup(L.Util.template('Nome: {nome_regiao}<br>Código: {cod_regiao}', feature.properties))
              console.log('!')
            }
          }).addTo(this.map)

          this.layers.addOverlay(geojson, "Mesorregiões")
        })
        .catch(error => {
          console.log(error)
        })
      */
    }
  }
}