const Chartjs = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-text>
                <div>FILMS</div>
                <p class="text-h4 text--primary mb-0">
                  {{ films }}
                </p>
                <v-spacer></v-spacer>
              </v-card-text>
              
              <v-avatar class="ma-5" size="48" color="#f87979">
                <v-icon dark>mdi-filmstrip</v-icon>
              </v-avatar>
            </div>
          </v-card>
         </v-col>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-text>
                <div>DIRECTORS</div>
                <p class="text-h4 text--primary mb-0">
                  {{ directors.length }}
                </p>
                <v-spacer></v-spacer>
              </v-card-text>
              
              <v-avatar class="ma-5" size="48" color="#f87979">
                <v-icon dark>mdi-video-vintage</v-icon>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card outlined>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-text>
                <div>COUNTRIES</div>
                <p class="text-h4 text--primary mb-0">
                  {{ countries }}
                </p>
                <v-spacer></v-spacer>
              </v-card-text>
              
              <v-avatar class="ma-5" size="48" color="#f87979">
                <v-icon dark>mdi-earth</v-icon>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="chartDirector" height="90px"></canvas>
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
        
        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="chartRuntime" height="60px"></canvas>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="12" lg="12">
          <v-card outlined>
            <div>
              <canvas id="chartGenre" height="80px"></canvas>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card outlined>
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1"
            >
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    films: null,
    directors: [],
    countries: null,
    headers: [
      {
        text: 'Title',
        value: 'title',
        width: '20%'
      },
      {
        text: 'Director',
        value: 'director',
        width: '20%'
      },
      {
        text: 'Year',
        value: 'year',
        width: '10%'
      },
      {
        text: 'Runtime',
        value: 'runtime',
        width: '10%'
      },
      {
        text: 'Country',
        value: 'country',
        width: '20%'
      },
      {
        text: 'Genre',
        value: 'genre',
        width: '20%'
      }
    ],
    items: []
  }),
  mounted: function() {
    this.lists = lists
    for (var i = 0; i < lists.length; i++) {
      this.items = this.items.concat(lists[i].items)
    }
    this.createCharts()
  },
  methods: {
    createCharts: function () {
      // Chart.defaults.font.weight = 'bold';
      Chart.defaults.color = 'white'
      var count = 0
      var directorSet = {}
      var years = {}
      var countrySet = {}
      var runtimeSet = {}
      var genres = {}

      for (var i = 0; i < this.lists.length; i++) {
        var _movies = this.lists[i].items
        count += _movies.length
        for (var j = 0; j < _movies.length; j++) {
          var item = _movies[j]
          
          // Director
          var director = item.director
          if (director) {
            if (director.indexOf("&") == -1) {
              directorSet[director] = directorSet[director] ? directorSet[director] + 1 : 1
            } else {
              var array = director.split("&")
              for (var k = 0; k < array.length; k++) {
                var c = array[k]
                directorSet[c] = directorSet[c] ? directorSet[c] + 1 : 1
              }
            }
          }
          
          // Year          
          years[item.year] = years[item.year] ? years[item.year] + 1 : 1
          
          // Country
          var country = item.country
          if (country) {
            if (country.indexOf("-") == -1) {
              countrySet[country] = countrySet[country] ? countrySet[country] + 1 : 1
            } else {
              var array = country.split("-")
              for (var k = 0; k < array.length; k++) {
                var c = array[k]
                countrySet[c] = countrySet[c] ? countrySet[c] + 1 : 1
              }
            }
          }
          
          // Runtime
          var runtime = item.runtime
          if (runtime) {
            runtimeSet[runtime] = runtimeSet[runtime] ? runtimeSet[runtime] + 1 : 1
          }
          
          // genre
          var genre = item.genre
          if (genre) {
            if (genre.indexOf(", ") == -1) {
              genres[genre] = genres[genre] ? genres[genre] + 1 : 1
            } else {
              var array = genre.split(", ")
              for (var k = 0; k < array.length; k++) {
                var c = array[k]
                genres[c] = genres[c] ? genres[c] + 1 : 1
              }
            }
          }
        }
      }
      
      this.films = count
      this.directors = Object.keys(directorSet).sort()
      this.years = Object.keys(years).sort()
      this.countries = Object.keys(countrySet).length
      this.genres = Object.keys(genres)
      
      var labels = []
      var data = []
      for (var i = 0; i < this.directors.length; i++) {
        var value = directorSet[this.directors[i]]
        if (value > 4) {
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
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: "Director"
            }
          }
        }
      };
  
      const chartDirector = new Chart(
        document.getElementById('chartDirector'),
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
      // document.getElementById('chartYear').style.backgroundColor = '#FFFFFF';
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
                cubicInterpolationMode: 'monotone',
                tension: 0.4
              }
            ]
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Year"
              }
            }
          }
        }
      );
      
      // Runtime
      var rLabels = []
      var rData = []
      var runtimes = Object.keys(runtimeSet)
      for (var i = 0; i < runtimes.length; i++) {
        var runtime = runtimes[i]
        rLabels.push(runtime)
        rData.push(runtimeSet[runtime])
      }
      new Chart(
        document.getElementById('chartRuntime'), {
        type: 'bar',
        data: {
          labels: rLabels,
          datasets: [
            {
              label: "Runtime",
              // backgroundColor: 'rgba(255, 99, 132, 0.2)',
              backgroundColor: '#f87979',
              // borderColor: 'rgb(255, 99, 132)',
              borderColor: '#f87979',
              data: rData
              // stepped: true
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: "Runtime"
            }
          }/* ,
          scales: {
            y: {
              // beginAtZero: true,
              display: true,
              type: 'logarithmic'
            }
          } */
        }
      });
      
      // Country
      var keys = Object.keys(countrySet)
      var values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          country: keys[i],
          amount: countrySet[keys[i]]
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
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Country"
              }
            },
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
      
      // Genres
      keys = Object.keys(genres)
      values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          "genre": keys[i],
          "amount": genres[keys[i]]
        })
      }
      values = values.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
      
      var labels4 = []
      var data4 = []
      for (var i = 0; i < values.length; i++) {
        var genre = this.genres[i]
        if (values[i].amount > 7) {
          labels4.push(values[i].genre)
          data4.push(values[i].amount)
        }
      }

      new Chart(
        document.getElementById('chartGenre'), {
          type: 'bar',
          data: {
            labels: labels4,
            datasets: [
              {
                label: "Genre",
                data: data4,
                backgroundColor: '#f87979',
                /*
                backgroundColor: [
                  'rgb(255, 99, 132, 0.5)',
                  'rgb(75, 192, 192, 0.5)',
                  'rgb(255, 205, 86, 0.5)',
                  'rgb(201, 203, 207, 0.5)',
                  'rgb(54, 162, 235, 0.5)'
                ]
                */
              }
            ]
          },
          options: {
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: "Genre"
              }
            },
            scales: {
              y: {
                // beginAtZero: true,
                display: true,
                type: 'logarithmic'
              }
            }
          }
        }
      );      
    }
  }
}
