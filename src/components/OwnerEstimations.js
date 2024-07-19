const OwnerEstimations = {
  template: `
    <v-container>
      <v-card variant="outlined"><!-- class="px-3" -->
        <v-card-title>
          Owner Estimations
        </v-card-title>
        <v-card-text style="height: 800px">
          <canvas id="chartOwnerEstimations"></canvas>
        </v-card-text>
      </v-card>
    </v-container>
  `,
  mounted () {
    var estimations = [ // updated: 19/07/2024
      {
        label: 'Hades',
        value: 7940000,
        playTracker: 5350000
      },
      {
        label: 'Hollow Knight',
        value: 6280000,
        playTracker: 6940000
      },
      {
        label: 'Cuphead',
        value: 4840000,
        playTracker: 4380000
      },
      {
        label: 'Hotline Miami',
        value: 4290000,
        playTracker: 9210000
      },
      {
        label: 'Ori and the Will of the Wisps',
        value: 3860000,
        playTracker: 2270000
      },
      {
        label: 'Enter the Gungeon',
        value: 3730000,
        playTracker: 4200000
      },
      {
        label: 'Bastion',
        value: 3160000,
        playTracker: 6930000
      },
      {
        label: 'Dead Cells',
        value: 2300000,
        playTracker: 3520000
      },
      {
        label: 'Katana ZERO',
        value: 1860000,
        playTracker: 2440000
      },
      {
        label: 'Ori and the Blind Forest',
        value: 1860000,
        playTracker: 4890000
      },
      {
        label: 'Transistor',
        value: 1860000
      },
      {
        label: 'Celeste',
        value: 1770000
      },
      {
        label: 'Blasphemous',
        value: 1470000
      },
      {
        label: 'Hades II',
        value: 1330000
      },
      {
        label: 'Bloodstained: Ritual of the Night',
        value: 1240000
      },
      {
        label: 'The Banner Saga',
        value: 986600
      },
      {
        label: 'Hyper Light Drifter',
        value: 911800
      },
      {
        label: 'Shovel Knight: Treasure Trove',
        value: 778800
      },
      {
        label: 'CARRION',
        value: 717500
      },
      {
        label: 'Rain World',
        value: 672200
      },
      {
        label: 'Sonic Mania',
        value: 447700
      },
      {
        label: 'TUNIC',
        value: 366800
      },
      {
        label: 'Pyre',
        value: 357800
      },
      {
        label: 'Yooka-Laylee',
        value: 305500
      },
      {
        label: 'Sea of Stars',
        value: 302100
      },
      {
        label: 'Blasphemous 2',
        value: 299600
      },
      {
        label: 'Axiom Verge',
        value: 272700
      },
      {
        label: 'The Messenger',
        value: 255400
      },
      {
        label: 'The Banner Saga 2',
        value: 228300
      },
      {
        label: 'Ion Fury',
        value: 207500
      },
      {
        label: 'CULTIC',
        value: 181200
      },
      {
        label: 'COCOON',
        value: 171900
      },
      {
        label: 'Angry Video Game Nerd Adventures',
        value: 156900
      },
      {
        label: 'River City Girls',
        value: 120000
      },
      {
        label: 'Mullet Mad Jack',
        value: 114300
      },
      {
        label: 'The Banner Saga 3',
        value: 99100
      },
      {
        label: 'Oniken',
        value: 89900
      },
      {
        label: 'Odallus: The Dark Call',
        value: 89300
      },
      {
        label: 'Wonder Boy: The Dragon\'s Trap',
        value: 85900
      },
      {
        label: 'Gravity Circuit',
        value: 62400
      },
      {
        label: 'Blazing Chrome',
        value: 60200
      },
      {
        label: 'Shantae: Half-Genie Hero',
        value: 50100
      },
      {
        label: 'Freedom Planet 2',
        value: 43300
      },
      {
        label: 'Yooka-Laylee and the Impossible Lair',
        value: 42400
      },
      {
        label: 'Cyber Shadow',
        value: 40600
      },
      {
        label: 'Angry Video Game Nerd II: ASSimilation',
        value: 30400
      },
      {
        label: 'Solar Ash',
        value: 30300
      },
      {
        label: 'Angry Video Game Nerd I & II Deluxe',
        value: 18300
      },
      {
        label: 'Axiom Verge 2',
        value: 16400
      },
      {
        label: 'Contra: Operation Galuga',
        value: 13900
      },
      {
        label: 'Vengeful Guardian: Moonrider',
        value: 11600
      },
      {
        label: 'Berserk Boy',
        value: 7000
      },
      {
        label: 'Eagle Island',
        value: 5400
      },
      {
        label: 'Spectacular Sparky',
        value: 4300
      },
      {
        label: 'Lords of Exile',
        value: 3200
      },
      {
        label: 'Prison City',
        value: 3200
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
            },
            {
              label: 'PlayTracker',
              data: playTracker
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
              type: 'logarithmic'
            }
          }
        }
      }
    )
  }
}