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

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Soulstice.jpg" height="190" cover></v-img>
            <v-card-text><b>Soulstice (2022)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Sabotage Studio</h2>
      <v-row>
        <!-- https://sabotagestudio.com/presskits/the-messenger/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/The Messenger.png" height="190" cover></v-img>
            <v-card-text><b>The Messenger (2018)</b></v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Picnic Panic.png" height="190" cover></v-img>
            <v-card-text><b>Picnic Panic (2019)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://sabotagestudio.com/presskits/sea-of-stars/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Sea of Stars.png" height="190" cover></v-img>
            <v-card-text><b>Sea of Stars (2023)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://sabotagestudio.com/presskits/sea-of-stars-throes-of-the-watchmaker/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Throes of the Watchmaker.png" height="190" cover></v-img>
            <v-card-text><b>Throes of the Watchmaker (2025)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Dotemu</h2>
      <v-row>
        <!-- https://www.dotemu.com/PressKit/project/Games/TeenageMutantNinjaTurtlesShreddersRevenge -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/TMNTSR.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Shredder’s Revenge</v-card-title>
              <v-card-subtitle>Teenage Mutant Ninja Turtles</v-card-subtitle>
              <template v-slot:append>
                <v-chip>2022</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://tributegames.com/presskit/sheet.php?p=Marvel%20Cosmic%20Invasion -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cosmic Invasion.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>MARVEL Cosmic Invasion</v-card-title>
              <template v-slot:append>
                <v-chip>2025</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.dotemu.com/PressKit/project/Games/NinjaGaidenRagebound#images -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Ninja Gaiden Ragebound.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Ninja Gaiden: Ragebound</v-card-title>
              <template v-slot:append>
                <v-chip>July 31, 2025</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">3D Realms</h2>
      <v-row>
        <!-- screen: https://www.igdb.com/games/54844/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Ion Fury.png" height="190" cover></v-img>
            <v-card-text><b>Ion Fury (2019)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://3drealms.com/press/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cultic.jpg" height="190" cover></v-img>
            <v-card-text><b>Cultic (2022)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/ion-fury-aftershock/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Ion Fury Aftershock.png" height="190" cover></v-img>
            <v-card-text><b>Ion Fury: Aftershock (2023)</b></v-card-text>
          </v-card>
        </v-col>


        <!-- https://3drealms.com/press/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Wrath Aeon of Ruin.png" height="190" cover></v-img>
            <v-card-text><b>Wrath: Aeon of Ruin (2024)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Wishlist</h2>

      <v-row>
        <!-- https://www.igdb.com/games/battle-axe-special-edition/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Battle Axe.png" height="190" cover></v-img>
            <v-card-text><b>Battle Axe (2021)</b></v-card-text>
          </v-card>
        </v-col>
        <!-- Purchased -->

        <!-- https://tributegames.com/presskit/sheet.php?p=SteelAssault -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Steel Assault.png" height="190" cover></v-img>
            <v-card-text><b>Steel Assault (2021)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/gravity-circuit/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Gravity Circuit.jpg" height="190" cover></v-img>
            <v-card-text><b>Gravity Circuit (2023)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/sonic-origins/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Sonic Origins.jpg" height="190" cover></v-img>
            <v-card-text><b>Sonic Origins (2022)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Upcoming</h2>

      <v-row>
        <!-- https://www.igdb.com/games/hollow-knight-silksong/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Hollow Knight Silksong.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Hollow Knight: Silksong (2025)</v-card-title>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.playsidestudios.com/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Mouse PI.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Mouse PI (2025)</v-card-title>
            </v-card-item>
          </v-card>
        </v-col>

	<!-- https://impress.games/press-kit/zenovia-interactive/neon-inferno -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Neon Inferno.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Neon Inferno (2025)</v-card-title>
              <template v-slot:append>
                <v-chip>October 2nd</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://playtoxiccrusaders.com/press -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Toxic Crusaders.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Toxic Crusaders</v-card-title>
              <template v-slot:append>
                <v-chip>Q3 2025</v-chip>
              </template>
            </v-card-item>
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

        <!-- https://www.igdb.com/games/the-banner-saga/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Banner Saga.png" height="256" cover></v-img>
            <v-card-text><b>The Banner Saga (2014)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/resident-evil-0/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Resident Evil 0.jpg" height="256" cover></v-img>
            <v-card-text><b>Resident Evil 0 (2016)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.thelastfaithgame.com/ Kit de Imprensa -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Last Faith.png" height="256" cover></v-img>
            <v-card-text><b>The Last Faith (2023)</b></v-card-text>
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
        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/RoboCop Rogue City.jpg" height="256" cover></v-img>
            <v-card-text><b>RoboCop: Rogue City (2023)</b></v-card-text>
          </v-card>
        </v-col>
        -->

        <!-- https://www.terminals.io/games/captain-blood -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Captain Blood.jpg" height="256" cover></v-img>
            <v-card-text><b>Captain Blood (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/black-myth-wukong/presskit#images -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Black Myth.png" height="256" cover></v-img>
            <v-card-text><b>Black Myth: Wukong (2024)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/clair-obscur-expedition-33 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Clair Obscur Expedition 33.jpg" height="256" cover></v-img>
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

        <!-- https://presskit.taintedgrail.com/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Tainted Grail.jpg" height="256" cover></v-img>
            <v-card-text><b>Tainted Grail: The Fall of Avalon (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/the-blood-of-dawnwalker/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Blood of Dawnwalker.png" height="256" cover></v-img>
            <v-card-text><b>The Blood of Dawnwalker (2026)</b></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Upcoming</h2>

      <v-row>
        <!-- Trailer Thumbnail -->
        <!-- https://simonquest.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Simon Quest.png" height="256" cover></v-img>
            <v-card-text><b>The Transylvania Adventure of Simon Quest (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- Trailer Thumbnail -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/AVGN 8bit.png" height="256" cover></v-img>
            <v-card-text><b>AVGN 8bit (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- http://emberheartgames.com/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Wizordum.png" height="256" cover></v-img>
            <v-card-text><b>Wizordum (2025)</b></v-card-text>
          </v-card>
        </v-col>

        <!-- https://www.bitmapbureau.com/games/terminator-2d-no-fate -->
        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Terminator 2D No Fate.jpg" height="256" cover></v-img>
            <v-card-text><b>Terminator 2D: NO FATE (2025)</b></v-card-text>
          </v-card>
        </v-col>
        -->
      </v-row>

      <v-row>
        <!-- https://gamerant.com/robocop-rogue-city-every-character-from-movies/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/portraits/Rogue City.jpg" cover></v-img>
            <v-card-text><b>RoboCop: Rogue City (2023)</b></v-card-text>
          </v-card>
        </v-col>

        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Terminator 2D.png"  cover></v-img>
            <v-card-text >
              <b>Terminator 2D: NO FATE (2025)</b>
              September 5, 2025
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="4">
          <!-- https://www.igdb.com/games/sonic-mania -->
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Sonic Mania Poster.png"></v-img>
            <v-card-text >
              <b>Sonic Mania (2017)</b>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}