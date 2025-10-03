const Wikimedia = {
  template: `
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.name"
          :lg="item.size ? 6 : 3"
        >
          <v-card class="fill-height d-flex flex-column" color="grey-lighten-5"  flat tile>
            <div>
              <v-img v-if="item.href" height="560" :src="item.href"></v-img>
              <v-img v-else height="475" :src="'assets/wikimedia/' + item.name + '.jpg'"
              	style="border-radius: 8px"
              ></v-img>
            </div>
            <v-card-text class="px-0 pb-0">
              <span v-html="item.attribution"></span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  `,
  data: () => ({
    items: [
      {
        href: 'https://i.ibb.co/q7gMy15/The-39-Steps-1935.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_39_Steps_(1935)_-_poster.jpg">Fox Film Corp.</a>, Public domain, via Wikimedia Commons'
      },
      {
        name: 'Mutiny on the Bounty (1935)',
        href: 'https://i.ibb.co/M9rX3Wz/Mutiny-on-the-Bounty-1935.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Mutiny_on_the_Bounty_poster.jpg">MGM</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/N7bzrxg/The-Adventures-of-Robin-Hood-1938.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_Adventures_of_Robin_Hood_(1938_poster).jpg">English:  Illustrator unknown. Distributed by Warner Bros.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/vj7rxLy/Mr-Smith-Goes-to-Washington-1939.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Mr._Smith_Goes_to_Washington_(1939_poster).jpg">English:  Illustrator unknown; work-for-hire on behalf of Columbia Pictures.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/J35v8zv/His-Girl-Friday-1940.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:His_Girl_Friday_(1940_poster).jpg">English:  &quot;Copyrighted by Columbia Pictures Corp, New York, N. Y. 1939&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/mTvXWP0/Rebecca-1940.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Rebecca_(1939_poster).jpeg">English:  &quot;© 1939 by United Artists Corporation.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/9HmWvKv/The-Maltese-Falcon-1941.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_Maltese_Falcon_(1941_film_poster).jpg">English:  Vitagraph Inc., a subsidiary of Warner Bros. at the time of publication.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/CVg3YCY/Suspicion-1941.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Suspicion_(1941_poster).jpg">William Rose</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/zfWrqBB/To-Be-or-Not-to-Be-1942.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:To_Be_or_Not_to_Be_(1942_film_poster).jpg">English:  &quot;©1942 by the United Artists Corporation&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/tZMXt9c/Double-Indemnity-1944.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Double_Indemnity_(1944_poster).jpg">English:  &quot;Copyright 1944 Paramount Pictures Inc.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/Nx3CR3Y/Laura-1944.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Laura_(1944_film_poster).jpg">English:  &quot;Copyright 1944 by Twentieth Century–Fox Film Corp.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        name: 'The Lost Weekend (1945)',
        href: 'https://i.ibb.co/7CHPdNH/The-Lost-Weekend-1945.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_Lost_Weekend_(1945_film).jpg">English:  Illustrator unknown. &quot;Copyright 1945 Paramount Pictures Inc.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/vzmPCSR/Mildred-Pierce-1945.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Mildred_Pierce_(1945_poster).jpg">English:  &quot;Copyright Warner Bros. Distributing Corporation&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/2qw0MXB/Scarlet-Street-1945.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Edward_G._Robinson_and_Joan_Bennett_in_%27Scarlet_Street%27,_1946.jpg">Universal Studios</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/y5rTqxr/Notorious-1946.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Notorious_(1946_film_poster).jpg">English:  &quot;Copyright 1946 RKO Radio Pictures Inc.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        // name: 'The Treasure of the Sierra Madre (1947)',
        href: 'https://i.ibb.co/Wxknc7V/The-Treasure-of-the-Sierra-Madre-1947.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_Treasure_of_the_Sierra_Madre_(1947_poster).jpg">English:  &quot;Copyright 1947 Warner Bros. Pictures Distributing Corporation.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/qM8WJnS/Letter-from-an-Unknown-Woman-1948.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Letter_from_an_Unknown_Woman_(1948_film_poster).jpg">English:  &quot;Copyrighted 1948 – Universal Pictures Co.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/t2JcDF5/On-the-Town-1949.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:On_the_Town_(1949_poster).jpg">English:  &quot;Copyright 1949 Loew&#039;s Incorporated&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/sgtYjf2/Samson-and-Delilah-1949.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Samson_and_Delilah_1949_poster.jpg">Paramount Pictures</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/L8Bx2yw/All-About-Eve-1950.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:All_About_Eve_(1950_poster_-_retouch).jpg">English:  &quot;Copyright 1950 By Twentieth Century-Fox Film Corp.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/z7zQkMY/Panic-in-the-Streets-1950.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Panic_in_the_Streets_(1950).jpg">20th Century Fox</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/KLKJHKy/Sunset-Boulevard-1950.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Sunset_Boulevard_(1950_poster).jpg">English:  &quot;Copyright 1950 Paramount Pictures Corporation&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/9ZMD4C1/Ace-in-the-Hole-1951.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Ace_in_the_Hole_(1951_film_poster).jpg">English:  &quot;Copyright 1951 Paramount Pictures Corporation.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/Q6Lyy73/A-Streetcar-Named-Desire-1951.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:A_Streetcar_Named_Desire_(1951).jpg">Bill Gold and Warner Bros.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/P9H7znn/Limelight-1952.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Limelight_(1952)_-_original_theatrical_poster.jpeg">English:  Unknown, likely a work-for-hire commissioned by the film studio, United Artists.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/6wWCCpV/Singin-in-the-Rain-1952.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Singin%27_in_the_Rain_(1952_poster).jpg">English:  &quot;Copyright 1952 Loew&#039;s Incorporated&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/tPkf7S1/Dial-M-for-Murder-1954.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Dial_M_For_Murder.jpg">Bill Gold</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/cgk1VLH/To-Catch-a-Thief-1955.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:To_Catch_a_Thief.jpg">Copyrighted by Paramount Pictures, Inc.. Artists(s) not known.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/9tXTg2X/Invasion-of-the-Body-Snatchers-1956.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Invasion_of_the_Body_Snatchers_(1956_poster).jpg">English:  Distributed by Allied Artists Pictures Corporation</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/M5ncRPN/The-Searchers-1956.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:SearchersPoster-BillGold.jpg">Bill Gold</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/THgTqch/Written-on-the-Wind-1956.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:WrittenOnTheWind2.jpg">Reynold Brown</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/JHVjL3g/A-Face-in-the-Crowd-1957.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:A_Face_in_the_Crowd_(1957_poster).jpg">English:  &quot;Copyright 1957 Warner Bros. Pictures Distributing Corporation&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/MCcCvwG/The-7th-Voyage-of-Sinbad-1958.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_7th_Voyage_of_Sinbad_(1958_poster).jpeg">English:  &quot;Copyright © 1958 Columbia Pictures Corporation.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/s60bbQX/Imitation-of-Life-1959.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Imitation_of_Life_1959_poster.jpg">Reynold Brown</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/BLhnPz5/North-by-Northwest-1959.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Northbynorthwest1.jpg">Copyrighted by Loew&#039;s, Incorporated. Incorporates artwork by Saul Bass</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/3FR5QkQ/Rio-Bravo-1959.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Rio_Bravo_(1959_poster).jpg">English:  &quot;Copyright 1959 Warner Bros. Pictures Distributing Company.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/sQjB6rF/Some-Like-It-Hot-1959.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Some_Like_It_Hot_(1959_poster).jpg">English:  Designed by Macario Gómez Quibus. &quot;Copyright 1959 – United Artists Corp.&quot;.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/xfMcK31/The-Apartment-1960.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:The_Apartment_(1960_poster).jpg">English:  &quot;Copyright © 1960 – United Artists Corporation&quot;.</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/1bwNh1H/Psycho-1960.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:Psycho_(1960)_theatrical_poster_(retouched).jpg">English:  Designed by Macario Gómez Quibus. &quot;© Shamley Productions, Inc.&quot;</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/82cbvNG/One-Two-Three-1961.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:One_two_three43.jpg">Saul Bass</a>, Public domain, via Wikimedia Commons'
      },
      {
        href: 'https://i.ibb.co/F3c3zBw/West-Side-Story-1961.jpg',
        attribution: '<a href="https://commons.wikimedia.org/wiki/File:West_Side_Story_1961_film_poster.jpg">English:  Designed by Joe Caroff. &quot;Copyright © 1961 United Artists Corporation.&quot;</a>, Public domain, via Wikimedia Commons'
      }
    ]
  })
}
