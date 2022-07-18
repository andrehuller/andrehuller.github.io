const movies = [
  {
    "title": "The Birth of a Nation",
    "director": "D.W. Griffith",
    "year": 1915,
    "rating": "?"
  },
  {
    "title": "Intolerance",
    "director": "D.W. Griffith",
    "year": 1916,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Cabinet of Dr. Caligari",
    "director": "Robert Wiene",
    "year": 1920,
    "country": "Germany"
  },
  {
    "title": "The Kid",
    "director": "Charles Chaplin",
    "year": 1921,
    "rating": 9
  },
  {
    "title": "Nosferatu",
    "director": "F.W. Murnau",
    "year": 1922,
    "country": "Germany",
    "rating": 8
  },

  {
    "title": "The Last Laugh",
    "director": "F.W. Murnau",
    "year": 1924,
    "country": "Germany",
    "rating": 10
  },
  {
    "title": "Sherlock Jr.",
    "director": "Buster Keaton",
    "year": 1924,
    "country": "USA"
  },

  {
    "title": "Battleship Potemkin",
    "director": "Sergei Eisenstein",
    "year": 1925,
    "country": "USSR",
    "rating": 10
  },
  {
    "title": "The Gold Rush",
    "director": "Charles Chaplin",
    "year": 1925,
    "country": "USA",
    "rating": 10
  },

  {
    "title": "Faust",
    "director": "F.W. Murnau",
    "year": 1926,
    "rating": 9
  },
  {
    "title": "The General",
    "director": "Buster Keaton",
    "year": 1926,
    "country": "USA",
    "rating": 9
  },

  {
    "title": "Metropolis",
    "director": "Fritz Lang",
    "year": 1927,
    "country": "Germany",
    "rating": 10
  },
  {
    "title": "Sunrise",
    "director": "F.W. Murnau",
    "year": 1927,
    "country": "USA",
    "rating": 9
  },

  {
    "title": "October",
    "director": "Sergei Eisenstein & Grigori Aleksandrov",
    "year": 1928,
    "rating": "?"
  },
  {
    "title": "The Passion of Joan of Arc",
    "director": "Carl Theodor Dreyer",
    "year": 1928,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Steamboat Bill, Jr.",
    "director": "Buster Keaton & Charles Reisner",
    "year": 1928,
    "rating": "?"
  },
  {
    "title": "Un Chien andalou",
    "director": "Luis Buñuel",
    "year": 1928,
    "country": "France"
  },

  {
    "title": "Man with a Movie Camera",
    "director": "Dziga Vertov",
    "year": 1929,
    "country": "USSR",
    "rating": "?"
  },

  {
    "title": "L'Âge d'or",
    "director": "Luis Buñuel",
    "year": 1930,
    "country": "France"
  },

  {
    "title": "City Lights",
    "director": "Charles Chaplin",
    "year": 1931,
    "country": "USA",
    "rating": 8
  },
  {
    "title": "Frankenstein",
    "director": "James Whale",
    "year": 1931,
    "rating": "?"
  },
  {
    "title": "M",
    "director": "Fritz Lang",
    "year": 1931,
    "country": "Germany",
    "rating": 10
  },
  {
    "title": "Tabu",
    "director": "F.W. Murnau",
    "year": 1931,
    "country": "USA",
    "rating": 10
  },
  
  {
    "title": "Boudu Saved from Drowning",
    "director": "Jean Renoir",
    "year": 1932,
    "country": "USA"
  },
  {
    "title": "I Was Born, But…",
    "director": "Yasujiro Ozu",
    "year": 1932,
    "rating": 10
  },
  {
    "title": "Land Without Bread",
    "director": "Luis Buñuel",
    "year": 1932,
    "rating": "?"
  },
  {
    "title": "Scarface",
    "director": "Howard Hawks",
    "year": "1932",
    "image": "scarface1932",
    "rating": "?"
  },
  {
    "title": "Trouble in Paradise",
    "director": "Ernst Lubitsch",
    "year": 1932
  },

  {
    "title": "Duck Soup",
    "director": "Leo McCarey",
    "year": 1933,
    "country": "USA"
  },
  {
    "title": "King Kong",
    "director": "Merian C. Cooper & Ernest B. Schoedsack",
    "year": 1933,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "It Happened One Night",
    "director": "Frank Capra",
    "year": 1934,
    "rating": 9
  },
  {
    "title": "The Scarlet Empress",
    "director": "Josef von Sternberg",
    "year": 1934,
    "rating": 10
  },

  {
    "title": "The 39 Steps",
    "director": "Alfred Hitchcock",
    "year": 1935
  },
  {
    "title": "Top Hat",
    "director": "Mark Sandrich",
    "year": 1935
  },

  {
    "title": "Modern Times",
    "director": "Charles Chaplin",
    "year": 1936,
    "country": "USA"
  },

  {
    "title": "La Grande illusion",
    "director": "Jean Renoir",
    "year": 1937,
    "country": "France"
  },
  {
    "title": "Snow White and the Seven Dwarfs",
    "director": "David Hand",
    "year": 1937
  },

  {
    "title": "Alexander Nevsky",
    "director": "Sergei Eisenstein",
    "year": 1938
  },
  {
    "title": "The Adventures of Robin Hood",
    "director": "Michael Curtiz",
    "year": 1938
  },
  {
    "title": "Bringing Up Baby",
    "director": "Howard Hawks",
    "year": 1938,
    "country": "USA"
  },
  {
    "title": "The Lady Vanishes",
    "director": "Alfred Hitchcock",
    "year": 1938
  },

  {
    "title": "Gone with the Wind",
    "director": "Victor Fleming",
    "year": 1939,
    "country": "USA"
  },
  {
    "title": "Ninotchka",
    "director": "Ernst Lubitsch",
    "year": 1939
  },
  {
    "title": "Only Angels Have Wings",
    "director": "Howard Hawks",
    "year": 1939,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Rules of the Game",
    "director": "Jean Renoir",
    "year": 1939,
    "country": "France"
  },
  {
    "title": "Stagecoach",
    "director": "John Ford",
    "year": 1939,
    "country": "USA"
  },
  {
    "title": "The Story of the Last Chrysanthemums",
    "director": "Kenji Mizoguchi",
    "year": 1939,
    "rating": 8
  },
  {
    "title": "The Wizard of Oz",
    "director": "Victor Fleming",
    "year": 1939,
    "country": "USA",
    "rating": 8
  },

  {
    "title": "Fantasia",
    "director": "Various Directors",
    "year": 1940,
    "rating": "?"
  },
  {
    "title": "The Grapes of Wrath",
    "director": "John Ford",
    "year": 1940,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Great Dictator",
    "director": "Charles Chaplin",
    "year": 1940,
    "country": "USA"
  },
  {
    "title": "His Girl Friday",
    "director": "Howard Hawks",
    "year": 1940,
    "country": "USA"
  },
  {
    "title": "Pinocchio",
    "director": "Ben Sharpsteen & Hamilton Luske",
    "year": 1940
  },
  {
    "title": "Rebecca",
    "director": "Alfred Hitchcock",
    "year": 1940
  },
  {
    "title": "The Philadelphia Story",
    "director": "George Cukor",
    "year": 1940
  },
  {
    "title": "The Shop Around the Corner",
    "director": "Ernst Lubitsch",
    "year": 1940,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Citizen Kane",
    "director": "Orson Welles",
    "year": 1941,
    "country": "USA"
  },
  {
    "title": "How Green Was My Valley",
    "director": "John Ford",
    "year": 1941,
    "rating": "?"
  },
  {
    "title": "The Lady Eve",
    "director": "Preston Sturges",
    "year": 1941,
    "country": "USA"
  },
  {
    "title": "The Maltese Falcon",
    "director": "John Huston",
    "year": 1941,
    "country": "USA"
  },
  {
    "title": "Sullivan's Travels",
    "director": "Preston Sturges",
    "year": 1941,
    "country": "USA",
    "rating": 5
  },


  {
    "title": "Casablanca",
    "director": "Michael Curtiz",
    "year": 1942,
    "country": "USA"
  },
  {
    "title": "Cat People",
    "director": "Jacques Tourneur",
    "year": 1942,
    "rating": "?"
  },
  {
    "title": "The Magnificent Ambersons",
    "director": "Orson Welles",
    "year": 1942,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Palm Beach Story",
    "director": "Preston Sturges",
    "year": 1942
  },
  {
    "title": "To Be or Not to Be",
    "director": "Ernst Lubitsch",
    "year": 1942,
    "country": "USA"
  },

  {
    "title": "Day of Wrath",
    "director": "Carl Theodor Dreyer",
    "year": 1943,
    "country": "Denmark"
  },
  {
    "title": "Shadow of a Doubt",
    "director": "Alfred Hitchcock",
    "year": 1943
  },

  {
    "title": "Double Indemnity",
    "director": "Billy Wilder",
    "year": 1944,
    "country": "USA"
  },
  {
    "title": "Ivan the Terrible, Part 1",
    "director": "Sergei Eisenstein",
    "year": 1944,
    "country": "USSR"
  },
  {
    "title": "Laura",
    "director": "Otto Preminger",
    "year": 1944
  },
  {
    "title": "To Have and Have Not",
    "director": "Howard Hawks",
    "year": 1944,
    "rating": 9
  },
  {
    "title": "Meet Me in St. Louis",
    "director": "Vincente Minnelli",
    "year": 1944,
    "country": "USA"
  },

  {
    "title": "Brief Encounter",
    "director": "David Lean",
    "year": 1945,
    "country": "UK"
  },
  {
    "title": "Les Enfants du paradis",
    "director": "Marcel Carné",
    "year": 1945,
    "country": "France"
  },
  {
    "title": "Mildred Pierce",
    "director": "Michael Curtiz",
    "year": 1945
  },
  {
    "title": "Rome, Open City",
    "director": "Roberto Rossellini",
    "year": 1945,
    "country": "Italy",
    "image": "romeopencity"
  },

  {
    "title": "Beauty and the Beast",
    "director": "Jean Cocteau",
    "year": 1946
  },
  {
    "title": "The Best Years of Our Lives",
    "director": "William Wyler",
    "year": 1946,
    "country": "US"
  },
  {
    "title": "It's a Wonderful Life",
    "director": "Frank Capra",
    "year": 1946,
    "country": "USA"
  },
  {
    "title": "Ivan the Terrible, Part 2",
    "director": "Sergei Eisenstein",
    "year": 1946,
    "country": "USSR"
  },
  {
    "title": "My Darling Clementine",
    "director": "John Ford",
    "year": 1946,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Notorious",
    "director": "Alfred Hitchcock",
    "year": 1946,
    "country": "USA"
  },
  {
    "title": "The Big Sleep",
    "director": "Howard Hawks",
    "year": 1946
  },

  {
    "title": "Black Narcissus",
    "director": "Michael Powell & Emeric Pressburger",
    "year": 1947,
    "country": "UK"
  },
  {
    "title": "Monsieur Verdoux",
    "director": "Charles Chaplin",
    "year": 1947
  },
  {
    "title": "Out of the Past",
    "director": "Jacques Tourneur",
    "year": 1947,
    "country": "USA"
  },

  {
    "title": "Bicycle Thieves",
    "director": "Vittorio De Sica",
    "year": 1948,
    "country": "Italy"
  },
  {
    "title": "La Terra trema",
    "director": "Luchino Visconti",
    "year": 1948
  },
  {
    "title": "Letter from an Unknown Woman",
    "director": "Max Ophüls",
    "year": 1948,
    "country": "USA"
  },
  {
    "title": "The Lady from Shanghai",
    "director": "Orson Welles",
    "year": 1948
  },
  {
    "title": "Red River",
    "director": "Howard Hawks",
    "year": 1948,
    "country": "USA"
  },
  {
    "title": "The Red Shoes",
    "director": "Michael Powell & Emeric Pressburger",
    "year": 1948,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "The Treasure of the Sierra Madre",
    "director": "John Huston",
    "year": 1948,
    "country": "USA"
  },

  {
    "title": "Kind Hearts and Coronets",
    "director": "Robert Hamer",
    "year": 1949,
    "country": "UK"
  },
  {
    "title": "Late Spring",
    "director": "Yasujiro Ozu",
    "year": 1949,
    "country": "Japan"
  },
  {
    "title": "The Third Man",
    "director": "Carol Reed",
    "year": 1949,
    "country": "UK"
  },

  {
    "title": "All About Eve",
    "director": "Joseph L. Mankiewicz",
    "year": 1950,
    "country": "USA"
  },
  {
    "title": "In a Lonely Place",
    "director": "Nicholas Ray",
    "year": 1950
  },
  {
    "title": "Los Olvidados",
    "director": "Luis Buñuel",
    "year": 1950,
    "country": "Mexico"
  },
  {
    "title": "Orpheus",
    "director": "Jean Cocteau",
    "year": 1950
  },
  {
    "title": "Rashomon",
    "director": "Akira Kurosawa",
    "year": 1950,
    "country": "Japan"
  },
  {
    "title": "Sunset Blvd.",
    "director": "Billy Wilder",
    "year": 1950,
    "country": "USA"
  },
  {
    "title": "The Asphalt Jungle",
    "director": "John Huston",
    "year": 1950,
    "rating": "?"
  },
  {
    "title": "Wagon Master",
    "director": "John Ford",
    "year": 1950,
    "rating": 7
  },

  {
    "title": "A Streetcar Named Desire",
    "director": "Elia Kazan",
    "year": 1951
  },
  {
    "title": "Ace in the Hole",
    "director": "Billy Wilder",
    "year": 1951
  },
  {
    "title": "Early Summer",
    "director": "Yasujiro Ozu",
    "year": 1951
  },
  {
    "title": "Othello",
    "director": "Orson Welles",
    "year": 1951
  },
  {
    "title": "The River",
    "director": "Jean Renoir",
    "year": 1951,
    "country": "France-India-USA"
  },
  {
    "title": "Strangers on a Train",
    "director": "Alfred Hitchcock",
    "year": 1951
  },

  {
    "title": "High Noon",
    "director": "Fred Zinnemann",
    "year": 1952
  },
  {
    "title": "Ikiru",
    "director": "Akira Kurosawa",
    "year": 1952,
    "country": "Japan"
  },
  {
    "title": "Limelight",
    "director": "Charles Chaplin",
    "year": 1952
  },
  {
    "title": "The Quiet Man",
    "director": "John Ford",
    "year": 1952,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Singin' in the Rain",
    "director": "Stanley Donen",
    "year": 1952,
    "country": "USA"
  },
  {
    "title": "Umberto D.",
    "director": "Vittorio De Sica",
    "year": 1952,
    "country": "Italy"
  },
  
  {
    "title": "A Night at the Opera",
    "director": "Sam Wood",
    "year": 1935
  },
  {
    "title": "The Band Wagon",
    "director": "Vincente Minnelli",
    "year": 1953,
    "country": "USA"
  },
  {
    "title": "The Big Heat",
    "director": "Fritz Lang",
    "year": 1953
  },
  {
    "title": "Bride of Frankenstein",
    "director": "James Whale",
    "year": 1935
  },
  {
    "title": "El",
    "director": "Luis Buñuel",
    "year": 1953,
    "rating": "?"
  },
  {
    "title": "I Vitelloni",
    "director": "Federico Fellini",
    "year": 1953
  },
  {
    "title": "Madame de...",
    "director": "Max Ophüls",
    "year": 1953,
    "country": "France-Italy"
  },
  {
    "title": "Shane",
    "director": "George Stevens",
    "year": 1953
  },
  {
    "title": "The Wages of Fear",
    "director": "Henri-Georges Clouzot",
    "year": 1953
  },
  {
    "title": "Tokyo Story",
    "director": "Yasujiro Ozu",
    "year": 1953,
    "country": "Japan"
  },
  {
    "title": "Ugetsu monogatari",
    "director": "Kenji Mizoguchi",
    "year": "1953",
    "country": "Japan"
  },

  {
    "title": "A Star is Born",
    "director": "George Cukor",
    "year": 1954
  },
  {
    "title": "Johnny Guitar",
    "director": "Nicholas Ray",
    "year": 1954,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "La Strada",
    "director": "Federico Fellini",
    "year": 1954,
    "country": "Italy"
  },
  {
    "title": "On the Waterfront",
    "director": "Elia Kazan",
    "year": 1954,
    "country": "USA"
  },
  {
    "title": "Rear Window",
    "director": "Alfred Hitchcock",
    "year": 1954,
    "country": "USA"
  },
  {
    "title": "Sansho the Bailiff",
    "director": "Kenji Mizoguchi",
    "year": 1954,
    "country": "Japan"
  },
  {
    "title": "Senso",
    "director": "Luchino Visconti",
    "year": 1954
  },
  {
    "title": "Seven Samurai",
    "director": "Akira Kurosawa",
    "year": 1954,
    "country": "Japan"
  },
  {
    "title": "Voyage in Italy",
    "director": "Roberto Rossellini",
    "year": 1954,
    "country": "Italy",
    "rating": "?"
  },

  {
    "title": "All That Heaven Allows",
    "director": "Douglas Sirk",
    "year": 1955
  },
  {
    "title": "East of Eden",
    "director": "Elia Kazan",
    "year": 1955,
    "rating": "?"
  },
  {
    "title": "French Cancan",
    "director": "Jean Renoir",
    "year": 1955
  },
  {
    "title": "Kiss Me Deadly",
    "director": "Robert Aldrich",
    "year": 1955,
    "rating": "?"
  },
  {
    "title": "Lola Montès",
    "director": "Max Ophüls",
    "year": 1955
  },
  {
    "title": "Night and Fog",
    "director": "Alain Resnais",
    "year": 1955,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "The Night of the Hunter",
    "director": "Charles Laughton",
    "year": 1955,
    "country": "USA"
  },
  {
    "title": "Ordet",
    "director": "Carl Theodor Dreyer",
    "year": 1955,
    "country": "Denmark"
  },
  {
    "title": "Rebel Without a Cause",
    "director": "Nicholas Ray",
    "year": 1955
  },

  {
    "title": "A Man Escaped",
    "director": "Robert Bresson",
    "year": 1956,
    "country": "France"
  },
  {
    "title": "Invasion of the Body Snatchers",
    "director": "Don Siegel",
    "year": 1956
  },
  {
    "title": "The Searchers",
    "director": "John Ford",
    "year": 1956,
    "country": "USA"
  },
  {
    "title": "Written on the Wind",
    "director": "Douglas Sirk",
    "year": 1956
  },

  {
    "title": "12 Angry Men",
    "director": "Sidney Lumet",
    "year": 1957
  },
  {
    "title": "An Affair to Remember",
    "director": "Leo McCarey",
    "year": 1957,
    "rating": 8
  },
  {
    "title": "The Bridge on the River Kwai",
    "director": "David Lean",
    "year": 1957
  },
  {
    "title": "Nights of Cabiria",
    "director": "Federico Fellini",
    "year": 1957,
    "country": "Italy-France"
  },
  {
    "title": "Paths of Glory",
    "director": "Stanley Kubrick",
    "year": 1957,
    "country": "USA"
  },
  {
    "title": "The Seventh Seal",
    "director": "Ingmar Bergman",
    "year": 1957,
    "country": "Sweden"
  },
  {
    "title": "Sweet Smell of Success",
    "director": "Alexander Mackendrick",
    "year": 1957,
    "country": "USA"
  },
  {
    "title": "Throne of Blood",
    "director": "Akira Kurosawa",
    "year": 1957
  },
  {
    "title": "Wild Strawberries",
    "director": "Ingmar Bergman",
    "year": 1957,
    "country": "Sweden"
  },

  {
    "title": "Elevator to the Gallows",
    "director": "Louis Malle",
    "year": 1958
  },
  {
    "title": "Touch of Evil",
    "director": "Orson Welles",
    "year": 1958,
    "country": "USA"
  },
  {
    "title": "Vertigo",
    "director": "Alfred Hitchcock",
    "year": 1958,
    "country": "USA"
  },

  {
    "title": "The 400 Blows",
    "director": "François Truffaut",
    "year": 1959,
    "country": "France"
  },
  {
    "title": "Hiroshima mon amour",
    "director": "Alain Resnais",
    "year": 1959,
    "country": "France-Japan"
  },
  {
    "title": "Imitation of Life",
    "director": "Douglas Sirk",
    "year": 1959,
    "country": "USA"
  },
  {
    "title": "North by Northwest",
    "director": "Alfred Hitchcock",
    "year": 1959,
    "country": "USA"
  },
  {
    "title": "Pickpocket",
    "director": "Robert Bresson",
    "year": 1959,
    "country": "France"
  },
  {
    "title": "Rio Bravo",
    "director": "Howard Hawks",
    "year": 1959,
    "country": "USA"
  },
  {
    "title": "Some Like it Hot",
    "director": "Billy Wilder",
    "year": 1959,
    "country": "USA"
  },
  
  {
    "title": "Breathless",
    "director": "Jean-Luc Godard",
    "year": 1960,
    "country": "France"
  },
  {
    "title": "Eyes Without a Face",
    "director": "Georges Franju",
    "year": 1960
  },
  {
    "title": "L'Avventura",
    "director": "Michelangelo Antonioni",
    "year": 1960,
    "country": "Italy-France"
  },
  {
    "title": "La Dolce vita",
    "director": "Federico Fellini",
    "year": 1960,
    "country": "Italy"
  },
  {
    "title": "Le Trou",
    "director": "Jacques Becker",
    "year": 1960
  },
  {
    "title": "Peeping Tom",
    "director": "Michael Powell",
    "year": 1960
  },
  {
    "title": "Psycho",
    "director": "Alfred Hitchcock",
    "year": 1960,
    "country": "USA"
  },
  {
    "title": "Rocco and His Brothers",
    "director": "Luchino Visconti",
    "year": 1960,
    "country": "Italy-France"
  },
  {
    "title": "Shoot the Piano Player",
    "director": "François Truffaut",
    "year": 1960
  },
  {
    "title": "Spartacus",
    "director": "Stanley Kubrick",
    "year": 1960
  },
  {
    "title": "The Apartment",
    "director": "Billy Wilder",
    "year": 1960,
    "country": "USA"
  },

  {
    "title": "The Hustler",
    "director": "Robert Rossen",
    "year": 1961,
    "rating": "?"
  },
  {
    "title": "La Notte",
    "director": "Michelangelo Antonioni",
    "year": 1961,
    "country": "Italy-France"
  },
  {
    "title": "Last Year at Marienbad",
    "director": "Alain Resnais",
    "year": 1961,
    "country": "France-Italy"
  },
  {
    "title": "The Innocents",
    "director": "Jack Clayton",
    "year": 1961
  },
  {
    "title": "Splendor in the Grass",
    "director": "Elia Kazan",
    "year": 1961
  },
  {
    "title": "Viridiana",
    "director": "Luis Buñuel",
    "year": 1961,
    "country": "Spain"
  },
  {
    "title": "West Side Story",
    "director": "Robert Wise",
    "year": 1961
  },
  {
    "title": "Yojimbo",
    "director": "Akira Kurosawa",
    "year": 1961
  },

  {
    "title": "The Exterminating Angel",
    "director": "Luis Buñuel",
    "year": 1962,
    "country": "Mexico"
  },
  {
    "title": "Hatari!",
    "director": "Howard Hawks",
    "year": 1962
  },
  {
    "title": "Ivan's Childhood",
    "director": "Andrei Tarkovsky",
    "year": 1962
  },
  {
    "title": "Jules et Jim",
    "director": "François Truffaut",
    "year": 1962,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "La Jetée",
    "director": "Chris Marker",
    "year": 1962,
    "country": "France"
  },
  {
    "title": "Lawrence of Arabia",
    "director": "David Lean",
    "year": 1962,
    "country": "UK"
  },
  {
    "title": "Lolita",
    "director": "Stanley Kubrick",
    "year": 1962
  },
  {
    "title": "L'Eclisse",
    "director": "Michelangelo Antonioni",
    "year": 1962,
    "country": "Italy-France"
  },
  {
    "title": "The Man Who Shot Liberty Valance",
    "director": "John Ford",
    "year": 1962,
    "country": "USA"
  },
  {
    "title": "To Kill a Mockingbird",
    "director": "Robert Mulligan",
    "year": 1962
  },
  {
    "title": "Vivre sa vie",
    "director": "Jean-Luc Godard",
    "year": 1962,
    "country": "France"
  },
  {
    "title": "Winter Light",
    "director": "Ingmar Bergman",
    "year": 1962
  },

  {
    "title": "8½",
    "director": "Federico Fellini",
    "year": 1963,
    "country": "Italy"
  },
  {
    "title": "The Birds",
    "director": "Alfred Hitchcock",
    "year": 1963,
    "country": "USA"
  },
  {
    "title": "Contempt",
    "director": "Jean-Luc Godard",
    "year": 1963,
    "country": "France-Italy"
  },
  {
    "title": "High and Low",
    "director": "Akira Kurosawa",
    "year": 1963
  },
  {
    "title": "Shock Corridor",
    "director": "Samuel Fuller",
    "year": 1963
  },
  {
    "title": "The Leopard",
    "director": "Luchino Visconti",
    "year": 1963,
    "country": "Italy"
  },
  {
    "title": "The Silence",
    "director": "Ingmar Bergman",
    "year": 1963
  },

  {
    "title": "Band of Outsiders",
    "director": "Jean-Luc Godard",
    "year": 1964
  },
  {
    "title": "Black God, White Devil",
    "director": "Glauber Rocha",
    "year": 1964,
    "country": "Brazil"
  },
  {
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "director": "Stanley Kubrick",
    "year": 1964,
    "country": "UK-USA"
  },
  {
    "title": "Marnie",
    "director": "Alfred Hitchcock",
    "year": 1964
  },
  {
    "title": "Red Desert",
    "director": "Michelangelo Antonioni",
    "year": 1964
  },
  {
    "title": "Woman in the Dunes",
    "director": "Hiroshi Teshigahara",
    "year": 1964
  },
  
  {
    "title": "Alphaville",
    "director": "Jean-Luc Godard",
    "year": 1965
  },
  {
    "title": "Doctor Zhivago",
    "director": "David Lean",
    "year": 1965
  },
  {
    "title": "Pierrot le fou",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "country": "France-Italy"
  },
  {
    "title": "Repulsion",
    "director": "Roman Polanski",
    "year": 1965
  },
  {
    "title": "The Sound of Music",
    "director": "Robert Wise",
    "year": 1965
  },

  {
    "title": "Andrei Rublev",
    "director": "Andrei Tarkovsky",
    "year": 1966,
    "country": "USSR"
  },
  {
    "title": "Au hasard Balthazar",
    "director": "Robert Bresson",
    "year": 1966,
    "country": "France"
  },
  {
    "title": "Blow-Up",
    "director": "Michelangelo Antonioni",
    "year": 1966,
    "country": "Italy-UK"
  },
  {
    "title": "Daisies",
    "director": "Vera Chytilová",
    "year": 1966
  },
  {
    "title": "The Good, the Bad and the Ugly",
    "director": "Sergio Leone",
    "year": 1966,
    "country": "Italy-Spain"
  },
  {
    "title": "Persona",
    "director": "Ingmar Bergman",
    "year": 1966,
    "country": "Sweden"
  },
  {
    "title": "Two or Three Things I Know About Her",
    "director": "Jean-Luc Godard",
    "year": 1966,
    "country": "France"
  },
  {
    "title": "The Battle of Algiers",
    "director": "Gillo Pontecorvo",
    "year": 1966,
    "country": "Italy-Algeria",
    "rating": "?"
  },
  {
    "title": "Who's Afraid of Virginia Woolf?",
    "director": "Mike Nichols",
    "year": 1966,
    "image": "whosafraidofvirginiawoolf"
  },

  {
    "title": "Belle de jour",
    "director": "Luis Buñuel",
    "year": 1967,
    "country": "France-Italy"
  },
  {
    "title": "Bonnie and Clyde",
    "director": "Arthur Penn",
    "year": 1967,
    "country": "USA"
  },
  {
    "title": "The Graduate",
    "director": "Mike Nichols",
    "year": 1967,
    "country": "USA"
  },
  {
    "title": "Le Samouraï",
    "director": "Jean-Pierre Melville",
    "year": 1967,
    "country": "France"
  },
  {
    "title": "Mouchette",
    "director": "Robert Bresson",
    "year": 1967,
    "country": "France"
  },
  {
    "title": "Point Blank",
    "director": "John Boorman",
    "year": 1967
  },
  {
    "title": "Week-End",
    "director": "Jean-Luc Godard",
    "year": 1967
  },

  {
    "title": "2001: A Space Odyssey",
    "director": "Stanley Kubrick",
    "year": 1968,
    "country": "UK-USA"
  },
  {
    "title": "Hour of the Wolf",
    "director": "Ingmar Bergman",
    "year": 1968
  },
  {
    "title": "Night of the Living Dead",
    "director": "George A. Romero",
    "year": 1968,
    "country": "USA"
  },
  {
    "title": "Once Upon a Time in the West",
    "director": "Sergio Leone",
    "year": 1968
  },
  {
    "title": "Rosemary's Baby",
    "director": "Roman Polanski",
    "year": 1968,
    "country": "USA"
  },

  {
    "title": "Army of Shadows",
    "director": "Jean-Pierre Melville",
    "year": 1969
  },
  {
    "title": "Butch Cassidy and the Sundance Kid",
    "director": "George Roy Hill",
    "year": 1969
  },
  {
    "title": "Easy Rider",
    "director": "Dennis Hopper",
    "year": 1969
  },
  {
    "title": "Kes",
    "director": "Ken Loach",
    "year": 1969,
    "country": "UK"
  },
  {
    "title": "Midnight Cowboy",
    "director": "John Schlesinger",
    "year": 1969,
    "rating": "?"
  },
  {
    "title": "My Night at Maud's",
    "director": "Eric Rohmer",
    "year": 1969,
    "country": "France"
  },
  {
    "title": "Satyricon",
    "director": "Federico Fellini",
    "year": 1969
  },
  {
    "title": "The Wild Bunch",
    "director": "Sam Peckinpah",
    "year": 1969,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "The Conformist",
    "director": "Bernardo Bertolucci",
    "year": 1970,
    "country": "Italy-France-West Germany"
  },
  {
    "title": "The Private Life of Sherlock Holmes",
    "director": "Billy Wilder",
    "year": 1970,
    "rating": "?"
  },
  {
    "title": "Tristana",
    "director": "Luis Buñuel",
    "year": 1970
  },
  {
    "title": "Zabriskie Point",
    "director": "Michelangelo Antonioni",
    "year": 1970
  },

  {
    "title": "A Clockwork Orange",
    "director": "Stanley Kubrick",
    "year": 1971,
    "country": "UK"
  },
  {
    "title": "Death in Venice",
    "director": "Luchino Visconti",
    "year": 1971,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "Harold and Maude",
    "director": "Hal Ashby",
    "year": 1971,
    "rating": "?"
  },
  {
    "title": "The Last Picture Show",
    "director": "Peter Bogdanovich",
    "year": 1971
  },
  {
    "title": "McCabe & Mrs. Miller",
    "director": "Robert Altman",
    "year": 1971,
    "country": "USA"
  },
  {
    "title": "The French Connection",
    "director": "William Friedkin",
    "year": 1971,
    "rating": "?"
  },
  {
    "title": "Two-Lane Blacktop",
    "director": "Monte Hellman",
    "year": 1971
  },
  
  {
    "title": "Aguirre: The Wrath of God",
    "director": "Werner Herzog",
    "year": 1972,
    "country": "West Germany"
  },
  {
    "title": "Cabaret",
    "director": "Bob Fosse",
    "year": 1972
  },
  {
    "title": "Cries and Whispers",
    "director": "Ingmar Bergman",
    "year": 1972,
    "country": "Sweden"
  },
  {
    "title": "Deliverance",
    "director": "John Boorman",
    "year": 1972
  },
  {
    "title": "The Discreet Charm of the Bourgeoisie",
    "director": "Luis Buñuel",
    "year": 1972,
    "country": "France"
  },
  {
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "year": 1972,
    "country": "USA"
  },
  {
    "title": "Last Tango in Paris",
    "director": "Bernardo Bertolucci",
    "year": 1972
  },
  {
    "title": "Solaris",
    "director": "Andrei Tarkovsky",
    "year": 1972,
    "country": "USSR"
  },

  {
    "title": "Amarcord",
    "director": "Federico Fellini",
    "year": 1973,
    "country": "Italy"
  },
  {
    "title": "Badlands",
    "director": "Terrence Malick",
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "Don't Look Now",
    "director": "Nicolas Roeg",
    "year": 1973,
    "country": "UK"
  },
  {
    "title": "The Exorcist",
    "director": "William Friedkin",
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "F for Fake",
    "director": "Orson Welles",
    "year": 1973,
    "country": "France-Iran-West Germany"
  },
  {
    "title": "Mean Streets",
    "director": "Martin Scorsese",
    "year": 1973
  },
  {
    "title": "Paper Moon",
    "director": "Peter Bogdanovich",
    "year": 1973
  },
  {
    "title": "Pat Garrett and Billy the Kid",
    "director": "Sam Peckinpah",
    "year": 1973
  },
  {
    "title": "The Holy Mountain",
    "director": "Alejandro Jodorowsky",
    "year": 1973
  },
  {
    "title": "The Long Goodbye",
    "director": "Robert Altman",
    "year": 1973
  },
  {
    "title": "The Spirit of the Beehive",
    "director": "Victor Erice",
    "year": 1973,
    "country": "Spain"
  },

  {
    "title": "A Woman Under the Influence",
    "director": "John Cassavetes",
    "year": 1974,
    "country": "USA"
  },
  {
    "title": "Ali: Fear Eats the Soul",
    "director": "Rainer Werner Fassbinder",
    "year": 1974,
    "country": "West Germany"
  },
  {
    "title": "Alice in the Cities",
    "director": "Wim Wenders",
    "year": "1974"
  },
  {
    "title": "Chinatown",
    "director": "Roman Polanski",
    "year": 1974,
    "country": "USA"
  },
  {
    "title": "The Conversation",
    "director": "Francis Ford Coppola",
    "year": 1974,
    "country": "USA"
  },
  {
    "title": "The Godfather Part II",
    "director": "Francis Ford Coppola",
    "year": 1974,
    "country": "USA"
  },
  {
    "title": "The Phantom of Liberty",
    "director": "Luis Buñuel",
    "year": 1974
  },
  {
    "title": "The Texas Chainsaw Massacre",
    "director": "Tobe Hooper",
    "year": 1974,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Young Frankenstein",
    "director": "Mel Brooks",
    "year": 1974,
    "rating": "?"
  },

  {
    "title": "Barry Lyndon",
    "director": "Stanley Kubrick",
    "year": 1975,
    "country": "UK"
  },
  {
    "title": "Deep Red",
    "director": "Dario Argento",
    "year": 1975
  },
  {
    "title": "Dersu Uzala",
    "director": "Akira Kurosawa",
    "year": 1975
  },
  {
    "title": "Dog Day Afternoon",
    "director": "Sidney Lumet",
    "year": 1975
  },
  {
    "title": "Jaws",
    "director": "Steven Spielberg",
    "year": 1975,
    "country": "USA"
  },
  {
    "title": "The Man Who Would Be King",
    "director": "John Huston",
    "year": 1975
  },
  {
    "title": "The Mirror",
    "director": "Andrei Tarkovsky",
    "year": 1975,
    "country": "USSR"
  },
  {
    "title": "Monty Python and the Holy Grail",
    "director": "Terry Gilliam",
    "year": 1975
  },
  {
    "title": "Nashville",
    "director": "Robert Altman",
    "year": 1975,
    "country": "USA"
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "director": "Milos Forman",
    "year": 1975,
    "country": "USA"
  },
  {
    "title": "The Passenger",
    "director": "Michelangelo Antonioni",
    "year": 1975,
    "country": "Italy"
  },
  {
    "title": "Salò, or the 120 Days of Sodom",
    "director": "Pier Paolo Pasolini",
    "year": 1975,
    "country": "Italy"
  },

  {
    "title": "All the President's Men",
    "director": "Alan J. Pakula",
    "year": 1976
  },
  {
    "title": "Carrie",
    "director": "Brian De Palma",
    "year": 1976
  },
  {
    "title": "In the Realm of the Senses",
    "director": "Nagisa Oshima",
    "year": 1976,
    "rating": "?"
  },
  {
    "title": "Network",
    "director": "Sidney Lumet",
    "year": 1976
  },
  {
    "title": "Taxi Driver",
    "director": "Martin Scorsese",
    "year": 1976,
    "country": "USA"
  },
  {
    "title": "The Tenant",
    "director": "Roman Polanski",
    "year": 1976
  },

  {
    "title": "Annie Hall",
    "director": "Woody Allen",
    "year": 1977,
    "country": "USA"
  },
  {
    "title": "Close Encounters of the Third Kind",
    "director": "Steven Spielberg",
    "year": 1977,
    "country": "USA"
  },
  {
    "title": "Eraserhead",
    "director": "David Lynch",
    "year": 1977
  },
  {
    "title": "Star Wars",
    "director": "George Lucas",
    "year": 1977,
    "country": "USA"
  },
  {
    "title": "Suspiria",
    "director": "Dario Argento",
    "year": 1977
  },
  {
    "title": "That Obscure Object of Desire",
    "director": "Luis Buñuel",
    "year": 1977
  },

  {
    "title": "Dawn of the Dead",
    "director": "George A. Romero",
    "year": 1978
  },
  {
    "title": "Days of Heaven",
    "director": "Terrence Malick",
    "year": 1978,
    "country": "USA"
  },
  {
    "title": "The Deer Hunter",
    "director": "Michael Cimino",
    "year": 1978,
    "country": "USA"
  },
  {
    "title": "Halloween",
    "director": "John Carpenter",
    "year": 1978
  },

  {
    "title": "Alien",
    "director": "Ridley Scott",
    "year": 1979,
    "country": "USA"
  },
  {
    "title": "Apocalypse Now",
    "director": "Francis Ford Coppola",
    "year": 1979,
    "country": "USA"
  },
  {
    "title": "Being There",
    "director": "Hal Ashby",
    "year": 1979,
    "rating": "?"
  },
  {
    "title": "Manhattan",
    "director": "Woody Allen",
    "year": 1979,
    "country": "USA"
  },
  {
    "title": "Monty Python's Life of Brian",
    "director": "Terry Jones",
    "year": 1979
  },
  {
    "title": "Stalker",
    "director": "Andrei Tarkovsky",
    "year": 1979,
    "country": "USSR"
  },

  {
    "title": "Kagemusha",
    "director": "Akira Kurosawa",
    "year": 1980
  },
  {
    "title": "Raging Bull",
    "director": "Martin Scorsese",
    "year": 1980,
    "country": "USA"
  },
  {
    "title": "The Elephant Man",
    "director": "David Lynch",
    "year": 1980
  },
  {
    "title": "The Empire Strikes Back",
    "director": "Irvin Kershner",
    "year": 1980
  },
  {
    "title": "The Shining",
    "director": "Stanley Kubrick",
    "year": 1980,
    "country": "USA"
  },

  {
    "title": "Blow Out",
    "director": "Brian De Palma",
    "year": 1981
  },
  {
    "title": "Mad Max 2",
    "director": "George Miller",
    "year": 1981
  },
  {
    "title": "Possession",
    "director": "Andrzej Zulawski",
    "year": 1981
  },
  {
    "title": "Raiders of the Lost Ark",
    "director": "Steven Spielberg",
    "year": 1981,
    "country": "USA",
    "rating": 8
  },

  {
    "title": "Blade Runner",
    "director": "Ridley Scott",
    "year": 1982,
    "country": "USA"
  },
  {
    "title": "E.T. The Extra-Terrestrial",
    "director": "Steven Spielberg",
    "year": 1982,
    "country": "USA"
  },
  {
    "title": "Fanny and Alexander",
    "director": "Ingmar Bergman",
    "year": 1982,
    "country": "Sweden"
  },
  {
    "title": "Fitzcarraldo",
    "director": "Werner Herzog",
    "year": 1982
  },
  {
    "title": "Koyaanisqatsi",
    "director": "Godfrey Reggio",
    "year": 1982
  },
  {
    "title": "The Thing",
    "director": "John Carpenter",
    "year": 1982,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Tootsie",
    "director": "Sydney Pollack",
    "year": 1982
  },

  {
    "title": "Sans soleil",
    "director": "Chris Marker",
    "year": 1983,
    "country": "France"
  },
  {
    "title": "Scarface",
    "director": "Brian De Palma",
    "year": 1983
  },
  {
    "title": "The King of Comedy",
    "director": "Martin Scorsese",
    "year": 1983
  },
  {
    "title": "Videodrome",
    "director": "David Cronenberg",
    "year": 1983
  },

  {
    "title": "Amadeus",
    "director": "Milos Forman",
    "year": 1984
  },
  {
    "title": "Once Upon a Time in America",
    "director": "Sergio Leone",
    "year": 1984,
    "country": "Italy-USA"
  },
  {
    "title": "Paris, Texas",
    "director": "Wim Wenders",
    "year": 1984,
    "country": "USA"
  },
  {
    "title": "The Terminator",
    "director": "James Cameron",
    "year": 1984
  },
  {
    "title": "This is Spinal Tap",
    "director": "Rob Reiner",
    "year": 1984
  },

  {
    "title": "Back to the Future",
    "director": "Robert Zemeckis",
    "year": 1985
  },
  {
    "title": "Brazil",
    "director": "Terry Gilliam",
    "year": 1985,
    "country": "UK"
  },
  {
    "title": "Come and See",
    "director": "Elem Klimov",
    "year": 1985,
    "country": "USSR"
  },
  {
    "title": "The Purple Rose of Cairo",
    "director": "Woody Allen",
    "year": 1985
  },
  {
    "title": "Ran",
    "director": "Akira Kurosawa",
    "year": 1985,
    "country": "France-Japan"
  },

  {
    "title": "Aliens",
    "director": "James Cameron",
    "year": 1986
  },
  {
    "title": "Blue Velvet",
    "director": "David Lynch",
    "year": 1986,
    "country": "USA"
  },
  {
    "title": "Hannah and Her Sisters",
    "director": "Woody Allen",
    "year": 1986
  },
  {
    "title": "The Sacrifice",
    "director": "Andrei Tarkovsky",
    "year": 1986
  },
  {
    "title": "The Fly",
    "director": "David Cronenberg",
    "year": 1986
  },

  {
    "title": "Au revoir les enfants",
    "director": "Louis Malle",
    "year": 1987
  },
  {
    "title": "Wings of Desire",
    "director": "Wim Wenders",
    "year": 1987,
    "country": "West Germany-France"
  },

  {
    "title": "Evil Dead II",
    "director": "Sam Raimi",
    "year": 1987
  },
  {
    "title": "Full Metal Jacket",
    "director": "Stanley Kubrick",
    "year": 1987
  },
  {
    "title": "Raising Arizona",
    "director": "Joel Coen & Ethan Coen",
    "year": 1987
  },
  {
    "title": "Robocop",
    "director": "Paul Verhoeven",
    "year": 1987
  },
  {
    "title": "Where is the Friend's Home?",
    "director": "Abbas Kiarostami",
    "year": 1987,
    "image": "whereisthefriendshome"
  },

  {
    "title": "Cinema Paradiso",
    "director": "Giuseppe Tornatore",
    "year": 1988
  },
  {
    "title": "Dead Ringers",
    "director": "David Cronenberg",
    "year": 1988
  },
  {
    "title": "Die Hard",
    "director": "John McTiernan",
    "year": 1988
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "year": 1988,
    "country": "Japan"
  },
  {
    "title": "Women on the Verge of a Nervous Breakdown",
    "director": "Pedro Almodóvar",
    "year": 1988
  },

  {
    "title": "Crimes and Misdemeanors",
    "director": "Woody Allen",
    "year": 1989
  },
  {
    "title": "Do the Right Thing",
    "director": "Spike Lee",
    "year": 1989,
    "country": "USA"
  },

  {
    "title": "Close-Up",
    "director": "Abbas Kiarostami",
    "year": 1990,
    "country": "Iran"
  },
  {
    "title": "Days of Being Wild",
    "director": "Wong Kar-wai",
    "year": 1990
  },
  {
    "title": "Edward Scissorhands",
    "director": "Tim Burton",
    "year": 1990
  },
  {
    "title": "Goodfellas",
    "director": "Martin Scorsese",
    "year": 1990,
    "country": "USA"
  },

  {
    "title": "A Brighter Summer Day",
    "director": "Edward Yang",
    "year": 1991,
    "country": "Taiwan"
  },
  {
    "title": "Barton Fink",
    "director": "Joel Coen & Ethan Coen",
    "year": 1991
  },
  {
    "title": "My Own Private Idaho",
    "director": "Gus Van Sant",
    "year": 1991
  },
  {
    "title": "Raise the Red Lantern",
    "director": "Zhang Yimou",
    "year": 1991,
    "rating": 8
  },
  {
    "title": "Terminator 2: Judgment Day",
    "director": "James Cameron",
    "year": 1991,
    "rating": "?"
  },
  {
    "title": "The Double Life of Veronique",
    "director": "Krzysztof Kieslowski",
    "year": 1991
  },
  {
    "title": "The Silence of the Lambs",
    "director": "Jonathan Demme",
    "year": 1991
  },
  {
    "title": "Thelma & Louise",
    "director": "Ridley Scott",
    "year": 1991
  },

  {
    "title": "Reservoir Dogs",
    "director": "Quentin Tarantino",
    "year": 1992
  },
  {
    "title": "Unforgiven",
    "director": "Clint Eastwood",
    "year": 1992,
    "country": "USA"
  },

  {
    "title": "Carlito's Way",
    "director": "Brian De Palma",
    "year": 1993
  },
  {
    "title": "Dazed and Confused",
    "director": "Richard Linklater",
    "year": 1993
  },
  {
    "title": "Groundhog Day",
    "director": "Harold Ramis",
    "year": 1993,
    "country": "USA"
  },
  {
    "title": "Naked",
    "director": "Mike Leigh",
    "year": 1993
  },
  {
    "title": "Schindler's List",
    "director": "Steven Spielberg",
    "year": 1993,
    "country": "USA"
  },
  {
    "title": "Three Colours: Blue",
    "director": "Krzysztof Kieslowski",
    "year": 1993
  },

  {
    "title": "Chungking Express",
    "director": "Wong Kar-wai",
    "year": 1994,
    "country": "Hong Kong"
  },
  {
    "title": "Crumb",
    "director": "Terry Zwigoff",
    "year": 1994
  },
  {
    "title": "Ed Wood",
    "director": "Tim Burton",
    "year": 1994
  },
  {
    "title": "Forrest Gump",
    "director": "Robert Zemeckis",
    "year": 1994,
    "rating": "?"
  },
  {
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "country": "USA"
  },
  {
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": 1994,
    "rating": "?"
  },
  {
    "title": "Three Colours: Red",
    "director": "Krzysztof Kieslowski",
    "year": 1994
  },

  {
    "title": "Before Sunrise",
    "director": "Richard Linklater",
    "year": 1995
  },
  {
    "title": "Casino",
    "director": "Martin Scorsese",
    "year": 1995
  },
  {
    "title": "Dead Man",
    "director": "Jim Jarmusch",
    "year": 1995
  },
  {
    "title": "Heat",
    "director": "Michael Mann",
    "year": 1995
  },
  {
    "title": "Safe",
    "director": "Todd Haynes",
    "year": 1995
  },
  {
    "title": "Se7en",
    "director": "David Fincher",
    "year": 1995
  },
  {
    "title": "Toy Story",
    "director": "John Lasseter",
    "year": 1995
  },
  {
    "title": "Underground",
    "director": "Emir Kusturica",
    "year": 1995,
    "rating": "?"
  },
  

  {
    "title": "Fargo",
    "director": "Joel Coen & Ethan Coen",
    "year": 1996,
    "country": "USA"
  },
  {
    "title": "Trainspotting",
    "director": "Danny Boyle",
    "year": 1996
  },

  {
    "title": "Boogie Nights",
    "director": "Paul Thomas Anderson",
    "year": 1997
  },
  {
    "title": "Funny Games",
    "director": "Michael Haneke",
    "year": 1997
  },
  {
    "title": "Hana-bi",
    "director": "Takeshi Kitano",
    "year": 1997
  },
  {
    "title": "Lost Highway",
    "director": "David Lynch",
    "year": 1997
  },
  {
    "title": "Princess Mononoke",
    "director": "Hayao Miyazaki",
    "year": 1997
  },
  {
    "title": "Starship Troopers",
    "director": "Paul Verhoeven",
    "year": 1997
  },

  {
    "title": "The Big Lebowski",
    "director": "Joel Coen & Ethan Coen",
    "year": 1998,
    "country": "USA-UK"
  },
  {
    "title": "Festen",
    "director": "Thomas Vinterberg",
    "year": 1998
  },
  {
    "title": "Rushmore",
    "director": "Wes Anderson",
    "year": 1998
  },
  {
    "title": "The Thin Red Line",
    "director": "Terrence Malick",
    "year": 1998,
    "country": "USA"
  },

  {
    "title": "All About My Mother",
    "director": "Pedro Almodóvar",
    "year": 1999
  },
  {
    "title": "Eyes Wide Shut",
    "director": "Stanley Kubrick",
    "year": 1999
  },
  {
    "title": "Fight Club",
    "director": "David Fincher",
    "year": 1999
  },
  {
    "title": "Magnolia",
    "director": "Paul Thomas Anderson",
    "year": 1999,
    "country": "USA"
  },
  {
    "title": "The Matrix",
    "director": "Lana Wachowski & Lilly Wachowski",
    "year": 1999
  },
  {
    "title": "Rosetta",
    "director": "Jean-Pierre Dardenne & Luc Dardenne",
    "year": 1999
  },

  {
    "title": "Amores perros",
    "director": "Alejandro González Iñárritu",
    "year": 2000
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "director": "Ang Lee",
    "year": 2000
  },
  {
    "title": "In the Mood for Love",
    "director": "Wong Kar-wai",
    "year": 2000,
    "country": "Hong Kong-France"
  },
  {
    "title": "Memento",
    "director": "Christopher Nolan",
    "year": 2000
  },
  {
    "title": "Requiem for a Dream",
    "director": "Darren Aronofsky",
    "year": 2000
  },
  {
    "title": "Yi yi",
    "director": "Edward Yang",
    "year": 2000,
    "country": "Taiwan-Japan"
  },

  {
    "title": "A.I. Artificial Intelligence",
    "director": "Steven Spielberg",
    "year": 2001
  },
  {
    "title": "Amélie",
    "director": "Jean-Pierre Jeunet",
    "year": 2001
  },
  {
    "title": "Mulholland Dr.",
    "director": "David Lynch",
    "year": 2001,
    "country": "France-US"
  },
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "year": 2001,
    "country": "Japan"
  },
  {
    "title": "The Piano Teacher",
    "director": "Michael Haneke",
    "year": 2001
  },
  {
    "title": "The Royal Tenenbaums",
    "director": "Wes Anderson",
    "year": 2001
  },
  {
    "title": "Y tu mamá también",
    "director": "Alfonso Cuarón",
    "year": 2001
  },

  {
    "title": "City of God",
    "director": "Fernando Meirelles & Kátia Lund",
    "year": 2002
  },
  {
    "title": "Punch-Drunk Love",
    "director": "Paul Thomas Anderson",
    "year": 2002
  },
  {
    "title": "Talk to Her",
    "director": "Pedro Almodóvar",
    "year": 2002
  },

  {
    "title": "Dogville",
    "director": "Lars von Trier",
    "year": 2003
  },
  {
    "title": "Elephant",
    "director": "Gus Van Sant",
    "year": 2003
  },
  {
    "title": "Kill Bill Vol. 1",
    "director": "Quentin Tarantino",
    "year": 2003
  },
  {
    "title": "Lost in Translation",
    "director": "Sofia Coppola",
    "year": 2003
  },
  {
    "title": "Oldboy",
    "director": "Park Chan-wook",
    "year": 2003
  },

  {
    "title": "2046",
    "director": "Wong Kar-wai",
    "year": 2004
  },
  {
    "title": "Before Sunset",
    "director": "Richard Linklater",
    "year": 2004
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "director": "Michel Gondry",
    "year": 2004,
    "country": "USA"
  },
  {
    "title": "Million Dollar Baby",
    "director": "Clint Eastwood",
    "year": 2004
  },
  {
    "title": "Tropical Malady",
    "director": "Apichatpong Weerasethakul",
    "year": 2004,
    "country": "France-Thailand-Germany-Italy-Switzerland"
  },

  {
    "title": "A History of Violence",
    "director": "David Cronenberg",
    "year": 2005
  },
  {
    "title": "Brokeback Mountain",
    "director": "Ang Lee",
    "year": 2005
  },
  {
    "title": "Caché",
    "director": "Michael Haneke",
    "year": 2005,
    "country": "France-Austria-Germany-Italy"
  },

  {
    "title": "Children of Men",
    "director": "Alfonso Cuarón",
    "year": 2006
  },
  {
    "title": "Inland Empire",
    "director": "David Lynch",
    "year": 2006
  },
  {
    "title": "Pan's Labyrinth",
    "director": "Guillermo del Toro",
    "year": 2006
  },
  {
    "title": "The Lives of Others",
    "director": "Florian Henckel von Donnersmarck",
    "year": 2006,
    "rating": "?"
  },

  {
    "title": "No Country for Old Men",
    "director": "Joel Coen & Ethan Coen",
    "year": 2007
  },
  {
    "title": "There Will Be Blood",
    "director": "Paul Thomas Anderson",
    "year": 2007,
    "country": "USA"
  },
  {
    "title": "Zodiac",
    "director": "David Fincher",
    "year": 2007
  },

  {
    "title": "Let the Right One In",
    "director": "Tomas Alfredson",
    "year": 2008
  },
  {
    "title": "Synecdoche, New York",
    "director": "Charlie Kaufman",
    "year": 2008
  },
  {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "year": 2008
  },
  {
    "title": "The Hurt Locker",
    "director": "Kathryn Bigelow",
    "year": 2008
  },
  {
    "title": "WALL-E",
    "director": "Andrew Stanton",
    "year": 2008
  },

  {
    "title": "Inglourious Basterds",
    "director": "Quentin Tarantino",
    "year": 2009
  },
  {
    "title": "The White Ribbon",
    "director": "Michael Haneke",
    "year": 2009
  },

  {
    "title": "The Social Network",
    "director": "David Fincher",
    "year": 2010
  },

  {
    "title": "A Separation",
    "director": "Asghar Farhadi",
    "year": 2011
  },
  {
    "title": "Melancholia",
    "director": "Lars von Trier",
    "year": 2011
  },
  {
    "title": "Once Upon a Time in Anatolia",
    "director": "Nuri Bilge Ceylan",
    "year": 2011,
    "country": "Italy-USA"
  },

  {
    "title": "Blue is the Warmest Colour",
    "director": "Abdellatif Kechiche",
    "year": 2013
  },
  {
    "title": "Inside Llewyn Davis",
    "director": "Joel Coen & Ethan Coen",
    "year": 2013
  },

  {
    "title": "Boyhood",
    "director": "Richard Linklater",
    "year": 2014
  },

  {
    "title": "Mad Max: Fury Road",
    "director": "George Miller",
    "year": 2015
  },

  {
    "title": "Once Upon a Time... in Hollywood",
    "director": "Quentin Tarantino",
    "year": 2019
  },
  {
    "title": "Parasite",
    "director": "Bong Joon-ho",
    "year": 2019
  }
]