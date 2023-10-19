const listGames = [
  {
    "name": "Super Metroid",
    "developer": "Nintendo",
    "year": 1994,
    "src": "Super Metroid.jpg",
    "rating": 5,
    "difficulty": 3
  },
  {
    "name": "Super Ghouls 'n Ghosts",
    "developer": "Capcom",
    "year": 1991,
    "src": "Super Ghouls 'n Ghosts.jpg",
    "rating": 5,
    "difficulty": 4
  },
  {
    "name": "Super Street Fighter II",
    "subtitle": "The New Challengers",
    "developer": "Capcom",
    "year": 1993,
    "src": "Super Street Fighter II - The New Challengers.jpg",
    "rating": 5,
    "difficulty": 4
  },
  {
    "name": "Contra III: The Alien Wars",
    "developer": "Konami",
    "year": 1992,
    "src": "Contra III: The Alien Wars.jpg",
    "rating": 5,
    "difficulty": 3.5
  },
  {
    "name": "Turtles in Time",
    "developer": "Konami",
    "year": 1991,
    "src": "Turtles in Time.png",
    "rating": 4.5,
    "difficulty": 3.5
  },
  {
    "name": "Donkey Kong Country", // Finished No Save State
    "developer": "Rare",
    "year": 1994,
    "src": "Donkey Kong Country.jpg",
    "rating": 4.5,
    "difficulty": 3
  },
  {
    "name": "Donkey Kong Country 2", // Finished 102 %
    "subtitle": "Diddy's Kong Quest",
    "developer": "Rare",
    "year": 1995,
    "src": "Donkey Kong Country 2: Diddy's Kong Quest.png",
    "rating": 4.5,
    "difficulty": 3.5
  },
  {
    "name": "Donkey Kong Country 3",
    "subtitle": "Dixie Kong's Double Trouble!",
    "developer": "Rare",
    "year": 1996,
    "src": "Donkey Kong Country 3.jpg",
    "rating": 4.5,
    "difficulty": 3
  },
  {
    "name": "Mega Man X",
    "developer": "Capcom",
    "year": 1993,
    "src": "Mega Man X.jpg",
    "rating": 4.5,
    "difficulty": 3.5
  },
  {
    "name": "Super Mario World",
    "developer": "Nintendo EAD",
    "year": 1991,
    "src": "Super Mario World.png",
    "rating": 4.5,
    "difficulty": 2.5
  },
  {
    "name": "Wild Guns",
    "developer": "Natsume",
    "year": 1994,
    "src": "Wild Guns.png",
    "rating": 4.5,
    "difficulty": 4
  },
  {
    "name": "Hagane",
    "developer": "CAProduction",
    "year": 1994,
    "src": "Hagane.jpg",
    "rating": 4.5,
    "difficulty": 4
  },
  {
    "name": "Super Star Wars",
    "developer": "LucasArts",
    "year": 1992,
    "src": "Super Star Wars.jpg",
    "rating": 4.5,
    "difficulty": 4
  },
  {
    "name": "Animaniacs",
    "developer": "Konami",
    "year": 1994,
    "src": "Animaniacs.png",
    "rating": 4,
    "difficulty": 4
  },
  {
    "name": "Maui Mallard in Cold Shadow", // Prefer (U) version
    "developer": "Disney Interactive Studios",
    "year": 1995,
    "src": "Maui Mallard in Cold Shadow.jpg",
    "rating": 4,
    "difficulty": 3
  },
  {
    "name": "Super Mario Kart",
    "developer": "Nintendo",
    "year": 1992,
    "src": "Super Mario Kart.jpg",
    "rating": 4,
    "difficulty": 2.5
  },
  {
    "name": "Zombies Ate My Neighbors",
    "developer": "LucasArts",
    "year": 1993,
    "src": "Zombies Ate My Neighbors.png",
    "rating": 4,
    "difficulty": 2.5
  },
  {
    "name": "Metal Warriors",
    "developer": "LucasArts",
    "year": 1995,
    "src": "Metal Warriors.jpg",
    "rating": 4,
    "difficulty": 3
  },
  {
    "name": "Goof Troop",
    "developer": "Capcom",
    "year": 1993,
    "src": "Goof Troop.jpg",
    "rating": 4,
    "difficulty": 2
  },
  {
    "name": "Castlevania: Dracula X", // Missing: Good Ending
    "developer": "Konami",
    "year": 1995,
    "src": "Castlevania: Dracula X.png",
    "rating": 4,
    "difficulty": 3.5
  },
  {
    "name": "Super Double Dragon",
    "developer": "Technōs Japan",
    "year": 1992,
    "src": "Super Double Dragon.jpg",
    "rating": 4,
    "difficulty": 3
  },
  {
    "name": "The Empire Strikes Back",
    "developer": "LucasArts",
    "year": 1993,
    "src": "Super Star Wars: The Empire Strikes Back.png",
    "rating": 4,
    "difficulty": 4
  }, // Return of the Jedi - Some of the bosses are really terrible
  {
    "name": "Aladdin", // * 
    "developer": "Capcom",
    "year": 1993,
    "src": "Aladdin.jpg",
    "rating": 3.5,
    "difficulty": 2.5
  },
  {
    "name": "Mighty Morphin Power Rangers", // Short game - 5 stages + 2/3 bosses
    "developer": "Natsume",
    "src": "Mighty Morphin Power Rangers.jpg",
    "rating": 3.5, // *
    "difficulty": 2
  },
  {
    "name": "Mighty Morphin Power Rangers: The Movie",
    "developer": "Natsume",
    "src": "Mighty Morphin Power Rangers: The Movie.jpg",
    "rating": 3.5, // *
    "difficulty": 2
  },
  {
    "name": "Super Castlevania IV",
    "developer": "Konami",
    "src": "Super Castlevania IV.jpg",
    "rating": 3.5,
    "difficulty": 2.5
  },
  {
    "name": "Yoshi's Island",
    "developer": "Nintendo",
    "year": "1995",
    "src": "Yoshi's Island.jpg",
    "rating": 4,
    "difficulty": 2.5
  },
  {
    "name": "The Mask", // Really Tough Bosses
    "developer": "Black Pearl Software",
    "src": "The Mask.jpg",
    "rating": 3,
    "difficulty": 3.5
  },
  {
    "name": "X-Men: Mutant Apocalypse",
    "developer": "Capcom",
    "year": 1994,
    "src": "X-Men: Mutant Apocalypse.jpg",
    "rating": 3.5,
    "difficulty": 4
  },
  {
    "name": "The Lion King", // Played in Normal
    "developer": "Disney Software",
    "src": "The Lion King.jpg",
    "rating": 2,
    "difficulty": 4
  },
  {
    "name": "Alien vs. Predator", // Generic Beat 'em up, Long and Tedious
    "developer": "Jorudan",
    "src": "Alien vs. Predator.jpg",
    "rating": 2,
    "difficulty": 2.5
  },
  {
    "name": "Sailor Moon", // Normal - Sailor Mars // Really Tedious Game
    "developer": "Angel",
    "src": "Sailor Moon.jpg",
    "rating": 2,
    "difficulty": 2
  },
]
