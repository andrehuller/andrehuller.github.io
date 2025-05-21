const Games = {
  template: `
    <v-container fluid>
      <v-row>
	<!-- https://eagleislandgame.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Eagle Island Twist.jpg" height="190" cover></v-img>
            <v-card-text><b>Eagle Island Twist (2019)</b></v-card-text>
          </v-card>
        </v-col>

	<!-- https://prisoncitygame.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Prison City.jpg" height="190" cover></v-img>
            <v-card-text><b>Prison City (2023)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/battle-axe-special-edition/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Battle Axe.png" height="190" cover></v-img>
            <v-card-text><b>Battle Axe (2021)</b></v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Soulstice.jpg" height="190" cover></v-img>
            <v-card-text><b>Soulstice (2022)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://simonquest.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Transylvania Adventure of Simon Quest.jpg"  cover></v-img>
            <v-card-text><b>The Transylvania Adventure of Simon Quest (2025)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}