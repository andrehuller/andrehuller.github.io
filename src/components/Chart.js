const Chartjs = {
  template: `
    <v-container fluid>
      <v-card>
      <div>
        <canvas id="myChart" height="90px"></canvas>
      </div>
      </v-card>
    </v-container>
  `,
  data: () => ({
    items: [],
    directors: [],
  }),
  mounted: function() {
    this.items = movies

    
    var groupedBy = _.groupBy(this.items, 'director')
    
    var keys = Object.keys(groupedBy).sort()
    var labels = []
    var data = []
    for (var i = 0; i < keys.length; i++) {
      var value = groupedBy[keys[i]].length
      if (value > 1) {
        labels.push(keys[i])
        data.push(value)
      }
    }
    
    console.log(labels)
    console.log(data)

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "# movies",
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
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

  }
}