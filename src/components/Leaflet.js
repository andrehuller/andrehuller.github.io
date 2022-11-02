const Leaflet = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card outlined>
            <div id="map" style="width: 100%; height: 875px; z-index: 0;"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
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
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.onResize()
    })
  },
  mounted () {
    this.$nextTick(() => {
      // this.map = L.map('map').setView([25, 0], 2)
      this.map = L.map('map').setView([-24.618588, -51.316993], 8)
      
      L.esri.basemapLayer('Gray').addTo(this.map)
      
      /*
      this.layers = L.control.layers({
        'Gray': L.esri.basemapLayer('Gray').addTo(this.map),
        'Imagery': L.esri.basemapLayer('Imagery'),
        'Topographic': L.esri.basemapLayer('Topographic'),
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
      }).addTo(this.map)
      */

      L.control.defaultExtent()
        .addTo(this.map)
      
      /*
      var printer = L.easyPrint({
        // tileLayer: osmLayer,
        sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
        filename: 'myMap',
        exportOnly: true,
        hideControlContainer: true
      }).addTo(this.map)
      */
      
      var geojson
      /*
      var info = L.control()
      
      info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info') // create a div with a class "info"
        this.update()
        return this._div
      }
      
      // method that we will use to update the control based on feature properties passed
      info.update = function (props) {
        this._div.innerHTML = (props ? props.name : 'Hover over a city')
      }
      
      info.addTo(this.map)
      */

      var info = L.control()
      function createOption (id, text, checked) {
        return '<div style="margin-bottom: 4px;">'
          + '<input type="radio" id="' + id + '" name="drone" value="huey"'
          + (checked ? ' checked' : '')
          + '>'
          + '<label for="' + id + '" style="padding-left: 8px">' + text + '</label>'
          + '</div>'
      }
      info.onAdd = function (map) {
      	this._div = L.DomUtil.create('div', 'leaflet-info') // create a div with a class "info"

        this._div.innerHTML = createOption('populacao', 'População no último censo (2010)', true)
        this._div.innerHTML += createOption('salario', 'Salário médio mensal dos trabalhadores formais')
        this._div.innerHTML += createOption('educacao', 'Taxa de escolarização de 6 a 14 anos de idade')
        this._div.innerHTML += createOption('pib', 'PIB per capita')
        this._div.innerHTML += createOption('saude', 'Mortalidade Infantil')
        this._div.innerHTML += createOption('territorio', 'Área da unidade territorial')
        
      	return this._div
      }
      info.addTo(this.map)

      function createTooltip (layer) {
        var props = layer.feature.properties

        var tooltip = '<b>' + props.name + '</b>' + ': '
        if (document.getElementById("populacao").checked)
          tooltip += props.populacao.toLocaleString('pt-BR') + ' pessoas'
        else if (document.getElementById("salario").checked)
          tooltip += props.salario.toLocaleString('pt-BR') + ' salários mínimos'
        else if (document.getElementById("educacao").checked)
          tooltip += props.educacao + '%'
        else if (document.getElementById("pib").checked)
          tooltip += props.pib.toLocaleString('pt-BR') + ' R$'
        else if (document.getElementById("saude").checked) {
          if (props.saude) {
            tooltip += props.saude.toLocaleString('pt-BR') + ' óbitos por mil nascidos vivos'
          }
        } else if (document.getElementById("territorio").checked)
          tooltip += props.territorio.toLocaleString('pt-BR') + ' km²'

        return tooltip
      }
      
      function highlightFeature(e) {
        var layer = e.target
        
        layer.setStyle({
          weight: 3,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.8
        })
        
        if (!L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront()
        }

        var tooltip = createTooltip(layer)
        
        layer.setTooltipContent(tooltip)
      }
      
      function resetHighlight(e) {
        // geojson.resetStyle(e.target)
        // info.update()
        var layer = e.target
        
        layer.setStyle({
          color: "#ffffff",
          weight: 1,
          fillOpacity: 0.8
        })
      }
      
      var zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds())
      }
      
      function onEachFeature(feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight,
          click: zoomToFeature
        })
        
        var tooltip = createTooltip(layer)
        
        layer.bindTooltip(tooltip, {
          sticky: true
        })
      }
      
      for (var i = 0; i < cities.features.length; i++) {
      	var name = cities.features[i].properties.name

        	cities.features[i].properties.populacao = populacao[name].value
        	cities.features[i].properties.salario = salario[name].value
        	cities.features[i].properties.educacao = educacao[name].value
        	cities.features[i].properties.pib = pib[name].value
        	if ("-".localeCompare(saude[name].value) != 0) {
          	cities.features[i].properties.saude = saude[name].value
          }
        	cities.features[i].properties.territorio = territorio[name].value
      }
      
      function createStyleFunction (propertyName, high, medium, low) {
        return function (feature) {
          var fillColor = null
          if (feature.properties[propertyName]) {
            if (feature.properties[propertyName] > high) {
              fillColor = '#2b8cbe'
            } else if (feature.properties[propertyName] > medium) {
              fillColor = '#7bccc4'
            } else if (feature.properties[propertyName] > low) {
              fillColor = '#bae4bc'
            } else {
              fillColor = '#f0f9e8'
            }
          } else {
            fillColor = '#d9d9d9'
          }

          return {
            fillColor: fillColor,
            color: "#ffffff",
            weight: 1,
            fillOpacity: 0.8
          }
        }
      }

      var stylePopulacao = createStyleFunction("populacao", 18040, 9085, 5046)
      var styleSalario = createStyleFunction("salario", 2.2, 2.1, 1.9)
      var styleEducacao = createStyleFunction("educacao", 98.7, 98.1, 97.2)
      var stylePib = createStyleFunction("pib", 37484.15, 28896.69, 22889.12)
      var styleSaude = createStyleFunction("saude", 21.19, 12.22, 8.01)
      var styleTerritorio = createStyleFunction("territorio", 629.224, 353.331, 216.415)
      
      geojson = L.geoJSON(cities, {
        style: stylePopulacao,
        onEachFeature, onEachFeature
      }).addTo(this.map)
      
      document.getElementById("populacao").addEventListener("change", function () {
        geojson.setStyle(stylePopulacao)
      })
      document.getElementById("salario").addEventListener("change", function () {
        geojson.setStyle(styleSalario)
      })
      document.getElementById("educacao").addEventListener("change", function () {
        geojson.setStyle(styleEducacao)
      })
      document.getElementById("pib").addEventListener("change", function () {
        geojson.setStyle(stylePib)
      })
      document.getElementById("saude").addEventListener("change", function () {
        geojson.setStyle(styleSaude)
      })
      document.getElementById("territorio").addEventListener("change", function () {
        geojson.setStyle(styleTerritorio)
      })
    })
  },
  methods: {
    onResize () {
      if (this.map) {
        this.map.invalidateSize()
      }
    }
  }
}
