const Leaflet = {
  template: `
    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col>
          <div id="map" style="width: 100%; height: calc(100vh - 64px); z-index: 0;"></div>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
/*    plugins: [
      {
        "title": "Leaflet.GestureHandling",
        "subtitle": "Gesture Handling",
        "href": "https://github.com/elmarquis/Leaflet.GestureHandling"
      },
      {
        "title": "Leaflet.defaultextent",
        "subtitle": "Default Extent Button",
        "href": "https://github.com/nguyenning/Leaflet.defaultextent"
      },
      {
        "title": "leaflet-lasso",
        "subtitle": "Lasso selection plugin for Leaflet",
        "href": "https://github.com/zakjan/leaflet-lasso"
      },
      {
        "title": "leaflet-locatecontrol",
        "subtitle": "A customizable locate control",
        "href": "https://github.com/domoritz/leaflet-locatecontrol/"
      },
      {
        "title": "leaflet.wms",
        "subtitle": "Enhanced WMS support for Leaflet",
        "href": "https://github.com/heigeo/leaflet.wms"
      }
    ]
*/
    options: [
      'Salário médio mensal dos trabalhadores formais'
    ]
  }),
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
      
      L.control.lasso({
        position: 'topleft',
        intersect: true
      }).addTo(this.map)
      
      var resetSelectedState = () => {
        this.map.eachLayer(layer => {
          if (layer instanceof L.Marker && !(layer instanceof L.MarkerCluster)) {
            layer.setIcon(new L.Icon.Default());
          } else if (layer instanceof L.Path) {
            // layer.setStyle({ color: '#3388ff' });
            layer.setStyle({ color: '#ffffff' })
          }
        });

        // lassoResult.innerHTML = '';
      }
      
      function setSelectedLayers(layers) {
        resetSelectedState();

        layers.forEach(layer => {
          if (layer instanceof L.Marker && !(layer instanceof L.MarkerCluster)) {
            layer.setIcon(new L.Icon.Default({ className: 'selected '}));
          } else if (layer instanceof L.Path) {
            layer.setStyle({
              weight: 2,
              color: '#666' // '#ff4620' 
            });
            if (!L.Browser.opera && !L.Browser.edge) {
              layer.bringToFront()
            }
          }
        });

        // lassoResult.innerHTML = layers.length ? `Selected ${layers.length} layers` : '';
      }
      
      this.map.on('lasso.finished', event => {
        setSelectedLayers(event.layers)
      })
      
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

        this._div.innerHTML = '<p style="margin-bottom: 4px;"><b>População</b></p>'
        this._div.innerHTML += createOption('populacao', 'População no último censo [2010]', true)
        this._div.innerHTML += '<p style="margin-bottom: 4px;"><b>Trabalho e Rendimento</b></p>'
        this._div.innerHTML += createOption('salario', 'Salário médio mensal dos trabalhadores formais')
        this._div.innerHTML += '<p style="margin-bottom: 4px;"><b>Educação</b></p>'
        this._div.innerHTML += createOption('educacao', 'Taxa de escolarização de 6 a 14 anos de idade')
        
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
            fillOpacity: 0.7
          }
        }
      }

      var stylePopulacao = createStyleFunction("populacao", 18040, 9085, 5046)
      var styleSalario = createStyleFunction("salario", 2.2, 2.1, 1.9)
      var styleEducacao = createStyleFunction("educacao", 98.7, 98.1, 97.2)
      
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
      /*
      L.geoJSON(nucleos)
        .addTo(this.map)
      */

      /*
      var nucleos = {
        "APUCARANA": null,
        "CAMPO MOURÃO": null,
        "CASCAVEL": null,
        "CIANORTE": null,
        "CORNÉLIO PROCÓPIO": null,
        "CURITIBA": null,
        "DOIS VIZINHOS": null,
        "FRANCISCO BELTRÃO": null,
        "GUARAPUAVA": null,
        "IRATI": null,
        "IVAIPORÃ": null,
        "JACAREZINHO": null,
        "LARANJEIRAS DO SUL": null,
        "LONDRINA": null,
        "MARINGÁ": null,
        "PARANAGUÁ": null,
        "PARANAVAÍ": null,
        "PATO BRANCO": null,
        "PITANGA": null,
        "PONTA GROSSA": null,
        // "SEDE": null,
        "TOLEDO": null,
        "UMUARAMA": null,
        "UNIÃO DA VITÓRIA": null
      }
      var keys = Object.keys(municipios)
      for (var i = 0; i < keys.length; i++) {
        var municipio = keys[i]
        var nucleo = municipios[municipio].nucleo
        var geometria = cities.features.find(city => municipio.localeCompare(_.deburr(city.properties.name.toUpperCase())) == 0)
        // console.log(municipio)
        // console.log(nucleo)
        if (geometria) {
          if (nucleos[nucleo]) {
            nucleos[nucleo] = turf.union(nucleos[nucleo], geometria)
          } else {
            nucleos[nucleo] = geometria
          }
        } else {
          console.log(municipio)
        }
      }
      var polygons = []
      keys = Object.keys(nucleos)
      for (var i = 0; i < keys.length; i++) {
        console.log(nucleos[keys[i]])
        polygons.push(turf.polygon(nucleos[keys[i]].geometry.coordinates, {name: keys[i]}))
        L.geoJSON(nucleos[keys[i]])
          .addTo(this.map)
      }
      console.log(turf.featureCollection(polygons))
      */
      
      /*
        Munhoz de Mello -> Munhoz de Melo (Google pode estar com o nome do município errado)
        Santa Cruz do Monte Castelo -> Santa Cruz de Monte Castelo
        Rancho Alegre do Oeste -> Rancho Alegre d'Oeste
        Diamante do Oeste -> Diamante d'Oeste
        São Jorge do Oeste -> São Jorge d'Oeste
        Itapejara do Oeste -> Itapejara d'Oeste
        Bela Vista do Caroba -> Bela Vista da Caroba
        Pérola do Oeste -> Pérola d'Oeste
      */
       	
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
