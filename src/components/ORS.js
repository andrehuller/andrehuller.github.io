// https://giscience.github.io/openrouteservice/documentation/Geometry-Decoding.html
function decodePolyline (encodedPolyline, includeElevation) {
  // array that holds the points
  let points = []
  let index = 0
  const len = encodedPolyline.length
  let lat = 0
  let lng = 0
  let ele = 0
  while (index < len) {
    let b
    let shift = 0
    let result = 0
    do {
      b = encodedPolyline.charAt(index++).charCodeAt(0) - 63 // finds ascii
      // and subtract it by 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)

    lat += ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1))
    shift = 0
    result = 0
    do {
      b = encodedPolyline.charAt(index++).charCodeAt(0) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    lng += ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1))

    if (includeElevation) {
      shift = 0
      result = 0
      do {
        b = encodedPolyline.charAt(index++).charCodeAt(0) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      ele += ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1))
    }
    try {
      let location = [(lat / 1E5), (lng / 1E5)]
      if (includeElevation) location.push((ele / 100))
      points.push(location)
    } catch (e) {
      console.log(e)
    }
  }
  return points
}

const ORS = {
  template: `
    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col cols="12" lg="9">
          <div id="map" style="width: 100%; height: calc(100vh - 64px); z-index: 0;"></div>
        </v-col>
        <v-col cols="12" lg="3">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-card-title>
                    Jobs
                  </v-card-title>
                  <v-list class="pa-0">
                    <v-list-item v-for="(item, i) in jobs" :key="i">
                      <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ formatLocation(item) }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card>
                  <v-card-title>
                    Vehicles
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  `,
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.onResize()
    })
  },
  mounted () {
    this.$nextTick(() => {
      // this.map = L.map('map').setView([25, 0], 2)
      this.map = L.map('map') // .setView([-24.618588, -51.316993], 7)
      L.esri.basemapLayer('Gray').addTo(this.map)
      L.control.defaultExtent().addTo(this.map)
      /*
      this.map.on('click', event => {
        var lat = L.Util.formatNum(event.latlng.lat, 6)
        var lng = L.Util.formatNum(event.latlng.lng, 6)
        L.marker(event.latlng)
          .bindPopup('[' + lng + ', ' + lat + ']')
          .addTo(this.map)
        
        axios({
          method: 'post',
          url: 'https://api.openrouteservice.org/v2/isochrones/driving-car',
          headers: {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
            'Authorization': '5b3ce3597851110001cf62487874328b06a74dc59414c1047d781422',
            'Content-Type': 'application/json; charset=utf-8'
          },
          data: {
            locations: [[event.latlng.lng, event.latlng.lat]],
            range: [300, 600]
          }
        })
          .then(response => {
            L.geoJSON(response.data)
              .addTo(this.map)
          })
          .catch(error => {
            console.log(error)
          })
      })
      */
      
      this.optimization()
    })
  },
  data: () => ({
    jobs: [ // [48.701, 1.98935]
      {
        "id": 1,
        "service": 300,
        "amount": [1],
        // "location": [1.98935, 48.701],
        "location": [1.98344, 48.703041],
        "skills": [1],
        "time_windows": [
          [32400, 36000]
        ]
      },
      {
        "id": 2,
        "service": 300,
        "amount": [1],
        "location": [2.03655, 48.61128],
        "skills": [1]
      },
      {
        "id": 3,
        "service": 300,
        "amount": [1],
        "location": [2.39719, 49.07611],
        "skills": [2]
      },
      {
        "id": 4,
        "service": 300,
        "amount": [1],
        "location": [2.41808, 49.22619],
        "skills": [2]
      },
      {
        "id": 5,
        "service": 300,
        "amount": [1],
        "location": [2.28325, 48.5958],
        "skills": [14]
      },
      {
        "id": 6,
        "service": 300,
        "amount": [1],
        "location": [2.89357, 48.90736],
        "skills": [14]
      }
    ]
  }),
  methods: {
    onResize () {
      if (this.map) {
        this.map.invalidateSize()
      }
    },
    formatLocation (item) {
      var lng = item.location[0]
      var lat = item.location[1]
      return '[' + lng + ', ' + lat + ']'
    },
    optimization () {
      // var points = []
      var markers = L.markerClusterGroup()
      
      for (var i = 0; i < this.jobs.length; i++) {
        var lng = this.jobs[i].location[0]
        var lat = this.jobs[i].location[1]
        var marker = L.marker([lat, lng], {
          draggable: true
        })
          .bindPopup('[' + lat + ', ' + lng + ']')
          .addTo(this.map)
        
        markers.addLayer(marker)
        // points.push([lng, lat])

        marker.on('dragend', function (event) {
          var lat = L.Util.formatNum(event.target._latlng.lat, 6)
          var lng = L.Util.formatNum(event.target._latlng.lng, 6)
          
          console.log('[' + lat + ', ' + lng + '] (2)')
        })
      }
      this.map.fitBounds(markers.getBounds())
      
      // var bbox = turf.bbox(turf.multiPoint(points))
      // L.marker([bbox[1], bbox[0]]).bindPopup('southWest').addTo(this.map)
      // L.marker([bbox[3], bbox[2]]).bindPopup('northEast').addTo(this.map)

      // extent in minX, minY, maxX, maxY order
      // var bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
      
      // bounds(southWest, northEast)

      
      // return;

      axios({
        method: 'post',
        url: 'https://api.openrouteservice.org/optimization',
        headers: {
          'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
          'Authorization': '5b3ce3597851110001cf62487874328b06a74dc59414c1047d781422',
          'Content-Type': 'application/json; charset=utf-8'
        },
        data: {
          "jobs": this.jobs,
          "vehicles": [
            {
              "id": 1,
              "profile": "driving-car",
              "start": [2.35044, 48.71764],
              "end": [2.35044, 48.71764],
              "capacity": [4],
              "skills": [1, 14],
              "time_window": [28800, 43200]
            },
            {
              "id": 2,
              "profile": "driving-car",
              "start": [2.35044, 48.71764],
              "end": [2.35044, 48.71764],
              "capacity": [4],
              "skills": [2, 14],
              "time_window": [28800, 43200]
            }
          ],
          options: {
            "g": "true"
          }
        }
      }).then(response => {
        var routes = response.data.routes
        for (var i = 0; i < routes.length; i++) {
          var latlngs = decodePolyline(routes[i].geometry, false)
          console.log(latlngs)
          L.polyline(latlngs).addTo(this.map)
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
