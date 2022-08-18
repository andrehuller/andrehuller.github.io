const Chartjs = {
  template: `
    <v-container fluid>
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
  mounted: function() {
    this.items = movies
    
    this.createChartDirector()
    this.createChartYear()
    // this.createChartRating()
    this.createChartCountry()
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
      var values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          country: keys[i],
          amount: countries[keys[i]]
        })
        // labels.push(keys[i])
        // data.push(countries[keys[i]])
      }
      values = values.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
      console.log(values)
      for (var i = 0; i < values.length; i++) {
        labels.push(values[i].country)
        data.push(values[i].amount)
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
    }
  }
}
