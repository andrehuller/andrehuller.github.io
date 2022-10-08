const lists = [
  {
    "name": "Recommendations",
    "items": [
      {
        "title": "The Cabinet of Dr. Caligari",
        "director": "Robert Wiene",
        "year": 1920,
        "country": "Germany",
        "runtime": 69,
        "genre": "Horror, Costume Horror",
        "rating": 8
      },
      {
        "title": "Nosferatu",
        "director": "F.W. Murnau",
        "year": 1922,
        "country": "Germany",
        "runtime": 84,
        "genre": "Horror, Gothic Film",
        "rating": 8
      },
      {
        "title": "The Last Laugh",
        "director": "F.W. Murnau",
        "year": 1924,
        "country": "Germany",
        "runtime": 77,
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Sherlock Jr.",
        "director": "Buster Keaton",
        "year": 1924,
        "country": "USA",
        "runtime": 44,
        "genre": "Comedy, Slapstick",
        "rating": 9
      },
      {
        "title": "The Gold Rush",
        "director": "Charles Chaplin",
        "year": 1925,
        "country": "USA",
        "runtime": 82,
        "genre": "Slapstick, Adventure Comedy",
        "rating": 10
      },
      {
        "title": "Faust",
        "director": "F.W. Murnau",
        "year": 1926,
        "country": "Germany",
        "runtime": 116,
        "genre": "Fantasy, Tragedy",
        "rating": 9
      },
      {
        "title": "Sunrise",
        "director": "F.W. Murnau",
        "year": 1927,
        "country": "USA",
        "runtime": 110,
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Spione",
        "director": "Fritz Lang",
        "year": 1928,
        "country": "Germany",
        "runtime": 90,
        "genre": "Thriller, Spy Film"
      },
      {
        "title": "The Blue Angel",
        "director": "Josef von Sternberg",
        "year": 1930,
        "country": "Germany",
        "runtime": 103,
        "genre": "Melodrama, Psychological Drama"
      },
      {
        "title": "Tabu",
        "director": "F.W. Murnau",
        "year": 1931,
        "country": "USA",
        "runtime": 82,
        "genre": "Romance, Docudrama",
        "rating": 10
      },
      {
        "title": "I Was Born, But…",
        "director": "Yasujiro Ozu",
        "year": 1932,
        "country": "Japan",
        "runtime": 100,
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "The Scarlet Empress",
        "director": "Josef von Sternberg",
        "year": 1934,
        "country": "USA",
        "runtime": 110,
        "genre": "Historical Film, Period Film",
        "rating": 10
      },
      {
        "title": "The Lady Eve",
        "director": "Preston Sturges",
        "year": 1941,
        "country": "USA",
        "runtime": 94,
        "genre": "Romantic Comedy, Sophisticated Comedy"
      },
      {
        "title": "The Palm Beach Story",
        "director": "Preston Sturges",
        "year": 1942,
        "country": "USA",
        "runtime": 90,
        "genre": "Screwball Comedy, Comedy of Manners"
      },
      {
        "title": "Day of Wrath",
        "director": "Carl Theodor Dreyer",
        "year": 1943,
        "country": "Denmark",
        "runtime": 110,
        "genre": "Period Film, Psychological Drama"
      },
      {
        "title": "Les Enfants du paradis",
        "director": "Marcel Carné",
        "year": 1945,
        "country": "France",
        "runtime": 195,
        "genre": "Period Film, Romantic Drama"
      },
      {
        "title": "Late Spring",
        "director": "Yasujiro Ozu",
        "year": 1949,
        "country": "Japan",
        "runtime": 108,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Rashomon",
        "director": "Akira Kurosawa",
        "year": 1950,
        "country": "Japan",
        "runtime": 88,
        "genre": "Period Film, Crime Drama"
      },
      {
        "title": "Early Summer",
        "director": "Yasujiro Ozu",
        "year": 1951,
        "country": "Japan",
        "runtime": 135,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Casque d'or",
        "director": "Jacques Becker",
        "year": 1952,
        "country": "France",
        "runtime": 96,
        "genre": "Crime Drama, Melodrama"
      },
      {
        "title": "Ikiru",
        "director": "Akira Kurosawa",
        "year": 1952,
        "country": "Japan",
        "runtime": 143,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Madame de...",
        "director": "Max Ophüls",
        "year": 1953,
        "country": "France-Italy",
        "runtime": 105,
        "genre": "Period Film, Romantic Drama"
      },
      {
        "title": "Pickup on South Street",
        "director": "Samuel Fuller",
        "year": 1953,
        "country": "USA",
        "runtime": 80,
        "genre": "Thriller, Film Noir"
      },
      {
        "title": "Tokyo Story",
        "director": "Yasujiro Ozu",
        "year": 1953,
        "country": "Japan",
        "runtime": 134,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Rear Window",
        "director": "Alfred Hitchcock",
        "year": 1954,
        "country": "USA",
        "runtime": 112,
        "genre": "Thriller, Romantic Mystery"
      },
      {
        "title": "Touchez pas au Grisbi",
        "director": "Jacques Becker",
        "year": 1954,
        "country": "France",
        "runtime": 94,
        "genre": "Crime, Caper"
      },
      {
        "title": "Ordet",
        "director": "Carl Theodor Dreyer",
        "year": 1955,
        "country": "Denmark",
        "runtime": 125,
        "genre": "Drama, Religious Drama"
      },
      {
        "title": "A Man Escaped",
        "director": "Robert Bresson",
        "year": 1956,
        "country": "France",
        "runtime": 102,
        "genre": "Drama, Prison Film"
      },
      {
        "title": "Aparajito",
        "director": "Satyajit Ray",
        "year": 1956,
        "country": "India",
        "runtime": 108,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Written on the Wind",
        "director": "Douglas Sirk",
        "year": 1956,
        "country": "USA",
        "runtime": 99,
        "genre": "Melodrama, Family Drama"
      },
      {
        "title": "The 400 Blows",
        "director": "François Truffaut",
        "year": 1959,
        "country": "France",
        "runtime": 99,
        "genre": "Childhood Drama, Coming-of-Age"
      },
      {
        "title": "Good Morning",
        "director": "Yasujiro Ozu",
        "year": 1959,
        "country": "Japan",
        "runtime": 94,
        "genre": "Domestic Comedy, Family Drama"
      },
      {
        "title": "Hiroshima mon amour",
        "director": "Alain Resnais",
        "year": 1959,
        "country": "France-Japan",
        "runtime": 91,
        "genre": "Psychological Drama, Romantic Drama"
      },
      {
        "title": "Imitation of Life",
        "director": "Douglas Sirk",
        "year": 1959,
        "country": "USA",
        "runtime": 124,
        "genre": "Melodrama, Family Drama"
      },
      {
        "title": "Breathless",
        "director": "Jean-Luc Godard",
        "year": 1960,
        "country": "France",
        "runtime": 89,
        "genre": "Crime Drama, Urban Drama"
      },
      {
        "title": "L'Avventura",
        "director": "Michelangelo Antonioni",
        "year": 1960,
        "country": "Italy-France",
        "runtime": 145,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Le Trou",
        "director": "Jacques Becker",
        "year": 1960,
        "country": "France-Italy",
        "runtime": 140,
        "genre": "Prison Film, Crime Drama"
      },
      {
        "title": "La Notte",
        "director": "Michelangelo Antonioni",
        "year": 1961,
        "country": "Italy-France",
        "runtime": 120,
        "genre": "Psychological Drama, Marriage Drama"
      },
      {
        "title": "Viridiana",
        "director": "Luis Buñuel",
        "year": 1961,
        "country": "Spain",
        "runtime": 90,
        "genre": "Comedy Drama, Satire",
        "rating": 10
      },
      {
        "title": "An Autumn Afternoon",
        "director": "Yasujiro Ozu",
        "year": 1962,
        "country": "Japan",
        "runtime": 115,
        "genre": "Family Drama, Romantic Drama"
      },
      {
        "title": "The Exterminating Angel",
        "director": "Luis Buñuel",
        "year": 1962,
        "country": "Mexico",
        "runtime": 95,
        "genre": "Comedy Drama, Satire",
        "rating": 9
      },
      {
        "title": "Ivan's Childhood",
        "director": "Andrei Tarkovsky",
        "year": 1962,
        "country": "USSR",
        "runtime": 94,
        "genre": "War, Childhood Drama"
      },
      {
        "title": "L'Eclisse",
        "director": "Michelangelo Antonioni",
        "year": 1962,
        "country": "Italy-France",
        "runtime": 126,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Vivre sa vie",
        "director": "Jean-Luc Godard",
        "year": 1962,
        "country": "France",
        "runtime": 85,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Contempt",
        "director": "Jean-Luc Godard",
        "year": 1963,
        "country": "France-Italy",
        "runtime": 103,
        "genre": "Showbiz Drama, Satire"
      },
      {
        "title": "Band of Outsiders",
        "director": "Jean-Luc Godard",
        "year": 1964,
        "country": "France",
        "runtime": 97,
        "genre": "Drama, Crime Drama"
      },
      {
        "title": "Woman in the Dunes",
        "director": "Hiroshi Teshigahara",
        "year": 1964,
        "country": "Japan",
        "runtime": 127,
        "genre": "Avant-garde-Experimental, Psychological Drama"
      },
      {
        "title": "Alphaville",
        "director": "Jean-Luc Godard",
        "year": 1965,
        "country": "France",
        "runtime": 95,
        "genre": "Psychological Sci-Fi, Tech Noir"
      },
      {
        "title": "Andrei Rublev",
        "director": "Andrei Tarkovsky",
        "year": 1966,
        "country": "USSR",
        "runtime": 185,
        "genre": "Historical Film, Biography"
      },
      {
        "title": "Au hasard Balthazar",
        "director": "Robert Bresson",
        "year": 1966,
        "country": "France",
        "runtime": 95,
        "genre": "Rural Drama, Animal Picture"
      },
      {
        "title": "Blow-Up",
        "director": "Michelangelo Antonioni",
        "year": 1966,
        "country": "Italy-UK",
        "runtime": 111,
        "genre": "Mystery, Psychological Thriller"
      },
      {
        "title": "The Good, the Bad and the Ugly",
        "director": "Sergio Leone",
        "year": 1966,
        "country": "Italy-Spain",
        "runtime": 161,
        "genre": "Spaghetti Western, Outlaw (Gunfighter) Film"
      },
      {
        "title": "Persona",
        "director": "Ingmar Bergman",
        "year": 1966,
        "country": "Sweden",
        "runtime": 83,
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Two or Three Things I Know About Her",
        "director": "Jean-Luc Godard",
        "year": 1966,
        "country": "France",
        "runtime": 87,
        "genre": "Essay Film, Urban Drama"
      },
      {
        "title": "Le Samouraï",
        "director": "Jean-Pierre Melville",
        "year": 1967,
        "country": "France",
        "runtime": 95,
        "genre": "Crime Thriller, Post-Noir (Modern Noir)"
      },
      {
        "title": "Mouchette",
        "director": "Robert Bresson",
        "year": 1967,
        "country": "France",
        "runtime": 80,
        "genre": "Drama, Childhood Drama"
      },
      {
        "title": "Playtime",
        "director": "Jacques Tati",
        "year": 1967,
        "country": "France",
        "runtime": 108,
        "genre": "Satire, Urban Comedy",
        "rating": 10
      },
      {
        "title": "Week-End",
        "director": "Jean-Luc Godard",
        "year": 1967,
        "country": "France-Italy",
        "runtime": 103,
        "genre": "Avant-garde-Experimental, Satire"
      },
      {
        "title": "2001: A Space Odyssey",
        "director": "Stanley Kubrick",
        "year": 1968,
        "country": "UK-USA",
        "runtime": 139,
        "genre": "Psychological Sci-Fi, Space Adventure",
        "rating": 10
      },
      {
        "title": "Rosemary's Baby",
        "director": "Roman Polanski",
        "year": 1968,
        "country": "USA",
        "runtime": 136,
        "genre": "Occult Horror, Psychological Thriller"
      },
      {
        "title": "Antonio das Mortes",
        "director": "Glauber Rocha",
        "year": 1969,
        "country": "Brazil",
        "runtime": 95,
        "genre": "Adventure Drama, Political Drama"
      },
      {
        "title": "My Night at Maud's",
        "director": "Eric Rohmer",
        "year": 1969,
        "country": "France",
        "runtime": 105,
        "genre": "Comedy of Manners, Romantic Drama"
      },
      {
        "title": "The Sorrow and the Pity",
        "director": "Marcel Ophüls",
        "year": 1969,
        "country": "France-Switzerland-Germany",
        "runtime": 260,
        "genre": "Military & War, Documentary"
      },
      {
        "title": "Claire's Knee",
        "director": "Eric Rohmer",
        "year": 1970,
        "country": "France",
        "runtime": 105,
        "genre": "Comedy Drama, Comedy of Manners"
      },
      {
        "title": "Tristana",
        "director": "Luis Buñuel",
        "year": 1970,
        "country": "Spain-Italy-France",
        "runtime": 98,
        "genre": "Psychological Drama, Satire",
        "rating": 8
      },
      {
        "title": "Zabriskie Point",
        "director": "Michelangelo Antonioni",
        "year": 1970,
        "country": "USA",
        "runtime": 112,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "The Last Picture Show",
        "director": "Peter Bogdanovich",
        "year": 1971,
        "country": "USA",
        "runtime": 118,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "McCabe & Mrs. Miller",
        "director": "Robert Altman",
        "year": 1971,
        "country": "USA",
        "runtime": 121,
        "genre": "Drama, Revisionist Western"
      },
      {
        "title": "Two-Lane Blacktop",
        "director": "Monte Hellman",
        "year": 1971,
        "country": "USA",
        "runtime": 101,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "Aguirre: The Wrath of God",
        "director": "Werner Herzog",
        "year": 1972,
        "country": "West Germany",
        "runtime": 94,
        "genre": "Adventure Drama, Jungle Film"
      },
      {
        "title": "A Woman Under the Influence",
        "director": "John Cassavetes",
        "year": 1974,
        "country": "USA",
        "runtime": 155,
        "genre": "Marriage Drama, Psychological Drama"
      },
      {
        "title": "The Conversation",
        "director": "Francis Ford Coppola",
        "year": 1974,
        "country": "USA",
        "runtime": 113,
        "genre": "Thriller, Paranoid Thriller"
      },
      {
        "title": "The Enigma of Kaspar Hauser",
        "director": "Werner Herzog",
        "year": 1974,
        "country": "West Germany",
        "runtime": 110,
        "genre": "Psychological Drama, Biography"
      },
      {
        "title": "Lancelot du Lac",
        "director": "Robert Bresson",
        "year": 1974,
        "country": "France-Italy",
        "runtime": 84,
        "genre": "Drama, Period Film"
      },
      {
        "title": "The Phantom of Liberty",
        "director": "Luis Buñuel",
        "year": 1974,
        "country": "France",
        "runtime": 104,
        "genre": "Satire, Black Comedy",
        "rating": 10
      },
      {
        "title": "Barry Lyndon",
        "director": "Stanley Kubrick",
        "year": 1975,
        "country": "UK",
        "runtime": 183,
        "genre": "Drama, Period Film",
        "rating": 10
      },
      {
        "title": "Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles",
        "director": "Chantal Akerman",
        "year": 1975,
        "country": "Belgium-France",
        "runtime": 201,
        "genre": "Avant-garde-Experimental, Feminist Film",
        "rating": 10
      },
      {
        "title": "Nashville",
        "director": "Robert Altman",
        "year": 1975,
        "country": "USA",
        "runtime": 159,
        "genre": "Ensemble Film, Media Satire",
      },
      {
        "title": "The Passenger",
        "director": "Michelangelo Antonioni",
        "year": 1975,
        "country": "Italy",
        "runtime": 119,
        "genre": "Road Movie, Psychological Drama"
      },
      {
        "title": "Salò, or the 120 Days of Sodom",
        "director": "Pier Paolo Pasolini",
        "year": 1975,
        "country": "Italy",
        "runtime": 117,
        "genre": "Drama, Sex Horror"
      },
      {
        "title": "Carrie",
        "director": "Brian De Palma",
        "year": 1976,
        "country": "USA",
        "runtime": 97,
        "genre": "Horror, Supernatural Thriller"
      },
      {
        "title": "The Killing of a Chinese Bookie",
        "director": "John Cassavetes",
        "year": 1976,
        "country": "USA",
        "runtime": 109,
        "genre": "Crime, Drama",
        "rating": 10
      },
      {
        "title": "Taxi Driver",
        "director": "Martin Scorsese",
        "year": 1976,
        "country": "USA",
        "runtime": 113,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "That Obscure Object of Desire",
        "director": "Luis Buñuel",
        "year": 1977,
        "country": "France-Spain",
        "runtime": 103,
        "genre": "Black Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Manhattan",
        "director": "Woody Allen",
        "year": 1979,
        "country": "USA",
        "runtime": 96,
        "genre": "Urban Comedy, Romantic Comedy"
      },
      {
        "title": "The Marriage of Maria Braun",
        "director": "Rainer Werner Fassbinder",
        "year": 1979,
        "country": "West Germany",
        "runtime": 120,
        "genre": "War Drama, Melodrama"
      },
      {
        "title": "Stalker",
        "director": "Andrei Tarkovsky",
        "year": 1979,
        "country": "USSR",
        "runtime": 160,
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "Blow Out",
        "director": "Brian De Palma",
        "year": 1981,
        "country": "USA",
        "runtime": 107,
        "genre": "Political Thriller, Paranoid Thriller"
      },
      {
        "title": "Possession",
        "director": "Andrzej Zulawski",
        "year": 1981,
        "country": "France-West Germany",
        "runtime": 127,
        "genre": "Marriage Drama, Supernatural Horror"
      },
      {
        "title": "Fitzcarraldo",
        "director": "Werner Herzog",
        "year": 1982,
        "country": "West Germany",
        "runtime": 157,
        "genre": "Adventure Drama, Jungle Film"
      },
      {
        "title": "The King of Comedy",
        "director": "Martin Scorsese",
        "year": 1983,
        "country": "USA",
        "runtime": 109,
        "genre": "Showbiz Comedy, Black Comedy"
      },
      {
        "title": "Sans soleil",
        "director": "Chris Marker",
        "year": 1983,
        "country": "France",
        "runtime": 100,
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "Videodrome",
        "director": "David Cronenberg",
        "year": 1983,
        "country": "Canada",
        "runtime": 90,
        "genre": "Media Satire, Sci-Fi Horror"
      },
      {
        "title": "The Fly",
        "director": "David Cronenberg",
        "year": 1986,
        "country": "USA",
        "runtime": 100,
        "genre": "Science Fiction, Horror",
      },
      {
        "title": "Where is the Friend's Home?",
        "director": "Abbas Kiarostami",
        "year": 1987,
        "country": "Iran",
        "runtime": 85,
        "genre": "Drama, Childhood Drama",
        "image": "whereisthefriendshome"
      },
      {
        "title": "Dead Ringers",
        "director": "David Cronenberg",
        "year": 1988,
        "country": "Canada",
        "runtime": 115,
        "genre": "Drama, Psychological Thriller"
      },
      {
        "title": "Close-Up",
        "director": "Abbas Kiarostami",
        "year": 1990,
        "country": "Iran",
        "runtime": 98,
        "genre": "Docudrama, Courtroom Drama"
      },
      {
        "title": "Goodfellas",
        "director": "Martin Scorsese",
        "year": 1990,
        "country": "USA",
        "runtime": 146,
        "genre": "Gangster Film, Crime Drama"
      },
      {
        "title": "Miller's Crossing",
        "director": "Joel Coen & Ethan Coen",
        "year": 1990,
        "country": "USA",
        "runtime": 115,
        "genre": "Crime, Gangster Film"
      },
      {
        "title": "Raging Bull",
        "director": "Martin Scorsese",
        "year": 1980,
        "country": "USA",
        "runtime": 128,
        "genre": "Biography, Sports Drama"
      },
      {
        "title": "The Double Life of Veronique",
        "director": "Krzysztof Kieslowski",
        "year": 1991,
        "country": "France",
        "runtime": 97,
        "genre": "Romantic Drama, Psychological Drama"
      },
      {
        "title": "Les Amants du Pont-Neuf",
        "director": "Leos Carax",
        "year": 1991,
        "country": "France",
        "runtime": 126,
        "genre": "Romantic Drama, Urban Drama"
      },
      {
        "title": "Bad Lieutenant",
        "director": "Abel Ferrara",
        "year": 1992,
        "country": "USA",
        "runtime": 98,
        "genre": "Police Drama, Crime Drama"
      },
      {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": 1994,
        "country": "USA",
        "runtime": 154,
        "genre": "Crime Comedy, Ensemble Film"
      },
      {
        "title": "Casino",
        "director": "Martin Scorsese",
        "year": 1995,
        "country": "USA",
        "runtime": 182,
        "genre": "Gangster Film, Crime Drama"
      },
      {
        "title": "Lost Highway",
        "director": "David Lynch",
        "year": 1997,
        "country": "USA-France",
        "runtime": 134,
        "genre": "Mystery, Surrealist Film"
      },
      {
        "title": "Eyes Wide Shut",
        "director": "Stanley Kubrick",
        "year": 1999,
        "country": "USA-UK",
        "runtime": 159,
        "genre": "Marriage Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Rosetta",
        "director": "Jean-Pierre Dardenne & Luc Dardenne",
        "year": 1999,
        "country": "Belgium-France",
        "runtime": 94,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Code Unknown",
        "director": "Michael Haneke",
        "year": 2000,
        "country": "France-Germany-Romania",
        "runtime": 116,
        "genre": "Ensemble Film, Urban Drama"
      },
      {
        "title": "In the Mood for Love",
        "director": "Wong Kar-wai",
        "year": 2000,
        "country": "Hong Kong-France",
        "runtime": 97,
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "Songs from the Second Floor",
        "director": "Roy Andersson",
        "year": 2000,
        "country": "Sweden-France-Denmark-Norway-Germany",
        "runtime": 98,
        "genre": "Surrealist Film, Black Comedy"
      },
      {
        "title": "Yi yi",
        "director": "Edward Yang",
        "year": 2000,
        "country": "Taiwan-Japan",
        "runtime": 173,
        "genre": "Ensemble Film, Family Drama"
      },
      {
        "title": "A.I. Artificial Intelligence",
        "director": "Steven Spielberg",
        "year": 2001,
        "country": "USA",
        "runtime": 145,
        "genre": "Science Fiction, Psychological Drama"
      },
      {
        "title": "Millennium Mambo",
        "director": "Hou Hsiao-hsien",
        "year": 2001,
        "country": "Taiwan-France",
        "runtime": 119,
        "genre": "Urban Drama, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "Mulholland Dr.",
        "director": "David Lynch",
        "year": 2001,
        "country": "France-US",
        "runtime": 147,
        "genre": "Mystery, Psychological Thriller"
      },
      {
        "title": "The Piano Teacher",
        "director": "Michael Haneke",
        "year": 2001,
        "country": "Austria-France-Germany",
        "runtime": 130,
        "genre": "Psychological Drama, Erotic Drama"
      },
      {
        "title": "City of God",
        "director": "Fernando Meirelles & Kátia Lund",
        "year": 2002,
        "country": "Brazil-Germany-France",
        "runtime": 129,
        "genre": "Crime Drama, Coming-of-Age"
      },
      {
        "title": "Elephant",
        "director": "Gus Van Sant",
        "year": 2003,
        "country": "USA",
        "runtime": 81,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "Oldboy",
        "director": "Park Chan-wook",
        "year": 2003,
        "country": "South Korea",
        "runtime": 120,
        "genre": "Thriller, Psychological Drama"
      },
      {
        "title": "2046",
        "director": "Wong Kar-wai",
        "year": 2004,
        "country": "Hong Kong-China-France-Italy-Germany",
        "runtime": 129,
        "genre": "Romance, Science Fiction"
      },
      {
        "title": "Tropical Malady",
        "director": "Apichatpong Weerasethakul",
        "year": 2004,
        "country": "France-Thailand-Germany-Italy-Switzerland",
        "runtime": 118,
        "genre": "Avant-garde-Experimental, Adventure Drama"
      },
      {
        "title": "Caché",
        "director": "Michael Haneke",
        "year": 2005,
        "country": "France-Austria-Germany-Italy",
        "runtime": 117,
        "genre": "Drama, Psychological Thriller"
      },
      {
        "title": "Synecdoche, New York",
        "director": "Charlie Kaufman",
        "year": 2008,
        "country": "USA",
        "runtime": 124,
        "genre": "Psychological Drama, Showbiz Drama"
      },
      {
        "title": "The White Ribbon",
        "director": "Michael Haneke",
        "year": 2009,
        "country": "Germany-Austria-France-Italy",
        "runtime": 144,
        "genre": "Drama, Period Film"
      },
      {
        "title": "A Separation",
        "director": "Asghar Farhadi",
        "year": 2011,
        "country": "Iran",
        "runtime": 123,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "Melancholia",
        "director": "Lars von Trier",
        "year": 2011,
        "country": "Denmark-Sweden-France-Germany",
        "runtime": 136,
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "The Turin Horse",
        "director": "Béla Tarr",
        "year": 2011,
        "country": "Hungary-France-Germany-Switzerland-USA",
        "runtime": 146,
        "genre": "Drama, Slice of Life"
      },
    ]
  },
  {
    "name": "Masterpieces",
    "items": [
      {
        "title": "Battleship Potemkin",
        "director": "Sergei Eisenstein",
        "year": 1925,
        "country": "USSR",
        "runtime": 71,
        "genre": "Political Drama, Propaganda Film",
        "rating": 10
      },
      {
        "title": "Metropolis",
        "director": "Fritz Lang",
        "year": 1927,
        "country": "Germany",
        "runtime": 153,
        "genre": "Science Fiction, Psychological Sci-Fi",
        "rating": 10
      },
      {
        "title": "M",
        "director": "Fritz Lang",
        "year": 1931,
        "country": "Germany",
        "runtime": 99,
        "genre": "Psychological Thriller, Police Detective Film",
        "rating": 10
      },
      {
        "title": "Alexander Nevsky",
        "director": "Sergei Eisenstein",
        "year": 1938,
        "country": "USSR",
        "runtime": 107,
        "genre": "Historical Epic, Biography",
        "rating": 10
      },
      {
        "title": "The Lady Vanishes",
        "director": "Alfred Hitchcock",
        "year": 1938,
        "country": "UK",
        "runtime": 97,
        "genre": "Spy Film, Thriller",
        "rating": 10
      },
      {
        "title": "Mr. Smith Goes to Washington",
        "director": "Frank Capra",
        "year": 1939,
        "country": "USA",
        "runtime": 129,
        "genre": "Comedy Drama, Message Movie",
        "rating": 10
      },
      {
        "title": "Rebecca",
        "director": "Alfred Hitchcock",
        "year": 1940,
        "country": "USA",
        "runtime": 130,
        "genre": "Mystery, Gothic Film",
        "rating": 10
      },
      {
        "title": "Shadow of a Doubt",
        "director": "Alfred Hitchcock",
        "year": 1943,
        "country": "USA",
        "runtime": 108,
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Double Indemnity",
        "director": "Billy Wilder",
        "year": 1944,
        "country": "USA",
        "runtime": 106,
        "genre": "Film Noir, Crime Thriller",
        "rating": 10
      },
      {
        "title": "The Best Years of Our Lives",
        "director": "William Wyler",
        "year": 1946,
        "country": "US",
        "runtime": 172,
        "genre": "Family Drama, Ensemble Film",
        "rating": 10
      },
      {
        "title": "Letter from an Unknown Woman",
        "director": "Max Ophüls",
        "year": 1948,
        "country": "USA",
        "runtime": 90,
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "All About Eve",
        "director": "Joseph L. Mankiewicz",
        "year": 1950,
        "country": "USA",
        "runtime": 138,
        "genre": "Satire, Showbiz Drama",
        "rating": 10
      },
      {
        "title": "Los Olvidados",
        "director": "Luis Buñuel",
        "year": 1950,
        "country": "Mexico",
        "runtime": 88,
        "genre": "Juvenile Delinquency Film, Urban Drama",
        "rating": 10
      },
      {
        "title": "Sunset Blvd.",
        "director": "Billy Wilder",
        "year": 1950,
        "country": "USA",
        "runtime": 110,
        "genre": "Showbiz Drama, Satire",
        "rating": 10
      },
      {
        "title": "Ace in the Hole",
        "director": "Billy Wilder",
        "year": 1951,
        "country": "USA",
        "runtime": 112,
        "genre": "Drama, Media Satire",
        "rating": 10
      },
      {
        "title": "Othello",
        "director": "Orson Welles",
        "year": 1951,
        "country": "Italy-France-Morocco-USA",
        "runtime": 90,
        "genre": "Drama, Tragedy"
      },
      {
        "title": "Umberto D.",
        "director": "Vittorio De Sica",
        "year": 1952,
        "country": "Italy",
        "runtime": 89,
        "genre": "Urban Drama, Melodrama"
      },
      {
        "title": "I Vitelloni",
        "director": "Federico Fellini",
        "year": 1953,
        "country": "Italy",
        "runtime": 104,
        "genre": "Drama, Comedy",
        "rating": 10
      },
      {
        "title": "The Wages of Fear",
        "director": "Henri-Georges Clouzot",
        "year": 1953,
        "country": "France-Italy",
        "runtime": 105,
        "genre": "Thriller, Adventure Drama"
      },
      {
        "title": "Sansho the Bailiff",
        "director": "Kenji Mizoguchi",
        "year": 1954,
        "country": "Japan",
        "runtime": 125,
        "genre": "Drama, Period Film"
      },
      {
        "title": "Invasion of the Body Snatchers",
        "director": "Don Siegel",
        "year": 1956,
        "country": "USA",
        "runtime": 80,
        "genre": "Science Fiction, Alien Invasion Film"
      },
      {
        "title": "The Searchers",
        "director": "John Ford",
        "year": 1956,
        "country": "USA",
        "runtime": 119,
        "genre": "Western, Revisionist Western",
        "rating": 10
      },
      {
        "title": "Paths of Glory",
        "director": "Stanley Kubrick",
        "year": 1957,
        "country": "USA",
        "runtime": 86,
        "genre": "Anti-War Film, War Drama",
        "rating": 10
      },
      {
        "title": "The Seventh Seal",
        "director": "Ingmar Bergman",
        "year": 1957,
        "country": "Sweden",
        "runtime": 96,
        "genre": "Fantasy, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Throne of Blood",
        "director": "Akira Kurosawa",
        "year": 1957,
        "country": "Japan",
        "runtime": 108,
        "genre": "Drama, Samurai Film"
      },
      {
        "title": "Wild Strawberries",
        "director": "Ingmar Bergman",
        "year": 1957,
        "country": "Sweden",
        "runtime": 90,
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Elevator to the Gallows",
        "director": "Louis Malle",
        "year": 1958,
        "country": "France",
        "runtime": 92,
        "genre": "Romance, Crime Thriller"
      },
      {
        "title": "Touch of Evil",
        "director": "Orson Welles",
        "year": 1958,
        "country": "USA",
        "runtime": 108,
        "genre": "Crime, Film Noir",
        "rating": 10
      },
      {
        "title": "North by Northwest",
        "director": "Alfred Hitchcock",
        "year": 1959,
        "country": "USA",
        "runtime": 136,
        "genre": "Thriller, Chase Movie",
        "rating": 10
      },
      {
        "title": "Some Like it Hot",
        "director": "Billy Wilder",
        "year": 1959,
        "country": "USA",
        "runtime": 119,
        "genre": "Comedy, Farce",
        "rating": 10
      },
      {
        "title": "The Apartment",
        "director": "Billy Wilder",
        "year": 1960,
        "country": "USA",
        "runtime": 125,
        "genre": "Comedy Drama, Workplace Comedy",
        "rating": 10
      },
      {
        "title": "La Dolce vita",
        "director": "Federico Fellini",
        "year": 1960,
        "country": "Italy",
        "runtime": 175,
        "genre": "Comedy Drama, Media Satire",
        "rating": 10
      },
      {
        "title": "Peeping Tom",
        "director": "Michael Powell",
        "year": 1960,
        "country": "UK",
        "runtime": 109,
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Psycho",
        "director": "Alfred Hitchcock",
        "year": 1960,
        "country": "USA",
        "runtime": 109,
        "genre": "Thriller, Psychological Thriller",
        "rating": 10
      },
      {
        "title": "Spartacus",
        "director": "Stanley Kubrick",
        "year": 1960,
        "country": "USA",
        "runtime": 184,
        "genre": "Sword-and-Sandal, Historical Epic",
        "rating": 10
      },
      {
        "title": "Cléo from 5 to 7",
        "director": "Agnès Varda",
        "year": 1962,
        "country": "France",
        "runtime": 90,
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "8½",
        "director": "Federico Fellini",
        "year": 1963,
        "country": "Italy",
        "runtime": 135,
        "genre": "Satire, Psychological Drama",
        "rating": 10
      },
      {
        "title": "High and Low",
        "director": "Akira Kurosawa",
        "year": 1963,
        "country": "Japan",
        "runtime": 142,
        "genre": "Drama, Post-Noir (Modern Noir)",
        "rating": 10
      },
      {
        "title": "Who's Afraid of Virginia Woolf?",
        "director": "Mike Nichols",
        "year": 1966,
        "country": "USA",
        "runtime": 129,
        "genre": "Marriage Drama, Psychological Drama",
        "image": "whosafraidofvirginiawoolf",
        "rating": 10
      },
      {
        "title": "The Graduate",
        "director": "Mike Nichols",
        "year": 1967,
        "country": "USA",
        "runtime": 105,
        "genre": "Comedy, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "Once Upon a Time in the West",
        "director": "Sergio Leone",
        "year": 1968,
        "country": "Italy-USA",
        "runtime": 165,
        "genre": "Epic Western, Spaghetti Western",
        "rating": 10
      },
      {
        "title": "Kes",
        "director": "Ken Loach",
        "year": 1969,
        "country": "UK",
        "runtime": 113,
        "genre": "Coming-of-Age, Family Drama",
        "rating": 10
      },
      {
        "title": "A Clockwork Orange",
        "director": "Stanley Kubrick",
        "year": 1971,
        "country": "UK",
        "runtime": 137,
        "genre": "Satire, Psychological Sci-Fi",
        "rating": 10
      },
      {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "year": 1972,
        "country": "USA",
        "runtime": 175,
        "genre": "Gangster Film, Crime Drama",
        "rating": 10
      },
      {
        "title": "Solaris",
        "director": "Andrei Tarkovsky",
        "year": 1972,
        "country": "USSR",
        "runtime": 165,
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "F for Fake",
        "director": "Orson Welles",
        "year": 1973,
        "country": "France-Iran-West Germany",
        "runtime": 85,
        "genre": "Avant-garde-Experimental, Essay Film",
        "rating": 10
      },
      {
        "title": "The Long Goodbye",
        "director": "Robert Altman",
        "year": 1973,
        "country": "USA",
        "runtime": 112,
        "genre": "Mystery, Post-Noir (Modern Noir)",
        "rating": 10
      },
      {
        "title": "Paper Moon",
        "director": "Peter Bogdanovich",
        "year": 1973,
        "country": "USA",
        "runtime": 102,
        "genre": "Comedy Drama, Road Movie",
        "rating": 10
      },
      {
        "title": "Scenes from a Marriage",
        "director": "Ingmar Bergman",
        "year": 1973,
        "country": "Sweden",
        "runtime": 168,
        "genre": "Drama, Marriage Drama"
      },
      {
        "title": "The Wicker Man",
        "director": "Robin Hardy",
        "year": 1973,
        "country": "UK",
        "runtime": 103,
        "genre": "Occult Horror, Police Detective Film",
        "rating": 10
      },
      {
        "title": "Deep Red",
        "director": "Dario Argento",
        "year": 1975,
        "country": "Italy",
        "runtime": 98,
        "genre": "Thriller, Giallo",
        "rating": 10
      },
      {
        "title": "Eraserhead",
        "director": "David Lynch",
        "year": 1977,
        "country": "USA",
        "runtime": 85,
        "genre": "Avant-garde-Experimental, Surrealist Film",
        "rating": 10
      },
      {
        "title": "Suspiria",
        "director": "Dario Argento",
        "year": 1977,
        "country": "Italy",
        "runtime": 92,
        "genre": "Horror, Gothic Film",
        "rating": 10
      },
      {
        "title": "Reds",
        "director": "Warren Beatty",
        "year": 1981,
        "country": "USA",
        "runtime": 200,
        "genre": "Epic, Historical Film",
        "rating": 10
      },
      {
        "title": "Fanny and Alexander",
        "director": "Ingmar Bergman",
        "year": 1982,
        "country": "Sweden",
        "runtime": 189,
        "genre": "Family Drama, Childhood Drama",
        "rating": 10
      },
      {
        "title": "Koyaanisqatsi",
        "director": "Godfrey Reggio",
        "year": 1982,
        "country": "USA",
        "runtime": 87,
        "genre": "Essay Film, Documentary",
        "rating": 10
      },
      {
        "title": "The Thing",
        "director": "John Carpenter",
        "year": 1982,
        "country": "USA",
        "runtime": 108,
        "genre": "Science Fiction, Horror",
        "rating": 10
      },
      {
        "title": "Ran",
        "director": "Akira Kurosawa",
        "year": 1985,
        "country": "France-Japan",
        "runtime": 161,
        "genre": "Historical Epic, Samurai Film",
        "rating": 10
      },
      {
        "title": "Au revoir les enfants",
        "director": "Louis Malle",
        "year": 1987,
        "country": "France",
        "runtime": 103,
        "genre": "War Drama, Childhood Drama",
        "rating": 10
      },
      {
        "title": "Cinema Paradiso",
        "director": "Giuseppe Tornatore",
        "year": 1988,
        "country": "Italy-France",
        "runtime": 123,
        "genre": "Drama, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "My Neighbour Totoro",
        "director": "Hayao Miyazaki",
        "year": 1988,
        "country": "Japan",
        "runtime": 86,
        "genre": "Children's Fantasy, Animation",
        "rating": 10
      },
      {
        "title": "Women on the Verge of a Nervous Breakdown",
        "director": "Pedro Almodóvar",
        "year": 1988,
        "country": "Spain",
        "runtime": 88,
        "genre": "Comedy, Farce",
        "rating": 10
      },
      {
        "title": "Naked",
        "director": "Mike Leigh",
        "year": 1993,
        "country": "UK",
        "runtime": 126,
        "genre": "Urban Drama, Social Problem Film",
        "rating": 10
      },
      {
        "title": "Crumb",
        "director": "Terry Zwigoff",
        "year": 1994,
        "country": "USA",
        "runtime": 119,
        "genre": "Documentary, Biography",
        "rating": 10
      },
      {
        "title": "Ed Wood",
        "director": "Tim Burton",
        "year": 1994,
        "country": "USA",
        "runtime": 124,
        "genre": "Comedy Drama, Biography",
        "rating": 10
      },
      {
        "title": "Fargo",
        "director": "Joel Coen & Ethan Coen",
        "year": 1996,
        "country": "USA",
        "runtime": 98,
        "genre": "Crime, Black Comedy",
        "rating": 10
      },
      {
        "title": "Princess Mononoke",
        "director": "Hayao Miyazaki",
        "year": 1997,
        "country": "Japan",
        "runtime": 134,
        "genre": "Anime, Fantasy Adventure",
        "rating": 10
      },
      {
        "title": "The Big Lebowski",
        "director": "Joel Coen & Ethan Coen",
        "year": 1998,
        "country": "USA-UK",
        "runtime": 113,
        "genre": "Crime Comedy, Screwball Comedy",
        "rating": 10
      },
      {
        "title": "Requiem for a Dream",
        "director": "Darren Aronofsky",
        "year": 2000,
        "country": "USA",
        "runtime": 100,
        "genre": "Addiction Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Amélie",
        "director": "Jean-Pierre Jeunet",
        "year": 2001,
        "country": "France-Germany",
        "runtime": 122,
        "genre": "Romance, Comedy",
        "rating": 10
      },
      {
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "year": 2001,
        "country": "Japan",
        "runtime": 124,
        "genre": "Fantasy Adventure, Anime",
        "rating": 10
      },
      {
        "title": "Y tu mamá también",
        "director": "Alfonso Cuarón",
        "year": 2001,
        "country": "Mexico",
        "runtime": 105,
        "genre": "Coming-of-Age, Road Movie",
        "rating": 10
      },
      {
        "title": "Dogville",
        "director": "Lars von Trier",
        "year": 2003,
        "country": "Denmark-Sweden-France-UK-Germany-Finland-Italy-Netherlands-Norway",
        "runtime": 177,
        "genre": "Drama, Avant-garde-Experimental",
        "rating": 10
      },
      {
        "title": "Kill Bill Vol. 1",
        "director": "Quentin Tarantino",
        "year": 2003,
        "country": "USA",
        "runtime": 111,
        "genre": "Action Thriller, Martial Arts",
        "rating": 10
      },
      {
        "title": "Spring, Summer, Autumn, Winter... and Spring",
        "director": "Kim Ki-duk",
        "year": 2003,
        "country": "South Korea-Germany",
        "runtime": 103,
        "genre": "Psychological Drama, Religious Drama",
        "rating": 10
      },
      {
        "title": "Eternal Sunshine of the Spotless Mind",
        "director": "Michel Gondry",
        "year": 2004,
        "country": "USA",
        "runtime": 108,
        "genre": "Comedy Drama, Romantic Fantasy"
      },
      {
        "title": "Pan's Labyrinth",
        "director": "Guillermo del Toro",
        "year": 2006,
        "country": "Spain-Mexico-USA",
        "runtime": 120,
        "genre": "Fantasy, Fairy Tales & Legends",
        "rating": 10
      },
      {
        "title": "Inglourious Basterds",
        "director": "Quentin Tarantino",
        "year": 2009,
        "country": "USA-Germany",
        "runtime": 153,
        "genre": "War Adventure",
        "rating": 10
      }
    ]
  },
  {
    "name": "Great",
    "items": [
      {
        "title": "The Kid",
        "director": "Charles Chaplin",
        "year": 1921,
        "country": "USA",
        "runtime": 60,
        "genre": "Comedy Drama, Melodrama",
        "rating": 9
      },
      {
        "title": "The General",
        "director": "Buster Keaton",
        "year": 1926,
        "country": "USA",
        "runtime": 74,
        "genre": "Buster Keaton & Clyde Bruckman",
        "rating": 9
      },
      {
        "title": "Un Chien andalou",
        "director": "Luis Buñuel",
        "year": 1928,
        "country": "France",
        "runtime": 16,
        "genre": "Avant-garde-Experimental, Surrealist Film",
        "rating": 9
      },
      {
        "title": "Trouble in Paradise",
        "director": "Ernst Lubitsch",
        "year": 1932,
        "country": "USA",
        "runtime": 83,
        "genre": "Sophisticated Comedy, Romantic Comedy"
      },
      {
        "title": "It Happened One Night",
        "director": "Frank Capra",
        "year": 1934,
        "country": "USA",
        "runtime": 105,
        "genre": "Romantic Comedy, Screwball Comedy",
        "rating": 9
      },
      {
        "title": "The 39 Steps",
        "director": "Alfred Hitchcock",
        "year": 1935,
        "country": "UK",
        "runtime": 87,
        "genre": "Thriller, Spy Film"
      },
      {
        "title": "A Night at the Opera",
        "director": "Sam Wood",
        "year": 1935,
        "country": "USA",
        "runtime": 92,
        "genre": "Anarchic Comedy, Farce",
        "rating": 9
      },
      {
        "title": "Top Hat",
        "director": "Mark Sandrich",
        "year": 1935,
        "country": "USA",
        "runtime": 99,
        "genre": "Musical Romance, Romantic Comedy"
      },
      {
        "title": "Triumph of the Will",
        "director": "Leni Riefenstahl",
        "year": 1935,
        "country": "Germany",
        "runtime": 110,
        "genre": "Propaganda Film, Documentary"
      },
      {
        "title": "The Adventures of Robin Hood",
        "director": "Michael Curtiz",
        "year": 1938,
        "country": "USA",
        "runtime": 102,
        "genre": "Swashbuckler, Romantic Adventure"
      },
      {
        "title": "Bringing Up Baby",
        "director": "Howard Hawks",
        "year": 1938,
        "country": "USA",
        "runtime": 102,
        "genre": "Screwball Comedy, Romantic Comedy"
      },
      {
        "title": "Gone with the Wind",
        "director": "Victor Fleming",
        "year": 1939,
        "country": "USA",
        "runtime": 222,
        "genre": "Romantic Epic, Historical Epic"
      },
      {
        "title": "His Girl Friday",
        "director": "Howard Hawks",
        "year": 1940,
        "country": "USA",
        "runtime": 92,
        "genre": "Screwball Comedy, Romantic Comedy"
      },
      {
        "title": "Pinocchio",
        "director": "Ben Sharpsteen & Hamilton Luske",
        "year": 1940,
        "country": "USA",
        "runtime": 88,
        "genre": "Children's Fantasy, Animated Musical",
        "rating": 9
      },
      {
        "title": "Casablanca",
        "director": "Michael Curtiz",
        "year": 1942,
        "country": "USA",
        "runtime": 102,
        "genre": "Drama, War Romance"
      },
      {
        "title": "To Be or Not to Be",
        "director": "Ernst Lubitsch",
        "year": 1942,
        "country": "USA",
        "runtime": 99,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Laura",
        "director": "Otto Preminger",
        "year": 1944,
        "country": "USA",
        "runtime": 85,
        "genre": "Mystery, Film Noir"
      },
      {
        "title": "To Have and Have Not",
        "director": "Howard Hawks",
        "year": 1944,
        "country": "USA",
        "runtime": 100,
        "genre": "Drama, Romance",
        "rating": 9
      },
      {
        "title": "Brief Encounter",
        "director": "David Lean",
        "year": 1945,
        "country": "UK",
        "runtime": 85,
        "genre": "Drama, Romance"
      },
      {
        "title": "Les Dames du Bois de Boulogne",
        "director": "Robert Bresson",
        "year": 1945,
        "country": "France",
        "runtime": 85,
        "genre": "Psychological Drama, Period Film"
      },
      {
        "title": "The Big Sleep",
        "director": "Howard Hawks",
        "year": 1946,
        "country": "USA",
        "runtime": 114,
        "genre": "Mystery, Film Noir",
        "rating": 9
      },
      {
        "title": "Great Expectations",
        "director": "David Lean",
        "year": 1946,
        "country": "UK",
        "runtime": 118,
        "genre": "Drama, Period Film",
        "rating": 9
      },
      {
        "title": "Notorious",
        "director": "Alfred Hitchcock",
        "year": 1946,
        "country": "USA",
        "runtime": 101,
        "genre": "Thriller, Romantic Mystery",
        "rating": 9
      },
      {
        "title": "The Treasure of the Sierra Madre",
        "director": "John Huston",
        "year": 1948,
        "country": "USA",
        "runtime": 124,
        "genre": "Adventure, Drama",
        "rating": 9
      },
      {
        "title": "On the Town",
        "director": "Stanley Donen & Gene Kelly",
        "year": 1949,
        "country": "USA",
        "runtime": 98,
        "genre": "Musical, Comedy",
        "rating": 9
      },
      {
        "title": "The Third Man",
        "director": "Carol Reed",
        "year": 1949,
        "country": "UK",
        "runtime": 104,
        "genre": "Mystery, Film Noir",
        "rating": 9
      },
      {
        "title": "In a Lonely Place",
        "director": "Nicholas Ray",
        "year": 1950,
        "country": "USA",
        "runtime": 91,
        "genre": "Psychological Drama, Film Noir",
        "rating": 9
      },
      {
        "title": "Orpheus",
        "director": "Jean Cocteau",
        "year": 1950,
        "country": "France",
        "runtime": 95,
        "genre": "Fantasy, Romantic Fantasy",
        "rating": 9
      },
      {
        "title": "A Streetcar Named Desire",
        "director": "Elia Kazan",
        "year": 1951,
        "country": "USA",
        "runtime": 122,
        "genre": "Marriage Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Day the Earth Stood Still",
        "director": "Robert Wise",
        "year": 1951,
        "country": "USA",
        "runtime": 92,
        "genre": "Science Fiction, Alien Invasion Film",
        "rating": 9
      },
      {
        "title": "Diary of a Country Priest",
        "director": "Robert Bresson",
        "year": 1951,
        "country": "France",
        "runtime": 120,
        "genre": "Psychological Drama, Religious Drama"
      },
      {
        "title": "Limelight",
        "director": "Charles Chaplin",
        "year": 1952,
        "country": "USA",
        "runtime": 145,
        "genre": "Comedy Drama, Melodrama"
      },
      {
        "title": "Singin' in the Rain",
        "director": "Stanley Donen",
        "year": 1952,
        "country": "USA",
        "runtime": 102,
        "genre": "Musical, Showbiz Comedy",
        "rating": 9
      },
      {
        "title": "The Band Wagon",
        "director": "Vincente Minnelli",
        "year": 1953,
        "country": "USA",
        "runtime": 112,
        "genre": "Musical, Comedy",
        "rating": 9
      },
      {
        "title": "The Big Heat",
        "director": "Fritz Lang",
        "year": 1953,
        "country": "USA",
        "runtime": 90,
        "genre": "Crime, Film Noir"
      },
      {
        "title": "Summer with Monika",
        "director": "Ingmar Bergman",
        "year": 1953,
        "country": "Sweden",
        "runtime": 96,
        "genre": "Psychological Drama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "La Strada",
        "director": "Federico Fellini",
        "year": 1954,
        "country": "Italy",
        "runtime": 115,
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "French Cancan",
        "director": "Jean Renoir",
        "year": 1955,
        "country": "France",
        "runtime": 93,
        "genre": "Comedy Drama, Musical Comedy",
        "rating": 9
      },
      {
        "title": "Les Diaboliques",
        "director": "Henri-Georges Clouzot",
        "year": 1955,
        "country": "France",
        "runtime": 114,
        "genre": "Thriller, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "The Ten Commandments",
        "director": "Cecil B. DeMille",
        "year": 1956,
        "country": "USA",
        "runtime": 220,
        "genre": "Religious Epic, Hagiography",
        "rating": 9
      },
      {
        "title": "Nights of Cabiria",
        "director": "Federico Fellini",
        "year": 1957,
        "country": "Italy-France",
        "runtime": 110,
        "genre": "Melodrama, Tragi-comedy",
        "rating": 9
      },
      {
        "title": "12 Angry Men",
        "director": "Sidney Lumet",
        "year": 1957,
        "country": "USA",
        "runtime": 95,
        "genre": "Drama, Courtroom Drama",
        "rating": 9
      },
      {
        "title": "The Cranes Are Flying",
        "director": "Mikhail Kalatozov",
        "year": 1957,
        "country": "USSR",
        "runtime": 94,
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Sweet Smell of Success",
        "director": "Alexander Mackendrick",
        "year": 1957,
        "country": "USA",
        "runtime": 96,
        "genre": "Drama, Media Satire",
        "rating": 9
      },
      {
        "title": "Vertigo",
        "director": "Alfred Hitchcock",
        "year": 1958,
        "country": "USA",
        "runtime": 128,
        "genre": "Romantic Mystery, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Anatomy of a Murder",
        "director": "Otto Preminger",
        "year": 1959,
        "country": "USA",
        "runtime": 160,
        "genre": "Drama, Courtroom Drama",
        "rating": 9
      },
      {
        "title": "Pickpocket",
        "director": "Robert Bresson",
        "year": 1959,
        "country": "France",
        "runtime": 75,
        "genre": "Crime Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Eyes Without a Face",
        "director": "Georges Franju",
        "year": 1960,
        "country": "France-Italy",
        "runtime": 88,
        "genre": "Horror, Gothic Film",
        "rating": 9
      },
      {
        "title": "The Virgin Spring",
        "director": "Ingmar Bergman",
        "year": 1960,
        "country": "Sweden",
        "runtime": 88,
        "genre": "Drama, Period Film",
        "rating": 9
      },
      {
        "title": "Breakfast at Tiffany's",
        "director": "Blake Edwards",
        "year": 1961,
        "country": "USA",
        "runtime": 115,
        "genre": "Comedy Drama, Romantic Comedy",
        "rating": 9
      },
      {
        "title": "The Innocents",
        "director": "Jack Clayton",
        "year": 1961,
        "country": "UK",
        "runtime": 100,
        "genre": "Horror, Supernatural Thriller",
        "rating": 9
      },
      {
        "title": "Last Year at Marienbad",
        "director": "Alain Resnais",
        "year": 1961,
        "country": "France-Italy",
        "runtime": 94,
        "genre": "Avant-garde-Experimental, Psychological Drama",
        "rating": 9
      },
      {
        "title": "West Side Story",
        "director": "Robert Wise",
        "year": 1961,
        "country": "USA",
        "runtime": 151,
        "genre": "Musical Romance, Juvenile Delinquency Film",
        "rating": 9
      },
      {
        "title": "Yojimbo",
        "director": "Akira Kurosawa",
        "year": 1961,
        "country": "Japan",
        "runtime": 110,
        "genre": "Adventure, Samurai Film",
        "rating": 9
      },
      {
        "title": "Harakiri",
        "director": "Masaki Kobayashi",
        "year": 1962,
        "country": "Japan",
        "runtime": 133,
        "genre": "Drama, Samurai Film",
        "rating": 9
      },
      {
        "title": "La Jetée",
        "director": "Chris Marker",
        "year": 1962,
        "country": "France",
        "runtime": 27,
        "genre": "Science Fiction, Avant-garde-Experimental",
        "rating": 9
      },
      {
        "title": "Lawrence of Arabia",
        "director": "David Lean",
        "year": 1962,
        "country": "UK",
        "runtime": 216,
        "genre": "Epic, British Empire Film",
        "rating": 9
      },
      {
        "title": "Winter Light",
        "director": "Ingmar Bergman",
        "year": 1962,
        "country": "Sweden",
        "runtime": 80,
        "genre": "Psychological Drama, Religious Drama",
        "rating": 9
      },
      {
        "title": "Shock Corridor",
        "director": "Samuel Fuller",
        "year": 1963,
        "country": "USA",
        "runtime": 101,
        "genre": "Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Silence",
        "director": "Ingmar Bergman",
        "year": 1963,
        "country": "Sweden",
        "runtime": 96,
        "genre": "Psychological Drama, Family Drama",
        "rating": 9
      },
      {
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "director": "Stanley Kubrick",
        "year": 1964,
        "country": "UK-USA",
        "runtime": 93,
        "genre": "Black Comedy, Anti-War Film",
        "rating": 9
      },
      {
        "title": "Marnie",
        "director": "Alfred Hitchcock",
        "year": 1964,
        "country": "USA",
        "runtime": 130,
        "genre": "Romantic Mystery, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Belle de jour",
        "director": "Luis Buñuel",
        "year": 1967,
        "country": "France-Italy",
        "runtime": 100,
        "genre": "Satire, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Night of the Living Dead",
        "director": "George A. Romero",
        "year": 1968,
        "country": "USA",
        "runtime": 96,
        "genre": "Horror, Creature Film",
        "rating": 9
      },
      {
        "title": "Easy Rider",
        "director": "Dennis Hopper",
        "year": 1969,
        "country": "USA",
        "runtime": 94,
        "genre": "Road Movie, Biker Film",
        "rating": 9
      },
      {
        "title": "Harold and Maude",
        "director": "Hal Ashby",
        "year": 1971,
        "country": "USA",
        "runtime": 91,
        "genre": "Black Comedy, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Pat Garrett and Billy the Kid",
        "director": "Sam Peckinpah",
        "year": 1973,
        "country": "USA",
        "runtime": 122,
        "genre": "Revisionist Western, Outlaw (Gunfighter) Film",
        "rating": 9
      },
      {
        "title": "The Spirit of the Beehive",
        "director": "Victor Erice",
        "year": 1973,
        "country": "Spain",
        "runtime": 95,
        "genre": "Drama, Childhood Drama",
        "rating": 9
      },
      {
        "title": "Alice in the Cities",
        "director": "Wim Wenders",
        "year": 1974,
        "country": "West Germany",
        "runtime": 110,
        "genre": "Drama, Road Movie",
        "rating": 9
      },
      {
        "title": "Monty Python and the Holy Grail",
        "director": "Terry Gilliam",
        "year": 1975,
        "country": "UK",
        "runtime": 90,
        "genre": "Anarchic Comedy, Parody/Spoof",
        "rating": 9
      },
      {
        "title": "Monty Python's Life of Brian",
        "director": "Terry Jones",
        "year": 1979,
        "country": "UK",
        "runtime": 93,
        "genre": "Parody/Spoof, Religious Comedy",
        "rating": 9
      },
      {
        "title": "Amarcord",
        "director": "Federico Fellini",
        "year": 1973,
        "country": "Italy",
        "runtime": 127,
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "The Holy Mountain",
        "director": "Alejandro Jodorowsky",
        "year": 1973,
        "country": "Mexico-USA",
        "runtime": 114,
        "genre": "Avant-garde-Experimental, Surrealist Film",
        "rating": 9
      },
      {
        "title": "Mean Streets",
        "director": "Martin Scorsese",
        "year": 1973,
        "country": "USA",
        "runtime": 110,
        "genre": "Crime, Urban Drama",
        "rating": 10
      },
      {
        "title": "Ali: Fear Eats the Soul",
        "director": "Rainer Werner Fassbinder",
        "year": 1974,
        "country": "West Germany",
        "runtime": 94,
        "genre": "Melodrama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Godfather Part II",
        "director": "Francis Ford Coppola",
        "year": 1974,
        "country": "USA",
        "runtime": 200,
        "genre": "Gangster Film, Crime Drama",
        "rating": 9
      },
      {
        "title": "The Man Who Would Be King",
        "director": "John Huston",
        "year": 1975,
        "country": "USA",
        "runtime": 129,
        "genre": "Adventure, British Empire Film",
        "rating": 9
      },
      {
        "title": "The Mirror",
        "director": "Andrei Tarkovsky",
        "year": 1975,
        "country": "USSR",
        "runtime": 108,
        "genre": "Avant-garde-Experimental, Essay Film",
        "rating": 9
      },
      {
        "title": "Annie Hall",
        "director": "Woody Allen",
        "year": 1977,
        "country": "USA",
        "runtime": 94,
        "genre": "Romantic Comedy, Urban Comedy",
        "rating": 9
      },
      {
        "title": "Close Encounters of the Third Kind",
        "director": "Steven Spielberg",
        "year": 1977,
        "country": "USA",
        "runtime": 135,
        "genre": "Science Fiction, Adventure Drama",
        "rating": 9
      },
      {
        "title": "Alien",
        "director": "Ridley Scott",
        "year": 1979,
        "country": "USA",
        "runtime": 117,
        "genre": "Horror, Science Fiction",
        "rating": 9
      },
      {
        "title": "Apocalypse Now",
        "director": "Francis Ford Coppola",
        "year": 1979,
        "country": "USA",
        "runtime": 150,
        "genre": "Anti-War Film, Jungle Film",
        "rating": 9
      },
      {
        "title": "The Empire Strikes Back",
        "director": "Irvin Kershner",
        "year": 1980,
        "country": "USA",
        "runtime": 124,
        "genre": "Science Fiction, Space Adventure",
        "rating": 9
      },
      {
        "title": "Kagemusha",
        "director": "Akira Kurosawa",
        "year": 1980,
        "country": "Japan",
        "runtime": 159,
        "genre": "Historical Epic, Samurai Film",
        "rating": 9
      },
      {
        "title": "The Shining",
        "director": "Stanley Kubrick",
        "year": 1980,
        "country": "USA",
        "runtime": 142,
        "genre": "Horror, Haunted House Film",
        "rating": 9
      },
      {
        "title": "Blade Runner",
        "director": "Ridley Scott",
        "year": 1982,
        "country": "USA",
        "runtime": 118,
        "genre": "Science Fiction, Tech Noir",
        "rating": 9
      },
      {
        "title": "E.T. The Extra-Terrestrial",
        "director": "Steven Spielberg",
        "year": 1982,
        "country": "USA",
        "runtime": 115,
        "genre": "Science Fiction, Children's Fantasy",
        "rating": 9
      },
      {
        "title": "Veronika Voss",
        "director": "Rainer Werner Fassbinder",
        "year": 1982,
        "country": "West Germany",
        "runtime": 105,
        "genre": "Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Scarface",
        "director": "Brian De Palma",
        "year": 1983,
        "country": "USA",
        "runtime": 170,
        "genre": "Crime Thriller, Gangster Film",
        "rating": 9
      },
      {
        "title": "Blood Simple",
        "director": "Joel Coen & Ethan Coen",
        "year": 1984,
        "country": "USA",
        "runtime": 97,
        "genre": "Post-Noir (Modern Noir), Crime Thriller",
        "rating": 9
      },
      {
        "title": "Love Streams",
        "director": "John Cassavetes",
        "year": 1984,
        "country": "USA",
        "runtime": 141,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Paris, Texas",
        "director": "Wim Wenders",
        "year": 1984,
        "country": "USA",
        "runtime": 150,
        "genre": "Drama, Road Movie",
        "rating": 9
      },
      {
        "title": "The Terminator",
        "director": "James Cameron",
        "year": 1984,
        "country": "USA",
        "runtime": 107,
        "genre": "Science Fiction, Action",
        "rating": 9
      },
      {
        "title": "Back to the Future",
        "director": "Robert Zemeckis",
        "year": 1985,
        "country": "USA",
        "runtime": 116,
        "genre": "Teen Movie, Sci-Fi Comedy",
        "rating": 9
      },
      {
        "title": "The Purple Rose of Cairo",
        "director": "Woody Allen",
        "year": 1985,
        "country": "USA",
        "runtime": 82,
        "genre": "Comedy, Romantic Fantasy",
        "rating": 9
      },
      {
        "title": "Taipei Story",
        "director": "Edward Yang",
        "year": 1985,
        "country": "Taiwan",
        "runtime": 119,
        "genre": "Romantic Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Aliens",
        "director": "James Cameron",
        "year": 1986,
        "country": "USA",
        "runtime": 137,
        "genre": "Horror, Sci-Fi Action",
        "rating": 9
      },
      {
        "title": "Hannah and Her Sisters",
        "director": "Woody Allen",
        "year": 1986,
        "country": "USA",
        "runtime": 106,
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "The Sacrifice",
        "director": "Andrei Tarkovsky",
        "year": 1986,
        "country": "France-Sweden",
        "runtime": 145,
        "genre": "Psychological Drama, Religious Drama",
        "rating": 9
      },
      {
        "title": "Evil Dead II",
        "director": "Sam Raimi",
        "year": 1987,
        "country": "USA",
        "runtime": 85,
        "genre": "Horror, Horror Comedy",
        "rating": 9
      },
      {
        "title": "Robocop",
        "director": "Paul Verhoeven",
        "year": 1987,
        "country": "USA",
        "runtime": 103,
        "genre": "Action, Science Fiction",
        "rating": 9
      },
      {
        "title": "Crimes and Misdemeanors",
        "director": "Woody Allen",
        "year": 1989,
        "country": "USA",
        "runtime": 104,
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "Do the Right Thing",
        "director": "Spike Lee",
        "year": 1989,
        "country": "USA",
        "runtime": 120,
        "genre": "Urban Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "Edward Scissorhands",
        "director": "Tim Burton",
        "year": 1990,
        "country": "USA",
        "runtime": 100,
        "genre": "Fantasy Comedy, Romance",
        "rating": 9
      },
      {
        "title": "A Brighter Summer Day",
        "director": "Edward Yang",
        "year": 1991,
        "country": "Taiwan",
        "runtime": 237,
        "genre": "Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Barton Fink",
        "director": "Joel Coen & Ethan Coen",
        "year": 1991,
        "country": "USA",
        "runtime": 117,
        "genre": "Comedy Drama, Black Comedy",
        "rating": 9
      },
      {
        "title": "The Silence of the Lambs",
        "director": "Jonathan Demme",
        "year": 1991,
        "country": "USA",
        "runtime": 118,
        "genre": "Psychological Drama, Family Drama",
        "rating": 9
      },
      {
        "title": "Thelma & Louise",
        "director": "Ridley Scott",
        "year": 1991,
        "country": "USA",
        "runtime": 128,
        "genre": "Road Movie, Buddy Film",
        "rating": 9
      },
      {
        "title": "Reservoir Dogs",
        "director": "Quentin Tarantino",
        "year": 1992,
        "country": "USA",
        "runtime": 99,
        "genre": "Crime Thriller, Gangster Film",
        "rating": 9
      },
      {
        "title": "Dazed and Confused",
        "director": "Richard Linklater",
        "year": 1993,
        "country": "USA",
        "runtime": 94,
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Groundhog Day",
        "director": "Harold Ramis",
        "year": 1993,
        "country": "USA",
        "runtime": 103,
        "genre": "Fantasy Comedy, Romantic Comedy",
        "rating": 9
      },
      {
        "title": "Jurassic Park",
        "director": "Steven Spielberg",
        "year": 1993,
        "country": "USA",
        "runtime": 126,
        "genre": "Prehistoric Fantasy, Sci-Fi Action",
        "rating": 9
      },
      {
        "title": "The Nightmare Before Christmas",
        "director": "Henry Selick",
        "year": 1993,
        "country": "USA",
        "runtime": 76,
        "genre": "Fantasy, Animated Musical",
        "rating": 9
      },
      {
        "title": "Three Colours: Blue",
        "director": "Krzysztof Kieslowski",
        "year": 1993,
        "country": "France-Poland-Switzerland",
        "runtime": 100,
        "genre": "Psychological Drama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Chungking Express",
        "director": "Wong Kar-wai",
        "year": 1994,
        "country": "Hong Kong",
        "runtime": 104,
        "genre": "Urban Drama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Before Sunrise",
        "director": "Richard Linklater",
        "year": 1995,
        "country": "USA",
        "runtime": 101,
        "genre": "Romance, Comedy Drama",
        "rating": 9
      },
      {
        "title": "Safe",
        "director": "Todd Haynes",
        "year": 1995,
        "country": "USA",
        "runtime": 119,
        "genre": "Medical Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Trainspotting",
        "director": "Danny Boyle",
        "year": 1996,
        "country": "UK",
        "runtime": 95,
        "genre": "Comedy Drama, Addiction Drama",
        "rating": 9
      },
      {
        "title": "Hana-bi",
        "director": "Takeshi Kitano",
        "year": 1997,
        "country": "Japan",
        "runtime": 103,
        "genre": "Crime Drama, Road Movie",
        "rating": 9
      },
      {
        "title": "Starship Troopers",
        "director": "Paul Verhoeven",
        "year": 1997,
        "country": "USA",
        "runtime": 129,
        "genre": "Sci-Fi Action, Political Satire",
        "rating": 9
      },
      {
        "title": "Festen",
        "director": "Thomas Vinterberg",
        "year": 1998,
        "country": "Denmark",
        "runtime": 105,
        "genre": "Ensemble Film, Family Drama",
        "rating": 9
      },
      {
        "title": "Rushmore",
        "director": "Wes Anderson",
        "year": 1998,
        "country": "USA",
        "runtime": 93,
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Amores perros",
        "director": "Alejandro González Iñárritu",
        "year": 2000,
        "country": "Mexico",
        "runtime": 153,
        "genre": "Ensemble Film, Urban Drama",
        "rating": 9
      },
      {
        "title": "Talk to Her",
        "director": "Pedro Almodóvar",
        "year": 2002,
        "country": "Spain",
        "runtime": 112,
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Before Sunset",
        "director": "Richard Linklater",
        "year": 2004,
        "country": "USA",
        "runtime": 80,
        "genre": "Romance, Comedy Drama",
        "rating": 9
      },
      {
        "title": "A History of Violence",
        "director": "David Cronenberg",
        "year": 2005,
        "country": "USA-Germany",
        "runtime": 96,
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Children of Men",
        "director": "Alfonso Cuarón",
        "year": 2006,
        "country": "USA-UK",
        "runtime": 109,
        "genre": "Psychological Sci-Fi, Action Thriller",
        "rating": 9
      },
      {
        "title": "The Host",
        "director": "Bong Joon-ho",
        "year": 2006,
        "country": "South Korea-Japan",
        "runtime": 119,
        "genre": "Sci-Fi Horror, Monster Film",
        "rating": 9
      },
      {
        "title": "Inland Empire",
        "director": "David Lynch",
        "year": 2006,
        "country": "USA-France-Poland",
        "runtime": 180,
        "genre": "Avant-garde-Experimental, Mystery",
        "rating": 9
      },
      {
        "title": "There Will Be Blood",
        "director": "Paul Thomas Anderson",
        "year": 2007,
        "country": "USA",
        "runtime": 158,
        "genre": "Family Drama, Period Film",
        "rating": 9
      },
      {
        "title": "Certified Copy",
        "director": "Abbas Kiarostami",
        "year": 2010,
        "country": "France-Italy-Belgium-Iran",
        "runtime": 106,
        "genre": "Drama, Slice of Life",
        "rating": 9
      },
      {
        "title": "Boyhood",
        "director": "Richard Linklater",
        "year": 2014,
        "country": "USA",
        "runtime": 165,
        "genre": "Childhood Drama, Coming-of-Age"
      }
    ]
  },
  {
    "name": "Really Good",
    "items": [
      {
        "title": "The Navigator",
        "director": "Buster Keaton & Donald Crisp",
        "year": 1924,
        "country": "USA",
        "runtime": 59,
        "genre": "Comedy, Slapstick",
        "rating": 8
      },
      {
        "title": "Seven Chances",
        "director": "Buster Keaton",
        "year": 1925,
        "country": "USA",
        "runtime": 56,
        "genre": "Comedy of Errors, Romantic Comedy",
        "rating": 8
      },
      {
        "title": "Strike",
        "director": "Sergei Eisenstein",
        "year": 1925,
        "country": "USSR",
        "runtime": 73,
        "genre": "Political Drama, Historical Epic",
        "rating": 8
      },
      {
        "title": "The Passion of Joan of Arc",
        "director": "Carl Theodor Dreyer",
        "year": 1928,
        "country": "France",
        "runtime": 110,
        "genre": "Historical Film, Hagiography"
      },
      {
        "title": "City Lights",
        "director": "Charles Chaplin",
        "year": 1931,
        "country": "USA",
        "runtime": 86,
        "genre": "Comedy Drama, Romance",
        "rating": 8
      },
      {
        "title": "Land Without Bread",
        "director": "Luis Buñuel",
        "year": 1932,
        "country": "Spain",
        "runtime": 28,
        "genre": "Culture & Society, Documentary",
        "rating": 8
      },
      {
        "title": "Scarface",
        "director": "Howard Hawks",
        "year": 1932,
        "country": "USA",
        "runtime": 90,
        "genre": "Gangster Film, Crime Drama",
        "image": "scarface1932",
        "rating": 8
      },
      {
        "title": "Duck Soup",
        "director": "Leo McCarey",
        "year": 1933,
        "country": "USA",
        "runtime": 70,
        "genre": "Anarchic Comedy, Farce"
      },
      {
        "title": "L'Atalante",
        "director": "Jean Vigo",
        "year": 1934,
        "country": "France",
        "runtime": 89,
        "genre": "Romantic Drama, Marriage Drama",
        "rating": 8
      },
      {
        "title": "Bride of Frankenstein",
        "director": "James Whale",
        "year": 1935,
        "country": "USA",
        "runtime": 75,
        "genre": "Monster Film, Sci-Fi Horror"
      },
      {
        "title": "Modern Times",
        "director": "Charles Chaplin",
        "year": 1936,
        "country": "USA",
        "runtime": 89,
        "genre": "Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Holiday",
        "director": "George Cukor",
        "year": 1938,
        "country": "USA",
        "runtime": 93,
        "genre": "Comedy, Romance"
      },
      {
        "title": "Ninotchka",
        "director": "Ernst Lubitsch",
        "year": 1939,
        "country": "USA",
        "runtime": 110,
        "genre": "Romantic Comedy, Sophisticated Comedy",
        "rating": 7
      },
      {
        "title": "The Story of the Last Chrysanthemums",
        "director": "Kenji Mizoguchi",
        "year": 1939,
        "country": "Japan",
        "runtime": 143,
        "genre": "Period Film, Romantic Drama",
        "rating": 8
      },
      {
        "title": "The Wizard of Oz",
        "director": "Victor Fleming",
        "year": 1939,
        "country": "USA",
        "runtime": 101,
        "genre": "Children's/Family, Musical Fantasy",
        "rating": 8
      },
      {
        "title": "Citizen Kane",
        "director": "Orson Welles",
        "year": 1941,
        "country": "USA",
        "genre": "Drama, Film a Clef",
        "runtime": 119,
        "rating": 8
      },
      {
        "title": "The Maltese Falcon",
        "director": "John Huston",
        "year": 1941,
        "country": "USA",
        "runtime": 100,
        "genre": "Mystery, Film Noir",
        "rating": 8
      },
      {
        "title": "Ivan the Terrible, Part 1",
        "director": "Sergei Eisenstein",
        "year": 1944,
        "country": "USSR",
        "runtime": 96,
        "genre": "Historical Film, Biography",
        "rating": 8
      },
      {
        "title": "The Miracle of Morgan's Creek",
        "director": "Preston Sturges",
        "year": 1944,
        "country": "USA",
        "runtime": 99,
        "genre": "Satire, Screwball Comedy",
        "rating": 8
      },
      {
        "title": "Detour",
        "director": "Edgar G. Ulmer",
        "year": 1945,
        "country": "USA",
        "runtime": 69,
        "genre": "Film Noir, Crime Drama"
      },
      {
        "title": "Mildred Pierce",
        "director": "Michael Curtiz",
        "year": 1945,
        "country": "USA",
        "runtime": 109,
        "genre": "Melodrama, Film Noir"
      },
      {
        "title": "It's a Wonderful Life",
        "director": "Frank Capra",
        "year": 1946,
        "country": "USA",
        "runtime": 129,
        "genre": "Comedy Drama, Fantasy",
        "rating": 8
      },
      {
        "title": "Ivan the Terrible, Part 2",
        "director": "Sergei Eisenstein",
        "year": 1946,
        "country": "USSR",
        "runtime": 88,
        "genre": "Historical Film, Biography",
        "rating": 8
      },
      {
        "title": "Monsieur Verdoux",
        "director": "Charles Chaplin",
        "year": 1947,
        "country": "USA",
        "runtime": 123,
        "genre": "Black Comedy, Crime Comedy",
        "rating": 8
      },
      {
        "title": "Out of the Past",
        "director": "Jacques Tourneur",
        "year": 1947,
        "country": "USA",
        "runtime": 97,
        "genre": "Crime, Film Noir",
        "rating": 8
      },
      {
        "title": "Bicycle Thieves",
        "director": "Vittorio De Sica",
        "year": 1948,
        "country": "Italy",
        "runtime": 90,
        "genre": "Family Drama, Urban Drama",
        "rating": 8
      },
      {
        "title": "Fort Apache",
        "director": "John Ford",
        "year": 1948,
        "country": "USA",
        "runtime": 127,
        "genre": "Western, Cavalry Film",
        "rating": 8
      },
      {
        "title": "The Red Shoes",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1948,
        "country": "UK",
        "runtime": 133,
        "genre": "Romantic Drama, Musical Drama",
        "rating": 8
      },
      {
        "title": "Rope",
        "director": "Alfred Hitchcock",
        "year": 1948,
        "country": "USA",
        "runtime": 80,
        "genre": "Thriller, Psychological Thriller",
        "rating": 8
      },
      {
        "title": "Kind Hearts and Coronets",
        "director": "Robert Hamer",
        "year": 1949,
        "country": "UK",
        "runtime": 104,
        "genre": "Black Comedy, Crime Comedy",
        "rating": 8
      },
      {
        "title": "She Wore a Yellow Ribbon",
        "director": "John Ford",
        "year": 1949,
        "country": "USA",
        "runtime": 103,
        "genre": "Western, Cavalry Film",
        "rating": 8
      },
      {
        "title": "White Heat",
        "director": "Raoul Walsh",
        "year": 1949,
        "country": "USA",
        "runtime": 114,
        "genre": "Crime, Gangster Film",
        "rating": 8
      },
      {
        "title": "Gun Crazy",
        "director": "Joseph H. Lewis",
        "year": 1950,
        "country": "USA",
        "runtime": 86,
        "genre": "Film Noir, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The River",
        "director": "Jean Renoir",
        "year": 1951,
        "country": "France-India-USA",
        "runtime": 99,
        "genre": "Drama, Romantic Drama",
        "rating": 8
      },
      {
        "title": "Strangers on a Train",
        "director": "Alfred Hitchcock",
        "year": 1951,
        "country": "USA",
        "runtime": 101,
        "genre": "Psychological Thriller, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Bad and the Beautiful",
        "director": "Vincente Minnelli",
        "year": 1952,
        "country": "USA",
        "runtime": 118,
        "genre": "Drama, Showbiz Drama",
        "rating": 8
      },
      {
        "title": "El",
        "director": "Luis Buñuel",
        "year": 1953,
        "country": "Mexico",
        "runtime": 91,
        "genre": "Black Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Ugetsu monogatari",
        "director": "Kenji Mizoguchi",
        "year": 1953,
        "country": "Japan",
        "runtime": 96,
        "genre": "Romantic Fantasy, Period Film",
        "rating": 8
      },
      {
        "title": "On the Waterfront",
        "director": "Elia Kazan",
        "year": 1954,
        "country": "USA",
        "runtime": 108,
        "genre": "Message Movie, Urban Drama",
        "rating": 8
      },
      {
        "title": "Seven Samurai",
        "director": "Akira Kurosawa",
        "year": 1954,
        "country": "Japan",
        "runtime": 200,
        "genre": "Drama, Samurai Film",
        "rating": 8
      },
      {
        "title": "All That Heaven Allows",
        "director": "Douglas Sirk",
        "year": 1955,
        "country": "USA",
        "runtime": 89,
        "genre": "Melodrama, Romantic Drama",
        "rating": 8
      },
      {
        "title": "The Ladykillers",
        "director": "Alexander Mackendrick",
        "year": 1955,
        "country": "UK",
        "runtime": 90,
        "genre": "Crime, Black Comedy",
        "rating": 8
      },
      {
        "title": "Lola Montès",
        "director": "Max Ophüls",
        "year": 1955,
        "country": "France-West Germany",
        "runtime": 116,
        "genre": "Drama, Period Film",
        "rating": 8
      },
      {
        "title": "Night and Fog",
        "director": "Alain Resnais",
        "year": 1955,
        "country": "France",
        "runtime": 32,
        "genre": "Military & War, Documentary",
        "rating": 8
      },
      {
        "title": "Rebel Without a Cause",
        "director": "Nicholas Ray",
        "year": 1955,
        "country": "USA",
        "runtime": 111,
        "genre": "Teen Movie, Family Drama",
        "rating": 8
      },
      {
        "title": "Rififi",
        "director": "Jules Dassin",
        "year": 1955,
        "country": "France",
        "runtime": 115,
        "genre": "Crime Thriller, Caper",
        "rating": 8
      },
      {
        "title": "Smiles of a Summer Night",
        "director": "Ingmar Bergman",
        "year": 1955,
        "country": "Sweden",
        "runtime": 108,
        "genre": "Comedy, Ensemble Film",
        "rating": 8
      },
      {
        "title": "Bigger Than Life",
        "director": "Nicholas Ray",
        "year": 1956,
        "country": "USA",
        "runtime": 95,
        "genre": "Psychological Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "The Killing",
        "director": "Stanley Kubrick",
        "year": 1956,
        "country": "USA",
        "runtime": 85,
        "genre": "Crime Thriller, Film Noir",
        "rating": 8
      },
      {
        "title": "An Affair to Remember",
        "director": "Leo McCarey",
        "year": 1957,
        "country": "USA",
        "runtime": 115,
        "genre": "Romance, Melodrama",
        "rating": 8
      },
      {
        "title": "Night of the Demon",
        "director": "Jacques Tourneur",
        "year": 1957,
        "country": "UK",
        "runtime": 82,
        "genre": "Occult Horror, Gothic Film",
        "rating": 8
      },
      {
        "title": "The Misfits",
        "director": "John Huston",
        "year": 1961,
        "country": "USA",
        "runtime": 124,
        "genre": "Drama, Modern Western",
        "rating": 8
      },
      {
        "title": "Hatari!",
        "director": "Howard Hawks",
        "year": 1962,
        "country": "USA",
        "runtime": 159,
        "genre": "Adventure, Comedy",
        "rating": 8
      },
      {
        "title": "Lolita",
        "director": "Stanley Kubrick",
        "year": 1962,
        "country": "UK",
        "runtime": 152,
        "genre": "Black Comedy, Psychological Drama",
        "rating": 8
      },
      {
        "title": "The Man Who Shot Liberty Valance",
        "director": "John Ford",
        "year": 1962,
        "country": "USA",
        "runtime": 119,
        "genre": "Western, Outlaw (Gunfighter) Film",
        "rating": 8
      },
      {
        "title": "The Birds",
        "director": "Alfred Hitchcock",
        "year": 1963,
        "country": "USA",
        "runtime": 120,
        "genre": "Horror, Natural Horror",
        "rating": 8
      },
      {
        "title": "Doctor Zhivago",
        "director": "David Lean",
        "year": 1965,
        "country": "USA",
        "runtime": 197,
        "genre": "Romantic Epic, Period Film",
        "rating": 8
      },
      {
        "title": "Pierrot le fou",
        "director": "Jean-Luc Godard",
        "year": 1965,
        "country": "France-Italy",
        "runtime": 110,
        "genre": "Road Movie, Romantic Drama",
        "rating": 8
      },
      {
        "title": "Simon of the Desert",
        "director": "Luis Buñuel",
        "year": 1965,
        "country": "Mexico",
        "runtime": 43,
        "genre": "Satire, Religious Comedy",
        "rating": 8
      },
      {
        "title": "The Sound of Music",
        "director": "Robert Wise",
        "year": 1965,
        "country": "USA",
        "runtime": 174,
        "genre": "Musical, Drama",
        "rating": 8
      },
      {
        "title": "Daisies",
        "director": "Vera Chytilová",
        "year": 1966,
        "country": "Czechoslovakia",
        "runtime": 76,
        "genre": "Avant-garde-Experimental, Satire",
        "rating": 8
      },
      {
        "title": "Bonnie and Clyde",
        "director": "Arthur Penn",
        "year": 1967,
        "country": "USA",
        "runtime": 111,
        "genre": "Gangster Film, Crime Drama",
        "rating": 8
      },
      {
        "title": "Butch Cassidy and the Sundance Kid",
        "director": "George Roy Hill",
        "year": 1969,
        "country": "USA",
        "runtime": 112,
        "genre": "Western, Buddy Film",
        "rating": 8
      },
      {
        "title": "The Wild Bunch",
        "director": "Sam Peckinpah",
        "year": 1969,
        "country": "USA",
        "runtime": 144,
        "genre": "Revisionist Western, Outlaw (Gunfighter) Film",
        "rating": 8
      },
      {
        "title": "The Private Life of Sherlock Holmes",
        "director": "Billy Wilder",
        "year": 1970,
        "country": "USA",
        "runtime": 125,
        "genre": "Romantic Adventure, Comedy Thriller",
        "rating": 8
      },
      {
        "title": "Death in Venice",
        "director": "Luchino Visconti",
        "year": 1971,
        "country": "Italy",
        "runtime": 130,
        "genre": "Drama, Period Film",
        "rating": 8
      },
      {
        "title": "Duel",
        "director": "Steven Spielberg",
        "year": 1971,
        "country": "USA",
        "runtime": 90,
        "genre": "Thriller, Road Movie",
        "rating": 8
      },
      {
        "title": "Cries and Whispers",
        "director": "Ingmar Bergman",
        "year": 1972,
        "country": "Sweden",
        "runtime": 106,
        "genre": "Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "Deliverance",
        "director": "John Boorman",
        "year": 1972,
        "country": "USA",
        "runtime": 109,
        "genre": "Drama, Adventure Drama",
        "rating": 8
      },
      {
        "title": "The Discreet Charm of the Bourgeoisie",
        "director": "Luis Buñuel",
        "year": 1972,
        "country": "France",
        "runtime": 100,
        "genre": "Satire, Black Comedy",
        "rating": 8
      },
      {
        "title": "Badlands",
        "director": "Terrence Malick",
        "year": 1973,
        "country": "USA",
        "runtime": 95,
        "genre": "Crime Drama, Americana",
        "rating": 8
      },
      {
        "title": "Assault on Precinct 13",
        "director": "John Carpenter",
        "year": 1976,
        "country": "USA",
        "runtime": 90,
        "genre": "Action Thriller, Police Drama",
        "rating": 8
      },
      {
        "title": "Network",
        "director": "Sidney Lumet",
        "year": 1976,
        "country": "USA",
        "runtime": 121,
        "genre": "Comedy Drama, Media Satire",
        "rating": 8
      },
      {
        "title": "The Tenant",
        "director": "Roman Polanski",
        "year": 1976,
        "country": "France-USA",
        "runtime": 125,
        "genre": "Thriller, Black Comedy",
        "rating": 8
      },
      {
        "title": "Star Wars",
        "director": "George Lucas",
        "year": 1977,
        "country": "USA",
        "runtime": 121,
        "genre": "Science Fiction, Space Adventure",
        "rating": 8
      },
      {
        "title": "Dawn of the Dead",
        "director": "George A. Romero",
        "year": 1978,
        "country": "USA",
        "runtime": 126,
        "genre": "Horror, Creature Film",
        "rating": 8
      },
      {
        "title": "Days of Heaven",
        "director": "Terrence Malick",
        "year": 1978,
        "country": "USA",
        "runtime": 95,
        "genre": "Rural Drama, Romantic Drama",
        "rating": 8
      },
      {
        "title": "An American Werewolf in London",
        "director": "John Landis",
        "year": 1981,
        "country": "USA",
        "runtime": 97,
        "genre": "Horror Comedy, Creature Film",
        "rating": 8
      },
      {
        "title": "Excalibur",
        "director": "John Boorman",
        "year": 1981,
        "country": "UK",
        "runtime": 140,
        "genre": "Sword-and-Sorcery, Mythological Fantasy",
        "rating": 8
      },
      {
        "title": "Raiders of the Lost Ark",
        "director": "Steven Spielberg",
        "year": 1981,
        "country": "USA",
        "runtime": 115,
        "genre": "Adventure, Action",
        "rating": 8
      },
      {
        "title": "Amadeus",
        "director": "Milos Forman",
        "year": 1984,
        "country": "USA",
        "runtime": 158,
        "genre": "Musical Drama, Biography",
        "rating": 8
      },
      {
        "title": "Once Upon a Time in America",
        "director": "Sergio Leone",
        "year": 1984,
        "country": "Italy-USA",
        "runtime": 229,
        "genre": "Crime, Gangster Film",
        "rating": 8
      },
      {
        "title": "Brazil",
        "director": "Terry Gilliam",
        "year": 1985,
        "country": "UK",
        "runtime": 131,
        "genre": "Science Fiction, Satire",
        "rating": 8
      },
      {
        "title": "Blue Velvet",
        "director": "David Lynch",
        "year": 1986,
        "country": "USA",
        "runtime": 120,
        "genre": "Mystery, Crime Thriller",
        "rating": 8
      },
      {
        "title": "Full Metal Jacket",
        "director": "Stanley Kubrick",
        "year": 1987,
        "country": "USA",
        "runtime": 116,
        "genre": "Anti-War Film, War Drama",
        "rating": 8
      },
      {
        "title": "Raising Arizona",
        "director": "Joel Coen & Ethan Coen",
        "year": 1987,
        "country": "USA",
        "runtime": 92,
        "genre": "Crime Comedy, Domestic Comedy",
        "rating": 8
      },
      {
        "title": "Akira",
        "director": "Katsuhiro Otomo",
        "year": 1988,
        "country": "Japan",
        "runtime": 124,
        "genre": "Science Fiction, Anime",
        "rating": 8
      },
      {
        "title": "Die Hard",
        "director": "John McTiernan",
        "year": 1988,
        "country": "USA",
        "runtime": 131,
        "genre": "Action, Action Thriller",
        "rating": 8
      },
      {
        "title": "The Last Temptation of Christ",
        "director": "Martin Scorsese",
        "year": 1988,
        "country": "USA",
        "runtime": 164,
        "genre": "Religious Drama, Hagiography",
        "rating": 8
      },
      {
        "title": "They Live",
        "director": "John Carpenter",
        "year": 1988,
        "country": "USA",
        "runtime": 93,
        "genre": "Alien Film, Sci-Fi Action",
        "rating": 8
      },
      {
        "title": "The Killer",
        "director": "John Woo",
        "year": 1989,
        "country": "Hong Kong",
        "runtime": 110,
        "genre": "Crime, Action Thriller",
        "rating": 8
      },
      {
        "title": "My Own Private Idaho",
        "director": "Gus Van Sant",
        "year": 1991,
        "country": "USA",
        "runtime": 102,
        "genre": "Drama, Buddy Film",
        "rating": 8
      },
      {
        "title": "Raise the Red Lantern",
        "director": "Zhang Yimou",
        "year": 1991,
        "country": "Hong Kong",
        "runtime": 125,
        "genre": "Period Film, Marriage Drama",
        "rating": 8
      },
      {
        "title": "Terminator 2: Judgment Day",
        "director": "James Cameron",
        "year": 1991,
        "country": "USA",
        "runtime": 136,
        "genre": "Science Fiction, Sci-Fi Action",
        "rating": 8
      },
      {
        "title": "Unforgiven",
        "director": "Clint Eastwood",
        "year": 1992,
        "country": "USA",
        "runtime": 127,
        "genre": "Western, Outlaw (Gunfighter) Film",
        "rating": 8
      },
      {
        "title": "Carlito's Way",
        "director": "Brian De Palma",
        "year": 1993,
        "country": "USA",
        "runtime": 144,
        "genre": "Crime Drama, Gangster Film",
        "rating": 8
      },
      {
        "title": "Schindler's List",
        "director": "Steven Spielberg",
        "year": 1993,
        "country": "USA",
        "runtime": 195,
        "genre": "War Drama, Biography",
        "rating": 8
      },
      {
        "title": "Forrest Gump",
        "director": "Robert Zemeckis",
        "year": 1994,
        "country": "USA",
        "runtime": 142,
        "genre": "Comedy Drama, Americana",
        "rating": 8
      },
      {
        "title": "Three Colours: Red",
        "director": "Krzysztof Kieslowski",
        "year": 1994,
        "country": "France-Switzerland-Poland",
        "runtime": 99,
        "genre": "Psychological Drama, Romantic Drama",
        "rating": 8
      },
      {
        "title": "Heat",
        "director": "Michael Mann",
        "year": 1995,
        "country": "USA",
        "runtime": 174,
        "genre": "Crime, Thriller",
        "rating": 8
      },
      {
        "title": "Se7en",
        "director": "David Fincher",
        "year": 1995,
        "country": "USA",
        "runtime": 127,
        "genre": "Police Detective Film, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Usual Suspects",
        "director": "Bryan Singer",
        "year": 1995,
        "country": "USA",
        "runtime": 105,
        "genre": "Crime, Thriller",
        "rating": 8
      },
      {
        "title": "Funny Games",
        "director": "Michael Haneke",
        "year": 1997,
        "country": "Austria",
        "runtime": 108,
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 8
      },
      {
        "title": "The Thin Red Line",
        "director": "Terrence Malick",
        "year": 1998,
        "country": "USA",
        "runtime": 170,
        "genre": "War Drama, Ensemble Film",
        "rating": 8
      },
      {
        "title": "The Matrix",
        "director": "Lana Wachowski & Lilly Wachowski",
        "year": 1999,
        "country": "USA-Australia",
        "runtime": 136,
        "genre": "Science Fiction, Sci-Fi Action",
        "rating": 8
      },
      {
        "title": "Memento",
        "director": "Christopher Nolan",
        "year": 2000,
        "country": "USA",
        "runtime": 113,
        "genre": "Mystery, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Royal Tenenbaums",
        "director": "Wes Anderson",
        "year": 2001,
        "country": "USA",
        "runtime": 109,
        "genre": "Comedy Drama, Comedy of Manners",
        "rating": 8
      },
      {
        "title": "Saraband",
        "director": "Ingmar Bergman",
        "year": 2003,
        "country": "Sweden-Denmark-Norway-Italy-Finland-Germany-Austria",
        "runtime": 120,
        "genre": "Psychological Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "No Country for Old Men",
        "director": "Joel Coen & Ethan Coen",
        "year": 2007,
        "country": "USA",
        "runtime": 122,
        "genre": "Thriller, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "year": 2008,
        "country": "USA-UK",
        "runtime": 152,
        "genre": "Crime Drama, Comic-Book Superhero Film",
        "rating": 8
      },
      {
        "title": "Mad Max: Fury Road",
        "director": "George Miller",
        "year": 2015,
        "country": "Australia-USA",
        "runtime": 120,
        "genre": "Action Thriller, Road Movie",
        "rating": 8
      },
    ]
  },
  {
    "name": "Good",
    "items": [
      {
        "title": "The Circus",
        "director": "Charles Chaplin",
        "year": 1928,
        "country": "USA",
        "runtime": 72,
        "genre": "Comedy, Slapstick",
        "rating": 7
      },
      {
        "title": "Steamboat Bill, Jr.",
        "director": "Buster Keaton & Charles Reisner",
        "year": 1928,
        "country": "USA",
        "runtime": 71,
        "genre": "Adventure Comedy, Slapstick",
        "rating": 7
      },
      {
        "title": "Man with a Movie Camera",
        "director": "Dziga Vertov",
        "year": 1929,
        "country": "USSR",
        "runtime": 80,
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "All Quiet on the Western Front",
        "director": "Lewis Milestone",
        "year": 1930,
        "country": "USA",
        "runtime": 133,
        "genre": "War Drama, Anti-War Film"
      },
      {
        "title": "L'Âge d'or",
        "director": "Luis Buñuel",
        "year": 1930,
        "country": "France",
        "runtime": 63,
        "genre": "Avant-garde/Experimental, Surrealist Film",
        "rating": 7   
      },
      {
        "title": "Boudu Saved from Drowning",
        "director": "Jean Renoir",
        "year": 1932,
        "country": "France",
        "runtime": 87,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Design for Living",
        "director": "Ernst Lubitsch",
        "year": 1933,
        "country": "USA",
        "runtime": 90,
        "genre": "Romance, Sophisticated Comedy"
      },
      {
        "title": "Outskirts",
        "director": "Boris Barnet",
        "year": 1933,
        "country": "USSR",
        "runtime": 98,
        "genre": "War Drama, Period Film"
      },
      {
        "title": "The Testament of Dr. Mabuse",
        "director": "Fritz Lang",
        "year": 1933,
        "country": "Germany",
        "runtime": 120,
        "genre": "Master Criminal Film, Police Detective Film",
        "rating": 7
      },
      {
        "title": "La Grande illusion",
        "director": "Jean Renoir",
        "year": 1937,
        "country": "France",
        "runtime": 117,
        "genre": "Anti-War Film, War Drama"
      },
      {
        "title": "Snow White and the Seven Dwarfs",
        "director": "David Hand",
        "year": 1937,
        "country": "USA",
        "runtime": 83,
        "genre": "Children's Fantasy, Animated Musical"
      },
      {
        "title": "Only Angels Have Wings",
        "director": "Howard Hawks",
        "year": 1939,
        "country": "USA",
        "runtime": 121,
        "genre": "Adventure, Buddy Film"
      },
      {
        "title": "Young Mr. Lincoln",
        "director": "John Ford",
        "year": 1939,
        "country": "USA",
        "runtime": 100,
        "genre": "Historical Film, Biography",
        "rating": 7
      },
      {
        "title": "The Philadelphia Story",
        "director": "George Cukor",
        "year": 1940,
        "country": "USA",
        "runtime": 112,
        "genre": "Screwball Comedy, Romantic Comedy",
        "rating": 7
      },
      {
        "title": "The Great Dictator",
        "director": "Charles Chaplin",
        "year": 1940,
        "country": "USA",
        "runtime": 128,
        "genre": "Comedy, Anti-War Film",
        "rating": 7
      },
      {
        "title": "Dumbo",
        "director": "Ben Sharpsteen",
        "year": 1941,
        "country": "USA",
        "runtime": 64,
        "genre": "Animated Musical, Children's Fantasy",
        "rating": 7
      },
      {
        "title": "How Green Was My Valley",
        "director": "John Ford",
        "year": 1941,
        "country": "USA",
        "runtime": 118,
        "genre": "Family Drama, Rural Drama",
        "rating": 7
      },
      {
        "title": "The Magnificent Ambersons",
        "director": "Orson Welles",
        "year": 1942,
        "country": "USA",
        "runtime": 88,
        "genre": "Family Drama, Period Film",
        "rating": 7
      },
      {
        "title": "Ossessione",
        "director": "Luchino Visconti",
        "year": 1943,
        "country": "Italy",
        "runtime": 140,
        "genre": "Drama, Crime",
        "rating": 7
      },
      {
        "title": "Rome, Open City",
        "director": "Roberto Rossellini",
        "year": 1945,
        "country": "Italy",
        "runtime": 105,
        "genre": "War Drama, Resistance Film",
        "image": "romeopencity",
        "rating": 7
      },
      {
        "title": "Beauty and the Beast",
        "director": "Jean Cocteau",
        "year": 1946,
        "country": "France",
        "runtime": 95,
        "genre": "Fairy Tale, Romantic Fantasy",
        "rating": 7
      },
      {
        "title": "Black Narcissus",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1947,
        "country": "UK",
        "runtime": 99,
        "genre": "Melodrama, Religious Drama",
        "rating": 7
      },
      {
        "title": "The Ghost and Mrs. Muir",
        "director": "Joseph L. Mankiewicz",
        "year": 1947,
        "country": "USA",
        "runtime": 104,
        "genre": "Romance, Fantasy",
        "rating": 7
      },
      {
        "title": "The Lady from Shanghai",
        "director": "Orson Welles",
        "year": 1948,
        "country": "USA",
        "runtime": 87,
        "genre": "Film Noir, Romantic Mystery",
        "rating": 7
      },
      {
        "title": "The Asphalt Jungle",
        "director": "John Huston",
        "year": 1950,
        "country": "USA",
        "runtime": 112,
        "genre": "Crime Thriller, Film Noir",
        "rating": 7
      },
      {
        "title": "Wagon Master",
        "director": "John Ford",
        "year": 1950,
        "country": "USA",
        "runtime": 86,
        "genre": "Western, Traditional Western",
        "rating": 7
      },
      {
        "title": "A Place in the Sun",
        "director": "George Stevens",
        "year": 1951,
        "country": "USA",
        "runtime": 122,
        "genre": "Romantic Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Forbidden Games",
        "director": "René Clément",
        "year": 1952,
        "country": "France",
        "runtime": 87,
        "genre": "Childhood Drama, War Drama",
        "rating": 7
      },
      {
        "title": "The Quiet Man",
        "director": "John Ford",
        "year": 1952,
        "country": "USA",
        "runtime": 129,
        "genre": "Comedy Drama, Romance",
        "rating": 7
      },
      {
        "title": "Gentlemen Prefer Blondes",
        "director": "Howard Hawks",
        "year": 1953,
        "country": "US",
        "runtime": 91,
        "genre": "Musical Comedy, Romance",
        "rating": 7
      },
      {
        "title": "Sawdust and Tinsel",
        "director": "Ingmar Bergman",
        "year": 1953,
        "country": "Sweden",
        "runtime": 92,
        "genre": "Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Johnny Guitar",
        "director": "Nicholas Ray",
        "year": 1954,
        "country": "USA",
        "runtime": 110,
        "genre": "Western, Psychological Western",
        "rating": 7
      },
      {
        "title": "Senso",
        "director": "Luchino Visconti",
        "year": 1954,
        "country": "Italy",
        "runtime": 115,
        "genre": "Melodrama, Romantic Drama",
        "rating": 7
      },
      {
        "title": "The Criminal Life of Archibaldo de la Cruz",
        "director": "Luis Buñuel",
        "year": 1955,
        "country": "Mexico",
        "runtime": 91,
        "genre": "Crime Comedy, Satire",
        "rating": 7
      },
      {
        "title": "Rio Bravo",
        "director": "Howard Hawks",
        "year": 1959,
        "country": "USA",
        "runtime": 141,
        "genre": "Western, Buddy Film",
        "rating": 7
      },
      {
        "title": "Rocco and His Brothers",
        "director": "Luchino Visconti",
        "year": 1960,
        "country": "Italy-France",
        "runtime": 180,
        "genre": "Family Drama, Urban Drama",
        "rating": 7
      },
      {
        "title": "Splendor in the Grass",
        "director": "Elia Kazan",
        "year": 1961,
        "country": "USA",
        "runtime": 124,
        "genre": "Coming-of-Age, Romantic Drama",
        "rating": 7
      },
      {
        "title": "Jules et Jim",
        "director": "François Truffaut",
        "year": 1962,
        "country": "France",
        "runtime": 104,
        "genre": "Drama, Romance",
        "rating": 7
      },
      {
        "title": "The Leopard",
        "director": "Luchino Visconti",
        "year": 1963,
        "country": "Italy",
        "runtime": 205,
        "genre": "Epic, Family Drama",
        "rating": 7
      },
      {
        "title": "Red Desert",
        "director": "Michelangelo Antonioni",
        "year": 1964,
        "country": "Italy-France",
        "runtime": 118,
        "genre": "Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Repulsion",
        "director": "Roman Polanski",
        "year": 1965,
        "country": "UK",
        "runtime": 105,
        "genre": "Thriller, Psychological Thriller",
        "rating": 7
      },
      {
        "title": "Hour of the Wolf",
        "director": "Ingmar Bergman",
        "year": 1968,
        "country": "Sweden",
        "runtime": 88,
        "genre": "Gothic Film, Psychological Drama",
        "rating": 7
      },
      {
        "title": "O Bandido da Luz Vermelha",
        "director": "Rogério Sganzerla",
        "year": 1968,
        "country": "Brazil",
        "runtime": 92,
        "genre": "Biopic"
      },
      {
        "title": "Fat City",
        "director": "John Huston",
        "year": 1972,
        "country": "USA",
        "runtime": 100,
        "genre": "Drama, Sports Drama",
        "rating": 7
      },
      {
        "title": "Last Tango in Paris",
        "director": "Bernardo Bertolucci",
        "year": 1972,
        "country": "France-Italy",
        "runtime": 136,
        "genre": "Psychological Drama, Erotic Drama",
        "rating": 7
      },
      {
        "title": "Don't Look Now",
        "director": "Nicolas Roeg",
        "year": 1973,
        "country": "UK",
        "runtime": 110,
        "genre": "Psychological Thriller, Supernatural Thriller",
        "rating": 7
      },
      {
        "title": "The Exorcist",
        "director": "William Friedkin",
        "year": 1973,
        "country": "USA",
        "runtime": 122,
        "genre": "Horror, Religious Drama",
        "rating": 7
      },
      {
        "title": "Chinatown",
        "director": "Roman Polanski",
        "year": 1974,
        "country": "USA",
        "runtime": 131,
        "genre": "Mystery, Post-Noir (Modern Noir)",
        "rating": 7
      },
      {
        "title": "Dersu Uzala",
        "director": "Akira Kurosawa",
        "year": 1975,
        "country": "USSR-Japan",
        "runtime": 144,
        "genre": "Drama, Adventure Drama",
        "rating": 7
      },
      {
        "title": "Jaws",
        "director": "Steven Spielberg",
        "year": 1975,
        "country": "USA",
        "runtime": 124,
        "genre": "Thriller, Natural Horror",
        "rating": 7
      },
      {
        "title": "One Flew Over the Cuckoo's Nest",
        "director": "Milos Forman",
        "year": 1975,
        "country": "USA",
        "runtime": 133,
        "genre": "Comedy Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Picnic at Hanging Rock",
        "director": "Peter Weir",
        "year": 1975,
        "country": "Australia",
        "runtime": 110,
        "genre": "Mystery, Period Film",
        "rating": 7
      },
      {
        "title": "The Seasons",
        "director": "Artavazd Peleshian",
        "year": 1975,
        "country": "USSR",
        "runtime": 29,
        "genre": "Documentary"
      },
      {
        "title": "In the Realm of the Senses",
        "director": "Nagisa Oshima",
        "year": 1976,
        "country": "Japan-France",
        "runtime": 109,
        "genre": "Erotic Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Rocky",
        "director": "John G. Avildsen",
        "year": 1976,
        "country": "USA",
        "runtime": 119,
        "genre": "Drama, Sports Drama",
        "rating": 7
      },
      {
        "title": "Halloween",
        "director": "John Carpenter",
        "year": 1978,
        "country": "USA",
        "runtime": 93,
        "genre": "Horror, Slasher Film",
        "rating": 7
      },
      {
        "title": "Being There",
        "director": "Hal Ashby",
        "year": 1979,
        "country": "USA",
        "runtime": 130,
        "genre": "Comedy, Satire",
        "rating": 7
      },
      {
        "title": "The Elephant Man",
        "director": "David Lynch",
        "year": 1980,
        "country": "USA",
        "runtime": 125,
        "genre": "Biography, Medical Drama",
        "rating": 7
      },
      {
        "title": "The Right Stuff",
        "director": "Philip Kaufman",
        "year": 1983,
        "country": "USA",
        "runtime": 193,
        "genre": "Drama, Docudrama",
        "rating": 7
      },
      {
        "title": "Ghostbusters",
        "director": "Ivan Reitman",
        "year": 1984,
        "country": "USA",
        "runtime": 107,
        "genre": "Fantasy, Sci-Fi Comedy",
        "rating": 7
      },
      {
        "title": "This is Spinal Tap",
        "director": "Rob Reiner",
        "year": 1984,
        "country": "USA",
        "runtime": 82,
        "genre": "Mockumentary, Showbiz Comedy",
        "rating": 7
      },
      {
        "title": "The Breakfast Club",
        "director": "John Hughes",
        "year": 1985,
        "country": "USA",
        "runtime": 97,
        "genre": "Comedy Drama, Teen Movie",
        "rating": 7
      },
      {
        "title": "Come and See",
        "director": "Elem Klimov",
        "year": 1985,
        "country": "USSR",
        "runtime": 136,
        "genre": "War Drama, Coming-of-Age",
        "rating": 7
      },
      {
        "title": "A Better Tomorrow",
        "director": "John Woo",
        "year": 1986,
        "country": "Hong Kong",
        "runtime": 95,
        "genre": "Crime, Action Thriller",
        "rating": 7
      },
      {
        "title": "Down by Law",
        "director": "Jim Jarmusch",
        "year": 1986,
        "country": "USA",
        "runtime": 107,
        "genre": "Comedy, Buddy Film",
        "rating": 7
      },
      {
        "title": "Wings of Desire",
        "director": "Wim Wenders",
        "year": 1987,
        "country": "West Germany-France",
        "runtime": 130,
        "genre": "Fantasy, Romantic Fantasy",
        "rating": 7
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "year": 1988,
        "country": "Japan",
        "runtime": 93,
        "genre": "Anime, War Drama",
        "rating": 7
      },
      {
        "title": "Days of Being Wild",
        "director": "Wong Kar-wai",
        "year": 1990,
        "country": "Hong Kong",
        "runtime": 94,
        "genre": "Drama, Ensemble Film",
        "rating": 7
      },
      {
        "title": "Abraham's Valley",
        "director": "Manoel de Oliveira",
        "year": 1993,
        "country": "Portugal-France-Switzerland",
        "runtime": 187,
        "genre": "Psychological Drama"
      },
      {
        "title": "Léon",
        "director": "Luc Besson",
        "year": 1994,
        "country": "France",
        "runtime": 119,
        "genre": "Action Thriller, Coming-of-Age",
        "rating": 7
      },
      {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994,
        "country": "USA",
        "runtime": 142,
        "genre": "Drama, Prison Film",
        "rating": 7
      },
      {
        "title": "Vive L'Amour",
        "director": "Tsai Ming-liang",
        "year": 1994,
        "country": "Taiwan",
        "runtime": 118,
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "Dead Man",
        "director": "Jim Jarmusch",
        "year": 1995,
        "country": "USA-Germany",
        "runtime": 121,
        "genre": "Hybrid Western, Psychological Western",
        "rating": 7
      },
      {
        "title": "Underground",
        "director": "Emir Kusturica",
        "year": 1995,
        "country": "Yugoslavia-France-Germany-Bulgaria-Czech Republic-Hungary",
        "runtime": 192,
        "genre": "Comedy Drama, Political Satire",
        "rating": 7
      },
      {
        "title": "The River",
        "director": "Tsai Ming-liang",
        "year": 1997,
        "country": "Taiwan",
        "runtime": 115,
        "genre": "Drama, Family Drama",
        "image": "river1997.jpg"
      },
      {
        "title": "All About My Mother",
        "director": "Pedro Almodóvar",
        "year": 1999,
        "country": "Spain-France",
        "runtime": 101,
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 7
      },
      {
        "title": "American Beauty",
        "director": "Sam Mendes",
        "year": 1999,
        "country": "USA",
        "runtime": 121,
        "genre": "Comedy Drama, Family Drama",
        "rating": 7
      },
      {
        "title": "Dancer in the Dark",
        "director": "Lars von Trier",
        "year": 2000,
        "country": "Denmark-France-Sweden-Italy-Germany-Norway-Netherlands-Iceland-Finland-UK-USA",
        "runtime": 140,
        "genre": "Musical Drama, Melodrama",
        "rating": 7
      },
      {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "director": "Peter Jackson",
        "year": 2001,
        "country": "USA-New Zealand",
        "runtime": 178,
        "genre": "Epic, Fantasy Adventure",
        "rating": 7
      },
      {
        "title": "The Lord of the Rings: The Return of the King",
        "director": "Peter Jackson",
        "year": 2003,
        "country": "New Zealand-USA",
        "runtime": 201,
        "genre": "Epic, Fantasy",
        "rating": 7
      },
      {
        "title": "Memories of Murder",
        "director": "Bong Joon-ho",
        "year": 2003,
        "country": "South Korea",
        "runtime": 132,
        "genre": "Crime, Police Drama",
        "rating": 7
      },
      {
        "title": "Million Dollar Baby",
        "director": "Clint Eastwood",
        "year": 2004,
        "country": "USA",
        "runtime": 137,
        "genre": "Sports Drama, Melodrama",
        "rating": 7
      },
      {
        "title": "Brokeback Mountain",
        "director": "Ang Lee",
        "year": 2005,
        "country": "USA-Canada",
        "runtime": 134,
        "genre": "Romantic Drama, Modern Western",
        "rating": 7
      },
      {
        "title": "Zodiac",
        "director": "David Fincher",
        "year": 2007,
        "country": "USA",
        "runtime": 158,
        "genre": "Mystery, Police Detective Film",
        "rating": 7
      },
      {
        "title": "A Prophet",
        "director": "Jacques Audiard",
        "year": 2009,
        "country": "France-Italy",
        "runtime": 155,
        "genre": "Drama, Prison Film"
      },
      {
        "title": "Avatar",
        "director": "James Cameron",
        "year": 2009,
        "country": "USA-UK",
        "runtime": 161,
        "genre": "Science Fiction, Sci-Fi Action",
        "rating": 7
      },
      {
        "title": "The Social Network",
        "director": "David Fincher",
        "year": 2010,
        "country": "USA",
        "runtime": 120,
        "genre": "Drama, Biopic",
        "rating": 7
      },
      {
        "title": "Once Upon a Time in Anatolia",
        "director": "Nuri Bilge Ceylan",
        "year": 2011,
        "country": "Turkey-Bosnia and Herzergovina",
        "runtime": 150,
        "genre": "Crime Drama, Psychological Drama",
        "rating": 7
      },
    ]
  },
  {
    "name": "Average",
    "items": [
      {
        "title": "The Birth of a Nation",
        "director": "D.W. Griffith",
        "year": 1915,
        "country": "USA",
        "runtime": 187,
        "genre": "Epic, Historical Film",
        "rating": 4
      },
      {
        "title": "Intolerance",
        "director": "D.W. Griffith",
        "year": 1916,
        "country": "USA",
        "runtime": 178,
        "genre": "Historical Epic, Melodrama",
        "rating": 6
      },
      {
        "title": "Our Hospitality",
        "director": "Buster Keaton & John G. Blystone",
        "year": 1923,
        "country": "USA",
        "runtime": 74,
        "genre": "Comedy, Romantic Comedy",
        "rating": 6,
      },
      {
        "title": "October",
        "director": "Sergei Eisenstein & Grigori Aleksandrov",
        "year": 1928,
        "country": "USSR",
        "runtime": 103,
        "genre": "Historical Film, Docudrama",
        "rating": 5
      },
      {
        "title": "Frankenstein",
        "director": "James Whale",
        "year": 1931,
        "country": "USA",
        "runtime": 70,
        "genre": "Horror, Monster Film"
      },
      {
        "title": "King Kong",
        "director": "Merian C. Cooper & Ernest B. Schoedsack",
        "year": 1933,
        "country": "USA",
        "runtime": 103,
        "genre": "Adventure, Monster Film",
        "rating": 6
      },
      {
        "title": "The Rules of the Game",
        "director": "Jean Renoir",
        "year": 1939,
        "country": "France",
        "runtime": 113,
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 5
      },
      {
        "title": "Stagecoach",
        "director": "John Ford",
        "year": 1939,
        "country": "USA",
        "runtime": 96,
        "genre": "Western, Traditional Western",
        "rating": 4
      },
      {
        "title": "Fantasia",
        "director": "Various Directors",
        "year": 1940,
        "country": "USA",
        "runtime": 120,
        "genre": "Animated Musical, Children's Fantasy"
      },
      {
        "title": "The Grapes of Wrath",
        "director": "John Ford",
        "year": 1940,
        "country": "USA",
        "runtime": 129,
        "genre": "Rural Drama, Americana",
        "rating": 6
      },
      {
        "title": "The Shop Around the Corner",
        "director": "Ernst Lubitsch",
        "year": 1940,
        "country": "USA",
        "runtime": 97,
        "genre": "Comedy, Romance",
        "rating": 5
      },
      {
        "title": "Sullivan's Travels",
        "director": "Preston Sturges",
        "year": 1941,
        "country": "USA",
        "runtime": 91,
        "genre": "Comedy, Satire",
        "rating": 5
      },
      {
        "title": "Bambi",
        "director": "David Hand",
        "year": 1942,
        "country": "USA",
        "runtime": 69,
        "genre": "Children's Fantasy, Animated Musical"
      },
      {
        "title": "Cat People",
        "director": "Jacques Tourneur",
        "year": 1942,
        "country": "USA",
        "runtime": 73,
        "genre": "Horror, Supernatural Thriller",
        "rating": 5
      },
      {
        "title": "I Walked with a Zombie",
        "director": "Jacques Tourneur",
        "year": 1943,
        "country": "USA",
        "runtime": 69,
        "genre": "Horror, Supernatural Horror",
        "rating": 6
      },
      {
        "title": "Meet Me in St. Louis",
        "director": "Vincente Minnelli",
        "year": 1944,
        "country": "USA",
        "runtime": 113,
        "genre": "Musical, Family Drama",
        "rating": 3
      },
      {
        "title": "Gilda",
        "director": "Charles Vidor",
        "year": 1946,
        "country": "USA",
        "runtime": 110,
        "genre": "Film Noir, Romantic Mystery"
      },
      {
        "title": "My Darling Clementine",
        "director": "John Ford",
        "year": 1946,
        "country": "USA",
        "runtime": 97,
        "genre": "Western, Traditional Western",
        "rating": 6
      },
      {
        "title": "Odd Man Out",
        "director": "Carol Reed",
        "year": 1947,
        "country": "UK",
        "runtime": 115,
        "genre": "Drama, Crime",
        "rating": 4
      },
      {
        "title": "La Terra trema",
        "director": "Luchino Visconti",
        "year": 1948,
        "country": "Italy",
        "runtime": 160,
        "genre": "La Terra trema",
        "rating": 6
      },
    
      {
        "title": "Red River",
        "director": "Howard Hawks",
        "year": 1948,
        "country": "USA",
        "runtime": 133,
        "genre": "Western, Epic Western",
        "rating": 6
      },
      {
        "title": "They Live by Night",
        "director": "Nicholas Ray",
        "year": 1948,
        "country": "USA",
        "runtime": 95,
        "genre": "Crime Drama, Film Noir",
        "rating": 6
      },
    
      {
        "title": "The African Queen",
        "director": "John Huston",
        "year": 1951,
        "country": "USA",
        "runtime": 105,
        "genre": "Romance, Adventure",
        "rating": 6
      },
      {
        "title": "An American in Paris",
        "director": "Vincente Minnelli",
        "year": 1951,
        "country": "USA",
        "runtime": 115,
        "genre": "Musical, Romance",
        "rating": 6
      },
      {
        "title": "High Noon",
        "director": "Fred Zinnemann",
        "year": 1952,
        "country": "USA",
        "runtime": 84,
        "genre": "Western, Psychological Western",
        "rating": 5
      },
      {
        "title": "Roman Holiday",
        "director": "William Wyler",
        "year": 1953,
        "country": "USA",
        "runtime": 119,
        "genre": "Romance, Comedy",
        "rating": 6
      },
      {
        "title": "Shane",
        "director": "George Stevens",
        "year": 1953,
        "country": "USA",
        "runtime": 118,
        "genre": "Western, Psychological Western",
        "rating": 3
      },
      {
        "title": "A Star is Born",
        "director": "George Cukor",
        "year": 1954,
        "country": "USA",
        "runtime": 154,
        "genre": "Musical, Showbiz Drama"
      },
      {
        "title": "Voyage in Italy",
        "director": "Roberto Rossellini",
        "year": 1954,
        "country": "Italy",
        "runtime": 97,
        "genre": "Marriage Drama, Psychological Drama",
        "rating": 5
      },
      {
        "title": "East of Eden",
        "director": "Elia Kazan",
        "year": 1955,
        "country": "USA",
        "runtime": 115,
        "genre": "Family Drama, Rural Drama",
        "rating": 6
      },
      {
        "title": "Kiss Me Deadly",
        "director": "Robert Aldrich",
        "year": 1955,
        "country": "USA",
        "runtime": 106,
        "genre": "Thriller, Film Noir",
        "rating": 5
      },
      {
        "title": "The Night of the Hunter",
        "director": "Charles Laughton",
        "year": 1955,
        "country": "USA",
        "runtime": 93,
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 6
      },
      {
        "title": "Forbidden Planet",
        "director": "Fred M. Wilcox",
        "year": 1956,
        "country": "USA",
        "runtime": 98,
        "genre": "Science Fiction, Space Adventure",
        "rating": 5
      },
      {
        "title": "The Bridge on the River Kwai",
        "director": "David Lean",
        "year": 1957,
        "country": "UK",
        "runtime": 161,
        "genre": "War, Drama",
        "rating": 6
      },
      {
        "title": "Ben-Hur",
        "director": "William Wyler",
        "year": 1959,
        "country": "USA",
        "runtime": 212,
        "genre": "Religious Epic, Sword-and-Sandal",
        "rating": 6
      },
      {
        "title": "Shoot the Piano Player",
        "director": "François Truffaut",
        "year": 1960,
        "country": "France",
        "runtime": 92,
        "genre": "Crime Drama, Post-Noir (Modern Noir)",
        "rating": 6
      },
      {
        "title": "The Hustler",
        "director": "Robert Rossen",
        "year": 1961,
        "country": "USA",
        "runtime": 135,
        "genre": "Drama, Sports Drama",
        "rating": 6
      },
      {
        "title": "Knife in the Water",
        "director": "Roman Polanski",
        "year": 1962,
        "country": "Poland",
        "runtime": 94,
        "genre": "Psychological Drama, Marriage Drama",
        "rating": 6
      },
      {
        "title": "The Manchurian Candidate",
        "director": "John Frankenheimer",
        "year": 1962,
        "country": "USA",
        "runtime": 126,
        "genre": "Political Thriller, Paranoid Thriller"
      },
      {
        "title": "To Kill a Mockingbird",
        "director": "Robert Mulligan",
        "year": 1962,
        "country": "USA",
        "runtime": 129,
        "genre": "Courtroom Drama, Childhood Drama",
        "rating": 6
      },
    
      {
        "title": "The Great Escape",
        "director": "John Sturges",
        "year": 1963,
        "country": "USA",
        "runtime": 168,
        "genre": "Escape Film, War Adventure",
        "rating": 6
      },
      {
        "title": "The Nutty Professor",
        "director": "Jerry Lewis",
        "year": 1963,
        "country": "USA",
        "runtime": 107,
        "genre": "Comedy, Satire",
        "rating": 6
      },
      {
        "title": "Black God, White Devil",
        "director": "Glauber Rocha",
        "year": 1964,
        "country": "Brazil",
        "runtime": 110,
        "genre": "Road Movie, Crime Drama",
        "rating": 2
      },
      {
        "title": "Mary Poppins",
        "director": "Robert Stevenson",
        "year": 1964,
        "country": "USA",
        "runtime": 139,
        "genre": "Musical, Children's Fantasy",
        "rating": 6
      },
      {
        "title": "The Battle of Algiers",
        "director": "Gillo Pontecorvo",
        "year": 1966,
        "country": "Italy-Algeria",
        "runtime": 123,
        "genre": "Docudrama, Political Drama",
        "rating": 5
      },
      {
        "title": "Cool Hand Luke",
        "director": "Stuart Rosenberg",
        "year": 1967,
        "country": "USA",
        "runtime": 126,
        "genre": "Drama, Prison Film",
        "rating": 5
      },
      {
        "title": "Point Blank",
        "director": "John Boorman",
        "year": 1967,
        "country": "USA",
        "runtime": 92,
        "genre": "Crime, Thriller",
        "rating": 6
      },
      {
        "title": "The Producers",
        "director": "Mel Brooks",
        "year": 1968,
        "country": "USA",
        "runtime": 88,
        "genre": "Showbiz Comedy, Farce",
        "rating": 5
      },
      {
        "title": "Army of Shadows",
        "director": "Jean-Pierre Melville",
        "year": 1969,
        "country": "France-Italy",
        "runtime": 140,
        "genre": "Resistance Film, War Drama"
      },
      {
        "title": "Midnight Cowboy",
        "director": "John Schlesinger",
        "year": 1969,
        "country": "USA",
        "runtime": 113,
        "genre": "Urban Drama, Buddy Film",
        "rating": 6
      },
      {
        "title": "Satyricon",
        "director": "Federico Fellini",
        "year": 1969,
        "country": "Italy",
        "runtime": 129,
        "genre": "Drama, Period Film",
        "rating": 6
      },
      {
        "title": "The Conformist",
        "director": "Bernardo Bertolucci",
        "year": 1970,
        "country": "Italy-France-West Germany",
        "runtime": 107,
        "genre": "Psychological Drama, Political Drama"
      },
      {
        "title": "M*A*S*H",
        "director": "Robert Altman",
        "year": 1970,
        "country": "USA",
        "runtime": 116,
        "genre": "Military Comedy, Satire"
      },
      {
        "title": "Dirty Harry",
        "director": "Don Siegel",
        "year": 1971,
        "country": "USA",
        "runtime": 102,
        "genre": "Crime, Action Thriller"
      },
      {
        "title": "The French Connection",
        "director": "William Friedkin",
        "year": 1971,
        "country": "USA",
        "runtime": 104,
        "genre": "Crime, Action Thriller",
        "rating": 3
      },
    
      {
        "title": "Cabaret",
        "director": "Bob Fosse",
        "year": 1972,
        "country": "USA",
        "runtime": 128,
        "genre": "Musical, Drama",
        "rating": 6
      },
      {
        "title": "Fellini's Roma",
        "director": "Federico Fellini",
        "year": 1972,
        "country": "Italy",
        "runtime": 128,
        "genre": "Satire, Ensemble Film",
        "rating": 6
      },
      {
        "title": "American Graffiti",
        "director": "George Lucas",
        "year": 1973,
        "country": "USA",
        "runtime": 110,
        "genre": "Comedy Drama, Teen Movie",
        "rating": 6
      },
      {
        "title": "Enter the Dragon",
        "director": "Robert Clouse",
        "year": 1973,
        "country": "USA-Hong Kong",
        "runtime": 97,
        "genre": "Action, Martial Arts",
        "rating": 5
      },
      {
        "title": "Bring Me the Head of Alfredo Garcia",
        "director": "Sam Peckinpah",
        "year": 1974,
        "country": "USA",
        "runtime": 112,
        "genre": "Black Comedy, Action Thriller",
        "rating": 5
      },
      {
        "title": "The Texas Chainsaw Massacre",
        "director": "Tobe Hooper",
        "year": 1974,
        "country": "USA",
        "runtime": 83,
        "genre": "Horror, Slasher Film"
      },
      {
        "title": "Young Frankenstein",
        "director": "Mel Brooks",
        "year": 1974,
        "country": "USA",
        "runtime": 105,
        "genre": "Parody/Spoof, Horror Comedy",
        "rating": 5
      },
      {
        "title": "Dog Day Afternoon",
        "director": "Sidney Lumet",
        "year": 1975,
        "country": "USA",
        "runtime": 125,
        "genre": "Crime, Urban Drama",
        "rating": 6
      },
      {
        "title": "All the President's Men",
        "director": "Alan J. Pakula",
        "year": 1976,
        "country": "USA",
        "runtime": 138,
        "genre": "Political Drama, Paranoid Thriller"
      },
      {
        "title": "Fellini's Casanova",
        "director": "Federico Fellini",
        "year": 1976,
        "country": "Italy",
        "runtime": 158,
        "genre": "Comedy Drama, Period Film"
      },
      {
        "title": "The Outlaw Josey Wales",
        "director": "Clint Eastwood",
        "year": 1976,
        "country": "USA",
        "runtime": 135,
        "genre": "Western, Outlaw (Gunfighter) Film",
        "rating": 4
      },
      {
        "title": "Saturday Night Fever",
        "director": "John Badham",
        "year": 1977,
        "country": "USA",
        "runtime": 119,
        "genre": "Dance Film, Musical Drama",
        "rating": 5
      },
      {
        "title": "The Deer Hunter",
        "director": "Michael Cimino",
        "year": 1978,
        "country": "USA",
        "runtime": 183,
        "genre": "Ensemble Film, War Drama",
        "rating": 5
      },
      {
        "title": "Airplane!",
        "director": "Jim Abrahams, David Zucker & Jerry Zucker",
        "year": 1980,
        "country": "USA",
        "runtime": 86,
        "genre": "Anarchic Comedy, Parody/Spoof",
        "rating": 6
      },
      {
        "title": "The Blues Brothers",
        "director": "John Landis",
        "year": 1980,
        "country": "USA",
        "runtime": 130,
        "genre": "Action Comedy, Rock Musical",
        "rating": 5
      },
      {
        "title": "Das Boot",
        "director": "Wolfgang Petersen",
        "year": 1981,
        "country": "West Germany",
        "runtime": 149,
        "genre": "War Drama, Sea Adventure",
        "rating": 6
      },
      {
        "title": "Mad Max 2",
        "director": "George Miller",
        "year": 1981,
        "country": "Australia",
        "runtime": 94,
        "genre": "Action, Science Fiction",
        "rating": 6
      },
      {
        "title": "Tootsie",
        "director": "Sydney Pollack",
        "year": 1982,
        "country": "USA",
        "runtime": 116,
        "genre": "Showbiz Comedy, Romantic Comedy",
        "rating": 6
      },
      {
        "title": "Ferris Bueller's Day Off",
        "director": "John Hughes",
        "year": 1986,
        "country": "USA",
        "runtime": 103,
        "genre": "Comedy, Teen Movie",
        "rating": 6
      },
      {
        "title": "Stand by Me",
        "director": "Rob Reiner",
        "year": 1986,
        "country": "USA",
        "runtime": 87,
        "genre": "Drama, Coming-of-Age",
        "rating": 6
      },
      {
        "title": "The Last Emperor",
        "director": "Bernardo Bertolucci",
        "year": 1987,
        "country": "China-Italy-UK-France",
        "runtime": 160,
        "genre": "Historical Film, Biography"
      },
      {
        "title": "The Princess Bride",
        "director": "Rob Reiner",
        "year": 1987,
        "country": "USA",
        "runtime": 98,
        "genre": "Adventure Comedy, Fairy Tale",
        "rating": 5
      },
      {
        "title": "When Harry Met Sally...",
        "director": "Rob Reiner",
        "year": 1989,
        "country": "USA",
        "runtime": 95,
        "genre": "Romance, Comedy",
        "rating": 6
      },
      {
        "title": "Wild at Heart",
        "director": "David Lynch",
        "year": 1990,
        "country": "USA",
        "runtime": 127,
        "genre": "Road Movie, Black Comedy",
        "rating": 2
      },
      {
        "title": "The Bridges of Madison County",
        "director": "Clint Eastwood",
        "year": 1995,
        "country": "USA",
        "runtime": 135,
        "genre": "Romance, Drama",
        "rating": 5
      },
      {
        "title": "La Haine",
        "director": "Mathieu Kassovitz",
        "year": 1995,
        "country": "France",
        "runtime": 93,
        "genre": "Urban Drama, Message Movie"
      },
      {
        "title": "Toy Story",
        "director": "John Lasseter",
        "year": 1995,
        "country": "USA",
        "runtime": 80,
        "genre": "Fantasy Comedy, Animation"
      },
      {
        "title": "Boogie Nights",
        "director": "Paul Thomas Anderson",
        "year": 1997,
        "country": "USA",
        "runtime": 155,
        "genre": "Comedy Drama, Ensemble Film"
      },
      {
        "title": "L.A. Confidential",
        "director": "Curtis Hanson",
        "year": 1997,
        "country": "USA",
        "runtime": 137,
        "genre": "Crime, Mystery"
      },    
      {
        "title": "Titanic",
        "director": "James Cameron",
        "year": 1997,
        "country": "USA",
        "runtime": 194,
        "genre": "Romantic Epic, Disaster Film"
      },
      {
        "title": "Central Station",
        "director": "Walter Salles",
        "year": 1998,
        "country": "Brazil-France-Spain-Japan",
        "runtime": 110,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "Saving Private Ryan",
        "director": "Steven Spielberg",
        "year": 1998,
        "country": "USA",
        "runtime": 169,
        "genre": "War, Combat Film",
        "rating": 6
      },
      {
        "title": "Fight Club",
        "director": "David Fincher",
        "year": 1999,
        "country": "USA-Germany",
        "runtime": 139,
        "genre": "Satire, Psychological Drama"
      },
      {
        "title": "Magnolia",
        "director": "Paul Thomas Anderson",
        "year": 1999,
        "country": "USA",
        "runtime": 188,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "The Straight Story",
        "director": "David Lynch",
        "year": 1999,
        "country": "USA-France-UK",
        "runtime": 111,
        "genre": "Americana, Road Movie",
        "rating": 6
      },
      {
        "title": "Crouching Tiger, Hidden Dragon",
        "director": "Ang Lee",
        "year": 2000,
        "country": "Taiwan-Hong Kong-USA-China",
        "runtime": 120,
        "genre": "Martial Arts, Romantic Adventure"
      },
      {
        "title": "Moulin Rouge!",
        "director": "Baz Luhrmann",
        "year": 2001,
        "country": "USA-Australia",
        "runtime": 126,
        "genre": "Musical, Romance"
      },
      {
        "title": "Punch-Drunk Love",
        "director": "Paul Thomas Anderson",
        "year": 2002,
        "country": "USA",
        "runtime": 95,
        "genre": "Comedy Drama, Romantic Comedy"
      },
      {
        "title": "Lost in Translation",
        "director": "Sofia Coppola",
        "year": 2003,
        "country": "USA-Japan",
        "runtime": 102,
        "genre": "Comedy, Drama"
      },
      {
        "title": "The Lives of Others",
        "director": "Florian Henckel von Donnersmarck",
        "year": 2006,
        "country": "Germany",
        "runtime": 138,
        "genre": "Political Thriller, Period Film"
      },
      {
        "title": "Hunger",
        "director": "Steve McQueen",
        "year": 2008,
        "country": "UK-Ireland",
        "runtime": 96,
        "genre": "Prison Film, Political Drama"
      },
      {
        "title": "Let the Right One In",
        "director": "Tomas Alfredson",
        "year": 2008,
        "country": "Sweden-Norway",
        "runtime": 114,
        "genre": "Horror, Drama"
      },
      {
        "title": "WALL-E",
        "director": "Andrew Stanton",
        "year": 2008,
        "country": "USA",
        "runtime": 98,
        "genre": "Sci-Fi Adventure, Animation"
      },
    ]
  },
  {
    "name": "Watchlist",
    "items": [
      {
        "title": "Le Voyage dans la lune",
        "director": "Georges Méliès",
        "year": 1902,
        "country": "France",
        "runtime": 14,
        "genre": "Science Fiction, Space Adventure"
      },
      {
        "title": "Fantômas",
        "director": "Louis Feuillade",
        "year": 1913,
        "country": "France",
        "runtime": 334,
        "genre": "Master Criminal Film, Police Detective Film"
      },
      {
        "title": "Les Vampires",
        "director": "Louis Feuillade",
        "year": 1915,
        "country": "France",
        "runtime": 440,
        "genre": "Master Criminal Film, Crime Thriller"
      },
      {
        "title": "Broken Blossoms",
        "director": "D.W. Griffith",
        "year": 1919,
        "country": "USA",
        "runtime": 90,
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "The Phantom Carriage",
        "director": "Victor Sjöström",
        "year": 1920,
        "country": "Sweden",
        "runtime": 89,
        "genre": "Fantasy, Family Drama"
      },
      {
        "title": "Dr. Mabuse, the Gambler",
        "director": "Fritz Lang",
        "year": 1922,
        "country": "Germany",
        "runtime": 270,
        "genre": "Master Criminal Film, Police Detective Film"
      },
      {
        "title": "Foolish Wives",
        "director": "Erich von Stroheim",
        "year": 1922,
        "country": "USA",
        "runtime": 117,
        "genre": "Drama"
      },
      {
        "title": "Häxan",
        "director": "Benjamin Christensen",
        "year": 1922,
        "country": "Sweden",
        "runtime": 83,
        "genre": "Supernatural Horror, Documentary"
      },
      {
        "title": "Nanook of the North",
        "director": "Robert Flaherty",
        "year": 1922,
        "country": "USA",
        "runtime": 79,
        "genre": "Anthropology, Documentary"
      },
      {
        "title": "A Woman of Paris",
        "director": "Charles Chaplin",
        "year": 1923,
        "country": "USA",
        "runtime": 81,
        "genre": "Romance, Melodrama"
      },
      {
        "title": "Greed",
        "director": "Erich von Stroheim",
        "year": 1924,
        "country": "USA",
        "runtime": 239, // FIXME: 140m; 239m (reconstructed version)
        "genre": "Melodrama, Psychological Drama"
      },
      {
        "title": "The Adventures of Prince Achmed",
        "director": "Lotte Reiniger",
        "year": 1926,
        "country": "Germany",
        "runtime": 65,
        "genre": "Children's Fantasy, Animation"
      },
      {
        "title": "Berlin: Symphony of a Great City",
        "director": "Walter Ruttmann",
        "year": 1927,
        "country": "Germany",
        "runtime": 65,
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "Napoléon",
        "director": "Abel Gance",
        "year": 1927,
        "country": "France",
        "runtime": 235,
        "genre": "Historical Epic, Biography"
      },
      {
        "title": "Seventh Heaven",
        "director": "Frank Borzage",
        "year": 1927,
        "country": "USA",
        "runtime": 119,
        "genre": "Romance, Melodrama"
      },
      {
        "title": "The Cameraman",
        "director": "Buster Keaton & Edward Sedgwick",
        "year": 1928,
        "country": "USA",
        "runtime": 69,
        "genre": "Slapstick, Romantic Comedy"
      },
      {
        "title": "The Crowd",
        "director": "King Vidor",
        "year": 1928,
        "country": "USA",
        "runtime": 104,
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "The Wedding March",
        "director": "Erich von Stroheim",
        "year": 1928,
        "country": "USA",
        "runtime": 113,
        "genre": "Drama, Melodrama"
      },
      {
        "title": "The Wind",
        "director": "Victor Sjöström",
        "year": 1928,
        "country": "USA",
        "runtime": 88,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Pandora's Box",
        "director": "G.W. Pabst",
        "year": 1929,
        "country": "Germany",
        "runtime": 133,
        "genre": "Drama, Melodrama"
      },
      {
        "title": "Earth",
        "director": "Alexander Dovzhenko",
        "year": 1930,
        "country": "USSR",
        "runtime": 75,
        "genre": "Drama, Rural Drama"
      },
      {
        "title": "Morocco",
        "director": "Josef von Sternberg",
        "year": 1930,
        "country": "USA",
        "runtime": 92,
        "genre": "Romance, Melodrama"
      },
      {
        "title": "La Chienne",
        "director": "Jean Renoir",
        "year": 1931,
        "country": "France",
        "runtime": 95,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Le Million",
        "director": "René Clair",
        "year": 1931,
        "country": "France",
        "runtime": 85,
        "genre": "Musical Comedy, Chase Movie"
      },
      {
        "title": "Limite",
        "director": "Mario Peixoto",
        "year": 1931,
        "country": "Brazil",
        "runtime": 114,
        "genre": "Avant-garde/Experimental, Surrealist Film"
      },
      {
        "title": "Freaks",
        "director": "Tod Browning",
        "year": 1932,
        "country": "USA",
        "runtime": 64,
        "genre": "Melodrama, Psychological Thriller"
      },
      {
        "title": "La Nuit du carrefour",
        "director": "Jean Renoir",
        "year": 1932,
        "country": "France",
        "runtime": 70,
        "genre": "Police Detective Film, Crime Drama"
      },
      {
        "title": "Love Me Tonight",
        "director": "Rouben Mamoulian",
        "year": 1932,
        "country": "USA",
        "runtime": 96,
        "genre": "Comedy, Musical Romance"
      },
      {
        "title": "Vampyr",
        "director": "Carl Theodor Dreyer",
        "year": 1932,
        "country": "Germany-France",
        "runtime": 73,
        "genre": "Horror, Gothic Film"
      },
      {
        "title": "42nd Street",
        "director": "Lloyd Bacon",
        "year": 1933,
        "country": "USA",
        "runtime": 89,
        "genre": "Backstage Musical, Musical Comedy"
      },
      {
        "title": "Zero for Conduct",
        "director": "Jean Vigo",
        "year": 1933,
        "country": "France",
        "runtime": 41,
        "genre": "Coming-of-Age, Childhood Drama"
      },
      {
        "title": "It's a Gift",
        "director": "Norman Z. McLeod",
        "year": 1934,
        "country": "USA",
        "runtime": 73,
        "genre": "Comedy, Screwball Comedy"
      },
      {
        "title": "Man of Aran",
        "director": "Robert Flaherty",
        "year": 1934,
        "country": "UK",
        "runtime": 77,
        "genre": "Anthropology, Documentary"
      },
      {
        "title": "By the Bluest of Seas",
        "director": "Boris Barnet",
        "year": 1936,
        "country": "USSR",
        "runtime": 71,
        "genre": "Comedy, Romantic Comedy"
      },
      {
        "title": "The Crime of Monsieur Lange",
        "director": "Jean Renoir",
        "year": 1936,
        "country": "France",
        "runtime": 90,
        "genre": "Drama, Crime Drama"
      },
      {
        "title": "Partie de campagne",
        "director": "Jean Renoir",
        "year": 1936,
        "country": "France",
        "runtime": 40,
        "genre": "Comedy Drama, Romance"
      },
      {
        "title": "The Awful Truth",
        "director": "Leo McCarey",
        "year": 1937,
        "country": "USA",
        "runtime": 92,
        "genre": "Romantic Comedy, Screwball Comedy"
      },
      {
        "title": "Humanity and Paper Balloons",
        "director": "Sadao Yamanaka",
        "year": 1937,
        "country": "Japan",
        "runtime": 86,
        "genre": "Drama"
      },
      {
        "title": "Make Way for Tomorrow",
        "director": "Leo McCarey",
        "year": 1937,
        "country": "USA",
        "runtime": 92,
        "genre": "Family Drama, Marriage Drama"
      },
      {
        "title": "Pépé le Moko",
        "director": "Julien Duvivier",
        "year": 1937,
        "country": "France",
        "runtime": 94,
        "genre": "Romantic Drama, Gangster Film"
      },
      {
        "title": "Street Angel",
        "director": "Yuan Muzhi",
        "year": 1937,
        "country": "China",
        "runtime": 91,
        "genre": "Drama, Comedy"
      },
      {
        "title": "La Bête humaine",
        "director": "Jean Renoir",
        "year": 1938,
        "country": "France",
        "runtime": 99,
        "genre": "Crime Drama, Psychological Drama"
      },
      {
        "title": "Olympia",
        "director": "Leni Riefenstahl",
        "year": 1938,
        "country": "Germany",
        "runtime": 220,
        "genre": "Sports, Documentary"
      },
      {
        "title": "Port of Shadows",
        "director": "Marcel Carné",
        "year": 1938,
        "country": "France",
        "runtime": 91,
        "genre": "Romantic Drama, Crime Drama"
      },
      {
        "title": "Le Jour se lève",
        "director": "Marcel Carné",
        "year": 1939,
        "country": "France",
        "runtime": 93,
        "genre": "Crime Drama, Romantic Drama"
      },
      {
        "title": "The Thief of Bagdad",
        "director": "Michael Powell, Ludwig Berger & Tim Whelan",
        "year": 1940,
        "country": "UK",
        "runtime": 106,
        "genre": "Fantasy, Costume Adventure"
      },
      {
        "title": "Hellzapoppin'",
        "director": "H.C. Potter",
        "year": 1941,
        "country": "USA",
        "runtime": 84,
        "genre": "Anarchic Comedy, Backstage Musical"
      },
      {
        "title": "Listen to Britain",
        "director": "Humphrey Jennings",
        "year": 1942,
        "country": "UK",
        "runtime": 20,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Fires Were Started",
        "director": "Humphrey Jennings",
        "year": 1943,
        "country": "UK",
        "runtime": 80,
        "genre": "Military & War, Documentary"
      },
      {
        "title": "The Life and Death of Colonel Blimp",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1943,
        "country": "UK",
        "runtime": 163,
        "genre": "Drama, Period Film"
      },
      {
        "title": "Meshes of the Afternoon",
        "director": "Maya Deren & Alexander Hammid",
        "year": 1943,
        "country": "USA",
        "runtime": 15,
        "genre": "Avant-garde-Experimental, Surrealist Film"
      },
      {
        "title": "A Canterbury Tale",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1944,
        "country": "UK",
        "runtime": 124,
        "genre": "Comedy Drama, Road Movie"
      },
      {
        "title": "I Know Where I'm Going!",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1945,
        "country": "UK",
        "runtime": 91,
        "genre": "Drama, Romance"
      },
      {
        "title": "They Were Expendable",
        "director": "John Ford",
        "year": 1945,
        "country": "USA",
        "runtime": 135,
        "genre": "War Drama, Combat Film"
      },
      {
        "title": "A Matter of Life and Death",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1946,
        "country": "UK",
        "runtime": 104,
        "genre": "Romantic Fantasy, Heaven-Can-Wait Fantasy"
      },
      {
        "title": "Duel in the Sun",
        "director": "King Vidor",
        "year": 1946,
        "country": "USA",
        "runtime": 130,
        "genre": "Western, Melodrama"
      },
      {
        "title": "Paisan",
        "director": "Roberto Rossellini",
        "year": 1946,
        "country": "Italy",
        "runtime": 120,
        "genre": "Drama, War Drama"
      },
      {
        "title": "Germany, Year Zero",
        "director": "Roberto Rossellini",
        "year": 1948,
        "country": "Italy-West Germany",
        "runtime": 74,
        "genre": "War Drama, Childhood Drama"
      },
      {
        "title": "Spring in a Small Town",
        "director": "Fei Mu",
        "year": 1948,
        "country": "China",
        "runtime": 85,
        "genre": "Drama, Romantic Drama"
      },
      {
        "title": "Le Sang des bêtes",
        "director": "Georges Franju",
        "year": 1949,
        "country": "France",
        "runtime": 20,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The Reckless Moment",
        "director": "Max Ophüls",
        "year": 1949,
        "country": "USA",
        "runtime": 82,
        "genre": "Crime Drama, Film Noir"
      },
      {
        "title": "The Flowers of St. Francis",
        "director": "Roberto Rossellini",
        "year": 1950,
        "country": "Italy",
        "runtime": 83,
        "genre": "Religious Drama, Biography"
      },
      {
        "title": "Stromboli",
        "director": "Roberto Rossellini",
        "year": 1950,
        "country": "Italy",
        "runtime": 107,
        "genre": "Melodrama, Marriage Drama"
      },
      {
        "title": "Un Chant d'amour",
        "director": "Jean Genet",
        "year": 1950,
        "country": "France",
        "runtime": 26,
        "genre": "Avant-garde-Experimental, Surrealist Film"
      },
      {
        "title": "Miracle in Milan",
        "director": "Vittorio De Sica",
        "year": 1951,
        "country": "Italy",
        "runtime": 95,
        "genre": "Fantasy Comedy, Satire"
      },
      {
        "title": "The Thing from Another World",
        "director": "Christian Nyby & Howard Hawks",
        "year": 1951,
        "country": "USA",
        "runtime": 87,
        "genre": "Science Fiction, Monster Film"
      },
      {
        "title": "Europa '51",
        "director": "Roberto Rossellini",
        "year": 1952,
        "country": "Italy",
        "runtime": 113,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "The Golden Coach",
        "director": "Jean Renoir",
        "year": 1952,
        "country": "Italy-France",
        "runtime": 100,
        "genre": "Costume Adventure, Romantic Adventure"
      },
      {
        "title": "Le Plaisir",
        "director": "Max Ophüls",
        "year": 1952,
        "country": "France",
        "runtime": 97,
        "genre": "Romance, Drama"
      },
      {
        "title": "The Life of Oharu",
        "director": "Kenji Mizoguchi",
        "year": 1952,
        "country": "Japan",
        "runtime": 146,
        "genre": "Drama, Period Film"
      },
      {
        "title": "The Lusty Men",
        "director": "Nicholas Ray",
        "year": 1952,
        "country": "USA",
        "runtime": 113,
        "genre": "Drama, Modern Western"
      },
      {
        "title": "Anatahan",
        "director": "Josef von Sternberg",
        "year": 1953,
        "country": "Japan",
        "runtime": 90,
        "genre": "Drama, Adventure"
      },
      {
        "title": "Mr. Hulot's Holiday",
        "director": "Jacques Tati",
        "year": 1953,
        "country": "France",
        "runtime": 86,
        "genre": "Comedy, Slapstick"
      },
      {
        "title": "The Sun Shines Bright",
        "director": "John Ford",
        "year": 1953,
        "country": "USA",
        "runtime": 90,
        "genre": "Drama, Americana"
      },
      {
        "title": "Chikamatsu monogatari",
        "director": "Kenji Mizoguchi",
        "year": 1954,
        "country": "Japan",
        "runtime": 100,
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "Floating Clouds",
        "director": "Mikio Naruse",
        "year": 1955,
        "country": "Japan",
        "runtime": 123,
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "Les Maîtres fous",
        "director": "Jean Rouch",
        "year": 1955,
        "country": "France",
        "runtime": 36,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Moonfleet",
        "director": "Fritz Lang",
        "year": 1955,
        "country": "USA",
        "runtime": 89,
        "genre": "Costume Adventure, Swashbuckler"
      },
      {
        "title": "Pather Panchali",
        "director": "Satyajit Ray",
        "year": 1955,
        "country": "India",
        "runtime": 112,
        "genre": "Rural Drama, Family Drama"
      },
      {
        "title": "The Red Balloon",
        "director": "Albert Lamorisse",
        "year": 1956,
        "country": "France",
        "runtime": 34,
        "genre": "Children's/Family, Family-Oriented Adventure"
      },
      {
        "title": "Street of Shame",
        "director": "Kenji Mizoguchi",
        "year": 1956,
        "country": "Japan",
        "runtime": 96,
        "genre": "Melodrama, Urban Drama"
      },
      {
        "title": "Il Grido",
        "director": "Michelangelo Antonioni",
        "year": 1957,
        "country": "Italy",
        "runtime": 111,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "The Incredible Shrinking Man",
        "director": "Jack Arnold",
        "year": 1957,
        "country": "USA",
        "runtime": 81,
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "Mother India",
        "director": "Mehboob Khan",
        "year": 1957,
        "country": "India",
        "runtime": 172,
        "genre": "Epic, Melodrama"
      },
      {
        "title": "Pyaasa",
        "director": "Guru Dutt",
        "year": 1957,
        "country": "India",
        "runtime": 146,
        "genre": "Drama, Romance"
      },
      {
        "title": "Ashes and Diamonds",
        "director": "Andrzej Wajda",
        "year": 1958,
        "country": "Poland",
        "runtime": 96,
        "genre": "Political Drama, War Drama"
      },
      {
        "title": "Big Deal on Madonna Street",
        "director": "Mario Monicelli",
        "year": 1958,
        "country": "Italy",
        "runtime": 91,
        "genre": "Crime Comedy, Caper"
      },
      {
        "title": "Dracula",
        "director": "Terence Fisher",
        "year": 1958,
        "country": "UK",
        "runtime": 82,
        "genre": "Costume Horror, Gothic Film"
      },
      {
        "title": "Man of the West",
        "director": "Anthony Mann",
        "year": 1958,
        "country": "USA",
        "runtime": 100,
        "genre": "Western, Psychological Western"
      },
      {
        "title": "Moi, un Noir",
        "director": "Jean Rouch",
        "year": 1958,
        "country": "France",
        "runtime": 70,
        "genre": "Culture & Society, Anthropology"
      },
      {
        "title": "Mon oncle",
        "director": "Jacques Tati",
        "year": 1958,
        "country": "France",
        "runtime": 126,
        "genre": "Satire, Domestic Comedy"
      },
      {
        "title": "The Music Room",
        "director": "Satyajit Ray",
        "year": 1958,
        "country": "India",
        "runtime": 95,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Nazarín",
        "director": "Luis Buñuel",
        "year": 1958,
        "country": "Mexico",
        "runtime": 94,
        "genre": "Religious Drama, Satire"
      },
      {
        "title": "Some Came Running",
        "director": "Vincente Minnelli",
        "year": 1958,
        "country": "USA",
        "runtime": 136,
        "genre": "Drama, Americana"
      },
      {
        "title": "The Tiger of Eschnapur",
        "director": "Fritz Lang",
        "year": 1958,
        "country": "West Germany-France-Italy",
        "runtime": 101,
        "genre": "Adventure Drama, Romantic Drama"
      },
      {
        "title": "Black Orpheus",
        "director": "Marcel Camus",
        "year": 1959,
        "country": "Brazil-France",
        "runtime": 103,
        "genre": "Fantasy, Romance"
      },
      {
        "title": "Floating Weeds",
        "director": "Yasujiro Ozu",
        "year": 1959,
        "country": "Japan",
        "runtime": 119,
        "genre": "Drama, Reunion Film"
      },
      {
        "title": "Kaagaz Ke Phool",
        "director": "Guru Dutt",
        "year": 1959,
        "country": "India",
        "runtime": 148,
        "genre": "Romance, Drama"
      },
      {
        "title": "Shadows",
        "director": "John Cassavetes",
        "year": 1959,
        "country": "USA",
        "runtime": 87,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "The World of Apu",
        "director": "Satyajit Ray",
        "year": 1959,
        "country": "India",
        "runtime": 103,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "The Cloud-Capped Star",
        "director": "Ritwik Ghatak",
        "year": 1960,
        "country": "India",
        "runtime": 126,
        "genre": "Family Drama, Rural Drama"
      },
      {
        "title": "The Naked Island",
        "director": "Kaneto Shindo",
        "year": 1960,
        "country": "Japan",
        "runtime": 94,
        "genre": "Rural Drama"
      },
      {
        "title": "Saturday Night and Sunday Morning",
        "director": "Karel Reisz",
        "year": 1960,
        "country": "UK",
        "runtime": 89,
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "Strangers When We Meet",
        "director": "Richard Quine",
        "year": 1960,
        "country": "USA",
        "runtime": 117,
        "genre": "Drama, Melodrama"
      },
      {
        "title": "Accattone",
        "director": "Pier Paolo Pasolini",
        "year": 1961,
        "country": "Italy",
        "runtime": 120,
        "genre": "Urban Drama, Psychological Drama"
      },
      {
        "title": "Chronicle of a Summer",
        "director": "Jean Rouch & Edgar Morin",
        "year": 1961,
        "country": "France",
        "runtime": 85,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The End of Summer",
        "director": "Yasujiro Ozu",
        "year": 1961,
        "country": "Japan",
        "runtime": 103,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Il Posto",
        "director": "Ermanno Olmi",
        "year": 1961,
        "country": "Italy",
        "runtime": 93,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "The Ladies Man",
        "director": "Jerry Lewis",
        "year": 1961,
        "country": "USA",
        "runtime": 95,
        "genre": "Comedy, Slapstick"
      },
      {
        "title": "Lola",
        "director": "Jacques Demy",
        "year": 1961,
        "country": "France",
        "runtime": 90,
        "genre": "Drama, Romance"
      },
      {
        "title": "Plácido",
        "director": "Luis García Berlanga",
        "year": 1961,
        "country": "Spain",
        "runtime": 85,
        "genre": "Comedy"
      },
      {
        "title": "Carnival of Souls",
        "director": "Herk Harvey",
        "year": 1962,
        "country": "USA",
        "runtime": 80,
        "genre": "Horror, Gothic Film"
      },
      {
        "title": "The Loneliness of the Long Distance Runner",
        "director": "Tony Richardson",
        "year": 1962,
        "country": "UK",
        "runtime": 103,
        "genre": "Psychological Drama, Sports Drama"
      },
      {
        "title": "Ride the High Country",
        "director": "Sam Peckinpah",
        "year": 1962,
        "country": "USA",
        "runtime": 94,
        "genre": "Western, Revisionist Western"
      },
      {
        "title": "Salvatore Giuliano",
        "director": "Francesco Rosi",
        "year": 1962,
        "country": "Italy",
        "runtime": 125,
        "genre": "Crime, Political Drama"
      },
      {
        "title": "The Trial",
        "director": "Orson Welles",
        "year": 1962,
        "country": "France-West Germany-Italy",
        "runtime": 118,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "America, America",
        "director": "Elia Kazan",
        "year": 1963,
        "country": "USA",
        "runtime": 168,
        "genre": "Drama, Americana"
      },
      {
        "title": "Barren Lives",
        "director": "Nelson Pereira dos Santos",
        "year": 1963,
        "country": "Brazil",
        "runtime": 103,
        "genre": "Drama, Rural Drama"
      },
      {
        "title": "El Verdugo",
        "director": "Luis García Berlanga",
        "year": 1963,
        "country": "Spain-Italy",
        "runtime": 90,
        "genre": "Comedy Drama, Black Comedy"
      },
      {
        "title": "Flaming Creatures",
        "director": "Jack Smith",
        "year": 1963,
        "country": "USA",
        "runtime": 43,
        "genre": "Avant-garde-Experimental, Horror"
      },
      {
        "title": "The House is Black",
        "director": "Forugh Farrokhzad",
        "year": 1963,
        "country": "Iran",
        "runtime": 20,
        "genre": "Illnesses & Disabilities, Documentary"
      },
      {
        "title": "Muriel",
        "director": "Alain Resnais",
        "year": 1963,
        "country": "France-Italy",
        "runtime": 115,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Scorpio Rising",
        "director": "Kenneth Anger",
        "year": 1963,
        "country": "USA",
        "runtime": 29,
        "genre": "Avant-garde-Experimental, Surrealist Film"
      },
      {
        "title": "The Servant",
        "director": "Joseph Losey",
        "year": 1963,
        "country": "UK",
        "runtime": 115,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "A Hard Day's Night",
        "director": "Richard Lester",
        "year": 1964,
        "country": "UK",
        "runtime": 85,
        "genre": "Rock Musical, Anarchic Comedy"
      },
      {
        "title": "Charulata",
        "director": "Satyajit Ray",
        "year": 1964,
        "country": "India",
        "runtime": 117,
        "genre": "Drama, Romantic Drama"
      },
      {
        "title": "Dog Star Man",
        "director": "Stan Brakhage",
        "year": 1964,
        "country": "USA",
        "runtime": 75,
        "genre": "Avant-garde-Experimental, Abstract Film"
      },
      {
        "title": "Gertrud",
        "director": "Carl Theodor Dreyer",
        "year": 1964,
        "country": "Denmark",
        "runtime": 116,
        "genre": "Psychological Drama, Marriage Drama"
      },
      {
        "title": "The Gospel According to St. Matthew",
        "director": "Pier Paolo Pasolini",
        "year": 1964,
        "country": "Italy-France",
        "runtime": 135,
        "genre": "Hagiography, Religious Drama"
      },
      {
        "title": "I Am Cuba",
        "director": "Mikhail Kalatozov",
        "year": 1964,
        "country": "USSR-Cuba",
        "runtime": 141,
        "genre": "Drama, Avant-garde-Experimental"
      },
      {
        "title": "Kwaidan",
        "director": "Masaki Kobayashi",
        "year": 1964,
        "country": "Japan",
        "runtime": 183,
        "genre": "Fantasy, Costume Horror"
      },
      {
        "title": "Shadows of Our Forgotten Ancestors",
        "director": "Sergei Parajanov",
        "year": 1964,
        "country": "USSR",
        "runtime": 97,
        "genre": "Drama, Period Film"
      },
      {
        "title": "The Umbrellas of Cherbourg",
        "director": "Jacques Demy",
        "year": 1964,
        "country": "France-Germany",
        "runtime": 91,
        "genre": "Musical, Romance"
      },
      {
        "title": "Chimes at Midnight",
        "director": "Orson Welles",
        "year": 1965,
        "country": "France-Spain-Switzerland",
        "runtime": 115,
        "genre": "Drama, Tragi-comedy"
      },
      {
        "title": "Faster, Pussycat! Kill! Kill!",
        "director": "Russ Meyer",
        "year": 1965,
        "country": "USA",
        "runtime": 83,
        "genre": "Sexploitation, Action Comedy"
      },
      {
        "title": "Juliet of the Spirits",
        "director": "Federico Fellini",
        "year": 1965,
        "country": "Italy",
        "runtime": 148,
        "genre": "Comedy Drama, Marriage Drama"
      },
      {
        "title": "Le Bonheur",
        "director": "Agnès Varda",
        "year": 1965,
        "country": "France",
        "runtime": 79,
        "genre": "Romance, Marriage Drama"
      },
      {
        "title": "Loves of a Blonde",
        "director": "Milos Forman",
        "year": 1965,
        "country": "Czechoslovakia",
        "runtime": 88,
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "Red Beard",
        "director": "Akira Kurosawa",
        "year": 1965,
        "country": "Japan",
        "runtime": 185,
        "genre": "Period Film, Medical Drama"
      },
      {
        "title": "Subarnarekha",
        "director": "Ritwik Ghatak",
        "year": 1965,
        "country": "India",
        "runtime": 143,
        "genre": "Drama"
      },
      {
        "title": "Black Girl",
        "director": "Ousmane Sembene",
        "year": 1966,
        "country": "Senegal-France",
        "runtime": 65,
        "genre": "Drama, Social Problem Film"
      },
      {
        "title": "Chelsea Girls",
        "director": "Andy Warhol",
        "year": 1966,
        "country": "USA",
        "runtime": 210,
        "genre": "Avant-garde-Experimental, Trash Film"
      },
      {
        "title": "Closely Watched Trains",
        "director": "Jirí Menzel",
        "year": 1966,
        "country": "Czechoslovakia",
        "runtime": 89,
        "genre": "War, Comedy Drama"
      },
      {
        "title": "Cul-de-sac",
        "director": "Roman Polanski",
        "year": 1966,
        "country": "UK",
        "runtime": 111,
        "genre": "Comedy Thriller, Black Comedy"
      },
      {
        "title": "The Rise to Power of Louis XIV",
        "director": "Roberto Rossellini",
        "year": 1966,
        "country": "France",
        "runtime": 100,
        "genre": "Historical Film, Period Film"
      },
      {
        "title": "The Round-Up",
        "director": "Miklós Jancsó",
        "year": 1966,
        "country": "Hungary",
        "runtime": 94,
        "genre": "Political Drama, Period Film"
      },
      {
        "title": "Second Breath",
        "director": "Jean-Pierre Melville",
        "year": 1966,
        "country": "France",
        "runtime": 144,
        "genre": "Crime Thriller, Caper"
      },
      {
        "title": "The Hawks and the Sparrows",
        "director": "Pier Paolo Pasolini",
        "year": 1966,
        "country": "Italy",
        "runtime": 91,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Masculin Feminin",
        "director": "Jean-Luc Godard",
        "year": 1966,
        "country": "France-Sweden",
        "runtime": 103,
        "genre": "Urban Drama, Ensemble Film"
      },
      {
        "title": "Seven Women",
        "director": "John Ford",
        "year": 1966,
        "country": "USA",
        "runtime": 87,
        "genre": "Drama, Period Film"
      },
      {
        "title": "Branded to Kill",
        "director": "Seijun Suzuki",
        "year": 1967,
        "country": "Japan",
        "runtime": 91,
        "genre": "Gangster Film, Crime Thriller"
      },
      {
        "title": "Don't Look Back",
        "director": "D.A. Pennebaker",
        "year": 1967,
        "country": "USA",
        "runtime": 96,
        "genre": "Music, Documentary"
      },
      {
        "title": "The Firemen's Ball",
        "director": "Milos Forman",
        "year": 1967,
        "country": "Czechoslovakia",
        "runtime": 73,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Marketa Lazarová",
        "director": "Frantisek Vlácil",
        "year": 1967,
        "country": "Czechoslovakia",
        "runtime": 162,
        "genre": "Epic, Historical Film"
      },
      {
        "title": "Portrait of Jason",
        "director": "Shirley Clarke",
        "year": 1967,
        "country": "USA",
        "runtime": 105,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Terra em Transe",
        "director": "Glauber Rocha",
        "year": 1967,
        "country": "Brazil",
        "runtime": 106,
        "genre": "Drama, Political Drama"
      },
      {
        "title": "Titicut Follies",
        "director": "Frederick Wiseman",
        "year": 1967,
        "country": "USA",
        "runtime": 87,
        "genre": "Social Issues, Documentary"
      },
      {
        "title": "Wavelength",
        "director": "Michael Snow",
        "year": 1967,
        "country": "Canada-USA",
        "runtime": 45,
        "genre": "Abstract Film"
      },
      {
        "title": "The Young Girls of Rochefort",
        "director": "Jacques Demy",
        "year": 1967,
        "country": "France",
        "runtime": 124,
        "genre": "Romance, Musical"
      },
      {
        "title": "The Chronicle of Anna Magdalena Bach",
        "director": "Jean-Marie Straub",
        "year": 1968,
        "country": "West Germany-Italy",
        "runtime": 94,
        "genre": "Drama, Biopic"
      },
      {
        "title": "Faces",
        "director": "John Cassavetes",
        "year": 1968,
        "country": "USA",
        "runtime": 130,
        "genre": "Marriage Drama, Psychological Drama"
      },
      {
        "title": "The Hour of the Furnaces",
        "director": "Fernando E. Solanas & Octavio Getino",
        "year": 1968,
        "country": "Argentina",
        "runtime": 260,
        "genre": "Politics & Government, Documentary"
      },
      {
        "title": "If....",
        "director": "Lindsay Anderson",
        "year": 1968,
        "country": "UK",
        "runtime": 111,
        "genre": "Drama, Satire"
      },
      {
        "title": "L'Amour fou",
        "director": "Jacques Rivette",
        "year": 1968,
        "country": "France",
        "runtime": 252,
        "genre": "Showbiz Drama, Psychological Drama"
      },
      {
        "title": "L'Enfance nue",
        "director": "Maurice Pialat",
        "year": 1968,
        "country": "France",
        "runtime": 80,
        "genre": "Childhood Drama, Coming-of-Age"
      },
      {
        "title": "Memories of Underdevelopment",
        "director": "Tomás Gutiérrez Alea",
        "year": 1968,
        "country": "Cuba",
        "runtime": 97,
        "genre": "Psychological Drama, Political Drama"
      },
      {
        "title": "The Party",
        "director": "Blake Edwards",
        "year": 1968,
        "country": "USA",
        "runtime": 99,
        "genre": "Comedy, Slapstick"
      },
      {
        "title": "Teorema",
        "director": "Pier Paolo Pasolini",
        "year": 1968,
        "country": "Italy",
        "runtime": 98,
        "genre": "Drama, Religious Drama"
      },
      {
        "title": "The Colour of Pomegranates",
        "director": "Sergei Parajanov",
        "year": 1969,
        "country": "USSR",
        "runtime": 73,
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "The Damned",
        "director": "Luchino Visconti",
        "year": 1969,
        "country": "Italy-West Germany",
        "runtime": 155,
        "genre": "Political Drama, Family Drama"
      },
      {
        "title": "Diaries, Notes and Sketches",
        "director": "Jonas Mekas",
        "year": 1969,
        "country": "USA",
        "runtime": 177,
        "genre": "Avant-garde/Experimental"
      },
      {
        "title": "Macunaima",
        "director": "Joaquim Pedro de Andrade",
        "year": 1969,
        "country": "Brazil",
        "runtime": 110,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Salesman",
        "director": "Albert Maysles, David Maysles & Charlotte Zwerin",
        "year": 1969,
        "country": "USA",
        "runtime": 85,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Z",
        "director": "Constantin Costa-Gavras",
        "year": 1969,
        "country": "France",
        "runtime": 127,
        "genre": "Thriller, Political Thriller"
      },
      {
        "title": "Deep End",
        "director": "Jerzy Skolimowski",
        "year": 1970,
        "country": "UK-West Germany",
        "runtime": 88,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Dodes'ka-den",
        "director": "Akira Kurosawa",
        "year": 1970,
        "country": "Japan",
        "runtime": 140,
        "genre": "Ensemble Film, Urban Drama"
      },
      {
        "title": "Five Easy Pieces",
        "director": "Bob Rafelson",
        "year": 1970,
        "country": "USA",
        "runtime": 98,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "Gimme Shelter",
        "director": "Albert Maysles, David Maysles & Charlotte Zwerin",
        "year": 1970,
        "country": "USA",
        "runtime": 91,
        "genre": "Music, Documentary"
      },
      {
        "title": "The Hart of London",
        "director": "Jack Chambers",
        "year": 1970,
        "country": "Canada",
        "runtime": 80,
        "genre": "Avant-garde-Experimental"
      },
      {
        "title": "Husbands",
        "director": "John Cassavetes",
        "year": 1970,
        "country": "USA",
        "runtime": 138,
        "genre": "Drama, Buddy Film"
      },
      {
        "title": "Le Boucher",
        "director": "Claude Chabrol",
        "year": 1970,
        "country": "France-Italy",
        "runtime": 94,
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Performance",
        "director": "Nicolas Roeg & Donald Cammell",
        "year": 1970,
        "country": "UK",
        "runtime": 105,
        "genre": "Psychological Drama, Satire"
      },
      {
        "title": "The Red Circle",
        "director": "Jean-Pierre Melville",
        "year": 1970,
        "country": "France-Italy",
        "runtime": 140,
        "genre": "Crime Thriller, Post-Noir (Modern Noir)"
      },
      {
        "title": "Wanda",
        "director": "Barbara Loden",
        "year": 1970,
        "country": "USA",
        "runtime": 105,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "The Wild Child",
        "director": "François Truffaut",
        "year": 1970,
        "country": "France",
        "runtime": 85,
        "genre": "Period Film, Childhood Drama"
      },
      {
        "title": "A Touch of Zen",
        "director": "King Hu",
        "year": 1971,
        "country": "Taiwan",
        "runtime": 180,
        "genre": "Martial Arts, Drama"
      },
      {
        "title": "The Devils",
        "director": "Ken Russell",
        "year": 1971,
        "country": "UK",
        "runtime": 109,
        "genre": "Historical Film, Religious Drama"
      },
      {
        "title": "Fata Morgana",
        "director": "Werner Herzog",
        "year": 1971,
        "country": "West Germany",
        "runtime": 78,
        "genre": "Avant-garde/Experimental"
      },
      {
        "title": "Get Carter",
        "director": "Mike Hodges",
        "year": 1971,
        "country": "UK",
        "runtime": 112,
        "genre": "Crime Thriller, Gangster Film"
      },
      {
        "title": "The Go-Between",
        "director": "Joseph Losey",
        "year": 1971,
        "country": "UK",
        "runtime": 116,
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "La Région centrale",
        "director": "Michael Snow",
        "year": 1971,
        "country": "Canada",
        "runtime": 180,
        "genre": "Avant-garde-Experimental, Drama"
      },
      {
        "title": "Out 1, noli me tangere",
        "director": "Jacques Rivette",
        "year": 1971,
        "country": "France",
        "runtime": 729,
        "genre": "Drama, Comedy"
      },
      {
        "title": "Two English Girls",
        "director": "François Truffaut",
        "year": 1971,
        "country": "France",
        "runtime": 108,
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "Walkabout",
        "director": "Nicolas Roeg",
        "year": 1971,
        "country": "Australia",
        "runtime": 95,
        "genre": "Adventure, Drama"
      },
      {
        "title": "W.R.: Mysteries of the Organism",
        "director": "Dusan Makavejev",
        "year": 1971,
        "country": "Yugoslavia",
        "runtime": 84,
        "genre": "Avant-garde-Experimental, Sex Comedy"
      },
      {
        "title": "The Bitter Tears of Petra von Kant",
        "director": "Rainer Werner Fassbinder",
        "year": 1972,
        "country": "West Germany",
        "runtime": 124,
        "genre": "Drama, Melodrama"
      },
      {
        "title": "Pink Flamingos",
        "director": "John Waters",
        "year": 1972,
        "country": "USA",
        "runtime": 92,
        "genre": "Comedy, Trash Film"
      },
      {
        "title": "Day for Night",
        "director": "François Truffaut",
        "year": 1973,
        "country": "France",
        "runtime": 120,
        "genre": "Comedy Drama, Showbiz Drama"
      },
      {
        "title": "The Last Detail",
        "director": "Hal Ashby",
        "year": 1973,
        "country": "USA",
        "runtime": 105,
        "genre": "Comedy Drama, Road Movie"
      },
      {
        "title": "Ludwig",
        "director": "Luchino Visconti",
        "year": 1973,
        "country": "Italy-France-West Germany",
        "runtime": 235,
        "genre": "Historical Film, Biography"
      },
      {
        "title": "The Mother and the Whore",
        "director": "Jean Eustache",
        "year": 1973,
        "country": "France",
        "runtime": 210,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "O Lucky Man!",
        "director": "Lindsay Anderson",
        "year": 1973,
        "country": "UK",
        "runtime": 173,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Touki Bouki",
        "director": "Djibril Diop Mambéty",
        "year": 1973,
        "country": "Senegal",
        "runtime": 85,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "Arabian Nights",
        "director": "Pier Paolo Pasolini",
        "year": 1974,
        "country": "Italy-France",
        "runtime": 130,
        "genre": "Adventure, Romantic Fantasy"
      },
      {
        "title": "Celine and Julie Go Boating",
        "director": "Jacques Rivette",
        "year": 1974,
        "country": "France",
        "runtime": 192,
        "genre": "Avant-garde-Experimental, Surrealist Film"
      },
      {
        "title": "Edvard Munch",
        "director": "Peter Watkins",
        "year": 1974,
        "country": "Sweden-Norway",
        "runtime": 210,
        "genre": "Drama, Biopic"
      },
      {
        "title": "Female Trouble",
        "director": "John Waters",
        "year": 1974,
        "country": "USA",
        "runtime": 98,
        "genre": "Comedy, Trash Film"
      },
      {
        "title": "My Little Loves",
        "director": "Jean Eustache",
        "year": 1974,
        "country": "France",
        "runtime": 123,
        "genre": "Drama"
      },
      {
        "title": "We All Loved Each Other So Much",
        "director": "Ettore Scola",
        "year": 1974,
        "country": "Italy",
        "runtime": 124,
        "genre": "Comedy Drama, Romantic Drama"
      },
      {
        "title": "Grey Gardens",
        "director": "David Maysles, Albert Maysles, Ellen Hovde & Muffie Meyer",
        "year": 1975,
        "country": "USA",
        "runtime": 95,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "India Song",
        "director": "Marguerite Duras",
        "year": 1975,
        "country": "France",
        "runtime": 120,
        "genre": "Avant-garde-Experimental, Psychological Drama"
      },
      {
        "title": "Iracema - Uma Transa Amazônica",
        "director": "Jorge Bodanzky & Orlando Senna",
        "year": 1975,
        "country": "Brazil-West Germany-France",
        "runtime": 90,
        "genre": "Drama"
      },
      {
        "title": "Numéro deux",
        "director": "Jean-Luc Godard",
        "year": 1975,
        "country": "France",
        "runtime": 88,
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "Sholay",
        "director": "Ramesh Sippy",
        "year": 1975,
        "country": "India",
        "runtime": 162,
        "genre": "Action, Adventure Drama"
      },
      {
        "title": "The Travelling Players",
        "director": "Theo Angelopoulos",
        "year": 1975,
        "country": "Greece",
        "runtime": 230,
        "genre": "Drama, Political Drama"
      },
      {
        "title": "Xala",
        "director": "Ousmane Sembene",
        "year": 1975,
        "country": "Senegal",
        "runtime": 123,
        "genre": "Comedy, Satire"
      },
      {
        "title": "1900",
        "director": "Bernardo Bertolucci",
        "year": 1976,
        "country": "Italy-France-West Germany",
        "runtime": 245,
        "genre": "Political Drama, Family Drama"
      },
      {
        "title": "The Ascent",
        "director": "Larisa Shepitko",
        "year": 1976,
        "country": "USSR",
        "runtime": 111,
        "genre": "War Drama, Resistance Film"
      },
      {
        "title": "Cría cuervos",
        "director": "Carlos Saura",
        "year": 1976,
        "country": "Spain",
        "runtime": 110,
        "genre": "Childhood Drama, Family Drama"
      },
      {
        "title": "Harlan County, U.S.A.",
        "director": "Barbara Kopple",
        "year": 1976,
        "country": "USA",
        "runtime": 103,
        "genre": "Social Issues, Documentary"
      },
      {
        "title": "Kings of the Road",
        "director": "Wim Wenders",
        "year": 1976,
        "country": "West Germany",
        "runtime": 175,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "News from Home",
        "director": "Chantal Akerman",
        "year": 1976,
        "country": "France-Belgium-West Germany",
        "runtime": 85,
        "genre": "Avant-garde/Experimental, Urban Drama"
      },
      {
        "title": "3 Women",
        "director": "Robert Altman",
        "year": 1977,
        "country": "USA",
        "runtime": 125,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "The Devil, Probably",
        "director": "Robert Bresson",
        "year": 1977,
        "country": "France",
        "runtime": 95,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Hitler: A Film from Germany",
        "director": "Hans-Jürgen Syberberg",
        "year": 1977,
        "country": "West Germany-France-UK",
        "runtime": 442,
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "Killer of Sheep",
        "director": "Charles Burnett",
        "year": 1977,
        "country": "USA",
        "runtime": 83,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "New York, New York",
        "director": "Martin Scorsese",
        "year": 1977,
        "country": "USA",
        "runtime": 164,
        "genre": "Period Film, Musical Drama"
      },
      {
        "title": "Opening Night",
        "director": "John Cassavetes",
        "year": 1977,
        "country": "USA",
        "runtime": 144,
        "genre": "Ensemble Film, Showbiz Drama"
      },
      {
        "title": "Providence",
        "director": "Alain Resnais",
        "year": 1977,
        "country": "France-Switzerland",
        "runtime": 110,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "In a Year with 13 Moons",
        "director": "Rainer Werner Fassbinder",
        "year": 1978,
        "country": "West Germany",
        "runtime": 129,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "National Lampoon's Animal House",
        "director": "John Landis",
        "year": 1978,
        "country": "USA",
        "runtime": 109,
        "genre": "Gross-Out Comedy, Anarchic Comedy"
      },
      {
        "title": "The Tree of Wooden Clogs",
        "director": "Ermanno Olmi",
        "year": 1978,
        "country": "Italy",
        "runtime": 185,
        "genre": "Rural Drama, Family Drama"
      },
      {
        "title": "All That Jazz",
        "director": "Bob Fosse",
        "year": 1979,
        "country": "USA",
        "runtime": 123,
        "genre": "Musical, Showbiz Drama"
      },
      {
        "title": "Arrebato",
        "director": "Iván Zulueta",
        "year": 1979,
        "country": "Spain",
        "runtime": 105,
        "genre": "Drama, Horror"
      },
      {
        "title": "Tale of Tales",
        "director": "Yuriy Norshteyn",
        "year": 1979,
        "country": "USSR",
        "runtime": 29,
        "genre": "Avant-garde-Experimental, Animation"
      },
      {
        "title": "The Tin Drum",
        "director": "Volker Schlöndorff",
        "year": 1979,
        "country": "West Germany-France-Poland-Yugoslavia",
        "runtime": 142,
        "genre": "Political Drama, Childhood Drama"
      },
      {
        "title": "Vengeance is Mine",
        "director": "Shohei Imamura",
        "year": 1979,
        "country": "Japan",
        "runtime": 129,
        "genre": "Crime, Psychological Drama"
      },
      {
        "title": "The Age of the Earth",
        "director": "Glauber Rocha",
        "year": 1980,
        "country": "Brazil",
        "runtime": 158,
        "genre": "Religious Epic, Political Drama"
      },
      {
        "title": "Bad Timing",
        "director": "Nicolas Roeg",
        "year": 1980,
        "country": "UK",
        "runtime": 129,
        "genre": "Mystery, Psychological Drama"
      },
      {
        "title": "Berlin Alexanderplatz",
        "director": "Rainer Werner Fassbinder",
        "year": 1980,
        "country": "West Germany-Italy",
        "runtime": 894,
        "genre": "Epic, Political Drama"
      },
      {
        "title": "Gregory's Girl",
        "director": "Bill Forsyth",
        "year": 1980,
        "country": "UK",
        "runtime": 91,
        "genre": "Comedy Drama, Coming-of-Age"
      },
      {
        "title": "Heaven's Gate",
        "director": "Michael Cimino",
        "year": 1980,
        "country": "USA",
        "runtime": 219,
        "genre": "Epic Western, Revisionist Western"
      },
      {
        "title": "Mon oncle d'Amérique",
        "director": "Alain Resnais",
        "year": 1980,
        "country": "France",
        "runtime": 123,
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "Sauve qui peut (la vie)",
        "director": "Jean-Luc Godard",
        "year": 1980,
        "country": "France-Switzerland",
        "runtime": 87,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "The Woman Next Door",
        "director": "François Truffaut",
        "year": 1981,
        "country": "France",
        "runtime": 106,
        "genre": "Romantic Drama, Psychological Drama"
      },
      {
        "title": "Passion",
        "director": "Jean-Luc Godard",
        "year": 1982,
        "country": "France-Switzerland",
        "runtime": 87,
        "genre": "Psychological Drama, Showbiz Drama"
      },
      {
        "title": "Yol",
        "director": "Serif Gören & Yilmaz Güney",
        "year": 1982,
        "country": "Turkey-Switzerland-France",
        "runtime": 114,
        "genre": "Political Drama, Prison Film"
      },
      {
        "title": "À nos amours",
        "director": "Maurice Pialat",
        "year": 1983,
        "country": "France",
        "runtime": 102,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "The Ballad of Narayama",
        "director": "Shohei Imamura",
        "year": 1983,
        "country": "Japan",
        "runtime": 130,
        "genre": "Rural Drama, Family Drama"
      },
      {
        "title": "Diary",
        "director": "David Perlov",
        "year": 1983,
        "country": "Israel",
        "runtime": 330,
        "genre": "Documentary, Political"
      },
      {
        "title": "El Sur",
        "director": "Victor Erice",
        "year": 1983,
        "country": "Spain-France",
        "runtime": 95,
        "genre": "Drama"
      },
      {
        "title": "L'Argent",
        "director": "Robert Bresson",
        "year": 1983,
        "country": "France-Switzerland",
        "runtime": 90,
        "genre": "Drama, Crime"
      },
      {
        "title": "Local Hero",
        "director": "Bill Forsyth",
        "year": 1983,
        "country": "UK",
        "runtime": 111,
        "genre": "Comedy, Comedy of Manners"
      },
      {
        "title": "Nostalghia",
        "director": "Andrei Tarkovsky",
        "year": 1983,
        "country": "Italy",
        "runtime": 120,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Zelig",
        "director": "Woody Allen",
        "year": 1983,
        "country": "USA",
        "runtime": 79,
        "genre": "Mockumentary, Fantasy Comedy"
      },
      {
        "title": "Stranger Than Paradise",
        "director": "Jim Jarmusch",
        "year": 1984,
        "country": "USA",
        "runtime": 90,
        "genre": "Comedy, Road Movie"
      },
      {
        "title": "Twenty Years Later",
        "director": "Eduardo Coutinho",
        "year": 1984,
        "country": "Brazil",
        "runtime": 119,
        "genre": "Documentary"
      },
      {
        "title": "Yellow Earth",
        "director": "Chen Kaige",
        "year": 1984,
        "country": "China",
        "runtime": 89,
        "genre": "Family Drama, Rural Drama"
      },
      {
        "title": "My Friend Ivan Lapshin",
        "director": "Aleksey German",
        "year": 1985,
        "country": "USSR",
        "runtime": 100,
        "genre": "Police Drama, Period Film"
      },
      {
        "title": "My Life as a Dog",
        "director": "Lasse Hallström",
        "year": 1985,
        "country": "Sweden",
        "runtime": 101,
        "genre": "Coming-of-Age, Childhood Drama"
      },
      {
        "title": "Shoah",
        "director": "Claude Lanzmann",
        "year": 1985,
        "country": "France",
        "runtime": 566,
        "genre": "Military & War, Documentary"
      },
      {
        "title": "The Time to Live and the Time to Die",
        "director": "Hou Hsiao-hsien",
        "year": 1985,
        "country": "Taiwan",
        "runtime": 137,
        "genre": "Coming-of-Age, Family Drama"
      },
      {
        "title": "Vagabond",
        "director": "Agnès Varda",
        "year": 1985,
        "country": "France",
        "runtime": 105,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "The Green Ray",
        "director": "Eric Rohmer",
        "year": 1986,
        "country": "France",
        "runtime": 96,
        "genre": "Romantic Drama, Urban Drama"
      },
      {
        "title": "A Short Film About Killing",
        "director": "Krzysztof Kieslowski",
        "year": 1987,
        "country": "Poland",
        "runtime": 85,
        "genre": "Drama, Crime"
      },
      {
        "title": "Broadcast News",
        "director": "James L. Brooks",
        "year": 1987,
        "country": "USA",
        "runtime": 133,
        "genre": "Workplace Comedy, Media Satire"
      },
      {
        "title": "The Dead",
        "director": "John Huston",
        "year": 1987,
        "country": "USA",
        "runtime": 83,
        "genre": "Drama, Period Film"
      },
      {
        "title": "Dust in the Wind",
        "director": "Hou Hsiao-hsien",
        "year": 1987,
        "country": "Taiwan",
        "runtime": 109,
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "The Emperor's Naked Army Marches On",
        "director": "Kazuo Hara",
        "year": 1987,
        "country": "Japan",
        "runtime": 123,
        "genre": "History, Documentary"
      },
      {
        "title": "Near Dark",
        "director": "Kathryn Bigelow",
        "year": 1987,
        "country": "USA",
        "runtime": 95,
        "genre": "Horror, Hybrid Western"
      },
      {
        "title": "Red Sorghum",
        "director": "Zhang Yimou",
        "year": 1987,
        "country": "China",
        "runtime": 91,
        "genre": "Rural Drama, Marriage Drama"
      },
      {
        "title": "Withnail & I",
        "director": "Bruce Robinson",
        "year": 1987,
        "country": "UK",
        "runtime": 107,
        "genre": "Comedy, Buddy Film"
      },
      {
        "title": "Yeelen",
        "director": "Souleymane Cissé",
        "year": 1987,
        "country": "Mali-Burkina Faso-France-West Germany-Japan",
        "runtime": 105,
        "genre": "Coming-of-Age, Adventure Drama"
      },
      {
        "title": "A Tale of the Wind",
        "director": "Joris Ivens",
        "year": 1988,
        "country": "France-UK-West Germany-Netherlands",
        "runtime": 80,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Dekalog",
        "director": "Krzysztof Kieslowski",
        "year": 1988,
        "country": "Poland-West Germany",
        "runtime": 550,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Distant Voices, Still Lives",
        "director": "Terence Davies",
        "year": 1988,
        "country": "UK",
        "runtime": 85,
        "genre": "Family Drama, Biography"
      },
      {
        "title": "Hôtel Terminus",
        "director": "Marcel Ophüls",
        "year": 1988,
        "country": "USA",
        "runtime": 267,
        "genre": "History, Documentary"
      },
      {
        "title": "Landscape in the Mist",
        "director": "Theo Angelopoulos",
        "year": 1988,
        "country": "Greece-France-Italy",
        "runtime": 125,
        "genre": "Road Movie, Childhood Drama"
      },
      {
        "title": "The Thin Blue Line",
        "director": "Errol Morris",
        "year": 1988,
        "country": "USA",
        "runtime": 96,
        "genre": "Law & Crime, Documentary"
      },
      {
        "title": "A City of Sadness",
        "director": "Hou Hsiao-hsien",
        "year": 1989,
        "country": "Taiwan-Hong Kong",
        "runtime": 157,
        "genre": "Family Drama, Period Film"
      },
      {
        "title": "The Cook, The Thief, His Wife & Her Lover",
        "director": "Peter Greenaway",
        "year": 1989,
        "country": "UK-France",
        "runtime": 120,
        "genre": "Black Comedy, Satire"
      },
      {
        "title": "Time of the Gypsies",
        "director": "Emir Kusturica",
        "year": 1989,
        "country": "Yugoslavia",
        "runtime": 142,
        "genre": "Comedy Drama, Coming-of-Age"
      },
      {
        "title": "An Angel at My Table",
        "director": "Jane Campion",
        "year": 1990,
        "country": "New Zealand-Australia-UK-USA",
        "runtime": 158,
        "genre": "Biography, Psychological Drama"
      },
      {
        "title": "The Match Factory Girl",
        "director": "Aki Kaurismäki",
        "year": 1990,
        "country": "Finland-Sweden",
        "runtime": 68,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Nouvelle vague",
        "director": "Jean-Luc Godard",
        "year": 1990,
        "country": "France-Switzerland",
        "runtime": 88,
        "genre": "Avant-garde-Experimental, Fantasy"
      },
      {
        "title": "JFK",
        "director": "Oliver Stone",
        "year": 1991,
        "country": "USA",
        "runtime": 188,
        "genre": "Political Thriller, Ensemble Film"
      },
      {
        "title": "La Belle noiseuse",
        "director": "Jacques Rivette",
        "year": 1991,
        "country": "France",
        "runtime": 240,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Point Break",
        "director": "Kathryn Bigelow",
        "year": 1991,
        "country": "USA-Japan",
        "runtime": 122,
        "genre": "Action, Thriller"
      },
      {
        "title": "Van Gogh",
        "director": "Maurice Pialat",
        "year": 1991,
        "country": "France",
        "runtime": 155,
        "genre": "Drama, Biography"
      },
      {
        "title": "And Life Goes On...",
        "director": "Abbas Kiarostami",
        "year": 1992,
        "country": "Iran",
        "runtime": 108,
        "genre": "Drama, Docudrama"
      },
      {
        "title": "Lessons of Darkness",
        "director": "Werner Herzog",
        "year": 1992,
        "country": "France-UK-Germany",
        "runtime": 50,
        "genre": "Social History, Documentary"
      },
      {
        "title": "The Long Day Closes",
        "director": "Terence Davies",
        "year": 1992,
        "country": "UK",
        "runtime": 83,
        "genre": "Coming-of-Age, Family Drama"
      },
      {
        "title": "Orlando",
        "director": "Sally Potter",
        "year": 1992,
        "country": "UK-Russia-France-Italy-Netherlands",
        "runtime": 94,
        "genre": "Drama, Fantasy"
      },
      {
        "title": "The Quince Tree Sun",
        "director": "Victor Erice",
        "year": 1992,
        "country": "Spain",
        "runtime": 133,
        "genre": "Drama, Documentary"
      },
      {
        "title": "Twin Peaks: Fire Walk with Me",
        "director": "David Lynch",
        "year": 1992,
        "country": "USA-France",
        "runtime": 135,
        "genre": "Mystery, Surrealist Film"
      },
      {
        "title": "The Age of Innocence",
        "director": "Martin Scorsese",
        "year": 1993,
        "country": "USA",
        "runtime": 133,
        "genre": "Period Film, Romantic Drama"
      },
      {
        "title": "Blue",
        "director": "Derek Jarman",
        "year": 1993,
        "country": "UK",
        "runtime": 76,
        "genre": "Avant-garde/Experimental, Gay & Lesbian Film"
      },
      {
        "title": "D'est",
        "director": "Chantal Akerman",
        "year": 1993,
        "country": "Belgium-France-Portugal",
        "runtime": 107,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Farewell, My Concubine",
        "director": "Chen Kaige",
        "year": 1993,
        "country": "Hong Kong-China",
        "runtime": 155,
        "genre": "Drama, Romantic Epic"
      },
      {
        "title": "The Last Bolshevik",
        "director": "Chris Marker",
        "year": 1993,
        "country": "France-Finland",
        "runtime": 120,
        "genre": "Essay Film, Documentary"
      },
      {
        "title": "The Piano",
        "director": "Jane Campion",
        "year": 1993,
        "country": "New Zealand-Australia-France",
        "runtime": 121,
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "The Puppetmaster",
        "director": "Hou Hsiao-hsien",
        "year": 1993,
        "country": "Taiwan",
        "runtime": 141,
        "genre": "Biography, Drama"
      },
      {
        "title": "Short Cuts",
        "director": "Robert Altman",
        "year": 1993,
        "country": "USA",
        "runtime": 189,
        "genre": "Ensemble Film, Urban Drama"
      },
      {
        "title": "Burnt by the Sun",
        "director": "Nikita Mikhalkov",
        "year": 1994,
        "country": "Russia-France",
        "runtime": 152,
        "genre": "Political Drama, Family Drama"
      },
      {
        "title": "Caro diario",
        "director": "Nanni Moretti",
        "year": 1994,
        "country": "Italy-France",
        "runtime": 100,
        "genre": "Comedy, Satire"
      },
      {
        "title": "Exotica",
        "director": "Atom Egoyan",
        "year": 1994,
        "country": "Canada",
        "runtime": 104,
        "genre": "Psychological Drama, Ensemble Film"
      },
      {
        "title": "Hoop Dreams",
        "director": "Steve James",
        "year": 1994,
        "country": "USA",
        "runtime": 170,
        "genre": "Sports, Documentary"
      },
      {
        "title": "Sátántangó",
        "director": "Béla Tarr",
        "year": 1994,
        "country": "Hungary-Germany-Switzerland",
        "runtime": 450,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "Through the Olive Trees",
        "director": "Abbas Kiarostami",
        "year": 1994,
        "country": "Iran-France",
        "runtime": 103,
        "genre": "Drama, Docudrama"
      },
      {
        "title": "To Live",
        "director": "Zhang Yimou",
        "year": 1994,
        "country": "China-Hong Kong",
        "runtime": 145,
        "genre": "Family Drama, Political Drama"
      },
      {
        "title": "Babe",
        "director": "Chris Noonan",
        "year": 1995,
        "country": "Australia",
        "runtime": 94,
        "genre": "Animal Picture, Children's Fantasy"
      },
      {
        "title": "A Moment of Innocence",
        "director": "Mohsen Makhmalbaf",
        "year": 1996,
        "country": "Iran-France",
        "runtime": 78,
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "Breaking the Waves",
        "director": "Lars von Trier",
        "year": 1996,
        "country": "Denmark-Sweden-France-Netherlands-Norway-Iceland-Spain",
        "runtime": 156,
        "genre": "Psychological Drama, Romantic Drama"
      },
      {
        "title": "Crash",
        "director": "David Cronenberg",
        "year": 1996,
        "country": "Canada",
        "runtime": 100,
        "genre": "Erotic Drama, Psychological Drama"
      },
      {
        "title": "Secrets & Lies",
        "director": "Mike Leigh",
        "year": 1996,
        "country": "UK",
        "runtime": 142,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Gummo",
        "director": "Harmony Korine",
        "year": 1997,
        "country": "USA",
        "runtime": 88,
        "genre": "Avant-garde-Experimental, Teen Movie"
      },
      {
        "title": "Happy Together",
        "director": "Wong Kar-wai",
        "year": 1997,
        "country": "Hong Kong",
        "runtime": 97,
        "genre": "Romance, Drama"
      },
      {
        "title": "Mother and Son",
        "director": "Aleksandr Sokurov",
        "year": 1997,
        "country": "Russia-Germany",
        "runtime": 73,
        "genre": "Family Drama, Psychological Drama"
      },
      {
        "title": "The Sweet Hereafter",
        "director": "Atom Egoyan",
        "year": 1997,
        "country": "Canada",
        "runtime": 112,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "Taste of Cherry",
        "director": "Abbas Kiarostami",
        "year": 1997,
        "country": "Iran",
        "runtime": 99,
        "genre": "Drama, Road Movie"
      },
      {
        "title": "After Life",
        "director": "Hirokazu Koreeda",
        "year": 1998,
        "country": "Japan",
        "runtime": 118,
        "genre": "Fantasy, Psychological Drama"
      },
      {
        "title": "Flowers of Shanghai",
        "director": "Hou Hsiao-hsien",
        "year": 1998,
        "country": "Taiwan",
        "runtime": 130,
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "Histoire(s) du cinéma",
        "director": "Jean-Luc Godard",
        "year": 1998,
        "country": "France",
        "runtime": 265,
        "genre": "Essay Film, Documentary"
      },
      {
        "title": "The Idiots",
        "director": "Lars von Trier",
        "year": 1998,
        "country": "Denmark-Spain-Sweden-France-Netherlands-Italy",
        "runtime": 117,
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "Audition",
        "director": "Takashi Miike",
        "year": 1999,
        "country": "Japan-South Korea",
        "runtime": 115,
        "genre": "Thriller, Sadistic Horror"
      },
      {
        "title": "Beau travail",
        "director": "Claire Denis",
        "year": 1999,
        "country": "France",
        "runtime": 92,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "L'Humanité",
        "director": "Bruno Dumont",
        "year": 1999,
        "country": "France",
        "runtime": 141,
        "genre": "Psychological Drama, Police Detective Film"
      },
      {
        "title": "Sicilia!",
        "director": "Jean-Marie Straub & Danièle Huillet",
        "year": 1999,
        "country": "Italy-France-Germany",
        "runtime": 66,
        "genre": "Family Drama, Political Drama"
      },
      {
        "title": "Topsy-Turvy",
        "director": "Mike Leigh",
        "year": 1999,
        "country": "UK-USA",
        "runtime": 160,
        "genre": "Comedy Drama, Musical Drama"
      },
      {
        "title": "The Wind Will Carry Us",
        "director": "Abbas Kiarostami",
        "year": 1999,
        "country": "France-Iran",
        "runtime": 118,
        "genre": "Drama, Rural Drama"
      },
      {
        "title": "As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty",
        "director": "Jonas Mekas",
        "year": 2000,
        "country": "USA",
        "runtime": 288,
        "genre": "Biography, Documentary"
      },
      {
        "title": "The Gleaners & I",
        "director": "Agnès Varda",
        "year": 2000,
        "country": "France",
        "runtime": 82,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "In Vanda's Room",
        "director": "Pedro Costa",
        "year": 2000,
        "country": "Portugal-Germany-Switzerland-Italy",
        "runtime": 170,
        "genre": "Drama"
      },
      {
        "title": "Platform",
        "director": "Jia Zhangke",
        "year": 2000,
        "country": "China-Hong Kong-Japan-France",
        "runtime": 154,
        "genre": "Comedy Drama, Ensemble Film"
      },
      {
        "title": "Werckmeister Harmonies",
        "director": "Béla Tarr",
        "year": 2000,
        "country": "Hungary-Germany-France-Switzerland-Italy",
        "runtime": 145,
        "genre": "Horror, Psychological Drama"
      },
      {
        "title": "In Praise of Love",
        "director": "Jean-Luc Godard",
        "year": 2001,
        "country": "France",
        "runtime": 97,
        "genre": "Drama"
      },
      {
        "title": "La Ciénaga",
        "director": "Lucrecia Martel",
        "year": 2001,
        "country": "Argentina-France-Spain",
        "runtime": 103,
        "genre": "Drama"
      },
      {
        "title": "Blissfully Yours",
        "director": "Apichatpong Weerasethakul",
        "year": 2002,
        "country": "Thailand-France",
        "runtime": 125,
        "genre": "Avant-garde-Experimental, Drama"
      },
      {
        "title": "Distant",
        "director": "Nuri Bilge Ceylan",
        "year": 2002,
        "country": "Turkey-Netherlands",
        "runtime": 110,
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Irréversible",
        "director": "Gaspar Noé",
        "year": 2002,
        "country": "France",
        "runtime": 97,
        "genre": "Crime, Drama"
      },
      {
        "title": "Russian Ark",
        "director": "Aleksandr Sokurov",
        "year": 2002,
        "country": "Russia-Germany-Japan-Canada-Finland-Denmark",
        "runtime": 96,
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "The Son",
        "director": "Jean-Pierre Dardenne & Luc Dardenne",
        "year": 2002,
        "country": "Belgium-France",
        "runtime": 103,
        "genre": "Drama, Social Problem Film"
      },
      {
        "title": "Ten",
        "director": "Abbas Kiarostami",
        "year": 2002,
        "country": "France-Iran",
        "runtime": 92,
        "genre": "Avant-garde-Experimental, Urban Drama"
      },
      {
        "title": "Goodbye, Dragon Inn",
        "director": "Tsai Ming-liang",
        "year": 2003,
        "country": "Taiwan",
        "runtime": 82,
        "genre": "Showbiz Drama, Comedy Drama"
      },
      {
        "title": "The Return",
        "director": "Andrey Zvyagintsev",
        "year": 2003,
        "country": "Russia",
        "runtime": 110,
        "genre": "Psychological Drama, Coming-of-Age"
      },
      {
        "title": "Tie Xi Qu: West of the Tracks",
        "director": "Wang Bing",
        "year": 2003,
        "country": "China",
        "runtime": 551,
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The Intruder",
        "director": "Claire Denis",
        "year": 2004,
        "country": "France-Korea",
        "runtime": 130,
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Sideways",
        "director": "Alexander Payne",
        "year": 2004,
        "country": "USA",
        "runtime": 123,
        "genre": "Comedy Drama, Buddy Film"
      },
      {
        "title": "The Death of Mr. Lazarescu",
        "director": "Cristi Puiu",
        "year": 2005,
        "country": "Romania",
        "runtime": 154,
        "genre": "Drama, Medical Drama"
      },
      {
        "title": "Grizzly Man",
        "director": "Werner Herzog",
        "year": 2005,
        "country": "USA",
        "runtime": 103,
        "genre": "Nature, Documentary"
      },
      {
        "title": "The New World",
        "director": "Terrence Malick",
        "year": 2005,
        "country": "USA",
        "runtime": 135,
        "genre": "Historical Film, Romantic Drama"
      },
      {
        "title": "Colossal Youth",
        "director": "Pedro Costa",
        "year": 2006,
        "country": "Portugal-France-Switzerland",
        "runtime": 155,
        "genre": "Drama, Slice of Life"
      },
      {
        "title": "Still Life",
        "director": "Jia Zhangke",
        "year": 2006,
        "country": "China-Hong Kong",
        "runtime": 113,
        "genre": "Drama, Social Problem Film"
      },
      {
        "title": "Syndromes and a Century",
        "director": "Apichatpong Weerasethakul",
        "year": 2006,
        "country": "Thailand-France-Austria-Netherlands",
        "runtime": 105,
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "4 Months, 3 Weeks and 2 Days",
        "director": "Cristian Mungiu",
        "year": 2007,
        "country": "Romania-Netherlands-France-Germany",
        "runtime": 113,
        "genre": "Drama, Slice of Life"
      },
      {
        "title": "Silent Light",
        "director": "Carlos Reygadas",
        "year": 2007,
        "country": "Mexico-France-Netherlands",
        "runtime": 136,
        "genre": "Psychological Drama, Rural Drama"
      },
      {
        "title": "The Headless Woman",
        "director": "Lucrecia Martel",
        "year": 2008,
        "country": "Argentina-Spain-France-Italy",
        "runtime": 87,
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Nostalgia for the Light",
        "director": "Patricio Guzmán",
        "year": 2010,
        "country": "France-Germany-Chile-Spain-USA",
        "runtime": 90,
        "genre": "Social History, Documentary"
      },
      {
        "title": "Uncle Boonmee Who Can Recall His Past Lives",
        "director": "Apichatpong Weerasethakul",
        "year": 2010,
        "country": "Thailand-UK-France-Germany-Spain-Netherlands",
        "runtime": 113,
        "genre": "Avant-garde-Experimental, Fantasy Drama"
      },
      {
        "title": "The Tree of Life",
        "director": "Terrence Malick",
        "year": 2011,
        "country": "USA",
        "runtime": 139,
        "genre": "Drama, Family Drama"
      },
      {
        "title": "The Act of Killing",
        "director": "Joshua Oppenheimer",
        "year": 2012,
        "country": "Denmark-Norway-UK-Finland",
        "runtime": 115,
        "genre": "Social History, Documentary"
      },
      {
        "title": "Amour",
        "director": "Michael Haneke",
        "year": 2012,
        "country": "Austria-France-Germany",
        "runtime": 127,
        "genre": "Drama, Romantic Drama"
      },
      {
        "title": "Holy Motors",
        "director": "Leos Carax",
        "year": 2012,
        "country": "France-Germany",
        "runtime": 115,
        "genre": "Avant-garde-Experimental, Fantasy"
      },
      {
        "title": "The Master",
        "director": "Paul Thomas Anderson",
        "year": 2012,
        "country": "USA",
        "runtime": 144,
        "genre": "Period Film, Psychological Drama"
      },
      {
        "title": "Under the Skin",
        "director": "Jonathan Glazer",
        "year": 2013,
        "country": "UK-USA-Switzerland",
        "runtime": 108,
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "Toni Erdmann",
        "director": "Maren Ade",
        "year": 2016,
        "country": "Germany-Austria-Switzerland-Romania",
        "runtime": 162,
        "genre": "Comedy Drama, Slice of Life"
      },
    ]
  }
]
