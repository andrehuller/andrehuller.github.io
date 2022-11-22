const Turf = {
  template: `
    <v-container fluid pa-0>
      <v-row>
        <v-col>
          <div id="map" style="width: 100%; height: calc(100vh - 64px); z-index: 0;"></div><!-- 875px -->
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({

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
      
      this.layers = L.control.layers({
        'Gray': L.esri.basemapLayer('Gray').addTo(this.map),
        'Imagery': L.esri.basemapLayer('Imagery'),
        'Topographic': L.esri.basemapLayer('Topographic'),
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
      }).addTo(this.map)

      L.control.defaultExtent()
        .addTo(this.map)

      var bounds = this.map.getBounds()
      // extent in minX, minY, maxX, maxY order
      // var bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
      var bbox = [-54.6186341398, -26.7168085625, -48.0230667596, -22.5158262864]

      var options = {
        bbox: bbox
      }
      var points = turf.randomPoint(1000, options);
      // var geojson = turf.voronoi(points, options);
      // turf.tin(points, options)
      
      var cellSide = 20;
      var options = {units: 'kilometers'}; // kilometers, miles

      var geojson = turf.hexGrid(bbox, cellSide, options);
      for (var i = 0; i < geojson.features.length; i++) {
        var polygon = geojson.features[i]
        var featureCollection = turf.pointsWithinPolygon(points, polygon)
        geojson.features[i].properties.data = featureCollection.features.length
      }
      
      // turf.squareGrid(bbox, cellSide, options);
      // turf.convex(points);
      
      // L.geoJSON(points).addTo(this.map)
      
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

        // var tooltip = createTooltip(layer)
        // layer.setTooltipContent(tooltip)
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
      
      function onEachFeature(feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight
          // click: zoomToFeature
        })
        
        layer.bindTooltip('<b>Points</b>: ' + feature.properties.data, {
          sticky: true
        })
      }
      
      L.geoJSON(geojson, {
        style: function (feature) {
          var fillColor = null
          var data = feature.properties.data
          fillColor = data > 7 ? '#08589e' :
            data == 6 ? '#2b8cbe' :
            data == 5 ? '#4eb3d3' :
            data == 4 ? '#7bccc4' :
            data == 3 ? '#a8ddb5' :
            data == 2 ? '#ccebc5' :
            data == 1 ? '#e0f3db' :
            '#f7fcf0'
            
          return {
            fillColor: fillColor,
            color: "#ffffff",
            weight: 1,
            fillOpacity: 0.8
          }
        },
        onEachFeature, onEachFeature
      }).addTo(this.map)
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
