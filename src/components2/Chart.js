const Chartjs = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="director"
            label="Director"
            :items="directors"
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            @update:modelValue="updateItems"
            clearable hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="year"
            label="Year"
            :items="years"
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            @update:modelValue="updateItems"
            clearable hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="country"
            label="Country"
            :items="countries"
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            @update:modelValue="updateItems"
            clearable hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" lg="3">
          <v-autocomplete
            v-model="genre"
            label="Genre"
            :items="genres"
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            @update:modelValue="updateItems"
            clearable hide-details
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3">
          <indicator
            text="FILMS"
            :value="items.length"
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
      </v-row>
      <v-row>
        <v-col cols="12" lg="12">
          <v-card variant="outlined" style="height: 450px" class="px-3">
            <canvas id="chartDirector"></canvas>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card variant="outlined" style="height: 300px" class="px-3">
            <canvas id="chartYear"></canvas>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card variant="outlined" style="height: 450px" class="px-3">
            <canvas id="chartCountry"></canvas>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card variant="outlined" style="height: 450px" class="px-3">
            <canvas id="chartGenre"></canvas>
          </v-card>
        </v-col>
        <v-col cols="12" lg="12">
          <v-card variant="outlined">
            <v-data-table :items="items" :headers="headers" density="comfortable"></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  data: () => ({
    items: lists,
    headers: [
      {
        title: 'Title',
        key: 'title',
        width: '20%'
      },
      {
        title: 'Director',
        key: 'director',
        width: '20%'
      },
      {
        title: 'Year',
        key: 'year',
        width: '20%'
      },
      {
        title: 'Country',
        key: 'country',
        width: '20%'
      },
      {
        title: 'Genre',
        key: 'genre',
        width: '20%'
      }
    ],
    director: null,
    directors: [],
    year: null,
    years: [],
    country: null,
    countries: [],
    genre: null,
    genres: []
  }),
  mounted () {
    this.createCharts()
  },
  methods: {
    updateItems () {
      this.items = []
      for (var i = 0; i < lists.length; i++) {
        if ((!this.director || this.director.localeCompare(lists[i].director) == 0)
          && (!this.year || this.year.localeCompare(lists[i].year) == 0)
          && (!this.country || lists[i].country.indexOf(this.country) != -1)
          && (!this.genre || lists[i].genre.indexOf(this.genre) != -1)) {
          this.items.push(lists[i])
        }
      }
      
      this.createCharts()
    },
    createCharts () {
      var director = null
      var year = null
      var country = null
      var genre = null
      
      var directorSet = {}
      var yearSet = {}
      var countrySet = {}
      var genreSet = {}

      for (var i = 0; i < this.items.length; i++) {
        director = this.items[i].director
        year = this.items[i].year
        country = this.items[i].country
        genre = this.items[i].genre
        
        if (director.indexOf("&") == -1) {
          directorSet[director] = directorSet[director] ? directorSet[director] + 1 : 1
        } else {
          var array = director.replaceAll(',', '&').split("&")
          for (var k = 0; k < array.length; k++) {
            var c = array[k].trim()
            directorSet[c] = directorSet[c] ? directorSet[c] + 1 : 1
          }
        }
        
        yearSet[year] = yearSet[year] ? yearSet[year] + 1 : 1
        
        if (country.indexOf("-") == -1) {
          countrySet[country] = countrySet[country] ? countrySet[country] + 1 : 1
        } else {
          var array = country.split("-")
          for (var k = 0; k < array.length; k++) {
            var c = array[k]
            countrySet[c] = countrySet[c] ? countrySet[c] + 1 : 1
          }
        }
        
        if (genre.indexOf(",") == -1) {
          genreSet[genre] = genreSet[genre] ? genreSet[genre] + 1: 1
        } else {
          var array = genre.split(",")
          for (var k = 0; k < array.length; k++) {
            var c = array[k].trim()
            genreSet[c] = genreSet[c] ? genreSet[c] + 1 : 1
          }
        }
      }
      
      this.directors = Object.keys(directorSet).sort()
      this.years = Object.keys(yearSet).sort()
      this.countries = Object.keys(countrySet).sort()
      this.genres = Object.keys(genreSet).sort()

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

      labels = []
      data = []
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
              /*
              scales: {
                yAxes: {
                  beginAtZero: true
                }
              },
              */
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

      /* Country */
      var values = []
      for (var i = 0; i < this.countries.length; i++) {
        values.push({
          country: this.countries[i],
          amount: countrySet[this.countries[i]]
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
      /* */
      var values = []
      for (var i = 0; i < this.genres.length; i++) {
        values.push({
          genre: this.genres[i],
          amount: genreSet[this.genres[i]]
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
    }
  }
}
