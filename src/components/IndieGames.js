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
                  <game-card
                    title="Cuphead"
                    year="2017"
                    src="Cuphead"
                    active="true"
                    goghref="https://www.gog.com/en/game/cuphead"
                  ></game-card>
                  <!-- https://nichegamer.com/reviews/cuphead-review/ 10 -->
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Cuphead - The Delicious Last Course"
                    year="2022"
                    src="Cuphead - The Delicious Last Course"
                    goghref="https://www.gog.com/en/game/cuphead_the_delicious_last_course"
                  ></game-card>
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
                  <game-card
                    title="Hollow Knight"
                    year="2017"
                    src="Hollow Knight"
                    active="true"
                    goghref="https://www.gog.com/en/game/hollow_knight"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Hollow Knight: Silksong"
                    src="Hollow Knight Silksong"
                    goghref="https://www.gog.com/en/game/hollow_knight_silksong"
                  ></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card class="fill-height" color="blue-grey-lighten-4">
            <v-card-title>Christian Whitehead</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card
                    title="Sonic Mania"
                    year="2017"
                    src="Sonic Mania"
                    active="true"
                    steam="https://store.steampowered.com/app/584400/Sonic_Mania/"
                  ></game-card>
                  <!-- https://nichegamer.com/reviews/sonic-mania-review/ 9 -->
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Freedom Planet 2"
                    year="2022"
                    src="Freedom Planet 2"
                    steam="https://store.steampowered.com/app/595500/Freedom_Planet_2/"
                  ></game-card>
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
                  <game-card
                    title="Ion Fury"
                    year="2019"
                    src="Ion Fury"
                    active="true"
                    goghref="https://www.gog.com/en/game/ion_fury"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Ion Fury: Aftershock"
                    year="2023"
                    src="Ion Fury Aftershock"
                    goghref="https://www.gog.com/en/game/ion_fury_aftershock"
                  ></game-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card class="fill-height" color="blue-grey-lighten-4">
            <v-card-title>Motion Twin</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card
                    title="Dead Cells"
                    year="2018"
                    src="Dead Cells"
                    goghref="https://www.gog.com/en/game/dead_cells"
                  ></game-card>
                  <!-- https://nichegamer.com/reviews/dead-cells-review/ 8.5 -->                  
                </v-col>

                <v-col lg="6">
                  <game-card
                    title="Windblown"
                    year="2024"
                    src="Windblown"
                    steam="https://store.steampowered.com/app/1911610/Windblown/"
                  ></game-card>
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
                  <game-card
                    title="Yooka-Laylee"
                    year="2017"
                    src="Yooka-Laylee"
                    goghref="https://www.gog.com/en/game/yookalaylee"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Yooka-Laylee and the Impossible Lair"
                    year="2019"
                    src="Yooka-Laylee and the Impossible Lair"
                    goghref="https://www.gog.com/en/game/yookalaylee_and_the_impossible_lair"
                  ></game-card>
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
                  <game-card
                    title="Eagle Island Twist"
                    year="2019"
                    src="Eagle Island Twist"
                    active="true"
                    goghref="https://www.gog.com/en/game/eagle_island"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Angry Video Game Nerd I & II Deluxe"
                    year="2020"
                    src="Angry Video Game Nerd I & II Deluxe"
                    active="true"
                    goghref="https://www.gog.com/en/game/angry_video_game_nerd_i_ii_deluxe"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Prison City"
                    year="2023"
                    src="Prison City"
                    active="true"
                    goghref="https://www.gog.com/en/game/prison_city"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Iron Meat"
                    year="2024"
                    src="Iron Meat"
                    steam="https://store.steampowered.com/app/1157740/Iron_Meat/"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Toxic Crusaders"
                    year="2024"
                    src="Toxic Crusaders"
                    steam="https://store.steampowered.com/app/2303850/Toxic_Crusaders/"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="The Transylvania Adventure of Simon Quest"
                    year="2025"
                    src="The Transylvania Adventure of Simon Quest"
                    steam="https://store.steampowered.com/app/2749920/The_Transylvania_Adventure_of_Simon_Quest/"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Knight Terrors"
                    year="2017"
                    src="Knight Terrors"
                    steam="https://store.steampowered.com/app/732770/Knight_Terrors/"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Spectacular Sparky"
                    year="2021"
                    src="Spectacular Sparky"
                    active="true"
                    goghref="https://www.gog.com/en/game/spectacular_sparky"
                  ></game-card>
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
                  <game-card
                    title="Day of the Tentacle"
                    year="1993"
                    src="Day of the Tentacle"
                    goghref="https://www.gog.com/en/game/day_of_the_tentacle_remastered"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Full Throttle"
                    year="1995"
                    src="Full Throttle"
                    goghref="https://www.gog.com/en/game/full_throttle_remastered"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Grim Fandango"
                    year="1998"
                    src="Grim Fandango"
                    goghref="https://www.gog.com/en/game/grim_fandango_remastered"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Psychonauts"
                    year="2005"
                    src="Psychonauts"
                    goghref="https://www.gog.com/en/game/psychonauts"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Brutal Legend"
                    year="2013"
                    src="Brutal Legend"
                    goghref="https://www.gog.com/en/game/brutal_legend"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Broken Age"
                    year="2014"
                    src="Broken Age"
                    goghref="https://www.gog.com/en/game/broken_age"
                  ></game-card>
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
                  <game-card
                    title="Oniken: Unstoppable Edition"
                    year="2014"
                    src="Oniken Unstoppable Edition"
                    goghref="https://www.gog.com/en/game/oniken"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Odallus: The Dark Call"
                    year="2015"
                    src="Odallus The Dark Call"
                    goghref="https://www.gog.com/en/game/odallus_the_dark_call"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Blazing Chrome"
                    year="2019"
                    src="Blazing Chrome"
                    goghref="https://www.gog.com/en/game/blazing_chrome"
                    nichegamerhref="https://nichegamer.com/reviews/blazing-chrome-review/"
                    nichegamercaption="Niche Gamer - 8.5/10"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Vengeful Guardian: Moonrider"
                    year="2023"
                    src="Vengeful Guardian Moonrider"
                    goghref="https://www.gog.com/en/game/vengeful_guardian_moonrider"
                    nichegamerhref="https://nichegamer.com/reviews/vengeful-guardian-moonrider/"
                    nichegamercaption="Niche Gamer - 10/10"
                  ></game-card>
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
                  <game-card
                    title="Bastion"
                    year="2011"
                    src="Bastion"
                    goghref="https://www.gog.com/en/game/bastion"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Transistor"
                    year="2014"
                    src="Transistor"
                    goghref="https://www.gog.com/en/game/transistor"
                    nichegamerhref="https://nichegamer.com/reviews/transistor-review/"
                    nichegamercaption="Niche Gamer Review"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Pyre"
                    year="2017"
                    src="Pyre"
                    goghref="https://www.gog.com/en/game/pyre"
                  ></game-card>
                </v-col>
                <v-col lg="3">
                  <game-card
                    title="Hades"
                    year="2020"
                    src="Hades"
                    nichegamerhref="https://nichegamer.com/reviews/hades-review/"
                    nichegamercaption="Niche Gamer - 9/10"
                  ></game-card>
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
                  <game-card
                    title="Rain World"
                    year="2017"
                    src="Rain World"
                    goghref="https://www.gog.com/en/game/rain_world"
                  ></game-card>
                </v-col>

                <v-col lg="3">
                  <game-card
                    title="Gravity Circuit"
                    year="2023"
                    src="Gravity Circuit"
                    goghref="https://www.gog.com/en/game/gravity_circuit"
                    nichegamerhref="https://nichegamer.com/reviews/gravity-circuit-review/"
                    nichegamercaption="Niche Gamer - 9.5/10"
                  ></game-card>
                  <!-- developer: "Domesticated Ant Games" -->
                  <!-- publisher: "PID Games" -->
                </v-col>

                <v-col lg="3">
                  <game-card
                    title="Berserk Boy"
                    year="2024"
                    src="Berserk Boy"
                    steam="https://store.steampowered.com/app/1561340/Berserk_Boy/"
                  ></game-card>
                </v-col>

                <v-col lg="3">
                  <game-card
                    title="Lords of Exile"
                    year="2024"
                    src="Lords of Exile"
                    steam="https://store.steampowered.com/app/1329360/Lords_of_Exile/"
                  ></game-card>
                  <!-- developer: Squidbit Works -->
                  <!-- publisher: PID Games, PixelHeart -->
                </v-col>

                <v-col lg="3">
                  <game-card
                    title="MULLET MADJACK"
                    year="2024"
                    src="Mullet Mad Jack"
                    steam="https://store.steampowered.com/app/2111190/MULLET_MADJACK/"
                    nichegamerhref="https://nichegamer.com/reviews/mullet-madjack-review/"
                    nichegamercaption="Niche Gamer - 10/10"
                  ></game-card>
                </v-col>

                <v-col lg="3">
                  <game-card
                    title="Mouse"
                    year="2025"
                    src="Mouse"
                    steam="https://store.steampowered.com/app/2416450/MOUSE/"
                  ></game-card>
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
                  <v-card color="blue-grey-lighten-5">
                    <v-img src="assets/gamesps4/Blasphemous.jpg" height="176.55" cover></v-img>
                    <v-card-text><b>Blasphemous (2019)</b></v-card-text>
                    <v-card-actions>
                      <v-btn
                        href="https://www.gog.com/en/game/blasphemous"
                        append-icon="mdi-chevron-right"
                        color="red-lighten-2"
                        text="Purchase"
                        variant="outlined"
                        block
                      ></v-btn>
                    </v-card-actions>

                  </v-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Blasphemous 2"
                    year="2023"
                    src="Blasphemous 2"
                    goghref="https://www.gog.com/en/game/blasphemous_2"
                  ></game-card>
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
                  <game-card
                    title="Ori and the Blind Forest"
                    year="2015"
                    src="Ori and the Blind Forest"
                    goghref="https://www.gog.com/en/game/ori_and_the_blind_forest_definitive_edition"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Ori and the Will of the Wisps"
                    year="2020"
                    src="Ori and the Will of the Wisps"
                    steam="https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/"
                  ></game-card>
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
                  <game-card
                    title="TowerFall Ascension"
                    year="2014"
                    src="TowerFall Ascension"
                    goghref="https://www.gog.com/en/game/towerfall_ascension"
                  ></game-card>
                </v-col>
                <v-col lg="4">
                  <game-card
                    title="Celeste"
                    year="2018"
                    src="Celeste"
                    steam="https://store.steampowered.com/app/504230/Celeste/"
                  ></game-card>
                </v-col>
                <v-col lg="4">
                  <game-card
                    title="Earthblade"
                    src="Earthblade"
                    steam="https://store.steampowered.com/app/2239640/Earthblade/"
                  ></game-card>
                  <!-- developer/publisher: Extremely OK Games, Ltd. -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card class="fill-height" color="blue-grey-lighten-4">
            <v-card-title>DotEmu</v-card-title>
            <v-card-text>
              <v-row>
                <v-col lg="6">
                  <game-card
                    title="TMNT: Shredder's Revenge"
                    year="2022"
                    src="Teenage Mutant Ninja Turtles Shredder's Revenge"
                    steam="https://store.steampowered.com/app/1361510/Teenage_Mutant_Ninja_Turtles_Shredders_Revenge/"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Streets of Rage 4"
                    year="2020"
                    src="Streets of Rage 4"
                    goghref="https://www.gog.com/en/game/streets_of_rage_4"
                  ></game-card>
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
                  <game-card
                    title="Hyper Light Drifter"
                    year="2016"
                    src="Hyper Light Drifter"
                    goghref="https://www.gog.com/en/game/hyper_light_drifter"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Solar Ash"
                    year="2022"
                    src="Solar Ash"
                    steam="https://store.steampowered.com/app/1867530/Solar_Ash/"
                  ></game-card>
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
                  <game-card
                    title="The Messenger"
                    year="2018"
                    src="The Messenger (2018)"
                    goghref="https://www.gog.com/en/game/the_messenger"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Sea of Stars"
                    year="2023"
                    src="Sea of Stars"
                    steam="https://store.steampowered.com/app/1244090/Sea_of_Stars/"
                  ></game-card>
                  <!-- https://nichegamer.com/reviews/sea-of-stars-review/ -->
                </v-col>
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
                  <game-card
                    title="Shantae: Half-Genie Hero"
                    year="2016"
                    src="Shantae Half-Genie Hero"
                    goghref="https://www.gog.com/en/game/shantae_halfgenie_hero_ultimate_edition"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="River City Girls"
                    year="2019"
                    src="River City Girls"
                    goghref="https://www.gog.com/en/game/river_city_girls"
                  ></game-card>
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
                  <game-card
                    title="Shovel Knight: Treasure Trove"
                    year="2015"
                    src="Shovel Knight Treasure Trove"
                    goghref="https://www.gog.com/en/game/shovel_knight"
                  ></game-card>
                </v-col>
                <v-col lg="6">
                  <game-card
                    title="Cyber Shadow"
                    year="2021"
                    src="Cyber Shadow"
                    goghref="https://www.gog.com/en/game/cyber_shadow"
                  ></game-card>
                  <!-- https://nichegamer.com/reviews/cyber-shadow-review/ 8 -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="6">
          <v-card class="fill-height" color="blue-grey-lighten-4">
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