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
                  <v-list-item-title>{{ films }} films</v-list-item-title>
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
                  <v-list-item-title>{{ directors.length }} directors</v-list-item-title>
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
      </v-row>
    </v-container>
  `,
  data: () => ({
    films: null,
    directors: [],
    countries: null
  }),
  mounted: function() {
    this.lists = lists
    
    this.createCharts()
  },
  methods: {
    createCharts: function () {

      var count = 0
      var directorHist = {}
      var years = {}
      var countries = {}

      for (var i = 0; i < this.lists.length; i++) {
        var _movies = this.lists[i].items
        count += _movies.length
        for (var j = 0; j < _movies.length; j++) {
          var item = _movies[j]
          
          if (directorHist[item.director]) {
            directorHist[item.director] = directorHist[item.director] + 1
          } else {
            directorHist[item.director] = 1
          }
          
          years[item.year] = years[item.year] ? years[item.year] + 1 : 1
          
          // country
          var country = item.country
          if (country) {
            if (country.indexOf("-") == -1) {
              countries[country] = countries[country] ? countries[country] + 1 : 1
            } else {
              var array = country.split("-")
              for (var k = 0; k < array.length; k++) {
                var c = array[k]
                countries[c] = countries[c] ? countries[c] + 1 : 1
              }
            }
          }          
        }
      }
      
      this.films = count
      this.directors = Object.keys(directorHist).sort()
      this.years = Object.keys(years).sort()
      this.countries = Object.keys(countries).length
      
      var labels = []
      var data = []
      for (var i = 0; i < this.directors.length; i++) {
        var value = directorHist[this.directors[i]]
        if (value > 3) {
          labels.push(this.directors[i])
          data.push(value)
        }
      }
  
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
      
      // Year
      var labels2 = []
      var data2 = []
      for (var i = 0; i < this.years.length; i++) {
        var year = this.years[i]
        
        labels2.push(year)
        data2.push(years[year])
      }
      
      new Chart(
        document.getElementById('chartYear'), {
          type: 'line',
          data: {
            labels: labels2,
            datasets: [
              {
                label: "Year",
                data: data2,
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
        }
      );
      
      // Country
      var keys = Object.keys(countries)
      var values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          country: keys[i],
          amount: countries[keys[i]]
        })
      }
      values = values.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
      
      var labels3 = []
      var data3 = []
      for (var i = 0; i < values.length; i++) {
        labels3.push(values[i].country)
        data3.push(values[i].amount)
      }
      
      new Chart(
        document.getElementById('chartCountry'), {
          type: 'bar',
          data: {
            labels: labels3,
            datasets: [
              {
                label: "Country",
                data: data3,
                backgroundColor: '#f87979',
                borderColor: '#f87979'
              }
            ]
          },
          options: {
            scales: {
              y: {
                // beginAtZero: true,
                display: true,
                type: 'logarithmic'
              }
            }
          },
        }
      );
    }
  }
}
