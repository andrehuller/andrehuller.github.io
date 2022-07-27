const Chartjs = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="8">
          <v-card outlined>
            <div id="map" style="width: 100%; height: 500px; z-index: 0;"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <v-list>
              <v-list-item>
                <v-list-item-avatar color="#f87979">
                  <v-icon dark>mdi-filmstrip</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ items.length }} films</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <v-list>
              <v-list-item>
                <v-list-item-avatar color="#f87979">
                  <v-icon dark>mdi-video-vintage</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ directors }} directors</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <v-list>
              <v-list-item>
                <v-list-item-avatar color="#f87979">
                  <v-icon dark>mdi-earth</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ countries }} countries</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="myChart" height="90px"></canvas>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="chartYear" height="60px"></canvas>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="chartCountry" height="80px"></canvas>
            </div>
          </v-card>
        </v-col>
        <!--
        <v-col cols="12" lg="3">
          <v-card outlined>
            <div>
              <canvas id="chartRating" height="240px"></canvas>
            </div>
          </v-card>
        </v-col>
        -->
      </v-row>
    </v-container>
  `,
  data: () => ({
    items: [],
    directors: null,
    countries: null
  }),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.onResize()
    })
  },
  mounted: function() {
    this.items = movies
    
    this.createChartDirector()
    this.createChartYear()
    // this.createChartRating()
    this.createChartCountry()

    this.$nextTick(() => {
      this.map = L.map('map').setView([0, 0], 2) //.setView([-24.618588, -51.316993], 7) // FIXME

      this.layers = L.control.layers({
        'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
        'Imagery': L.esri.basemapLayer('Imagery'),
        'Topographic': L.esri.basemapLayer('Topographic').addTo(this.map),
      }).addTo(this.map)

      L.control.defaultExtent()
        .addTo(this.map)
      
      this.map.gestureHandling.enable()

      var countries = [
        ['Algeria', 18.968147, 37.2962055, -8.668908, 11.997337],
        ['Australia', -55.3228175, -9.0882278, 72.2460938, 168.2249543],
        ['Brazil', -33.8689056, 5.2842873, -73.9830625, -28.6341164],
        ['Canada', 41.6765556, 83.3362128, -141.00275, -52.3231981],
        ['Czech Republic', 48.5518083, 51.0557036, 12.0905901, 18.859216],
        ['Denmark', 54.4516667, 57.9524297, 7.7153255, 15.5530641],
        ['France', 41.2632185, 51.268318, -5.4534286, 9.8678344],
        ['Germany', 47.2701114, 55.099161, 5.8663153, 15.0419319],
        ['Hong Kong', 22.1193278, 22.4393278, 114.0028131, 114.3228131],
        ['India', 6.5546079, 35.6745457, 68.1113787, 97.395561],
        ['Iran', 24.8465103, 39.7816502, 44.0318908, 63.3332704],
        ['Italy', 35.2889616, 47.0921462, 6.6272658, 18.7844746],
        ['Japan', 20.2145811, 45.7112046, 122.7141754, 154.205541],
        ['Mexico', 19.2726009, 19.5926009, -99.2933416, -98.9733416],
        ['Poland', 49.0020468, 55.0336963, 14.1229707, 24.145783],
        ['Russia', 41.1850968, 82.0586232, 19.6389, 180],
        ['Spain', 27.4335426, 43.9933088, -18.3936845, 4.5918885],
        ['Sweden', 55.1331192, 69.0599699, 10.5930952, 24.1776819],
        // ['United Kingdom', 25.2223186, 25.2241651, 55.1579517, 55.1606916],
        ['United States', 24.9493, 49.5904, -125.0011, -66.9326]
      ]

      for (var i = 0; i < countries.length; i++) {
        var country = countries[i]
        var lat0 = country[1]
        var lat1 = country[2]
        var lng0 = country[3]
        var lng1 = country[4]
        var center = L.bounds([[lng0, lat0], [lng1, lat1]]).getCenter()
        L.marker([center.y, center.x])
          .bindPopup(country[0])
          .addTo(this.map)
      }
    })
  },
  methods: {
    createChartDirector: function () {
      var groupedBy = _.groupBy(this.items, 'director')
    
      var keys = Object.keys(groupedBy).sort()
      var labels = []
      var data = []
      for (var i = 0; i < keys.length; i++) {
        var value = groupedBy[keys[i]].length
        if (value > 3) {
          labels.push(keys[i])
          data.push(value)
        }
      }
      
      this.directors = keys.length
  
      const config = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: "Director",
              // backgroundColor: 'rgba(255, 99, 132, 0.2)',
              backgroundColor: '#f87979',
              // borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
              data: data
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
  
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    },
    createChartYear: function () {
      var groupedBy = _.groupBy(this.items, 'year')
    
      var keys = Object.keys(groupedBy).sort()
      var labels = []
      var data = []
      for (var i = 0; i < keys.length; i++) {
        var value = groupedBy[keys[i]].length
        
        labels.push(keys[i])
        data.push(value)
      }
      
      const config = {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: "Year",
              data: data,
              // backgroundColor: 'rgba(255, 99, 132, 0.2)',
              backgroundColor: '#f87979',
              // borderColor: 'rgb(255, 99, 132)',
              borderColor: '#f87979',
              // fill: false,
              // stepped: true
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
  
      const myChart = new Chart(
        document.getElementById('chartYear'),
        config
      );
    },
    createChartRating: function () {
      var groupedBy = _.groupBy(this.items, 'rating')
    
      var keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      var labels = []
      var data = []
      for (var i = 0; i < keys.length; i++) {
        console.log(keys[i])
        if ("undefined".localeCompare(keys[i]) != 0) {
          if (groupedBy[keys[i]]) {
            var value = groupedBy[keys[i]].length
        
            labels.push(keys[i])
            data.push(value)
          }
        }
      }
      
      const config = {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              label: "Rating",
              data: data,
              // backgroundColor: 'rgba(255, 99, 132, 0.2)',
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
              // borderColor: 'rgb(255, 99, 132)',
              // borderColor: '#f87979'
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
  
      const myChart = new Chart(
        document.getElementById('chartRating'),
        config
      );
    },
    createChartCountry: function () {
      var labels = []
      var data = []

      var countries = {}
      for (var i = 0; i < this.items.length; i++) {
        var country = this.items[i].country
        if (country) {
          if (country.indexOf("-") == -1) {
            countries[country] = countries[country] ? countries[country] + 1 : 1
          } else {
            var array = country.split("-")
            for (var j = 0; j < array.length; j++) {
              var c = array[j]
              countries[c] = countries[c] ? countries[c] + 1 : 1
            }
          }
        }
      }
      var keys = Object.keys(countries)
      for (var i = 0; i < keys.length; i++) {
        labels.push(keys[i])
        data.push(countries[keys[i]])
      }

      this.countries = keys.length
      
      const config = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: "Country",
              data: data,
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              // fill: false,
              // cubicInterpolationMode: 'monotone',
              // tension: 0.4,

              // pointStyle: 'circle',
              // pointRadius: 10,
              // pointHoverRadius: 10
            }
          ]
        },
        options: {
          scales: {
            y: {
              // beginAtZero: true,
              display: true,
              type: 'logarithmic',
            }
          }
        },
      };
  
      const myChart = new Chart(
        document.getElementById('chartCountry'),
        config
      );
    },
    onResize () {
      if (this.map) {
        this.map.invalidateSize()
      }
    }
  }
}