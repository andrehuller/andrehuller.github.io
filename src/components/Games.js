const Games = {
  template: `
    <v-container fluid>
      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Retroware</h2>
      <v-row>
        <!-- https://eagleislandgame.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Eagle Island Twist.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Eagle Island Twist</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0"><v-icon color="white">mdi-cart</v-icon></v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://avgngame.com/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/AVGN.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Angry Video Game Nerd I & II Deluxe</v-card-title>
              <v-card-subtitle>2020</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://prisoncitygame.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Prison City.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Prison City</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://ironmeat.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Iron Meat.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Iron Meat</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- Trailer Thumbnail -->
        <!-- https://simonquest.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Simon Quest.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>The Transylvania Adventure of Simon Quest</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- Trailer Thumbnail -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/AVGN 8bit.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>AVGN 8-bit</v-card-title>
              <v-card-subtitle>October 23, 2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://impress.games/press-kit/zenovia-interactive/neon-inferno -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Neon Inferno.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Neon Inferno</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
              <template v-slot:append>
                <v-chip>October 2nd</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://playtoxiccrusaders.com/press -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Toxic Crusaders.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Toxic Crusaders</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
              <template v-slot:append>
                <v-chip>December 4th</v-chip>
              </template>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Nightdive Studios</h2>
      <v-row>
        <!-- https://www.igdb.com/games/sin-gold/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/SiN Gold.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>SiN Gold</v-card-title>
              <v-card-subtitle>1998</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0"><v-icon color="white">mdi-cart</v-icon></v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/turok--1/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Turok Remastered.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Turok Remastered</v-card-title>
              <v-card-subtitle>2015</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/turok-2-seeds-of-evil/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Turok 2.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Turok 2: Seeds of Evil</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
            <!-- <v-card-text>Remaster of Turok 2: Seeds of Evil (1998)</v-card-text> -->
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/blood-fresh-supply/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blood Fresh Supply.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Blood: Fresh Supply</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>


        <!-- https://www.igdb.com/games/doom-64--1/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Doom 64.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Doom 64</v-card-title>
              <v-card-subtitle>2020</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0"><v-icon color="white">mdi-cart</v-icon></v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/powerslave-exhumed/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/PowerSlave Exhumed.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>PowerSlave: Exhumed</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/quake-ii--1/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Quake II.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Quake II</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.gogdb.org/product/1801749856 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Star Wars Dark Forces Remaster.webp" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>STAR WARS™: Dark Forces Remaster</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.gogdb.org/product/1536913668 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Outlaws + Handful of Missions Remaster.webp" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Outlaws + Handful of Missions: Remaster</v-card-title>
              <v-card-subtitle>November 20, 2025 </v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
            
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card>
            <v-card-text>
If you own Heretic: Shadow of the Serpent Riders, Hexen: Beyond Heretic and/or Hexen: Deathkings of the Dark Citadel, you'll receive Heretic + Hexen for free.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">DotEmu</h2>
      <v-row>
        <!-- https://www.dotemu.com/PressKit/project/Games/TeenageMutantNinjaTurtlesShreddersRevenge -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/TMNTSR.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Shredder’s Revenge</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://tributegames.com/presskit/sheet.php?p=Marvel%20Cosmic%20Invasion -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cosmic Invasion.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>MARVEL Cosmic Invasion</v-card-title>
              <v-card-subtitle>Q4 2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
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
              <v-card-subtitle>July 31, 2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/shinobi-art-of-vengeance -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Shinobi Art of Vengeance.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Shinobi: Art of Vengeance</v-card-title>
              <v-card-subtitle>Aug 29, 2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/streets-of-rage-4/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Streets of Rage 4.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Streets of Rage 4</v-card-title>
              <v-card-subtitle>2020</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.dotemu.com/PressKit/project/Games/Absolum -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Absolum.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Absolum</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Microids</h2>
      <v-row>
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Syberia Remastered.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Syberia: Remastered</v-card-title>
              <v-card-subtitle>Q4 2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/amerzone-the-explorers-legacy--1/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Amerzone.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Amerzone: The Explorer's Legacy</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Syberia The World Before.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Syberia: The World Before</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Asterix & Obelix Slap Them All.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Asterix & Obelix: Slap Them All! (2021)</v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
        -->

        <!-- https://www.igdb.com/games/asterix-and-obelix-xxl-2/presskit -->
        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Astérix & Obélix XXL 2.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Astérix & Obélix XXL 2 (2018)</v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
        -->

        <!--
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Smurfs - Dreams.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>The Smurfs - Dreams (2024)</v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
        -->
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Bitmap Bureau</h2>
      <v-row>
        <!-- https://www.igdb.com/games/battle-axe-special-edition/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Battle Axe.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Battle Axe</v-card-title>
              <v-card-subtitle>2021</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/xeno-crisis/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Xeno Crisis.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Xeno Crisis</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
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
            <v-card-item>
              <v-card-title>Ion Fury</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://3drealms.com/press/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cultic.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Cultic</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/ion-fury-aftershock/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Ion Fury Aftershock.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Ion Fury: Aftershock</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://3drealms.com/press/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Wrath Aeon of Ruin.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Wrath: Aeon of Ruin</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0"><v-icon color="white">mdi-cart</v-icon></v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Sabotage Studio</h2>
      <v-row>
        <!-- https://sabotagestudio.com/presskits/the-messenger/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/The Messenger.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>The Messenger</v-card-title>
              <v-card-subtitle>2018</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Picnic Panic.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Picnic Panic</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://sabotagestudio.com/presskits/sea-of-stars/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Sea of Stars.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Sea of Stars</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://sabotagestudio.com/presskits/sea-of-stars-throes-of-the-watchmaker/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/sabotage/screen/Throes of the Watchmaker.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Throes of the Watchmaker</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Yacht Club Games</h2>
      <v-row>
        <!-- https://www.gogdb.org/product/1207664823 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Shovel Knight Treasure Trove.webp" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Shovel Knight: Treasure Trove</v-card-title>
              <v-card-subtitle>2014</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.gogdb.org/product/1089614850 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cyber Shadow.webp" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Cyber Shadow</v-card-title>
              <v-card-subtitle>2021</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="4">
          <h2>Rare</h2>
        </v-col>
        <v-col lg="4">
          <h2>Inti Creates</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Perfect Dark Zero.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Perfect Dark Zero</v-card-title>
              <v-card-subtitle>2005</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/blaster-master-zero/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blaster Master Zero.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Blaster Master Zero</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>



      <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Others</h2>
      <v-row>
        <!-- http://www.studiomdhr.com/press/#images -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Cuphead.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Cuphead</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/full-throttle-remastered/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Full Throttle Remastered.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Full Throttle Remastered</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.teamcherry.com.au/games -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Hollow Knight.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Hollow Knight</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#E5E4E2" size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/sonic-mania/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/screenshots/Sonic Mania.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Sonic Mania</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#E5E4E2" size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/blasphemous/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blasphemous.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Blasphemous</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#ffd700" size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://joymasher.com/blazing-chrome/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Blazing Chrome.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Blazing Chrome</v-card-title>
              <v-card-subtitle>2019</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#E5E4E2" size="small" class="diamond-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Soulstice.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Soulstice</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#ffd700" size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/gravity-circuit/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Gravity Circuit.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Gravity Circuit</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#ffd700" size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://berserkboygames.com/games-berserk-boy -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Berserk Boy.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Berserk Boy</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#c0c0c0" size="small" class="silver-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Spectacular Sparky.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Spectacular Sparky</v-card-title>
              <v-card-subtitle>2021</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#c0c0c0" size="small" class="silver-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/252445/presskit -->
        <!-- release date: 14/05/2024 -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Mullet Madjack.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Mullet Madjack</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#84ad00" size="small" rounded="0">
                  <v-icon color="white">mdi-cart</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://tributegames.com/presskit/sheet.php?p=SteelAssault -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Steel Assault.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Steel Assault</v-card-title>
              <v-card-subtitle>2021</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/forgive-me-father/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Forgive Me Father.png" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Forgive Me Father</v-card-title>
              <v-card-subtitle>2021</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/forgive-me-father-2/presskit -->
        <!-- release date: 23/10/2024 -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Forgive Me Father 2.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Forgive Me Father 2</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://www.igdb.com/games/hollow-knight-silksong/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Hollow Knight Silksong.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Hollow Knight: Silksong</v-card-title>
              <v-card-subtitle>September 4th, 2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.playsidestudios.com/ -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Mouse PI.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Mouse PI</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
              <template v-slot:append>
                <v-avatar size="small">
                  <v-icon>mdi-progress-clock</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/sonic-origins/presskit -->
        <v-col lg="3">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Sonic Origins.jpg" height="190" cover></v-img>
            <v-card-item>
              <v-card-title>Sonic Origins</v-card-title>
              <v-card-subtitle>2022</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://www.mobygames.com/game/40541/x-men-origins-wolverine-uncaged-edition/promo/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/X-Men Origins Wolverine.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>X-Men Origins: Wolverine</v-card-title>
              <v-card-subtitle>2009</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/dead-rising-2/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Dead Rising 2.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Dead Rising 2</v-card-title>
              <v-card-subtitle>2010</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#ffd700" size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/resident-evil-0/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Resident Evil 0.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Resident Evil 0</v-card-title>
              <v-card-subtitle>2016</v-card-subtitle>
              <template v-slot:append>
                <v-avatar color="#ffd700" size="small" class="gold-avatar">
                  <v-icon color="white">mdi-star</v-icon>
                </v-avatar>
              </template>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/batman-arkham-origins/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Batman Arkham Origins.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Batman: Arkham Origins</v-card-title>
              <v-card-subtitle>2013</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/the-banner-saga/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Banner Saga.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>The Banner Saga</v-card-title>
              <v-card-subtitle>2014</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.thelastfaithgame.com/ Kit de Imprensa -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Last Faith.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>The Last Faith</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
            </v-card-item>
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
            <v-card-item>
              <v-card-title>Captain Blood</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/alice-madness-returns/presskit -->
        <!-- Remaster of American McGee's Alice (2000) -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Alice Madness Returns.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Alice: Madness Returns</v-card-title>
              <v-card-subtitle>2011</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/black-myth-wukong/presskit#images -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Black Myth.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Black Myth: Wukong</v-card-title>
              <v-card-subtitle>2024</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/clair-obscur-expedition-33 -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Clair Obscur Expedition 33.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Clair Obscur: Expedition 33</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.scheduleonegame.com/presskit/schedule-one/index.html -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Schedule I.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Schedule I</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://presskit.taintedgrail.com/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Tainted Grail.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Tainted Grail: The Fall of Avalon</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/the-blood-of-dawnwalker/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/The Blood of Dawnwalker.png" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>The Blood of Dawnwalker</v-card-title>
              <v-card-subtitle>2026</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://www.igdb.com/games/star-wars-shadows-of-the-empire/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Shadows of the Empire.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Shadows of the Empire</v-card-title>
              <v-card-subtitle>1997</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- https://www.igdb.com/games/star-wars-episode-i-racer/presskit -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Star Wars Racer.jpg" height="256" cover></v-img>
            <v-card-item>
              <v-card-title>Star Wars Racer</v-card-title>
              <v-card-subtitle>1999</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!-- https://gamerant.com/robocop-rogue-city-every-character-from-movies/ -->
        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/portraits/Rogue City.jpg" cover></v-img>
            <v-card-item>
              <v-card-title>RoboCop: Rogue City</v-card-title>
              <v-card-subtitle>2023</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col lg="4">
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Terminator 2D.png"  cover></v-img>
            <v-card-item>
              <v-card-title>Terminator 2D: NO FATE</v-card-title>
              <v-card-subtitle>September 5, 2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="4">
          <!-- https://www.igdb.com/games/sonic-mania -->
          <v-card class="fill-height d-flex flex-column">
            <v-img src="assets/games/Sonic Mania Poster.png"></v-img>
            <v-card-item>
              <v-card-title>Sonic Mania</v-card-title>
              <v-card-subtitle>2017</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>

        <!-- http://emberheartgames.com/ -->
        <v-col lg="4">
          <v-card>
            <v-img src="assets/games/Wizordum.png" height="330" cover></v-img>
            <v-card-item>
              <v-card-title>Wizordum</v-card-title>
              <v-card-subtitle>2025</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  `
}