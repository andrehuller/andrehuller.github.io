const OwnerEstimations = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card variant="outlined"><!-- class="px-3" -->
            <v-card-title>
              Owner Estimations
            </v-card-title>
            <v-card-text style="height: 800px">
              <canvas id="chartOwnerEstimations"></canvas>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `,
  mounted () {
    var estimations = [ // updated: 19/07/2024
      {
        label: 'Hollow Knight',
        value: 7950000
      },
      {
        label: 'Hades',
        value: 7860000
      },
      {
        label: 'Vampire Survivors',
        value: 7620000
      },
      {
        label: 'Hollow Knight: Silksong',
        value: 7150000
      },
      {
        label: 'Cuphead',
        value: 5490000
      },
      {
        label: 'Hotline Miami',
        value: 4780000
      },
      {
        label: 'Ori and the Will of the Wisps',
        value: 4190000
      },
      {
        label: 'Enter the Gungeon',
        value: 3970000
      },
      {
        label: 'Bastion',
        value: 3200000
      },
      {
        label: 'Hades II',
        value: 2520000
      },
      {
        label: 'Dead Cells',
        value: 2470000
      },
      {
        label: 'Celeste',
        value: 2210000
      },
      {
        label: 'Katana ZERO',
        value: 2040000
      },
      {
        label: 'Ori and the Blind Forest',
        value: 1950000
      },
      {
        label: 'Blasphemous',
        value: 1920000
      },
      {
        label: 'Megabonk',
        value: 1860000
      },
      {
        label: 'Bloodstained: Ritual of the Night',
        value: 1330000
      },
      {
        label: 'The Banner Saga',
        value: 1000000
      },
      {
        label: 'Rain World',
        value: 939300
      },
      {
        label: 'Shovel Knight: Treasure Trove',
        value: 793300
      },
      {
        label: 'Sonic Mania',
        value: 483800
      },
      {
        label: 'TUNIC',
        value: 480700
      },
      {
        label: 'Blasphemous 2',
        value: 469900
      },
      {
        label: 'Sea of Stars',
        value: 403100
      },
      {
        label: 'Yooka-Laylee',
        value: 321100
      },
      {
        label: 'Axiom Verge',
        value: 292800
      },
      {
        label: 'The Messenger',
        value: 290900
      },
      {
        label: 'Mullet Mad Jack',
        value: 246300
      },
      {
        label: 'The Banner Saga 2',
        value: 232500
      },
      {
        label: 'CULTIC',
        value: 220900
      },
      {
        label: 'Ion Fury',
        value: 213800
      },
      {
        label: 'Angry Video Game Nerd Adventures',
        value: 157000
      },
      {
        label: 'River City Girls',
        value: 131800
      },
      {
        label: 'The Last Faith',
        value: 128900
      },
      {
        label: 'The Banner Saga 3',
        value: 107000
      },
      {
        label: 'Shantae: Half-Genie Hero',
        value: 98500
      },
      {
        label: 'Gravity Circuit',
        value: 95200
      },
      {
        label: 'Oniken',
        value: 91000
      },
      {
        label: 'Odallus: The Dark Call',
        value: 90900
      },
      {
        label: 'Blazing Chrome',
        value: 68100
      },
      {
        label: 'Yooka-Laylee and the Impossible Lair',
        value: 48700
      },
      {
        label: 'Cyber Shadow',
        value: 43500
      },
      {
        label: 'Angry Video Game Nerd II: ASSimilation',
        value: 30800
      },
      {
        label: "Iron Meat",
        value: 28300
      },
      {
        label: 'Axiom Verge 2',
        value: 25200
      },
      {
        label: 'Angry Video Game Nerd I & II Deluxe',
        value: 21800
      },
      {
        label: 'Vengeful Guardian: Moonrider',
        value: 14100
      },
      {
        label: 'Berserk Boy',
        value: 11100
      },
      {
        label: 'Eagle Island Twist',
        value: 5500
      },
      {
        label: 'Lords of Exile',
        value: 5300
      },
      {
        label: 'Spectacular Sparky',
        value: 4900
      },
      {
        label: 'Prison City',
        value: 4800
      }
    ]
    
    var labels = []
    var data = []
    var playTracker = []
    for (var i = 0; i < estimations.length; i++) {
      labels.push(estimations[i].label)
      data.push(estimations[i].value)
      if (estimations[i].playTracker) {
        playTracker.push(estimations[i].playTracker)
      } else {
        playTracker.push(0)
      }
    }
    
    this.chartDirector = new Chart(
      document.getElementById('chartOwnerEstimations'), {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: "Owner Estimations",
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
              text: "Owner Estimations"
            }
          },
          scales: {
            y: {
              // type: 'logarithmic'
            }
          }
        }
      }
    )
  }
}