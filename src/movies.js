const movies = [
  {
    "title": "The Birth of a Nation",
    "director": "D.W. Griffith",
    "year": 1915,
    "country": "USA",
    "category": 2
  },
  {
    "title": "Intolerance",
    "director": "D.W. Griffith",
    "year": 1916,
    "country": "USA",
    "category": 2
  },
  {
    "title": "The Cabinet of Dr. Caligari",
    "director": "Robert Wiene",
    "year": 1920,
    "country": "Germany",
    "category": 1
  },
  {
    "title": "The Kid",
    "director": "Charles Chaplin",
    "year": 1921,
    "country": "USA",
    "rating": 9
  },
  {
    "title": "Nosferatu",
    "director": "F.W. Murnau",
    "year": 1922,
    "country": "Germany",
    "category": 1
  },
  {
    "title": "Our Hospitality",
    "director": "Buster Keaton & John G. Blystone",
    "year": 1923,
    "country": "USA",
    "category": 2
  },

  {
    "title": "The Last Laugh",
    "director": "F.W. Murnau",
    "year": 1924,
    "country": "Germany",
    "rating": 10,
    "category": 1
  },
  {
    "title": "The Navigator",
    "director": "Buster Keaton & Donald Crisp",
    "year": 1924,
    "country": "USA",
    "category": 2
  },
  {
    "title": "Sherlock Jr.",
    "director": "Buster Keaton",
    "year": 1924,
    "country": "USA",
    "category": 1
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
    "rating": 10,
    "category": 1
  },
  {
    "title": "Seven Chances",
    "director": "Buster Keaton",
    "year": 1925,
    "country": "USA",
    "category": 2
  },
  {
    "title": "Strike",
    "director": "Sergei Eisenstein",
    "year": 1925,
    "country": "USSR",
    "category": 2
  },

  {
    "title": "Faust",
    "director": "F.W. Murnau",
    "year": 1926,
    "country": "Germany",
    "rating": 9,
    "category": 1
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
    "rating": 9,
    "category": 1
  },

  {
    "title": "The Circus",
    "director": "Charles Chaplin",
    "year": 1928,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "October",
    "director": "Sergei Eisenstein & Grigori Aleksandrov",
    "year": 1928,
    "country": "USSR",
    "rating": "?"
  },
  {
    "title": "The Passion of Joan of Arc",
    "director": "Carl Theodor Dreyer",
    "year": 1928,
    "country": "France",
    "category": 2
  },
  {
    "title": "Spione",
    "director": "Fritz Lang",
    "year": 1928,
    "country": "Germany",
    "category": 1
  },
  {
    "title": "Steamboat Bill, Jr.",
    "director": "Buster Keaton & Charles Reisner",
    "year": 1928,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Un Chien andalou",
    "director": "Luis Buñuel",
    "year": 1928,
    "country": "France",
    "rating": "?"
  },

  {
    "title": "Man with a Movie Camera",
    "director": "Dziga Vertov",
    "year": 1929,
    "country": "USSR",
    "category": 2
  },

  {
    "title": "All Quiet on the Western Front",
    "director": "Lewis Milestone",
    "year": 1930,
    "country": "USA",
    "category": 2
  },
  {
    "title": "L'Âge d'or",
    "director": "Luis Buñuel",
    "year": 1930,
    "country": "France",
    "category": 2
  },
  {
    "title": "The Blue Angel",
    "director": "Josef von Sternberg",
    "year": 1930,
    "country": "Germany",
    "category": 1
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
    "country": "USA",
    "category": 2
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
    "rating": 10,
    "category": 1
  },
  
  {
    "title": "Boudu Saved from Drowning",
    "director": "Jean Renoir",
    "year": 1932,
    "country": "France",
    "category": 2
  },
  {
    "title": "I Was Born, But…",
    "director": "Yasujiro Ozu",
    "year": 1932,
    "country": "Japan",
    "rating": 10,
    "category": 1
  },
  {
    "title": "Land Without Bread",
    "director": "Luis Buñuel",
    "year": 1932,
    "country": "Spain",
    "category": 2
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
    "title": "Design for Living",
    "director": "Ernst Lubitsch",
    "year": 1933,
    "country": "USA",
    "category": 2
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
    "category": 2
  },
  {
    "title": "The Testament of Dr. Mabuse",
    "director": "Fritz Lang",
    "year": "1933",
    "country": "Germany",
    "rating": "?"
  },

  {
    "title": "It Happened One Night",
    "director": "Frank Capra",
    "year": 1934,
    "country": "USA",
    "rating": 9
  },
  {
    "title": "The Scarlet Empress",
    "director": "Josef von Sternberg",
    "year": 1934,
    "country": "USA",
    "rating": 10,
    "category": 1
  },

  {
    "title": "The 39 Steps",
    "director": "Alfred Hitchcock",
    "year": 1935,
    "country": "UK"
  },
  {
    "title": "Top Hat",
    "director": "Mark Sandrich",
    "year": 1935,
    "country": "USA"
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
    "country": "France",
    "category": 2
  },
  {
    "title": "Snow White and the Seven Dwarfs",
    "director": "David Hand",
    "year": 1937,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Alexander Nevsky",
    "director": "Sergei Eisenstein",
    "year": 1938,
    "country": "USSR"
  },
  {
    "title": "The Adventures of Robin Hood",
    "director": "Michael Curtiz",
    "year": 1938,
    "country": "USA"
  },
  {
    "title": "Bringing Up Baby",
    "director": "Howard Hawks",
    "year": 1938,
    "country": "USA"
  },
  {
    "title": "Holiday",
    "director": "George Cukor",
    "year": 1938,
    "country": "USA",
    "category": 2
  },
  {
    "title": "The Lady Vanishes",
    "director": "Alfred Hitchcock",
    "year": 1938,
    "country": "UK"
  },

  {
    "title": "Gone with the Wind",
    "director": "Victor Fleming",
    "year": 1939,
    "country": "USA"
  },
  {
    "title": "Mr. Smith Goes to Washington",
    "director": "Frank Capra",
    "year": "1939",
    "country": "USA",
    "category": 2
  },
  {
    "title": "Ninotchka",
    "director": "Ernst Lubitsch",
    "year": 1939,
    "country": "USA",
    "category": 2
  },
  {
    "title": "Only Angels Have Wings",
    "director": "Howard Hawks",
    "year": 1939,
    "country": "USA",
    "category": 2
  },
  {
    "title": "The Rules of the Game",
    "director": "Jean Renoir",
    "year": 1939,
    "country": "France",
    "category": 2
  },
  {
    "title": "Stagecoach",
    "director": "John Ford",
    "year": 1939,
    "country": "USA",
    "category": 2
  },
  {
    "title": "The Story of the Last Chrysanthemums",
    "director": "Kenji Mizoguchi",
    "year": 1939,
    "country": "Japan",
    "rating": 8,
    "category": 2
  },
  {
    "title": "The Wizard of Oz",
    "director": "Victor Fleming",
    "year": 1939,
    "country": "USA",
    "rating": 8
  },
  {
    "title": "Young Mr. Lincoln",
    "director": "John Ford",
    "year": 1939,
    "country": "USA",
    "category": 2
  },

  {
    "title": "Fantasia",
    "director": "Various Directors",
    "year": 1940,
    "country": "USA",
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
    "year": 1940,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Rebecca",
    "director": "Alfred Hitchcock",
    "year": 1940,
    "country": "USA"
  },
  {
    "title": "The Philadelphia Story",
    "director": "George Cukor",
    "year": 1940,
    "country": "USA",
    "rating": "?"
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Dumbo",
    "director": "Ben Sharpsteen",
    "year": 1941,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "How Green Was My Valley",
    "director": "John Ford",
    "year": 1941,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Lady Eve",
    "director": "Preston Sturges",
    "year": 1941,
    "country": "USA",
    "category": 1
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
    "rating": 5,
    "category": 2
  },


  {
    "title": "Bambi",
    "director": "David Hand",
    "year": 1942,
    "country": "USA",
    "rating": "?"
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
    "country": "USA",
    "category": 2
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
    "year": 1942,
    "country": "USA",
    "category": 1
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
    "country": "Denmark",
    "category": 1
  },
  {
    "title": "I Walked with a Zombie",
    "director": "Jacques Tourneur",
    "year": 1943,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Ossessione",
    "director": "Luchino Visconti",
    "year": 1943,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "Shadow of a Doubt",
    "director": "Alfred Hitchcock",
    "year": 1943,
    "country": "USA"
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
    "year": 1944,
    "country": "USA"
  },
  {
    "title": "The Miracle of Morgan's Creek",
    "director": "Preston Sturges",
    "year": 1944,
    "country": "USA",
    "category": 2
  },
  {
    "title": "To Have and Have Not",
    "director": "Howard Hawks",
    "year": 1944,
    "country": "USA",
    "rating": 9
  },
  {
    "title": "Meet Me in St. Louis",
    "director": "Vincente Minnelli",
    "year": 1944,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Brief Encounter",
    "director": "David Lean",
    "year": 1945,
    "country": "UK"
  },
  {
    "title": "Detour",
    "director": "Edgar G. Ulmer",
    "year": 1945,
    "country": "USA",
    "category": 2
  },
  {
    "title": "Les Dames du Bois de Boulogne",
    "director": "Robert Bresson",
    "year": 1945,
    "country": "France"
  },
  {
    "title": "Les Enfants du paradis",
    "director": "Marcel Carné",
    "year": 1945,
    "country": "France",
    "category": 1
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
    "image": "romeopencity",
    "rating": "?"
  },

  {
    "title": "Beauty and the Beast",
    "director": "Jean Cocteau",
    "year": 1946,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "The Best Years of Our Lives",
    "director": "William Wyler",
    "year": 1946,
    "country": "US"
  },
  {
    "title": "Gilda",
    "director": "Charles Vidor",
    "year": 1946,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Great Expectations",
    "director": "David Lean",
    "year": 1946,
    "country": "UK"
  },
  {
    "title": "It's a Wonderful Life",
    "director": "Frank Capra",
    "year": 1946,
    "country": "USA",
    "rating": "?"
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
    "category": 2
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
    "year": 1946,
    "country": "USA"
  },

  {
    "title": "Black Narcissus",
    "director": "Michael Powell & Emeric Pressburger",
    "year": 1947,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "The Ghost and Mrs. Muir",
    "director": "Joseph L. Mankiewicz",
    "year": 1947,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Monsieur Verdoux",
    "director": "Charles Chaplin",
    "year": 1947,
    "country": "USA"
  },
  {
    "title": "Odd Man Out",
    "director": "Carol Reed",
    "year": 1947,
    "country": "UK",
    "rating": "?"
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
    "title": "Fort Apache",
    "director": "John Ford",
    "year": 1948,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "La Terra trema",
    "director": "Luchino Visconti",
    "year": 1948,
    "country": "Italy",
    "rating": "?"
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
    "year": 1948,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Red River",
    "director": "Howard Hawks",
    "year": 1948,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Red Shoes",
    "director": "Michael Powell & Emeric Pressburger",
    "year": 1948,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Rope",
    "director": "Alfred Hitchcock",
    "year": 1948,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "They Live by Night",
    "director": "Nicholas Ray",
    "year": 1948,
    "country": "USA",
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
    "country": "Japan",
    "category": 1
  },
  {
    "title": "She Wore a Yellow Ribbon",
    "director": "John Ford",
    "year": 1949,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Third Man",
    "director": "Carol Reed",
    "year": 1949,
    "country": "UK"
  },
  {
    "title": "White Heat",
    "director": "Raoul Walsh",
    "year": 1949,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "All About Eve",
    "director": "Joseph L. Mankiewicz",
    "year": 1950,
    "country": "USA"
  },
  {
    "title": "Gun Crazy",
    "director": "Joseph H. Lewis",
    "year": 1950,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "In a Lonely Place",
    "director": "Nicholas Ray",
    "year": 1950,
    "country": "USA"
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
    "year": 1950,
    "country": "France"
  },
  {
    "title": "Rashomon",
    "director": "Akira Kurosawa",
    "year": 1950,
    "country": "Japan",
    "category": 1
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Wagon Master",
    "director": "John Ford",
    "year": 1950,
    "country": "USA",
    "rating": 7
  },

  {
    "title": "A Place in the Sun",
    "director": "George Stevens",
    "year": 1951,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "A Streetcar Named Desire",
    "director": "Elia Kazan",
    "year": 1951,
    "country": "USA"
  },
  {
    "title": "Ace in the Hole",
    "director": "Billy Wilder",
    "year": 1951
  },
  {
    "title": "The African Queen",
    "director": "John Huston",
    "year": 1951,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "An American in Paris",
    "director": "Vincente Minnelli",
    "year": 1951,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Day the Earth Stood Still",
    "director": "Robert Wise",
    "year": 1951,
    "country": "USA"
  },
  {
    "title": "Diary of a Country Priest",
    "director": "Robert Bresson",
    "year": 1951,
    "country": "France"
  },
  {
    "title": "Early Summer",
    "director": "Yasujiro Ozu",
    "year": 1951,
    "country": "Japan",
    "category": 1
  },
  {
    "title": "Othello",
    "director": "Orson Welles",
    "year": 1951,
    // "country": "Italy-France-Morocco-USA"
  },
  {
    "title": "The River",
    "director": "Jean Renoir",
    "year": 1951,
    "country": "France-India-USA",
    "rating": 8
  },
  {
    "title": "Strangers on a Train",
    "director": "Alfred Hitchcock",
    "year": 1951,
    "country": "USA"
  },

  {
    "title": "The Bad and the Beautiful",
    "director": "Vincente Minnelli",
    "year": 1952,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Casque d'or",
    "director": "Jacques Becker",
    "year": 1952,
    "country": "France",
    "category": 1
  },
  {
    "title": "Forbidden Games",
    "director": "René Clément",
    "year": 1952,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "High Noon",
    "director": "Fred Zinnemann",
    "year": 1952,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Ikiru",
    "director": "Akira Kurosawa",
    "year": 1952,
    "country": "Japan",
    "category": 1
  },
  {
    "title": "Limelight",
    "director": "Charles Chaplin",
    "year": 1952,
    "country": "USA"
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
    "year": 1935,
    "country": "USA"
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
    "year": 1953,
    "country": "USA"
  },
  {
    "title": "Bride of Frankenstein",
    "director": "James Whale",
    "year": 1935,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "El",
    "director": "Luis Buñuel",
    "year": 1953,
    "country": "Mexico",
    "rating": "?"
  },
  {
    "title": "Gentlemen Prefer Blondes",
    "director": "Howard Hawks",
    "year": 1953,
    "country": "US",
    "rating": "?"
  },
  {
    "title": "I Vitelloni",
    "director": "Federico Fellini",
    "year": 1953,
    "country": "Italy"
  },
  {
    "title": "Madame de...",
    "director": "Max Ophüls",
    "year": 1953,
    "country": "France-Italy",
    "category": 1
  },
  {
    "title": "Pickup on South Street",
    "director": "Samuel Fuller",
    "year": 1953,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Roman Holiday",
    "director": "William Wyler",
    "year": 1953,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Sawdust and Tinsel",
    "director": "Ingmar Bergman",
    "year": 1953,
    "country": "Sweden"
  },
  {
    "title": "Shane",
    "director": "George Stevens",
    "year": 1953,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Summer with Monika",
    "director": "Ingmar Bergman",
    "year": 1953,
    "country": "Sweden"
  },
  {
    "title": "Tokyo Story",
    "director": "Yasujiro Ozu",
    "year": 1953,
    "country": "Japan",
    "category": 1
  },
  {
    "title": "The Wages of Fear",
    "director": "Henri-Georges Clouzot",
    "year": 1953,
    "country": "France-Italy"
  },
  {
    "title": "Ugetsu monogatari",
    "director": "Kenji Mizoguchi",
    "year": "1953",
    "country": "Japan",
    "rating": "?"
  },

  {
    "title": "A Star is Born",
    "director": "George Cukor",
    "year": 1954,
    "country": "USA",
    "rating": "?"
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
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "On the Waterfront",
    "director": "Elia Kazan",
    "year": 1954,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Rear Window",
    "director": "Alfred Hitchcock",
    "year": 1954,
    "country": "USA",
    "category": 1
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
    "year": 1954,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "Seven Samurai",
    "director": "Akira Kurosawa",
    "year": 1954,
    "country": "Japan",
    "rating": "?"
  },
  {
    "title": "Touchez pas au Grisbi",
    "director": "Jacques Becker",
    "year": 1954,
    "country": "France",
    "category": 1
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
    "year": 1955,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Criminal Life of Archibaldo de la Cruz",
    "director": "Luis Buñuel",
    "year": 1955,
    "country": "Mexico",
    "rating": "?"
  },
  {
    "title": "East of Eden",
    "director": "Elia Kazan",
    "year": 1955,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "French Cancan",
    "director": "Jean Renoir",
    "year": 1955,
    "country": "France"
  },
  {
    "title": "Kiss Me Deadly",
    "director": "Robert Aldrich",
    "year": 1955,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Ladykillers",
    "director": "Alexander Mackendrick",
    "year": 1955,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Les Diaboliques",
    "director": "Henri-Georges Clouzot",
    "year": 1955,
    "country": "France"
  },
  {
    "title": "Lola Montès",
    "director": "Max Ophüls",
    "year": 1955,
    "country": "France-West Germany",
    "rating": "?"
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
    "country": "Denmark",
    "category": 1
  },
  {
    "title": "Rebel Without a Cause",
    "director": "Nicholas Ray",
    "year": 1955,
    "country": "USA"
  },
  {
    "title": "Rififi",
    "director": "Jules Dassin",
    "year": 1955,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Smiles of a Summer Night",
    "director": "Ingmar Bergman",
    "year": 1955,
    "country": "Sweden",
    "rating": "?"
  },

  {
    "title": "The Ten Commandments",
    "director": "Cecil B. DeMille",
    "year": 1956,
    "country": "USA"
  },
  {
    "title": "A Man Escaped",
    "director": "Robert Bresson",
    "year": 1956,
    "country": "France",
    "category": 1
  },
  {
    "title": "Bigger Than Life",
    "director": "Nicholas Ray",
    "year": 1956,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Forbidden Planet",
    "director": "Fred M. Wilcox",
    "year": 1956,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Invasion of the Body Snatchers",
    "director": "Don Siegel",
    "year": 1956,
    "country": "USA"
  },
  {
    "title": "The Killing",
    "director": "Stanley Kubrick",
    "year": "1956",
    "country": "USA",
    "rating": "?"
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
    "year": 1956,
    "country": "USA",
    "category": 1
  },

  {
    "title": "12 Angry Men",
    "director": "Sidney Lumet",
    "year": 1957,
    "country": "USA"
  },
  {
    "title": "An Affair to Remember",
    "director": "Leo McCarey",
    "year": 1957,
    "country": "USA",
    "rating": 8
  },
  {
    "title": "The Bridge on the River Kwai",
    "director": "David Lean",
    "year": 1957,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Nights of Cabiria",
    "director": "Federico Fellini",
    "year": 1957,
    "country": "Italy-France"
  },
  {
    "title": "Night of the Demon",
    "director": "Jacques Tourneur",
    "year": 1957,
    "country": "UK",
    "rating": "?"
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
    "year": 1957,
    "country": "Japan"
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
    "country": "France",
    "category": 1
  },
  {
    "title": "Anatomy of a Murder",
    "director": "Otto Preminger",
    "year": 1959,
    "country": "USA"
  },
  {
    "title": "Ben-Hur",
    "director": "William Wyler",
    "year": 1959,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Good Morning",
    "director": "Yasujiro Ozu",
    "year": 1959,
    "country": "Japan",
    "category": 1
  },
  {
    "title": "Hiroshima mon amour",
    "director": "Alain Resnais",
    "year": 1959,
    "country": "France-Japan",
    "category": 1
  },
  {
    "title": "Imitation of Life",
    "director": "Douglas Sirk",
    "year": 1959,
    "country": "USA",
    "category": 1
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Some Like it Hot",
    "director": "Billy Wilder",
    "year": 1959,
    "country": "USA"
  },

  {
    "title": "The Apartment",
    "director": "Billy Wilder",
    "year": 1960,
    "country": "USA"
  },
  {
    "title": "Breathless",
    "director": "Jean-Luc Godard",
    "year": 1960,
    "country": "France",
    "category": 1
  },
  {
    "title": "Eyes Without a Face",
    "director": "Georges Franju",
    "year": 1960,
    "country": "France-Italy"
  },
  {
    "title": "L'Avventura",
    "director": "Michelangelo Antonioni",
    "year": 1960,
    "country": "Italy-France",
    "category": 1
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
    "year": 1960,
    "country": "France-Italy",
    "category": 1
  },
  {
    "title": "Peeping Tom",
    "director": "Michael Powell",
    "year": 1960,
    "country": "UK"
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
    "country": "Italy-France",
    "rating": "?"
  },
  {
    "title": "Shoot the Piano Player",
    "director": "François Truffaut",
    "year": 1960,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Spartacus",
    "director": "Stanley Kubrick",
    "year": 1960,
    "country": "USA"
  },
  {
    "title": "The Virgin Spring",
    "director": "Ingmar Bergman",
    "year": 1960,
    "country": "Sweden"
  },

  {
    "title": "Breakfast at Tiffany's",
    "director": "Blake Edwards",
    "year": 1961,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Hustler",
    "director": "Robert Rossen",
    "year": 1961,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "La Notte",
    "director": "Michelangelo Antonioni",
    "year": 1961,
    "country": "Italy-France",
    "category": 1
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
    "year": 1961,
    "country": "UK"
  },
  {
    "title": "Splendor in the Grass",
    "director": "Elia Kazan",
    "year": 1961,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Viridiana",
    "director": "Luis Buñuel",
    "year": 1961,
    "country": "Spain",
    "category": 1
  },
  {
    "title": "West Side Story",
    "director": "Robert Wise",
    "year": 1961,
    "country": "USA"
  },
  {
    "title": "Yojimbo",
    "director": "Akira Kurosawa",
    "year": 1961,
    "country": "Japan"
  },

  {
    "title": "An Autumn Afternoon",
    "director": "Yasujiro Ozu",
    "year": 1962,
    "country": "Japan",
    "category": 1
  },
  {
    "title": "The Exterminating Angel",
    "director": "Luis Buñuel",
    "year": 1962,
    "country": "Mexico",
    "category": 1
  },
  {
    "title": "Harakiri",
    "director": "Masaki Kobayashi",
    "year": 1962,
    "country": "Japan"
  },
  {
    "title": "Hatari!",
    "director": "Howard Hawks",
    "year": 1962,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Ivan's Childhood",
    "director": "Andrei Tarkovsky",
    "year": 1962,
    "country": "USSR",
    "category": 1
  },
  {
    "title": "Jules et Jim",
    "director": "François Truffaut",
    "year": 1962,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Knife in the Water",
    "director": "Roman Polanski",
    "year": 1962,
    "country": "Poland",
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
    "year": 1962,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "L'Eclisse",
    "director": "Michelangelo Antonioni",
    "year": 1962,
    "country": "Italy-France",
    "category": 1
  },
  {
    "title": "The Man Who Shot Liberty Valance",
    "director": "John Ford",
    "year": 1962,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Manchurian Candidate",
    "director": "John Frankenheimer",
    "year": 1962,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "To Kill a Mockingbird",
    "director": "Robert Mulligan",
    "year": 1962,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Vivre sa vie",
    "director": "Jean-Luc Godard",
    "year": 1962,
    "country": "France",
    "category": 1
  },
  {
    "title": "Winter Light",
    "director": "Ingmar Bergman",
    "year": 1962,
    "country": "Sweden"
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Contempt",
    "director": "Jean-Luc Godard",
    "year": 1963,
    "country": "France-Italy",
    "category": 1
  },
  {
    "title": "The Great Escape",
    "director": "John Sturges",
    "year": 1963,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "High and Low",
    "director": "Akira Kurosawa",
    "year": 1963,
    "country": "Japan"
  },
  {
    "title": "The Leopard",
    "director": "Luchino Visconti",
    "year": 1963,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "The Nutty Professor",
    "director": "Jerry Lewis",
    "year": 1963,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Shock Corridor",
    "director": "Samuel Fuller",
    "year": 1963,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Silence",
    "director": "Ingmar Bergman",
    "year": 1963,
    "country": "Sweden"
  },

  {
    "title": "Band of Outsiders",
    "director": "Jean-Luc Godard",
    "year": 1964,
    "country": "France",
    "category": 1
  },
  {
    "title": "Black God, White Devil",
    "director": "Glauber Rocha",
    "year": 1964,
    "country": "Brazil",
    "rating": "?"
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
    "year": 1964,
    "country": "USA"
  },
  {
    "title": "Mary Poppins",
    "director": "Robert Stevenson",
    "year": 1964,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Red Desert",
    "director": "Michelangelo Antonioni",
    "year": 1964,
    "country": "Italy-France",
    "rating": "?"
  },
  {
    "title": "Woman in the Dunes",
    "director": "Hiroshi Teshigahara",
    "year": 1964,
    "country": "Japan",
    "category": 1
  },
  
  {
    "title": "Alphaville",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "country": "France",
    "category": 1
  },
  {
    "title": "Doctor Zhivago",
    "director": "David Lean",
    "year": 1965,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Pierrot le fou",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "country": "France-Italy",
    "rating": "?"
  },
  {
    "title": "Repulsion",
    "director": "Roman Polanski",
    "year": 1965,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Simon of the Desert",
    "director": "Luis Buñuel",
    "year": 1965,
    "country": "Mexico",
    "rating": "?"
  },
  {
    "title": "The Sound of Music",
    "director": "Robert Wise",
    "year": 1965,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Andrei Rublev",
    "director": "Andrei Tarkovsky",
    "year": 1966,
    "country": "USSR",
    "category": 1
  },
  {
    "title": "Au hasard Balthazar",
    "director": "Robert Bresson",
    "year": 1966,
    "country": "France",
    "category": 1
  },
  {
    "title": "Blow-Up",
    "director": "Michelangelo Antonioni",
    "year": 1966,
    "country": "Italy-UK",
    "category": 1
  },
  {
    "title": "Daisies",
    "director": "Vera Chytilová",
    "year": 1966,
    "country": "Czechoslovakia",
    "rating": "?"
  },
  {
    "title": "The Good, the Bad and the Ugly",
    "director": "Sergio Leone",
    "year": 1966,
    "country": "Italy-Spain",
    "category": 1
  },
  {
    "title": "Persona",
    "director": "Ingmar Bergman",
    "year": 1966,
    "country": "Sweden",
    "category": 1
  },
  {
    "title": "Two or Three Things I Know About Her",
    "director": "Jean-Luc Godard",
    "year": 1966,
    "country": "France",
    "category": 1
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Cool Hand Luke",
    "director": "Stuart Rosenberg",
    "year": 1967,
    "country": "USA",
    "rating": "?"
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
    "country": "France",
    "category": 1
  },
  {
    "title": "Mouchette",
    "director": "Robert Bresson",
    "year": 1967,
    "country": "France",
    "category": 1
  },
  {
    "title": "Point Blank",
    "director": "John Boorman",
    "year": 1967,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Week-End",
    "director": "Jean-Luc Godard",
    "year": 1967,
    "country": "France-Italy",
    "category": 1
  },

  {
    "title": "2001: A Space Odyssey",
    "director": "Stanley Kubrick",
    "year": 1968,
    "country": "UK-USA",
    "category": 1
  },
  {
    "title": "Hour of the Wolf",
    "director": "Ingmar Bergman",
    "year": 1968,
    "country": "Sweden",
    "rating": "?"
  },
  {
    "title": "Night of the Living Dead",
    "director": "George A. Romero",
    "year": 1968,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Once Upon a Time in the West",
    "director": "Sergio Leone",
    "year": 1968
  },
  {
    "title": "The Producers",
    "director": "Mel Brooks",
    "year": 1968,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Rosemary's Baby",
    "director": "Roman Polanski",
    "year": 1968,
    "country": "USA",
    "category": 1
  },

  {
    "title": "Army of Shadows",
    "director": "Jean-Pierre Melville",
    "year": 1969,
    "country": "France-Italy"
  },
  {
    "title": "Butch Cassidy and the Sundance Kid",
    "director": "George Roy Hill",
    "year": 1969,
    "country": "USA",
    "rating": 8
  },
  {
    "title": "Easy Rider",
    "director": "Dennis Hopper",
    "year": 1969,
    "country": "USA",
    "rating": "?"
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "My Night at Maud's",
    "director": "Eric Rohmer",
    "year": 1969,
    "country": "France",
    "category": 1
  },
  {
    "title": "Satyricon",
    "director": "Federico Fellini",
    "year": 1969,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "The Wild Bunch",
    "director": "Sam Peckinpah",
    "year": 1969,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Claire's Knee",
    "director": "Eric Rohmer",
    "year": 1970,
    "country": "France",
    "category": 1
  },
  {
    "title": "The Conformist",
    "director": "Bernardo Bertolucci",
    "year": 1970,
    "country": "Italy-France-West Germany",
    "rating": "?"
  },
  {
    "title": "M*A*S*H",
    "director": "Robert Altman",
    "year": 1970,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Private Life of Sherlock Holmes",
    "director": "Billy Wilder",
    "year": 1970,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Tristana",
    "director": "Luis Buñuel",
    "year": 1970,
    "country": "Spain-Italy-France",
    "category": 1
  },
  {
    "title": "Zabriskie Point",
    "director": "Michelangelo Antonioni",
    "year": 1970,
    "country": "USA",
    "category": 1
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
    "title": "Dirty Harry",
    "director": "Don Siegel",
    "year": 1971,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Duel",
    "director": "Steven Spielberg",
    "year": 1971,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Harold and Maude",
    "director": "Hal Ashby",
    "year": 1971,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Last Picture Show",
    "director": "Peter Bogdanovich",
    "year": 1971,
    "country": "USA",
    "category": 1
  },
  {
    "title": "McCabe & Mrs. Miller",
    "director": "Robert Altman",
    "year": 1971,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The French Connection",
    "director": "William Friedkin",
    "year": 1971,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Two-Lane Blacktop",
    "director": "Monte Hellman",
    "year": 1971,
    "country": "USA",
    "category": 1
  },
  
  {
    "title": "Aguirre: The Wrath of God",
    "director": "Werner Herzog",
    "year": 1972,
    "country": "West Germany",
    "category": 1
  },
  {
    "title": "Cabaret",
    "director": "Bob Fosse",
    "year": 1972,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Cries and Whispers",
    "director": "Ingmar Bergman",
    "year": 1972,
    "country": "Sweden",
    "rating": "?"
  },
  {
    "title": "Deliverance",
    "director": "John Boorman",
    "year": 1972,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Fat City",
    "director": "John Huston",
    "year": 1972,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Fellini's Roma",
    "director": "Federico Fellini",
    "year": "1972",
    "country": "Italy",
    "rating": "?"
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
    "year": 1972,
    "country": "France-Italy",
    "rating": "?"
  },
  {
    "title": "The Marriage of Maria Braun",
    "director": "Rainer Werner Fassbinder",
    "year": 1979,
    "country": "West Germany"
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
    "title": "American Graffiti",
    "director": "George Lucas",
    "year": 1973,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Badlands",
    "director": "Terrence Malick",
    "year": 1973,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Don't Look Now",
    "director": "Nicolas Roeg",
    "year": 1973,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Enter the Dragon",
    "director": "Robert Clouse",
    "year": 1973,
    "country": "USA-Hong Kong",
    "rating": "?"
  },
  {
    "title": "The Exorcist",
    "director": "William Friedkin",
    "year": 1973,
    "country": "USA",
    "rating": "?"
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
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "Paper Moon",
    "director": "Peter Bogdanovich",
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "Pat Garrett and Billy the Kid",
    "director": "Sam Peckinpah",
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "The Holy Mountain",
    "director": "Alejandro Jodorowsky",
    "year": 1973,
    "country": "Mexico-USA"
  },
  {
    "title": "The Long Goodbye",
    "director": "Robert Altman",
    "year": 1973,
    "country": "USA"
  },
  {
    "title": "The Spirit of the Beehive",
    "director": "Victor Erice",
    "year": 1973,
    "country": "Spain",
    "rating": "?"
  },
  {
    "title": "The Wicker Man",
    "director": "Robin Hardy",
    "year": 1973,
    "country": "UK"
  },

  {
    "title": "A Woman Under the Influence",
    "director": "John Cassavetes",
    "year": 1974,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Ali: Fear Eats the Soul",
    "director": "Rainer Werner Fassbinder",
    "year": 1974,
    "country": "West Germany",
    "rating": "?"
  },
  {
    "title": "Alice in the Cities",
    "director": "Wim Wenders",
    "year": 1974,
    "country": "West Germany",
    "rating": "?"
  },
  {
    "title": "Bring Me the Head of Alfredo Garcia",
    "director": "Sam Peckinpah",
    "year": 1974,
    "country": "USA",
    "rating": "?"
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
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Godfather Part II",
    "director": "Francis Ford Coppola",
    "year": 1974,
    "country": "USA"
  },
  {
    "title": "Lancelot du Lac",
    "director": "Robert Bresson",
    "year": 1974,
    "country": "France-Italy",
    "category": 1
  },
  {
    "title": "The Phantom of Liberty",
    "director": "Luis Buñuel",
    "year": 1974,
    "country": "France",
    "category": 1
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
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Barry Lyndon",
    "director": "Stanley Kubrick",
    "year": 1975,
    "country": "UK",
    "category": 1
  },
  {
    "title": "Deep Red",
    "director": "Dario Argento",
    "year": 1975
  },
  {
    "title": "Dersu Uzala",
    "director": "Akira Kurosawa",
    "year": 1975,
    "country": "USSR-Japan",
    "rating": "?"
  },
  {
    "title": "Dog Day Afternoon",
    "director": "Sidney Lumet",
    "year": 1975,
    "country": "USA",
    "rating": "?"
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
    "year": 1975,
    "country": "USA"
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
    "year": 1975,
    "country": "UK"
  },
  {
    "title": "Nashville",
    "director": "Robert Altman",
    "year": 1975,
    "country": "USA",
    "category": 1
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "director": "Milos Forman",
    "year": 1975,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Passenger",
    "director": "Michelangelo Antonioni",
    "year": 1975,
    "country": "Italy",
    "category": 1
  },
  {
    "title": "Picnic at Hanging Rock",
    "director": "Peter Weir",
    "year": 1975,
    "country": "Australia",
    "rating": "?"
  },
  {
    "title": "Salò, or the 120 Days of Sodom",
    "director": "Pier Paolo Pasolini",
    "year": 1975,
    "country": "Italy",
    "category": 1
  },

  {
    "title": "All the President's Men",
    "director": "Alan J. Pakula",
    "year": 1976,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Assault on Precinct 13",
    "director": "John Carpenter",
    "year": 1976,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Carrie",
    "director": "Brian De Palma",
    "year": 1976,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Fellini's Casanova",
    "director": "Federico Fellini",
    "year": 1976,
    "country": "Italy",
    "rating": "?"
  },
  {
    "title": "In the Realm of the Senses",
    "director": "Nagisa Oshima",
    "year": 1976,
    "country": "Japan-France",
    "rating": "?"
  },
  {
    "title": "Network",
    "director": "Sidney Lumet",
    "year": 1976,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Outlaw Josey Wales",
    "director": "Clint Eastwood",
    "year": 1976,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Rocky",
    "director": "John G. Avildsen",
    "year": "1976",
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Taxi Driver",
    "director": "Martin Scorsese",
    "year": 1976,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Tenant",
    "director": "Roman Polanski",
    "year": 1976,
    "country": "France-USA"
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
    "year": 1977,
    "country": "USA"
  },
  {
    "title": "Saturday Night Fever",
    "director": "John Badham",
    "year": 1977,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Star Wars",
    "director": "George Lucas",
    "year": 1977,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Suspiria",
    "director": "Dario Argento",
    "year": 1977,
    "country": "Italy"
  },
  {
    "title": "That Obscure Object of Desire",
    "director": "Luis Buñuel",
    "year": 1977,
    "country": "France-Spain",
    "category": 1
  },

  {
    "title": "Dawn of the Dead",
    "director": "George A. Romero",
    "year": 1978,
    "country": "USA"
  },
  {
    "title": "Days of Heaven",
    "director": "Terrence Malick",
    "year": 1978,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Deer Hunter",
    "director": "Michael Cimino",
    "year": 1978,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Halloween",
    "director": "John Carpenter",
    "year": 1978,
    "country": "USA",
    "rating": "?"
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
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Manhattan",
    "director": "Woody Allen",
    "year": 1979,
    "country": "USA",
    "category": 1
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
    "country": "USSR",
    "category": 1
  },

  {
    "title": "Airplane!",
    "director": "Jim Abrahams, David Zucker & Jerry Zucker",
    "year": 1980,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Blues Brothers",
    "director": "John Landis",
    "year": 1980,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Kagemusha",
    "director": "Akira Kurosawa",
    "year": 1980,
    "country": "Japan"
  },
  {
    "title": "Raging Bull",
    "director": "Martin Scorsese",
    "year": 1980,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Elephant Man",
    "director": "David Lynch",
    "year": 1980,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Empire Strikes Back",
    "director": "Irvin Kershner",
    "year": 1980,
    "country": "USA"
  },
  {
    "title": "The Shining",
    "director": "Stanley Kubrick",
    "year": 1980,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "An American Werewolf in London",
    "director": "John Landis",
    "year": 1981,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Blow Out",
    "director": "Brian De Palma",
    "year": 1981,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Das Boot",
    "director": "Wolfgang Petersen",
    "year": 1981,
    "country": "West Germany",
    "rating": "?"
  },
  {
    "title": "Excalibur",
    "director": "John Boorman",
    "year": 1981,
    "country": "UK",
    "rating": "?"
  },
  {
    "title": "Mad Max 2",
    "director": "George Miller",
    "year": 1981,
    "country": "Australia",
    "rating": "?"
  },
  {
    "title": "Possession",
    "director": "Andrzej Zulawski",
    "year": 1981,
    "country": "France-West Germany",
    "category": 1
  },
  {
    "title": "Raiders of the Lost Ark",
    "director": "Steven Spielberg",
    "year": 1981,
    "country": "USA",
    "rating": 8
  },
  {
    "title": "Reds",
    "director": "Warren Beatty",
    "year": 1981,
    "country": "USA"
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
    "year": 1982,
    "country": "West Germany",
    "category": 1
  },
  {
    "title": "Koyaanisqatsi",
    "director": "Godfrey Reggio",
    "year": 1982,
    "country": "USA"
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
    "year": 1982,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Veronika Voss",
    "director": "Rainer Werner Fassbinder",
    "year": 1982,
    "country": "West Germany"
  },

  {
    "title": "The King of Comedy",
    "director": "Martin Scorsese",
    "year": 1983,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Right Stuff",
    "director": "Philip Kaufman",
    "year": 1983,
    "country": "USA",
    "rating": "?"
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
    "year": 1983,
    "country": "USA"
  },
  {
    "title": "Videodrome",
    "director": "David Cronenberg",
    "year": 1983,
    "country": "Canada",
    "category": 1
  },

  {
    "title": "Amadeus",
    "director": "Milos Forman",
    "year": 1984,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Blood Simple",
    "director": "Joel Coen & Ethan Coen",
    "year": 1984,
    "country": "USA"
  },
  {
    "title": "Ghostbusters",
    "director": "Ivan Reitman",
    "year": 1984,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Once Upon a Time in America",
    "director": "Sergio Leone",
    "year": 1984,
    "country": "Italy-USA",
    "rating": "?"
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
    "year": 1984,
    "country": "USA"
  },
  {
    "title": "This is Spinal Tap",
    "director": "Rob Reiner",
    "year": 1984,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Back to the Future",
    "director": "Robert Zemeckis",
    "year": 1985,
    "country": "USA"
  },
  {
    "title": "Brazil",
    "director": "Terry Gilliam",
    "year": 1985,
    "country": "UK"
  },
  {
    "title": "The Breakfast Club",
    "director": "John Hughes",
    "year": 1985,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Come and See",
    "director": "Elem Klimov",
    "year": 1985,
    "country": "USSR",
    "rating": "?"
  },
  {
    "title": "The Purple Rose of Cairo",
    "director": "Woody Allen",
    "year": 1985,
    "country": "USA"
  },
  {
    "title": "Ran",
    "director": "Akira Kurosawa",
    "year": 1985,
    "country": "France-Japan"
  },
  {
    "title": "Taipei Story",
    "director": "Edward Yang",
    "year": 1985,
    "country": "Taiwan",
    "rating": "?"
  },

  {
    "title": "A Better Tomorrow",
    "director": "John Woo",
    "year": 1986,
    "country": "Hong Kong",
    "rating": "?"
  },
  {
    "title": "Aliens",
    "director": "James Cameron",
    "year": 1986,
    "country": "USA"
  },
  {
    "title": "Blue Velvet",
    "director": "David Lynch",
    "year": 1986,
    "country": "USA"
  },
  {
    "title": "Down by Law",
    "director": "Jim Jarmusch",
    "year": "1986",
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Ferris Bueller's Day Off",
    "director": "John Hughes",
    "year": 1986,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Fly",
    "director": "David Cronenberg",
    "year": 1986,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Hannah and Her Sisters",
    "director": "Woody Allen",
    "year": 1986,
    "country": "USA"
  },
  {
    "title": "The Sacrifice",
    "director": "Andrei Tarkovsky",
    "year": 1986,
    "country": "France-Sweden"
  },
  {
    "title": "Stand by Me",
    "director": "Rob Reiner",
    "year": 1986,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Au revoir les enfants",
    "director": "Louis Malle",
    "year": 1987
  },
  {
    "title": "The Last Emperor",
    "director": "Bernardo Bertolucci",
    "year": 1987,
    "country": "China-Italy-UK-France",
    "rating": "?"
  },
  {
    "title": "The Princess Bride",
    "director": "Rob Reiner",
    "year": 1987,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Wings of Desire",
    "director": "Wim Wenders",
    "year": 1987,
    "country": "West Germany-France",
    "rating": "?"
  },

  {
    "title": "Evil Dead II",
    "director": "Sam Raimi",
    "year": 1987,
    "country": "USA"
  },
  {
    "title": "Full Metal Jacket",
    "director": "Stanley Kubrick",
    "year": 1987,
    "rating": "?"
  },
  {
    "title": "Raising Arizona",
    "director": "Joel Coen & Ethan Coen",
    "year": 1987,
    "country": "USA"
  },
  {
    "title": "Robocop",
    "director": "Paul Verhoeven",
    "year": 1987,
    "country": "USA"
  },
  {
    "title": "Where is the Friend's Home?",
    "director": "Abbas Kiarostami",
    "year": 1987,
    "country": "Iran",
    "image": "whereisthefriendshome",
    "category": 1
  },

  {
    "title": "Akira",
    "director": "Katsuhiro Otomo",
    "year": 1988,
    "country": "Japan",
    "rating": "?"
  },
  {
    "title": "Cinema Paradiso",
    "director": "Giuseppe Tornatore",
    "year": 1988,
    "country": "Italy-France"
  },
  {
    "title": "Dead Ringers",
    "director": "David Cronenberg",
    "year": 1988,
    "country": "Canada",
    "category": 1
  },
  {
    "title": "Die Hard",
    "director": "John McTiernan",
    "year": 1988,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "year": 1988,
    "country": "Japan",
    "rating": "?"
  },
  {
    "title": "The Last Temptation of Christ",
    "director": "Martin Scorsese",
    "year": 1988,
    "country": "USA"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "year": 1988,
    "country": "Japan"
  },
  {
    "title": "They Live",
    "director": "John Carpenter",
    "year": 1988,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Women on the Verge of a Nervous Breakdown",
    "director": "Pedro Almodóvar",
    "year": 1988
  },

  {
    "title": "Crimes and Misdemeanors",
    "director": "Woody Allen",
    "year": 1989,
    "country": "USA"
  },
  {
    "title": "Do the Right Thing",
    "director": "Spike Lee",
    "year": 1989,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Killer",
    "director": "John Woo",
    "year": 1989,
    "country": "Hong Kong",
    "rating": "?"
  },
  {
    "title": "When Harry Met Sally...",
    "director": "Rob Reiner",
    "year": 1989,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Close-Up",
    "director": "Abbas Kiarostami",
    "year": 1990,
    "country": "Iran",
    "category": 1
  },
  {
    "title": "Days of Being Wild",
    "director": "Wong Kar-wai",
    "year": 1990,
    "country": "Hong Kong",
    "rating": "?"
  },
  {
    "title": "Edward Scissorhands",
    "director": "Tim Burton",
    "year": 1990,
    "country": "USA"
  },
  {
    "title": "Goodfellas",
    "director": "Martin Scorsese",
    "year": 1990,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Miller's Crossing",
    "director": "Joel Coen & Ethan Coen",
    "year": 1990,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Wild at Heart",
    "director": "David Lynch",
    "year": 1990,
    "country": "USA",
    "rating": "?"
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
    "year": 1991,
    "country": "USA"
  },
  {
    "title": "My Own Private Idaho",
    "director": "Gus Van Sant",
    "year": 1991,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Raise the Red Lantern",
    "director": "Zhang Yimou",
    "year": 1991,
    "country": "Hong Kong",
    "rating": 8
  },
  {
    "title": "Terminator 2: Judgment Day",
    "director": "James Cameron",
    "year": 1991,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Double Life of Veronique",
    "director": "Krzysztof Kieslowski",
    "year": 1991,
    "country": "France",
    "category": 1
  },
  {
    "title": "The Silence of the Lambs",
    "director": "Jonathan Demme",
    "year": 1991,
    "country": "USA"
  },
  {
    "title": "Thelma & Louise",
    "director": "Ridley Scott",
    "year": 1991,
    "country": "USA"
  },

  {
    "title": "Bad Lieutenant",
    "director": "Abel Ferrara",
    "year": 1992,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Reservoir Dogs",
    "director": "Quentin Tarantino",
    "year": 1992,
    "country": "USA"
  },
  {
    "title": "Unforgiven",
    "director": "Clint Eastwood",
    "year": 1992,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Carlito's Way",
    "director": "Brian De Palma",
    "year": 1993,
    "rating": "?"
  },
  {
    "title": "Dazed and Confused",
    "director": "Richard Linklater",
    "year": 1993,
    "country": "USA"
  },
  {
    "title": "Groundhog Day",
    "director": "Harold Ramis",
    "year": 1993,
    "country": "USA"
  },
  {
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "year": 1993,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Naked",
    "director": "Mike Leigh",
    "year": 1993,
    "country": "UK"
  },
  {
    "title": "The Nightmare Before Christmas",
    "director": "Henry Selick",
    "year": 1993,
    "country": "USA"
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
    "year": 1993,
    "country": "France-Poland-Switzerland"
  },

  {
    "title": "Chungking Express",
    "director": "Wong Kar-wai",
    "year": 1994,
    "country": "Hong Kong",
    "rating": "?"
  },
  {
    "title": "Crumb",
    "director": "Terry Zwigoff",
    "year": 1994
  },
  {
    "title": "Ed Wood",
    "director": "Tim Burton",
    "year": 1994,
    "country": "USA"
  },
  {
    "title": "Forrest Gump",
    "director": "Robert Zemeckis",
    "year": 1994,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Léon",
    "director": "Luc Besson",
    "year": 1994,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": 1994,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Three Colours: Red",
    "director": "Krzysztof Kieslowski",
    "year": 1994,
    "country": "France-Switzerland-Poland"
  },

  {
    "title": "Before Sunrise",
    "director": "Richard Linklater",
    "year": 1995
  },
  {
    "title": "The Bridges of Madison County",
    "director": "Clint Eastwood",
    "year": 1995,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Casino",
    "director": "Martin Scorsese",
    "year": 1995,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Dead Man",
    "director": "Jim Jarmusch",
    "year": 1995,
    "country": "USA-Germany",
    "rating": "?"
  },
  {
    "title": "Heat",
    "director": "Michael Mann",
    "year": 1995,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "La Haine",
    "director": "Mathieu Kassovitz",
    "year": 1995,
    "country": "France",
    "rating": "?"
  },
  {
    "title": "Safe",
    "director": "Todd Haynes",
    "year": 1995,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Se7en",
    "director": "David Fincher",
    "year": 1995,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Toy Story",
    "director": "John Lasseter",
    "year": 1995,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Underground",
    "director": "Emir Kusturica",
    "year": 1995,
    "country": "Yugoslavia-France-Germany-Bulgaria-Czech Republic-Hungary",
    "rating": "?"
  },
  {
    "title": "The Usual Suspects",
    "director": "Bryan Singer",
    "year": 1995,
    "country": "USA",
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
    "year": 1996,
    "country": "UK"
  },

  {
    "title": "Boogie Nights",
    "director": "Paul Thomas Anderson",
    "year": 1997,
    "country": "USA"
  },
  {
    "title": "Funny Games",
    "director": "Michael Haneke",
    "year": 1997,
    "country": "Austria"
  },
  {
    "title": "Hana-bi",
    "director": "Takeshi Kitano",
    "year": 1997,
    "country": "Japan",
    "rating": "?"
  },
  {
    "title": "L.A. Confidential",
    "director": "Curtis Hanson",
    "year": 1997,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Lost Highway",
    "director": "David Lynch",
    "year": 1997,
    "country": "USA-France",
    "category": 1
  },
  {
    "title": "Princess Mononoke",
    "director": "Hayao Miyazaki",
    "year": 1997
  },
  {
    "title": "Starship Troopers",
    "director": "Paul Verhoeven",
    "year": 1997,
    "country": "USA"
  },
  {
    "title": "Titanic",
    "director": "James Cameron",
    "year": 1997,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "The Big Lebowski",
    "director": "Joel Coen & Ethan Coen",
    "year": 1998,
    "country": "USA-UK"
  },
  {
    "title": "Central Station",
    "director": "Walter Salles",
    "year": 1998,
    "country": "Brazil-France-Spain-Japan",
    "rating": "?"
  },
  {
    "title": "Festen",
    "director": "Thomas Vinterberg",
    "year": 1998,
    "country": "Denmark",
    "rating": "?"
  },
  {
    "title": "Rushmore",
    "director": "Wes Anderson",
    "year": 1998,
    "country": "USA"
  },
  {
    "title": "Saving Private Ryan",
    "director": "Steven Spielberg",
    "year": 1998,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "The Thin Red Line",
    "director": "Terrence Malick",
    "year": 1998,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "All About My Mother",
    "director": "Pedro Almodóvar",
    "year": 1999,
    "country": "Spain-France"
  },
  {
    "title": "American Beauty",
    "director": "Sam Mendes",
    "year": 1999,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Eyes Wide Shut",
    "director": "Stanley Kubrick",
    "year": 1999,
    "country": "USA-UK",
    "category": 1
  },
  {
    "title": "Fight Club",
    "director": "David Fincher",
    "year": 1999,
    "country": "USA-Germany",
    "rating": "?"
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
    "year": 1999,
    "country": "USA-Australia",
    "rating": "?"
  },
  {
    "title": "Rosetta",
    "director": "Jean-Pierre Dardenne & Luc Dardenne",
    "year": 1999,
    "country": "Belgium-France",
    "category": 1
  },
  {
    "title": "The Straight Story",
    "director": "David Lynch",
    "year": 1999,
    "country": "USA-France-UK",
    "rating": "?"
  },

  {
    "title": "Amores perros",
    "director": "Alejandro González Iñárritu",
    "year": 2000
  },
  {
    "title": "Code Unknown",
    "director": "Michael Haneke",
    "year": 2000,
    "country": "France-Germany-Romania",
    "category": 1
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "director": "Ang Lee",
    "year": 2000,
    "country": "Taiwan-Hong Kong-USA-China",
    "rating": "?"
  },
  {
    "title": "Dancer in the Dark",
    "director": "Lars von Trier",
    "year": 2000,
    "country": "Denmark-France-Sweden-Italy-Germany-Norway-Netherlands-Iceland-Finland-UK-USA",
    "rating": "?"
  },
  {
    "title": "In the Mood for Love",
    "director": "Wong Kar-wai",
    "year": 2000,
    "country": "Hong Kong-France",
    "category": 1
  },
  {
    "title": "Memento",
    "director": "Christopher Nolan",
    "year": 2000,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Requiem for a Dream",
    "director": "Darren Aronofsky",
    "year": 2000,
    "country": "USA"
  },
  {
    "title": "Yi yi",
    "director": "Edward Yang",
    "year": 2000,
    "country": "Taiwan-Japan",
    "category": 1
  },

  {
    "title": "A.I. Artificial Intelligence",
    "director": "Steven Spielberg",
    "year": 2001,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Amélie",
    "director": "Jean-Pierre Jeunet",
    "year": 2001,
    "country": "France-Germany"
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "director": "Peter Jackson",
    "year": 2001,
    "country": "USA-New Zealand"
  },
  {
    "title": "Moulin Rouge!",
    "director": "Baz Luhrmann",
    "year": 2001,
    "country": "USA-Australia",
    "rating": "?"
  },
  {
    "title": "Mulholland Dr.",
    "director": "David Lynch",
    "year": 2001,
    "country": "France-US",
    "category": 1
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
    "year": 2001,
    "category": 1
  },
  {
    "title": "The Royal Tenenbaums",
    "director": "Wes Anderson",
    "year": 2001,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Y tu mamá también",
    "director": "Alfonso Cuarón",
    "year": 2001,
    "country": "Mexico"
  },

  {
    "title": "City of God",
    "director": "Fernando Meirelles & Kátia Lund",
    "year": 2002,
    "country": "Brazil-Germany-France",
    "category": 1
  },
  {
    "title": "Punch-Drunk Love",
    "director": "Paul Thomas Anderson",
    "year": 2002,
    "country": "USA"
  },
  {
    "title": "Talk to Her",
    "director": "Pedro Almodóvar",
    "year": 2002,
    "country": "Spain"
  },

  {
    "title": "Dogville",
    "director": "Lars von Trier",
    "year": 2003,
    "country": "Denmark-Sweden-France-UK-Germany-Finland-Italy-Netherlands-Norway"
  },
  {
    "title": "Elephant",
    "director": "Gus Van Sant",
    "year": 2003,
    "country": "USA",
    "category": 1
  },
  {
    "title": "Kill Bill Vol. 1",
    "director": "Quentin Tarantino",
    "year": 2003
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "director": "Peter Jackson",
    "year": 2003,
    "country": "New Zealand-USA",
    "rating": "?"
  },
  {
    "title": "Lost in Translation",
    "director": "Sofia Coppola",
    "year": 2003,
    "country": "USA-Japan"
  },
  {
    "title": "Memories of Murder",
    "director": "Bong Joon-ho",
    "year": 2003,
    "country": "South Korea",
    "rating": "?"
  },
  {
    "title": "Oldboy",
    "director": "Park Chan-wook",
    "year": 2003,
    "country": "South Korea",
    "category": 1
  },
  {
    "title": "Saraband",
    "director": "Ingmar Bergman",
    "year": 2003,
    "country": "Sweden-Denmark-Norway-Italy-Finland-Germany-Austria",
    "rating": "?"
  },
  {
    "title": "Spring, Summer, Autumn, Winter... and Spring",
    "director": "Kim Ki-duk",
    "year": 2003,
    "country": "South Korea-Germany"
  },

  {
    "title": "2046",
    "director": "Wong Kar-wai",
    "year": 2004,
    "category": 1
  },
  {
    "title": "Before Sunset",
    "director": "Richard Linklater",
    "year": 2004,
    "country": "USA"
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
    "year": 2004,
    "country": "USA",
    "rating": "?"
  },
  {
    "title": "Tropical Malady",
    "director": "Apichatpong Weerasethakul",
    "year": 2004,
    "country": "France-Thailand-Germany-Italy-Switzerland",
    "category": 1
  },

  {
    "title": "A History of Violence",
    "director": "David Cronenberg",
    "year": 2005,
    "country": "USA-Germany",
    "rating": "?"
  },
  {
    "title": "Brokeback Mountain",
    "director": "Ang Lee",
    "year": 2005,
    "country": "USA-Canada",
    "rating": "?"
  },
  {
    "title": "Caché",
    "director": "Michael Haneke",
    "year": 2005,
    "country": "France-Austria-Germany-Italy",
    "category": 1
  },

  {
    "title": "Children of Men",
    "director": "Alfonso Cuarón",
    "year": 2006,
    "country": "USA-UK",
    "rating": "?"
  },
  {
    "title": "The Host",
    "director": "Bong Joon-ho",
    "year": 2006,
    "country": "South Korea-Japan",
    "rating": "?"
  },
  {
    "title": "Inland Empire",
    "director": "David Lynch",
    "year": 2006,
    "country": "USA-France-Poland"
  },
  {
    "title": "Pan's Labyrinth",
    "director": "Guillermo del Toro",
    "year": 2006,
    "country": "Spain-Mexico-USA"
  },
  {
    "title": "The Lives of Others",
    "director": "Florian Henckel von Donnersmarck",
    "year": 2006,
    "country": "Germany",
    "rating": "?"
  },

  {
    "title": "No Country for Old Men",
    "director": "Joel Coen & Ethan Coen",
    "year": 2007,
    "country": "USA"
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
    "year": 2007,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Hunger",
    "director": "Steve McQueen",
    "year": 2008,
    "country": "UK-Ireland",
    "rating": "?"
  },
  {
    "title": "Let the Right One In",
    "director": "Tomas Alfredson",
    "year": 2008,
    "country": "Sweden-Norway",
    "rating": "?"
  },
  {
    "title": "Synecdoche, New York",
    "director": "Charlie Kaufman",
    "year": 2008,
    "country": "USA",
    "category": 1
  },
  {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "year": 2008,
    "country": "USA-UK",
    "rating": "?"
  },
  {
    "title": "The Hurt Locker",
    "director": "Kathryn Bigelow",
    "year": 2008,
    "rating": "?"
  },
  {
    "title": "WALL-E",
    "director": "Andrew Stanton",
    "year": 2008,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "Avatar",
    "director": "James Cameron",
    "year": 2009,
    "country": "USA-UK",
    "rating": "?"
  },
  {
    "title": "Inglourious Basterds",
    "director": "Quentin Tarantino",
    "year": 2009,
    "country": "USA-Germany"
  },
  {
    "title": "The White Ribbon",
    "director": "Michael Haneke",
    "year": 2009,
    "country": "Germany-Austria-France-Italy",
    "category": 1
  },

  {
    "title": "Certified Copy",
    "director": "Abbas Kiarostami",
    "year": 2010,
    "country": "France-Italy-Belgium-Iran"
  },
  {
    "title": "The Social Network",
    "director": "David Fincher",
    "year": 2010,
    "country": "USA",
    "rating": "?"
  },

  {
    "title": "A Separation",
    "director": "Asghar Farhadi",
    "year": 2011,
    "country": "Iran",
    "category": 1
  },
  {
    "title": "Melancholia",
    "director": "Lars von Trier",
    "year": 2011,
    "country": "Denmark-Sweden-France-Germany",
    "category": 1
  },
  {
    "title": "Once Upon a Time in Anatolia",
    "director": "Nuri Bilge Ceylan",
    "year": 2011,
    "country": "Turkey-Bosnia and Herzergovina",
    "rating": "?"
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
    "year": 2014,
    "country": "USA"
  },

  {
    "title": "Mad Max: Fury Road",
    "director": "George Miller",
    "year": 2015,
    "country": "Australia-USA",
    "rating": "?"
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