const PersonalRecommendations = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="3">
          <game-card title="Cuphead" year="2017" src="Cuphead" active="true"></game-card>
          <!-- https://nichegamer.com/reviews/cuphead-review/ 10 -->
        </v-col>
        <v-col lg="3">
          <game-card title="Hollow Knight" year="2017" src="Hollow Knight" active="true"></game-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Sonic Mania.jpg" height="176.55" cover></v-img>
            <v-card-text><b>Sonic Mania (2017)</b></v-card-text>
          </v-card>
          <!-- https://nichegamer.com/reviews/sonic-mania-review/ 9 -->
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Ion Fury.jpg" height="176.55" cover></v-img>
            <v-card-text><b>Ion Fury (2019)</b></v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Eagle Island Twist.jpg"  height="176.55" cover></v-img>
            <v-card-text><b>Eagle Island Twist (2019)</b></v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Angry Video Game Nerd I & II Deluxe.jpg" height="176.55" cover></v-img>
            <v-card-text><b>Angry Video Game Nerd I & II Deluxe (2020)</b></v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3">
          <game-card
            title="Prison City"
            year="2023"
            src="Prison City"
            active="true"
            gog="https://www.gog.com/en/game/prison_city"
          ></game-card>
          <!-- https://nichegamer.com/reviews/prison-city-review/ 7/10 -->
        </v-col>
        <v-col lg="3">
          <game-card
            title="Blazing Chrome"
            year="2019"
            src="Blazing Chrome"
            active="true"
            gog="https://www.gog.com/en/game/blazing_chrome"
            nichegamerhref="https://nichegamer.com/reviews/blazing-chrome-review/"
            nichegamercaption="Niche Gamer - 8.5/10"
          ></game-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Spectacular Sparky.jpg" height="176.55" cover></v-img>
            <v-card-text><b>Spectacular Sparky (2021)</b></v-card-text>
          </v-card>
          <!-- https://nichegamer.com/reviews/spectacular-sparky-review/ 8 -->
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Dead Cells.jpg" height="176.55" cover></v-img>
            <v-card-text><b>Dead Cells (2018)</b></v-card-text>
          </v-card>
          <!-- https://nichegamer.com/reviews/dead-cells-review/ 8.5 -->
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Yooka-Laylee.jpg" height="176.55" cover></v-img>
            <v-card-text>
              <b>Yooka-Laylee (2017)</b>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Day of the Tentacle.jpg" height="176.55" cover></v-img>
            <v-card-text>
              <b>Day of the Tentacle (1993)</b>
            </v-card-text>
            <!-- 1993 -->
          </v-card>
        </v-col>
        <v-col lg="3">
          <v-card color="blue-grey-lighten-5">
            <v-img src="assets/gamesps4/Full Throttle.jpg" height="176.55" cover></v-img>
            <v-card-text>
              <b>Full Throttle (1995)</b>
            </v-card-text>
            <!-- 1995 -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}