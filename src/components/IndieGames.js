const IndieGames = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              Studio MDHR
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card title="Cuphead" year="2017" src="Cuphead" active="true"></game-card>
                  <!-- https://nichegamer.com/reviews/cuphead-review/ 10 -->
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Cuphead - The Delicious Last Course.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Cuphead - The Delicious Last Course (2022)</b>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              Team Cherry
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card title="Hollow Knight" year="2017" src="Hollow Knight" active="true"></game-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Hollow Knight Silksong.jpg" height="176.55" cover></v-img>
                   <v-card-text>
                      <b>Hollow Knight: Silksong</b>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Christian Whitehead</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-lighten-5">
                    <v-img src="assets/gamesps4/Sonic Mania.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Sonic Mania (2017)</b></v-card-text>
                  </v-card>
                  <!-- https://nichegamer.com/reviews/sonic-mania-review/ 9 -->
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Freedom Planet 2.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Freedom Planet 2 (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Voidpoint, LLC</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-lighten-5">
                    <v-img src="assets/gamesps4/Ion Fury.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Ion Fury (2019)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Ion Fury Aftershock.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Ion Fury: Aftershock (2023)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              Playtonic
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-lighten-5">
                    <v-img src="assets/gamesps4/Yooka-Laylee.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Yooka-Laylee (2017)</b>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Yooka-Laylee and the Impossible Lair.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Yooka-Laylee and the Impossible Lair (2019)</b>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              The Game Kitchen
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Blasphemous.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Blasphemous (2019)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Blasphemous 2.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Blasphemous 2 (2023)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              Retroware & FreakZone Games
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
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
                  <v-card color="blue-grey-lighten-5">
                    <v-img src="assets/gamesps4/Prison City.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Prison City (2023)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Iron Meat.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Iron Meat (2024)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Toxic Crusaders.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Toxic Crusaders (2024)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/The Transylvania Adventure of Simon Quest.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>The Transylvania Adventure of Simon Quest (2025)</b></v-card-text>
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Knight Terrors.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Knight Terrors (2017)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Spectacular Sparky.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Spectacular Sparky (2021)</b></v-card-text>
                  </v-card>
                  <!-- https://nichegamer.com/reviews/spectacular-sparky-review/ 8 -->
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>
              Double Fine Productions
            </v-card-title>
            <v-card-text>
              <v-row>
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
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Grim Fandango.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Grim Fandango (1998)</b>
                    </v-card-text>
                    <!-- 1998 -->
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Psychonauts.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Psychonauts (2005)</b>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Brutal Legend.jpg" height="176.55" cover></v-img>
                    <v-card-text>
                      <b>Brutal Legend (2013)</b>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Broken Age.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Broken Age (2014)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>JoyMasher</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Oniken Unstoppable Edition.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Oniken: Unstoppable Edition (2014)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Odallus The Dark Call.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Odallus: The Dark Call (2015)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Blazing Chrome.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Blazing Chrome (2019)</b></v-card-text>
                  </v-card>
                  <!-- https://nichegamer.com/reviews/blazing-chrome-review/ 8.5 -->
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Vengeful Guardian Moonrider.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Vengeful Guardian: Moonrider (2023)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Supergiant Games</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Bastion.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Bastion (2011)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Transistor.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Transistor (2014)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Pyre.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Pyre (2017)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Hades.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Hades (2020)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-text>
              <v-row>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Rain World.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Rain World (2017)</b></v-card-text>
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Gravity Circuit.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Gravity Circuit (2023)</b></v-card-text>
                    <!-- developer: "Domesticated Ant Games" -->
                    <!-- publisher: "PID Games" -->

                    <!-- https://nichegamer.com/reviews/gravity-circuit-review/ 9.5 -->
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Berserk Boy.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Berserk Boy (2024)</b></v-card-text>
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Lords of Exile.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Lords of Exile (2024)</b></v-card-text>
                    <!-- developer: Squidbit Works -->
                    <!-- publisher: PID Games, PixelHeart -->
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Mullet Mad Jack.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>MULLET MAD JACK (2024)</b></v-card-text>
                  </v-card>
                </v-col>

                <v-col lg="3">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Mouse.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Mouse (2025)</b></v-card-text>
                  </v-card>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Moon Studios GmbH</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Ori and the Blind Forest.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Ori and the Blind Forest (2015)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Ori and the Will of the Wisps.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Ori and the Will of the Wisps (2020)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="9">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Maddy Makes Games Inc.</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="4">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/TowerFall Ascension.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>TowerFall Ascension (2014)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="4">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Celeste.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Celeste (2018)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="4">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Earthblade.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Earthblade (Coming soon)</b></v-card-text>
                  </v-card>
                  <!-- developer/publisher: Extremely OK Games, Ltd. -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>DotEmu</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Teenage Mutant Ninja Turtles Shredder's Revenge.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>TMNT: Shredder's Revenge (2022)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Streets of Rage 4.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Streets of Rage 4 (2020)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Heart Machine</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Hyper Light Drifter.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Hyper Light Drifter (2016)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Solar Ash.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Solar Ash (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Motion Twin</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Dead Cells.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Dead Cells (2018)</b></v-card-text>
                  </v-card>
                  <!-- https://nichegamer.com/reviews/dead-cells-review/ 8.5 -->
                </v-col>

                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Windblown.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Windblown (2024)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Sabotage Studio</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/The Messenger (2018).jpg" height="176.55" cover></v-img>
                    <v-card-text><b>The Messenger (2018)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Sea of Stars.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Sea of Stars (2023)</b></v-card-text>
                  </v-card>
                </v-col>
                <!-- https://nichegamer.com/reviews/sea-of-stars-review/ -->
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>WayForward</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Shantae Half-Genie Hero.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Shantae: Half-Genie Hero (2016)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/River City Girls.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>River City Girls (2019)</b></v-card-text>
                  </v-card>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Yacht Club Games</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Shovel Knight Treasure Trove.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Shovel Knight: Treasure Trove (2015)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="6">
                  <v-card color="blue-grey-darken-1">
                    <v-img src="assets/gamesps4/Cyber Shadow.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Cyber Shadow (2021)</b></v-card-text>
                  </v-card>
                  <!-- https://nichegamer.com/reviews/cyber-shadow-review/ 8 -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Inti Creates</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card title="Blaster Master Zero" year="2019" src="Blaster Master Zero" active="false"></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card title="Mighty Gunvolt" year="2015" src="Mighty Gunvolt" active="false"></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Lizardcube</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <game-card title="Wonder Boy: The Dragon's Trap" year="2017" src="Wonder Boy The Dragon's Trap" active="false"></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Stoic Studio</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <game-card title="The Banner Saga" year="2014" src="The Banner Saga" active="false"></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Thomas Happ Games LLC</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card title="Axiom Verge" year="2015" src="Axiom Verge" active="false"></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card title="Axiom Verge 2" year="2022" src="Axiom Verge 2" active="false"></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Nicalis, Inc.</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card title="The Binding of Isaac Rebirth" year="2014" src="The Binding of Isaac Rebirth" active="false"></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card title="Cave Story+" year="2011" src="Cave Story+" active="false"></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Subset Games</v-card-title>
            <v-card-text>
              <v-row>

<!-- FTL: Faster Than Light -->

                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/Into the Breach.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Into the Breach (2018)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>

            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Jasozz Games</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/CULTIC.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>CULTIC (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Ember Lab</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/Kena Bridge of Spirits.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Kena: Bridge of Spirits (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Geometric Interactive</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/COCOON.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>COCOON (2023)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="12">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Devolver Digital</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="3">
                  <v-card>
                    <v-img src="assets/gamesps4/Hotline Miami.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Hotline Miami (2012)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card>
                    <v-img src="assets/gamesps4/Enter the Gungeon.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Enter the Gungeon (2016)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card>
                    <v-img src="assets/gamesps4/Katana ZERO.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Katana ZERO (2019)</b></v-card-text>
                  </v-card>
                </v-col>
                <v-col lg="3">
                  <v-card>
                    <v-img src="assets/gamesps4/CARRION.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>CARRION (2020)</b></v-card-text>
                  </v-card>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>TUNIC Team</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/TUNIC.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>TUNIC (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>ArtPlay</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/Bloodstained Ritual of the Night.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Bloodstained: Ritual of the Night (2019)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>91Act</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/BlazBlue Entropy Effect.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>BlazBlue Entropy Effect (2024)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>Pocketpair</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/Never Grave The Witch and The Curse.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Never Grave: The Witch and The Curse</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>ThinkingStars</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/ANNO Mutationem.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>ANNO: Mutationem (2022)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card color="blue-grey-lighten-4">
            <v-card-title>NWO Wars Team</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="12">
                  <v-card>
                    <v-img src="assets/gamesps4/Alex Jones NWO Wars.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Alex Jones: NWO Wars (2024)</b></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

<!--
LIMBO (2011)
INSIDE (2016)
-->
      </v-row>
    </v-container>
  `
}