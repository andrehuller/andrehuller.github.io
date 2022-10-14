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
        
        <v-col lg="12">
          <v-card outlined>
            <v-card-text>
              <div id="barChart" align="center"></div>
            </v-card-text>
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
    this.createD3()
    this.createCharts()
  },
  methods: {
    createD3: function () {
      var alphabet = [{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.02782},{"letter":"D","frequency":0.04253},{"letter":"E","frequency":0.12702},{"letter":"F","frequency":0.02288},{"letter":"G","frequency":0.02015},{"letter":"H","frequency":0.06094},{"letter":"I","frequency":0.06966},{"letter":"J","frequency":0.00153},{"letter":"K","frequency":0.00772},{"letter":"L","frequency":0.04025},{"letter":"M","frequency":0.02406},{"letter":"N","frequency":0.06749},{"letter":"O","frequency":0.07507},{"letter":"P","frequency":0.01929},{"letter":"Q","frequency":0.00095},{"letter":"R","frequency":0.05987},{"letter":"S","frequency":0.06327},{"letter":"T","frequency":0.09056},{"letter":"U","frequency":0.02758},{"letter":"V","frequency":0.00978},{"letter":"W","frequency":0.0236},{"letter":"X","frequency":0.0015},{"letter":"Y","frequency":0.01974},{"letter":"Z","frequency":0.00074}]
      
      // Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/bar-chart
function BarChart(data, {
  x = (d, i) => i, // given d in data, returns the (ordinal) x-value
  y = d => d, // given d in data, returns the (quantitative) y-value
  title, // given d in data, returns the title text
  marginTop = 20, // the top margin, in pixels
  marginRight = 0, // the right margin, in pixels
  marginBottom = 30, // the bottom margin, in pixels
  marginLeft = 40, // the left margin, in pixels
  width = 640, // the outer width of the chart, in pixels
  height = 400, // the outer height of the chart, in pixels
  xDomain, // an array of (ordinal) x-values
  xRange = [marginLeft, width - marginRight], // [left, right]
  yType = d3.scaleLinear, // y-scale type
  yDomain, // [ymin, ymax]
  yRange = [height - marginBottom, marginTop], // [bottom, top]
  xPadding = 0.1, // amount of x-range to reserve to separate bars
  yFormat, // a format specifier string for the y-axis
  yLabel, // a label for the y-axis
  color = "currentColor" // bar fill color
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  // Compute default domains, and unique the x-domain.
  if (xDomain === undefined) xDomain = X;
  if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  xDomain = new d3.InternSet(xDomain);

  // Omit any data not present in the x-domain.
  const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

  // Construct scales, axes, and formats.
  const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

  // Compute titles.
  if (title === undefined) {
    const formatValue = yScale.tickFormat(100, yFormat);
    title = i => `${X[i]}\n${formatValue(Y[i])}`;
  } else {
    const O = d3.map(data, d => d);
    const T = title;
    title = i => T(O[i], i, data);
  }

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yLabel));

  const bar = svg.append("g")
      .attr("fill", color)
    .selectAll("rect")
    .data(I)
    .join("rect")
      .attr("x", i => xScale(X[i]))
      .attr("y", i => yScale(Y[i]))
      .attr("height", i => yScale(0) - yScale(Y[i]))
      .attr("width", xScale.bandwidth());

  if (title) bar.append("title")
      .text(title);

  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

  return svg.node();
}

      var chart = BarChart(alphabet, {
        x: d => d.letter,
        y: d => d.frequency,
        xDomain: d3.groupSort(alphabet, ([d]) => -d.frequency, d => d.letter), // sort by descending frequency
        yFormat: "%",
        yLabel: "↑ Frequency",
        width: 1152,
        height: 500,
        color: "steelblue"
      })
      
      document.getElementById("barChart").append(chart)
    },
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
              var array = director.replaceAll(',', '&').split("&")
              for (var k = 0; k < array.length; k++) {
                var c = array[k].trim()
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
                var c = array[k].trim()
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
