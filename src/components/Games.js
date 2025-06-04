const Games = {
  template: `
    <v-container fluid>
      <v-row>
	<!-- https://eagleislandgame.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Eagle Island Twist.png" height="190" cover></v-img>
            <v-card-text><b>Eagle Island Twist (2019)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://avgngame.com/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/AVGN.png" height="190" cover></v-img>
            <v-card-text><b>Angry Video Game Nerd I & II Deluxe (2020)</b></v-card-text>
          </v-card>
        </v-col>


	<!-- https://prisoncitygame.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Prison City.png" height="190" cover></v-img>
            <v-card-text><b>Prison City (2023)</b></v-card-text>
          </v-card>
        </v-col>

	<!-- https://ironmeat.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Iron Meat.png" height="190" cover></v-img>
            <v-card-text><b>Iron Meat (2024)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- http://www.studiomdhr.com/press/#images -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cuphead.png" height="190" cover></v-img>
            <v-card-text><b>Cuphead (2017)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.teamcherry.com.au/games -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Hollow Knight.png" height="190" cover></v-img>
            <v-card-text><b>Hollow Knight (2017)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/sonic-mania/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Sonic Mania.png" height="190" cover></v-img>
            <v-card-text><b>Sonic Mania (2017)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/54844/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Ion Fury.png" height="190" cover></v-img>
            <v-card-text><b>Ion Fury (2019)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/blasphemous/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blasphemous.png" height="190" cover></v-img>
            <v-card-text><b>Blasphemous (2019)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://joymasher.com/blazing-chrome/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blazing Chrome.jpg" height="190" cover></v-img>
            <v-card-text>
              <b>Blazing Chrome (2019)</b>
            </v-card-text>
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

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Upcoming</h2>

      <v-row>

        <!-- https://www.igdb.com/games/hollow-knight-silksong/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Hollow Knight Silksong.jpg" height="190" cover></v-img>
            <v-card-text><b>Hollow Knight: Silksong (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.playsidestudios.com/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Mouse PI.jpg" height="190" cover></v-img>
            <v-card-text><b>Mouse PI (2025)</b></v-card-text>
          </v-card>
        </v-col>

	<!-- https://impress.games/press-kit/zenovia-interactive/neon-inferno -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Neon Inferno.png" height="190" cover></v-img>
            <v-card-text>
              <b>Neon Inferno (2025)</b>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://www.mobygames.com/game/40541/x-men-origins-wolverine-uncaged-edition/promo/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/X-Men Origins Wolverine.jpg" height="256" cover></v-img>
            <v-card-text><b>X-Men Origins: Wolverine (2009)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/dead-rising-2/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Dead Rising 2.jpg" height="256" cover></v-img>
            <v-card-text><b>Dead Rising 2 (2010)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/batman-arkham-origins/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Batman Arkham Origins.jpg" height="256" cover></v-img>
            <v-card-text><b>Batman: Arkham Origins (2013)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/resident-evil-0/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Resident Evil 0.jpg" height="256" cover></v-img>
            <v-card-text><b>Resident Evil 0 (2016)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/injustice-2/presskit -->
        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Injustice 2.jpg" height="256" cover></v-img>
            <v-card-text><b>Injustice 2 (2017)</b></v-card-text>
          </v-card>
        </v-col>
        -->

        <!-- https://www.playstation.com/es-ar/games/robocop-rogue-city/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/RoboCop Rogue City.jpg" height="256" cover></v-img>
            <v-card-text><b>RoboCop: Rogue City (2023)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.terminals.io/games/captain-blood -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Captain Blood.jpg" height="256" cover></v-img>
            <v-card-text><b>Captain Blood (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/clair-obscur-expedition-33 -->

        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Clair Obscur.png" height="256" cover></v-img>
            <v-card-text><b>Clair Obscur: Expedition 33 (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.scheduleonegame.com/presskit/schedule-one/index.html -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Schedule I.png" height="256" cover></v-img>
            <v-card-text><b>Schedule I (2025)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Upcoming</h2>

      <v-row>
        <!-- https://simonquest.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Transylvania Adventure of Simon Quest.png" height="256" cover></v-img>
            <v-card-text><b>The Transylvania Adventure of Simon Quest (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.bitmapbureau.com/games/terminator-2d-no-fate -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Terminator 2D No Fate.jpg" height="256" cover></v-img>
            <v-card-text><b>Terminator 2D: NO FATE (2025)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}