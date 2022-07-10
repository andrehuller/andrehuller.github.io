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
    "year": 1916
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
    "year": 1922
  },

  {
    "title": "Battleship Potemkin",
    "director": "Sergei Eisenstein",
    "year": 1925,
    "rating": 10
  },
  {
    "title": "The Gold Rush",
    "director": "Charles Chaplin",
    "year": 1925,
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
    "rating": 9
  },

  {
    "title": "Metropolis",
    "director": "Fritz Lang",
    "year": 1927,
    "rating": 10
  },
  {
    "title": "Sunrise",
    "director": "F.W. Murnau",
    "year": 1927,
    "rating": 9
  },

  {
    "title": "The Passion of Joan of Arc",
    "director": "Carl Theodor Dreyer",
    "year": 1928,
    "rating": "?"
  },

  {
    "title": "Man with a Movie Camera",
    "director": "Dziga Vertov",
    "year": 1929,
    "rating": "?"
  },

  {
    "title": "City Lights",
    "director": "Charles Chaplin",
    "year": 1931,
    "rating": 8
  },
  {
    "title": "M",
    "director": "Fritz Lang",
    "year": 1931,
    "rating": 10
  },

  {
    "title": "I Was Born, But…",
    "director": "Yasujiro Ozu",
    "year": 1932,
    "rating": 10
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
    "year": 1936
  },

  {
    "title": "La Grande illusion",
    "director": "Jean Renoir",
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
    "title": "The Lady Vanishes",
    "director": "Alfred Hitchcock",
    "year": 1938
  },

  {
    "title": "Gone with the Wind",
    "director": "Victor Fleming",
    "year": 1939
  },
  {
    "title": "The Rules of the Game",
    "director": "Jean Renoir",
    "year": 1939
  },
  {
    "title": "The Wizard of Oz",
    "director": "Victor Fleming",
    "year": 1939
  },

  {
    "title": "Rebecca",
    "director": "Alfred Hitchcock",
    "year": 1940
  },

  {
    "title": "Citizen Kane",
    "director": "Orson Welles",
    "year": 1941
  },
  {
    "title": "How Green Was My Valley",
    "director": "John Ford",
    "year": 1941,
    "rating": "?"
  },


  {
    "title": "Casablanca",
    "director": "Michael Curtiz",
    "year": 1942
  },
  {
    "title": "The Magnificent Ambersons",
    "director": "Orson Welles",
    "year": 1942
  },
  {
    "title": "To Be or Not to Be",
    "director": "Ernst Lubitsch",
    "year": 1942
  },

  {
    "title": "Shadow of a Doubt",
    "director": "Alfred Hitchcock",
    "year": 1943
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
    "title": "Les Enfants du paradis",
    "director": "Marcel Carné",
    "year": 1945
  },
  {
    "title": "Mildred Pierce",
    "director": "Michael Curtiz",
    "year": 1945
  },

  {
    "title": "Beauty and the Beast",
    "director": "Jean Cocteau",
    "year": 1946
  },
  {
    "title": "It's a Wonderful Life",
    "director": "Frank Capra",
    "year": 1946
  },
  {
    "title": "The Big Sleep",
    "director": "Howard Hawks",
    "year": 1946
  },

  {
    "title": "Monsieur Verdoux",
    "director": "Charles Chaplin",
    "year": 1947
  },

  {
    "title": "Bicycle Thieves",
    "director": "Vittorio De Sica",
    "year": 1948
  },
  {
    "title": "Letter from an Unknown Woman",
    "director": "Max Ophüls",
    "year": 1948
  },
  {
    "title": "The Lady from Shanghai",
    "director": "Orson Welles",
    "year": 1948
  },
  {
    "title": "The Treasure of the Sierra Madre",
    "director": "John Huston",
    "year": 1948
  },

  {
    "title": "Late Spring",
    "director": "Yasujiro Ozu",
    "year": 1949
  },
  {
    "title": "The Third Man",
    "director": "Carol Reed",
    "year": 1949
  },

  {
    "title": "In a Lonely Place",
    "director": "Nicholas Ray",
    "year": 1950
  },
  {
    "title": "Orpheus",
    "director": "Jean Cocteau",
    "year": 1950
  },
  {
    "title": "Rashomon",
    "director": "Akira Kurosawa",
    "year": 1950
  },
  {
    "title": "Sunset Blvd.",
    "director": "Billy Wilder",
    "year": 1950
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
    "title": "Strangers on a Train",
    "director": "Alfred Hitchcock",
    "year": 1951
  },

  {
    "title": "Ikiru",
    "director": "Akira Kurosawa",
    "year": 1952
  },
  {
    "title": "Limelight",
    "director": "Charles Chaplin",
    "year": 1952
  },
  {
    "title": "Singin' in the Rain",
    "director": "Stanley Donen",
    "year": 1952
  },
  
  {
    "title": "I Vitelloni",
    "director": "Federico Fellini",
    "year": 1953
  },
  {
    "title": "Madame de...",
    "director": "Max Ophüls",
    "year": 1953
  },
  {
    "title": "The Big Heat",
    "director": "Fritz Lang",
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
    "year": 1953
  },

  {
    "title": "La Strada",
    "director": "Federico Fellini",
    "year": 1954
  },
  {
    "title": "Rear Window",
    "director": "Alfred Hitchcock",
    "year": 1954
  },
  {
    "title": "Sansho the Bailiff",
    "director": "Kenji Mizoguchi",
    "year": 1954
  },
  {
    "title": "Seven Samurai",
    "director": "Akira Kurosawa",
    "year": 1954
  },
  {
    "title": "Voyage in Italy",
    "director": "Roberto Rossellini",
    "year": 1954
  },

  {
    "title": "Ordet",
    "director": "Carl Theodor Dreyer",
    "year": 1955
  },
  {
    "title": "The Night of the Hunter",
    "director": "Charles Laughton",
    "year": 1955
  },

  {
    "title": "A Man Escaped",
    "director": "Robert Bresson",
    "year": 1956
  },
  {
    "title": "Invasion of the Body Snatchers",
    "director": "Don Siegel",
    "year": 1956
  },
  {
    "title": "The Searchers",
    "director": "John Ford",
    "year": 1956
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
    "title": "The Seventh Seal",
    "director": "Ingmar Bergman",
    "year": 1957
  },
  {
    "title": "Throne of Blood",
    "director": "Akira Kurosawa",
    "year": 1957
  },
  {
    "title": "Wild Strawberries",
    "director": "Ingmar Bergman",
    "year": 1957
  },

  {
    "title": "Elevator to the Gallows",
    "director": "Louis Malle",
    "year": 1958
  },
  {
    "title": "Touch of Evil",
    "director": "Orson Welles",
    "year": 1958
  },
  {
    "title": "Vertigo",
    "director": "Alfred Hitchcock",
    "year": 1958
  },

  {
    "title": "The 400 Blows",
    "director": "François Truffaut",
    "year": 1959
  },
  {
    "title": "Hiroshima mon amour",
    "director": "Alain Resnais",
    "year": 1959
  },
  {
    "title": "North by Northwest",
    "director": "Alfred Hitchcock",
    "year": 1959
  },
  {
    "title": "Pickpocket",
    "director": "Robert Bresson",
    "year": 1959
  },
  {
    "title": "Rio Bravo",
    "director": "Howard Hawks",
    "year": 1959
  },
  {
    "title": "Some Like it Hot",
    "director": "Billy Wilder",
    "year": 1959
  },
  
  {
    "title": "Breathless",
    "director": "Jean-Luc Godard",
    "year": 1960
  },
  {
    "title": "Eyes Without a Face",
    "director": "Georges Franju",
    "year": 1960
  },
  {
    "title": "L'Avventura",
    "director": "Michelangelo Antonioni",
    "year": 1960
  },
  {
    "title": "La Dolce vita",
    "director": "Federico Fellini",
    "year": 1960
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
    "year": 1960
  },

  {
    "title": "Last Year at Marienbad",
    "director": "Alain Resnais",
    "year": 1961
  },
  {
    "title": "The Innocents",
    "director": "Jack Clayton",
    "year": 1961
  },
  {
    "title": "Viridiana",
    "director": "Luis Buñuel",
    "year": 1961
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
    "title": "Ivan's Childhood",
    "director": "Andrei Tarkovsky",
    "year": 1962
  },
  {
    "title": "Jules et Jim",
    "director": "François Truffaut",
    "year": 1962,
    "rating": "?"
  },
  {
    "title": "La Jetée",
    "director": "Chris Marker",
    "year": 1962
  },
  {
    "title": "Lawrence of Arabia",
    "director": "David Lean",
    "year": 1962
  },
  {
    "title": "Lolita",
    "director": "Stanley Kubrick",
    "year": 1962
  },
  {
    "title": "L'Eclisse",
    "director": "Michelangelo Antonioni",
    "year": 1962
  },
  {
    "title": "The Man Who Shot Liberty Valance",
    "director": "John Ford",
    "year": 1962
  },
  {
    "title": "Winter Light",
    "director": "Ingmar Bergman",
    "year": 1962
  },

  {
    "title": "8½",
    "director": "Federico Fellini",
    "year": 1963
  },
  {
    "title": "Contempt",
    "director": "Jean-Luc Godard",
    "year": 1963
  },
  {
    "title": "High and Low",
    "director": "Akira Kurosawa",
    "year": 1963
  },
  {
    "title": "The Leopard",
    "director": "Luchino Visconti",
    "year": 1963
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
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "director": "Stanley Kubrick",
    "year": 1964
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
    "title": "Pierrot le fou",
    "director": "Jean-Luc Godard",
    "year": 1965
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
    "year": 1966
  },
  {
    "title": "Au hasard Balthazar",
    "director": "Robert Bresson",
    "year": 1966
  },
  {
    "title": "Blow-Up",
    "director": "Michelangelo Antonioni",
    "year": 1966
  },
  {
    "title": "Persona",
    "director": "Ingmar Bergman",
    "year": 1966
  },
  {
    "title": "The Battle of Algiers",
    "director": "Gillo Pontecorvo",
    "year": 1966
  },
  {
    "title": "Who's Afraid of Virginia Woolf?",
    "director": "Mike Nichols",
    "year": 1966
  },

  {
    "title": "Week-End",
    "director": "Jean-Luc Godard",
    "year": 1967
  },

  {
    "title": "2001: A Space Odyssey",
    "director": "Stanley Kubrick",
    "year": 1968
  },
  {
    "title": "Hour of the Wolf",
    "director": "Ingmar Bergman",
    "year": 1968
  },
  {
    "title": "Once Upon a Time in the West",
    "director": "Sergio Leone",
    "year": 1968
  },

  {
    "title": "Butch Cassidy and the Sundance Kid",
    "director": "George Roy Hill",
    "year": 1969
  },
  {
    "title": "The Wild Bunch",
    "director": "Sam Peckinpah",
    "year": 1969
  },

  {
    "title": "The Conformist",
    "director": "Bernardo Bertolucci",
    "year": 1970
  },
  {
    "title": "The Private Life of Sherlock Holmes",
    "director": "Billy Wilder",
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
    "year": 1971
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
    "title": "Two-Lane Blacktop",
    "director": "Monte Hellman",
    "year": 1971
  },
  
  {
    "title": "Aguirre: The Wrath of God",
    "director": "Werner Herzog",
    "year": 1972
  },
  {
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "year": 1972
  },

  {
    "title": "Amarcord",
    "director": "Federico Fellini",
    "year": 1973
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
    "year": 1973
  },

  {
    "title": "A Woman Under the Influence",
    "director": "John Cassavetes",
    "year": 1974
  },
  {
    "title": "Chinatown",
    "director": "Roman Polanski",
    "year": 1974
  },
  {
    "title": "The Godfather Part II",
    "director": "Francis Ford Coppola",
    "year": 1974
  },

  {
    "title": "Barry Lyndon",
    "director": "Stanley Kubrick",
    "year": 1975
  },
  {
    "title": "Deep Red",
    "director": "Dario Argento",
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
    "year": 1975
  },
  {
    "title": "Monty Python and the Holy Grail",
    "director": "Terry Gilliam",
    "year": 1975
  },
  {
    "title": "Nashville",
    "director": "Robert Altman",
    "year": 1975
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "director": "Milos Forman",
    "year": 1975
  },
  {
    "title": "The Man Who Would Be King",
    "director": "John Huston",
    "year": 1975
  },
  {
    "title": "The Mirror",
    "director": "Andrei Tarkovsky",
    "year": 1975
  },

  {
    "title": "Carrie",
    "director": "Brian De Palma",
    "year": 1976
  },
  {
    "title": "Network",
    "director": "Sidney Lumet",
    "year": 1976
  },
  {
    "title": "Taxi Driver",
    "director": "Martin Scorsese",
    "year": 1976
  },
  {
    "title": "The Tenant",
    "director": "Roman Polanski",
    "year": 1976
  },

  {
    "title": "Annie Hall",
    "director": "Woody Allen",
    "year": 1977
  },
  {
    "title": "Star Wars",
    "director": "George Lucas",
    "year": 1977
  },
  {
    "title": "Suspiria",
    "director": "Dario Argento",
    "year": 1977
  },

  {
    "title": "Dawn of the Dead",
    "director": "George A. Romero",
    "year": 1978
  },
  {
    "title": "Halloween",
    "director": "John Carpenter",
    "year": 1978
  },

  {
    "title": "Alien",
    "director": "Ridley Scott",
    "year": 1979
  },
  {
    "title": "Apocalypse Now",
    "director": "Francis Ford Coppola",
    "year": 1979
  },
  {
    "title": "Monty Python's Life of Brian",
    "director": "Terry Jones",
    "year": 1979
  },
  {
    "title": "Stalker",
    "director": "Andrei Tarkovsky",
    "year": 1979
  },

  {
    "title": "Kagemusha",
    "director": "Akira Kurosawa",
    "year": 1980
  },
  {
    "title": "Raging Bull",
    "director": "Martin Scorsese",
    "year": 1980
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
    "year": 1980
  },

  {
    "title": "Blow Out",
    "director": "Brian De Palma",
    "year": 1981
  },

  {
    "title": "Blade Runner",
    "director": "Ridley Scott",
    "year": 1982
  },
  {
    "title": "E.T. The Extra-Terrestrial",
    "director": "Steven Spielberg",
    "year": 1982
  },
  {
    "title": "Fanny and Alexander",
    "director": "Ingmar Bergman",
    "year": 1982
  },

  {
    "title": "Sans soleil",
    "director": "Chris Marker",
    "year": 1983
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
    "title": "Once Upon a Time in America",
    "director": "Sergio Leone",
    "year": 1984
  },
  {
    "title": "The Terminator",
    "director": "James Cameron",
    "year": 1984
  },

  {
    "title": "Back to the Future",
    "director": "Robert Zemeckis",
    "year": 1985
  },
  {
    "title": "The Purple Rose of Cairo",
    "director": "Woody Allen",
    "year": 1985
  },

  {
    "title": "Aliens",
    "director": "James Cameron",
    "year": 1986
  },
  {
    "title": "Blue Velvet",
    "director": "David Lynch",
    "year": 1986
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
    "year": 1987
  },

  {
    "title": "Dead Ringers",
    "director": "David Cronenberg",
    "year": 1988
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "year": 1988
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
    "title": "Close-Up",
    "director": "Abbas Kiarostami",
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
    "year": 1990
  },

  {
    "title": "Barton Fink",
    "director": "Joel Coen & Ethan Coen",
    "year": 1991
  },
  {
    "title": "Raise the Red Lantern",
    "director": "Zhang Yimou",
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
    "title": "Three Colours: Blue",
    "director": "Krzysztof Kieslowski",
    "year": 1993
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
    "year": 1994
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
    "title": "Heat",
    "director": "Michael Mann",
    "year": 1995
  },
  {
    "title": "Se7en",
    "director": "David Fincher",
    "year": 1995
  },
  

  {
    "title": "Trainspotting",
    "director": "Danny Boyle",
    "year": 1996
  },

  {
    "title": "Funny Games",
    "director": "Michael Haneke",
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
    "title": "In the Mood for Love",
    "director": "Wong Kar-wai",
    "year": 2000
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
    "year": 2000
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
    "year": 2001
  },
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "year": 2001
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
    "year": 2004
  },
  {
    "title": "Million Dollar Baby",
    "director": "Clint Eastwood",
    "year": 2004
  },

  {
    "title": "A History of Violence",
    "director": "David Cronenberg",
    "year": 2005
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
    "year": 2006
  },

  {
    "title": "No Country for Old Men",
    "director": "Joel Coen & Ethan Coen",
    "year": 2007
  },
  {
    "title": "There Will Be Blood",
    "director": "Paul Thomas Anderson",
    "year": 2007
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