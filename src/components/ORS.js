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
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="8">
          <v-card outlined>
            <div id="map" style="width: 100%; height: calc(100vh - 64px - 24px); z-index: 0;"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-container pa-0>
            <v-row>
              <v-col cols="12">
                <v-card outlined>
                  <v-card-title>
                    Jobs
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-data-table
                    :headers="headers"
                    :items="jobs"
                    :items-per-page="5"
                  ></v-data-table>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card outlined>
                  <v-card-title>
                    Vehicles
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-data-table
                    :headers="headersVehicles"
                    :items="vehicles"
                    :items-per-page="5"
                  ></v-data-table>
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
      
      this.optimization()
    })
  },
  data: () => ({
    headers: [
      { text: 'Id', value: 'id', width: '30%' },
      { text: 'Longitude', value: 'location[0]', width: '35%' },
      { text: 'Latitude', value: 'location[1]', width: '35%' }
    ],
    headersVehicles: [
      { text: 'Id', value: 'id', width: '30%' },
      { text: 'Longitude', value: 'start[0]', width: '35%' },
      { text: 'Latitude', value: 'start[1]', width: '35%' }
    ],
    jobs: [],
    vehicles: []
  /*
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
    ],
    vehicles: [
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
    ]
    */
  }),
  methods: {
    onResize () {
      if (this.map) {
        this.map.invalidateSize()
      }
    },
    formatLocation (location) {
      var lng = location[0].toFixed(6)
      var lat = location[1].toFixed(6)
      return lng + ', ' + lat
    },
    optimization () {
      // https://nominatim.openstreetmap.org/search?q=curitiba[hospital]&format=xml&polygon=0&addressdetails=1
      
      // var points = []
      var markers = L.markerClusterGroup()
      
      /*
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
      */
      
      for (var i = 0; i < 15; i++) {
        var lng = L.Util.formatNum(parseFloat(randomPoints[i].lon), 6)
        var lat = L.Util.formatNum(parseFloat(randomPoints[i].lat), 6)
        
        var marker = L.marker([lat, lng]).addTo(this.map)
        
        markers.addLayer(marker)
        
        this.jobs.push({
          "id": i + 1,
          "service": 300,
          "amount": [1],
          "location": [lng, lat],
          "skills": [1]
        })
      }
      
      var greenIcon = new L.Icon({
        iconUrl: './assets/icons/marker-icon-green.png',
        shadowUrl: './assets/icons/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })

      var redIcon = new L.Icon({
        iconUrl: './assets/icons/marker-icon-red.png',
        shadowUrl: './assets/icons/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })      

      // error	"Too many vehicles ( 4 ) in query, maximum is set to 3"
      for (var i = 0; i < 3; i++) {
        var lng = L.Util.formatNum(parseFloat(busStations[i].lon), 6)
        var lat = L.Util.formatNum(parseFloat(busStations[i].lat), 6)
        
        var marker = L.marker([lat, lng], {
          icon: redIcon
        }).addTo(this.map)
        
        this.vehicles.push({
          "id": i + 1,
          "profile": "driving-car",
          "start": [lng, lat],
          "end": [lng, lat],
          "capacity": [5],
          "skills": [1]
        })
        
        markers.addLayer(marker)
      }
      
/*
      for (var i = 0; i < this.vehicles.length; i++) {
        var lng = this.vehicles[i].start[0]
        var lat = this.vehicles[i].start[1]
        
        L.marker([lat, lng], {
          icon: greenIcon
        })
          .addTo(this.map)
          
        lng = this.vehicles[i].end[0]
        lat = this.vehicles[i].end[1]
        L.marker([lat, lng], {
          icon: redIcon
        })
          .addTo(this.map)
      }
*/
      
      this.map.fitBounds(markers.getBounds())
      
      // var bbox = turf.bbox(turf.multiPoint(points))
      // L.marker([bbox[1], bbox[0]]).bindPopup('southWest').addTo(this.map)
      // L.marker([bbox[3], bbox[2]]).bindPopup('northEast').addTo(this.map)

      // extent in minX, minY, maxX, maxY order
      // var bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]
      
      // bounds(southWest, northEast)

      this.calculateRoutes()
    },
    calculateRoutes () {
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
          "vehicles": this.vehicles,
          options: {
            "g": "true"
          }
        }
      }).then(response => {
        var routes = response.data.routes
        for (var i = 0; i < routes.length; i++) {
          var latlngs = decodePolyline(routes[i].geometry, false)
          var color = '#fdc086'
          switch (i % 3) {
            case 0:
              color = '#7fc97f'
              break
            case 1:
              color = '#beaed4'
              break
          }
          
          L.polyline(latlngs, {
            color: color
          }).addTo(this.map)
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    isochrone () {
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
    }
  }
}
