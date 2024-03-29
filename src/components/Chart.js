Vue.component('indicator', {
  props: ['text', 'value', 'icon', 'color'],
  template: `
    <v-card outlined>
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-card-text>
          <div>{{ text }}</div>
          <p class="text-h4 text--primary mb-0">
            {{ value }}
          </p>
        </v-card-text>

        <v-avatar class="ma-5" size="48" :color="color">
          <v-icon dark>{{ icon }}</v-icon>
        </v-avatar>
      </div>
    </v-card>
  `
})

const Chartjs = {
  template: `
    <v-container fluid>
      <v-row class="grey lighten-1">
        <v-col cols="12" lg="3">
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            flat clearable solo hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="director"
            label="Director"
            :items="directors"
            prepend-inner-icon="mdi-magnify"
            flat clearable solo hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="year"
            label="Year"
            :items="years"
            prepend-inner-icon="mdi-magnify"
            flat clearable solo hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="country"
            label="Country"
            :items="countries"
            prepend-inner-icon="mdi-magnify"
            flat clearable solo hide-details
          ></v-autocomplete>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" lg="3">
          <indicator
            text="FILMS"
            :value="listFilm.length"
            :color="backgroundColor"
            icon="mdi-filmstrip"
          ></indicator>
        </v-col>
        <v-col cols="12" lg="3">
          <indicator
            text="DIRECTORS"
            :value="directors.length"
            :color="backgroundColor"
            icon="mdi-video-vintage"
          ></indicator>
        </v-col>
        <v-col cols="12" lg="3">
          <indicator
            text="YEARS"
            :value="years.length"
            :color="backgroundColor"
            icon="mdi-calendar"
          ></indicator>
        </v-col>
        <v-col cols="12" lg="3">
          <indicator
            text="COUNTRIES"
            :value="countries.length"
            :color="backgroundColor"
            icon="mdi-earth"
          ></indicator>
        </v-col>
        
        <v-col cols="12" lg="12">
          <v-card outlined style="height: 450px" class="px-3">
            <canvas id="chartDirector"></canvas>
          </v-card>
        </v-col>

        <v-col cols="12" lg="12">
          <v-card outlined style="height: 300px" class="px-3">
            <canvas id="chartYear"></canvas>
          </v-card>
        </v-col>
        
        <v-col cols="12" lg="12">
          <v-card outlined style="height: 450px" class="px-3">
            <canvas id="chartCountry"></canvas>
          </v-card>
        </v-col>

        <v-col cols="12" lg="12">
          <v-card outlined style="height: 450px" class="px-3">
            <canvas id="chartGenre"></canvas>
          </v-card>
        </v-col>
        
        <v-col cols="12" lg="12">
          <v-card outlined>
            <v-data-table
              :headers="headers"
              :items="listFilm"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    backgroundColor: 'rgba(43, 140, 190, 0.5)', // 'rgba(8, 104, 172, 0.6)',
    chartDirector: null,
    chartYear: null,
    chartCountry: null,
    chartGenre: null,
    director: null,
    directors: [],
    year: null,
    years: [],
    country: null,
    countries: [],
    search: null,
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
        width: '20%'
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
  computed: {
    listFilm () {
      var filtered = []
      for (var i = 0; i < this.items.length; i++) {
        if ((!this.director || this.items[i].director.indexOf(this.director) != -1)
          && (!this.year || this.items[i].year == this.year)
          && (!this.country || this.items[i].country.split("-").indexOf(this.country) != -1)) {
          filtered.push(this.items[i])
        }
      }
      return filtered
    }
  },
  watch: {
    listFilm (newList, oldList) {
      this.updateDirector(newList)
      this.updateYear(newList)
      
      this.updateCountry(newList)
      this.updateGenre(newList)
    }
  },
  mounted: function () {
    this.items = lists
  },
  methods: {
    updateDirector: function (items) {
      var directorSet = {}
      
      for (var i = 0; i < items.length; i++) {
        var director = items[i].director
        if (director) {
          if (director.indexOf("&") == -1) {
            directorSet[director] = directorSet[director] ? directorSet[director] + 1 : 1
          } else {
            var array = director.replaceAll(',', '&').split("&")
            for (var k = 0; k < array.length; k++) {
              var c = array[k].trim()
              directorSet[c] = directorSet[c] ? directorSet[c] + 1 : 1
            }
          }
        }
      }
      
      this.directors = Object.keys(directorSet).sort()

      var keys = Object.keys(directorSet)
      var values = [];
      for (var i = 0; i < keys.length; i++) {
        values.push({
          director: keys[i],
          amount: directorSet[keys[i]]
        })
      }
      values = values.sort((a, b) => (a.amount == b.amount) ? a.director.localeCompare(b.director) : ((a.amount < b.amount) ? 1 : -1))
      values = values.slice(0, 60)
      
      var labels = []
      var data = []
      for (var i = 0; i < values.length; i++) {
        labels.push(values[i].director)
        data.push(values[i].amount)
      }
      
      if (this.chartDirector) {
        this.chartDirector.data.labels = labels
        this.chartDirector.data.datasets[0].data = data
        this.chartDirector.update()
      } else {
        this.chartDirector = new Chart(
          document.getElementById('chartDirector'), {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: "# of films",
                  backgroundColor: this.backgroundColor, // '#0868ac', '#f87979',
                  data: data
                }
              ]
            },
            options: {
              // indexAxis: 'y',
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                title: {
                  display: true,
                  text: "Director"
                }
              },
              onClick: (e) => {
                const points = this.chartDirector.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
               
                if (points.length) {
                  const firstPoint = points[0];
                  const label = this.chartDirector.data.labels[firstPoint.index];
                  const value = this.chartDirector.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

                  this.director = label
                }
              }
            }
          }
        )
      }
    },
    updateYear: function (items) {
      var yearSet = {}
      var minYear = Infinity
      var maxYear = 0
      for (var i = 0; i < items.length; i++) {
        var year = items[i].year
        if (year < minYear)
          minYear = year
        if (year > maxYear)
          maxYear = year
        yearSet[year] = yearSet[year] ? yearSet[year] + 1 : 1
      }
      /*
      for (var i = minYear; i <= maxYear; i++) {
        if (!yearSet[i])
          yearSet[i] = 0
      }
      */
      this.years = Object.keys(yearSet).sort()
      var labels = []
      var data = []
      for (var i = 0; i < this.years.length; i++) {
        labels.push(this.years[i])
        data.push(yearSet[this.years[i]])
      }
      // document.getElementById('chartYear').style.backgroundColor = '#FFFFFF';
      if (this.chartYear) {
        this.chartYear.data.labels = labels
        this.chartYear.data.datasets[0].data = data
        this.chartYear.update()
      } else {
        this.chartYear = new Chart(
          document.getElementById('chartYear'), {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: "# of films",
                  data: data,
                  backgroundColor: this.backgroundColor,
                  borderColor: this.backgroundColor,
                  borderWidth: 2,
                  cubicInterpolationMode: 'monotone',
                  tension: 0.4
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  text: "Year"
                }
              },
              onClick: (e) => {
                const points = this.chartYear.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
               
                if (points.length) {
                  const firstPoint = points[0];
                  const label = this.chartYear.data.labels[firstPoint.index];
                  const value = this.chartYear.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

                  this.year = label
                }
              }
            }
          }
        );
      }
    },
    updateCountry: function (items) {
      var countrySet = {}
      for (var i = 0; i < items.length; i++) {
        var country = items[i].country
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
      }
      this.countries = Object.keys(countrySet).sort()
      
      var keys = Object.keys(countrySet)
      var values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          country: keys[i],
          amount: countrySet[keys[i]]
        })
      }
      values = values.sort((a, b) => (a.amount == b.amount) ? a.country.localeCompare(b.country) : ((a.amount < b.amount) ? 1 : -1))
      values = values.slice(0, 60)
      
      var labels = []
      var data = []
      for (var i = 0; i < values.length; i++) {
        labels.push(values[i].country)
        data.push(values[i].amount)
      }
      
      if (this.chartCountry) {
        this.chartCountry.data.labels = labels
        this.chartCountry.data.datasets[0].data = data
        this.chartCountry.update()
      } else {
        this.chartCountry = new Chart(
          document.getElementById('chartCountry'), {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: "# of films",
                  data: data,
                  backgroundColor: this.backgroundColor
                }
              ]
            },
            options: {
              // indexAxis: 'y',
              maintainAspectRatio: false,
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
                  type: 'logarithmic'
                }
              },
              onClick: (e) => {
                const points = this.chartCountry.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
               
                if (points.length) {
                  const firstPoint = points[0];
                  const label = this.chartCountry.data.labels[firstPoint.index];
                  const value = this.chartCountry.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

                  this.country = label
                }
              }
            }
          }
        )
      }
    },
    updateGenre (items) {
      var genres = {}
      
      for (var i = 0; i < items.length; i++) {
        var genre = items[i].genre
        if (genre) {
          if (genre.indexOf(", ") == -1) {
            genres[genre] = genres[genre] ? genres[genre] + 1 : 1
          } else {
            var array = genre.split(", ")
            for (var k = 0; k < array.length; k++) {
              var c = array[k].trim()
              genres[c] = genres[c] ? genres[c] + 1 : 1
            }
          }
        }
      }
      
      this.genres = Object.keys(genres)
      
      keys = Object.keys(genres)
      var values = []
      for (var i = 0; i < keys.length; i++) {
        values.push({
          genre: keys[i],
          amount: genres[keys[i]]
        })
      }
      values = values.sort((a, b) => (a.amount == b.amount) ? a.genre.localeCompare(b.genre) : ((a.amount < b.amount) ? 1 : -1))
      values = values.slice(0, 60)
      
      var labels = []
      var data = []
      for (var i = 0; i < values.length; i++) {
        var genre = this.genres[i]

        labels.push(values[i].genre)
        data.push(values[i].amount)
      }

      if (this.chartGenre) {
        this.chartGenre.data.labels = labels
        this.chartGenre.data.datasets[0].data = data
        this.chartGenre.update()
      } else {
        this.chartGenre = new Chart(
          document.getElementById('chartGenre'), {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: "# of films",
                  data: data,
                  backgroundColor: this.backgroundColor,
                }
              ]
            },
            options: {
              // indexAxis: 'y',
              maintainAspectRatio: false,
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
                  type: 'logarithmic'
                }
              }
            }
          }
        )
      }
    },
    createCharts: function () {
      // Chart.defaults.font.weight = 'bold';
      // Chart.defaults.color = 'white'
    }
  }
}
