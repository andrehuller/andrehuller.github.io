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
      
      // L.control.locate().addTo(this.map);
      
      this.layers = L.control.layers({
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        'Gray': L.esri.basemapLayer('Gray').addTo(this.map),
        'Topographic': L.esri.basemapLayer('Topographic'),
        'ImageryClarity': L.esri.basemapLayer('ImageryClarity'),
        'ImageryFirefly': L.esri.basemapLayer('ImageryFirefly')
      }, null, {
        collapsed: false
      }).addTo(this.map);

      L.esri.basemapLayer('GrayLabels').addTo(this.map),
      
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
      function getColor () {
        switch (Math.floor(Math.random() * 4)) {
          case 0:
            return "#bdc9e1"
          case 1:
            return '#74a9cf'
          case 2:
            return '#2b8cbe'
          case 3:
            return '#045a8d'
        }
      }

      function style () {
        return {
          "fillColor": getColor(),
          "color": "white",
          dashArray: '3',
          weight: 2,
          fillOpacity: 0.7
        }
      }

      var zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
      }

      var geojson = L.geoJson(null, {
        style: style,
        onEachFeature: function (feature, layer) {
          layer.on({
            'click': zoomToFeature
          })
          layer.bindTooltip("tooltip")
        }
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
      geojson.addData(r297521)
      geojson.addData(r297522)
      geojson.addData(r297523)
      geojson.addData(r297524)
      geojson.addData(r297525)
      geojson.addData(r297526)
      geojson.addData(r297527)
      geojson.addData(r297528)
      geojson.addData(r297529)
      geojson.addData(r297530)
      geojson.addData(r297531)
      geojson.addData(r297532)
      geojson.addData(r297533)
      geojson.addData(r297534)
      geojson.addData(r297535)
      geojson.addData(r297536)
      geojson.addData(r297537)
      geojson.addData(r297538)
      geojson.addData(r297539)
      geojson.addData(r297540)
      geojson.addData(r297541)
      geojson.addData(r297542)
      geojson.addData(r297543)
      geojson.addData(r297544)
      geojson.addData(r297545)
      geojson.addData(r297546)
      geojson.addData(r297547)
      geojson.addData(r297548)
      geojson.addData(r297549)
      geojson.addData(r297550)
      geojson.addData(r297551)
      geojson.addData(r297552)
      geojson.addData(r297553)
      geojson.addData(r297554)
      geojson.addData(r297555)
      geojson.addData(r297556)
      geojson.addData(r297557)
      geojson.addData(r297558)
      geojson.addData(r297559)
      geojson.addData(r297560)
      geojson.addData(r297561)
      geojson.addData(r297562)
      geojson.addData(r297563)
      geojson.addData(r297564)
      geojson.addData(r297565)
      geojson.addData(r297566)
      geojson.addData(r297567)
      geojson.addData(r297568)
      geojson.addData(r297569)
      geojson.addData(r297570)
      geojson.addData(r297571)
      geojson.addData(r297572)
      geojson.addData(r297573)
      geojson.addData(r297574)
      geojson.addData(r297575)
      geojson.addData(r297576)
      geojson.addData(r297577)
      geojson.addData(r297578)
      geojson.addData(r297579)
      geojson.addData(r297580)
      geojson.addData(r297581)
      geojson.addData(r297582)
      geojson.addData(r297583)
      geojson.addData(r297584)
      geojson.addData(r297585)
      geojson.addData(r297586)
      geojson.addData(r297587)
      geojson.addData(r297588)
      geojson.addData(r297589)
      geojson.addData(r297590)
      geojson.addData(r297591)
      geojson.addData(r297592)
      geojson.addData(r297593)
      geojson.addData(r297594)
      geojson.addData(r297595)
      geojson.addData(r297596)
      geojson.addData(r297597)
      geojson.addData(r297598)
      geojson.addData(r297599)
      geojson.addData(r297600)
      geojson.addData(r297601)
      geojson.addData(r297602)
      geojson.addData(r297603)
      geojson.addData(r297604)
      geojson.addData(r297605)
      geojson.addData(r297606)
      geojson.addData(r297607)
      geojson.addData(r297608)
      geojson.addData(r297609)
      geojson.addData(r297610)
      geojson.addData(r297611)
      geojson.addData(r297612)
      geojson.addData(r297613)
      geojson.addData(r297614)
      geojson.addData(r297615)
      geojson.addData(r297616)
      geojson.addData(r297617)
      geojson.addData(r297618)
      geojson.addData(r297619)
      geojson.addData(r297620)
      geojson.addData(r297621)
      geojson.addData(r297622)
      geojson.addData(r297623)
      geojson.addData(r297624)
      geojson.addData(r297625)
      geojson.addData(r297626)
      geojson.addData(r297627)
      geojson.addData(r297628)
      geojson.addData(r297629)
      geojson.addData(r297630)
      geojson.addData(r297631)
      geojson.addData(r297632)
      geojson.addData(r297633)
      geojson.addData(r297634)
      geojson.addData(r297635)
      geojson.addData(r297636)
      geojson.addData(r297637)
      geojson.addData(r297638)
      geojson.addData(r297639)
      // geojson.addData(r297640)

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