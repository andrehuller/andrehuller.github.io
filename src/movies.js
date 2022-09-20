const lists = [
  {
    "name": "Recommendations",
    "items": [
      {
        "title": "The Cabinet of Dr. Caligari",
        "director": "Robert Wiene",
        "year": 1920,
        "country": "Germany",
        "rating": 8
      },
      {
        "title": "Nosferatu",
        "director": "F.W. Murnau",
        "year": 1922,
        "country": "Germany",
        "genre": "Horror, Gothic Film",
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
        "country": "USA",
        "genre": "Comedy, Slapstick",
        "rating": 9
      },
      {
        "title": "The Gold Rush",
        "director": "Charles Chaplin",
        "year": 1925,
        "country": "USA",
        "genre": "Slapstick, Adventure Comedy",
        "rating": 10
      },
      {
        "title": "Faust",
        "director": "F.W. Murnau",
        "year": 1926,
        "country": "Germany",
        "genre": "Fantasy, Tragedy",
        "rating": 9
      },
      {
        "title": "Sunrise",
        "director": "F.W. Murnau",
        "year": 1927,
        "country": "USA",
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Spione",
        "director": "Fritz Lang",
        "year": 1928,
        "country": "Germany",
        "genre": "Thriller, Spy Film"
      },
      {
        "title": "The Blue Angel",
        "director": "Josef von Sternberg",
        "year": 1930,
        "country": "Germany",
        "genre": "Melodrama, Psychological Drama"
      },
      {
        "title": "Tabu",
        "director": "F.W. Murnau",
        "year": 1931,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "I Was Born, But…",
        "director": "Yasujiro Ozu",
        "year": 1932,
        "country": "Japan",
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "The Scarlet Empress",
        "director": "Josef von Sternberg",
        "year": 1934,
        "country": "USA",
        "genre": "Historical Film, Period Film",
        "rating": 10
      },
      {
        "title": "The Lady Eve",
        "director": "Preston Sturges",
        "year": 1941,
        "country": "USA",
        "genre": "Romantic Comedy, Sophisticated Comedy"
      },
      {
        "title": "The Palm Beach Story",
        "director": "Preston Sturges",
        "year": 1942,
        "country": "USA",
        "genre": "Screwball Comedy, Comedy of Manners"
      },
      {
        "title": "Day of Wrath",
        "director": "Carl Theodor Dreyer",
        "year": 1943,
        "country": "Denmark"
      },
      {
        "title": "Les Enfants du paradis",
        "director": "Marcel Carné",
        "year": 1945,
        "country": "France",
        "genre": "Period Film, Romantic Drama"
      },
      {
        "title": "Late Spring",
        "director": "Yasujiro Ozu",
        "year": 1949,
        "country": "Japan",
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Rashomon",
        "director": "Akira Kurosawa",
        "year": 1950,
        "country": "Japan",
        "genre": "Period Film, Crime Drama"
      },
      {
        "title": "Early Summer",
        "director": "Yasujiro Ozu",
        "year": 1951,
        "country": "Japan",
        "rating": "Drama, Family Drama"
      },
      {
        "title": "Casque d'or",
        "director": "Jacques Becker",
        "year": 1952,
        "country": "France",
        "genre": "Crime Drama, Melodrama"
      },
      {
        "title": "Ikiru",
        "director": "Akira Kurosawa",
        "year": 1952,
        "country": "Japan",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Madame de...",
        "director": "Max Ophüls",
        "year": 1953,
        "country": "France-Italy",
        "genre": "Period Film, Romantic Drama"
      },
      {
        "title": "Pickup on South Street",
        "director": "Samuel Fuller",
        "year": 1953,
        "country": "USA",
        "genre": "Thriller, Film Noir"
      },
      {
        "title": "Tokyo Story",
        "director": "Yasujiro Ozu",
        "year": 1953,
        "country": "Japan",
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Rear Window",
        "director": "Alfred Hitchcock",
        "year": 1954,
        "country": "USA",
        "genre": "Thriller, Romantic Mystery"
      },
      {
        "title": "Touchez pas au Grisbi",
        "director": "Jacques Becker",
        "year": 1954,
        "country": "France",
        "genre": "Crime, Caper"
      },
      {
        "title": "Ordet",
        "director": "Carl Theodor Dreyer",
        "year": 1955,
        "country": "Denmark",
        "genre": "Drama, Religious Drama"
      },
      {
        "title": "A Man Escaped",
        "director": "Robert Bresson",
        "year": 1956,
        "country": "France",
        "genre": "Drama, Prison Film"
      },
      {
        "title": "Written on the Wind",
        "director": "Douglas Sirk",
        "year": 1956,
        "country": "USA",
        "genre": "Melodrama, Family Drama"
      },
      {
        "title": "The 400 Blows",
        "director": "François Truffaut",
        "year": 1959,
        "country": "France",
        "genre": "Childhood Drama, Coming-of-Age"
      },
      {
        "title": "Good Morning",
        "director": "Yasujiro Ozu",
        "year": 1959,
        "country": "Japan",
        "genre": "Domestic Comedy, Family Drama"
      },
      {
        "title": "Hiroshima mon amour",
        "director": "Alain Resnais",
        "year": 1959,
        "country": "France-Japan",
        "genre": "Psychological Drama, Romantic Drama"
      },
      {
        "title": "Imitation of Life",
        "director": "Douglas Sirk",
        "year": 1959,
        "country": "USA"
      },
      {
        "title": "Breathless",
        "director": "Jean-Luc Godard",
        "year": 1960,
        "country": "France",
        "genre": "Crime Drama, Urban Drama"
      },
      {
        "title": "L'Avventura",
        "director": "Michelangelo Antonioni",
        "year": 1960,
        "country": "Italy-France",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Le Trou",
        "director": "Jacques Becker",
        "year": 1960,
        "country": "France-Italy",
        "genre": "Prison Film, Crime Drama"
      },
      {
        "title": "La Notte",
        "director": "Michelangelo Antonioni",
        "year": 1961,
        "country": "Italy-France"
      },
      {
        "title": "Viridiana",
        "director": "Luis Buñuel",
        "year": 1961,
        "country": "Spain",
        "genre": "Comedy Drama, Satire",
        "rating": 10
      },
      {
        "title": "An Autumn Afternoon",
        "director": "Yasujiro Ozu",
        "year": 1962,
        "country": "Japan"
      },
      {
        "title": "The Exterminating Angel",
        "director": "Luis Buñuel",
        "year": 1962,
        "country": "Mexico",
        "rating": 9
      },
      {
        "title": "Ivan's Childhood",
        "director": "Andrei Tarkovsky",
        "year": 1962,
        "country": "USSR",
        "genre": "War, Childhood Drama"
      },
      {
        "title": "L'Eclisse",
        "director": "Michelangelo Antonioni",
        "year": 1962,
        "country": "Italy-France",
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Vivre sa vie",
        "director": "Jean-Luc Godard",
        "year": 1962,
        "country": "France",
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Contempt",
        "director": "Jean-Luc Godard",
        "year": 1963,
        "country": "France-Italy",
        "genre": "Showbiz Drama, Satire"
      },
      {
        "title": "Band of Outsiders",
        "director": "Jean-Luc Godard",
        "year": 1964,
        "country": "France",
        "genre": "Drama, Crime Drama"
      },
      {
        "title": "Woman in the Dunes",
        "director": "Hiroshi Teshigahara",
        "year": 1964,
        "country": "Japan",
        "genre": "Avant-garde-Experimental, Psychological Drama"
      },
      {
        "title": "Alphaville",
        "director": "Jean-Luc Godard",
        "year": 1965,
        "country": "France",
        "genre": "Psychological Sci-Fi, Tech Noir"
      },
      {
        "title": "Andrei Rublev",
        "director": "Andrei Tarkovsky",
        "year": 1966,
        "country": "USSR",
        "genre": "Historical Film, Biography"
      },
      {
        "title": "Au hasard Balthazar",
        "director": "Robert Bresson",
        "year": 1966,
        "country": "France",
        "genre": "Rural Drama, Animal Picture"
      },
      {
        "title": "Blow-Up",
        "director": "Michelangelo Antonioni",
        "year": 1966,
        "country": "Italy-UK",
        "genre": "Mystery, Psychological Thriller"
      },
      {
        "title": "The Good, the Bad and the Ugly",
        "director": "Sergio Leone",
        "year": 1966,
        "country": "Italy-Spain",
        "genre": "Spaghetti Western, Outlaw (Gunfighter) Film"
      },
      {
        "title": "Persona",
        "director": "Ingmar Bergman",
        "year": 1966,
        "country": "Sweden",
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Two or Three Things I Know About Her",
        "director": "Jean-Luc Godard",
        "year": 1966,
        "country": "France"
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
        "title": "Playtime",
        "director": "Jacques Tati",
        "year": 1967,
        "country": "France",
        "genre": "Satire, Urban Comedy",
        "rating": 10
      },
      {
        "title": "Week-End",
        "director": "Jean-Luc Godard",
        "year": 1967,
        "country": "France-Italy"
      },
      {
        "title": "2001: A Space Odyssey",
        "director": "Stanley Kubrick",
        "year": 1968,
        "country": "UK-USA",
        "genre": "Psychological Sci-Fi, Space Adventure",
        "rating": 10
      },
      {
        "title": "Rosemary's Baby",
        "director": "Roman Polanski",
        "year": 1968,
        "country": "USA",
        "genre": "Occult Horror, Psychological Thriller"
      },
      {
        "title": "My Night at Maud's",
        "director": "Eric Rohmer",
        "year": 1969,
        "country": "France"
      },
      {
        "title": "Claire's Knee",
        "director": "Eric Rohmer",
        "year": 1970,
        "country": "France",
        "genre": "Comedy Drama, Comedy of Manners"
      },
      {
        "title": "Tristana",
        "director": "Luis Buñuel",
        "year": 1970,
        "country": "Spain-Italy-France",
        "genre": "Psychological Drama, Satire",
        "rating": 8
      },
      {
        "title": "Zabriskie Point",
        "director": "Michelangelo Antonioni",
        "year": 1970,
        "country": "USA",
        "genre": "Drama, Road Movie"
      },
      {
        "title": "The Last Picture Show",
        "director": "Peter Bogdanovich",
        "year": 1971,
        "country": "USA"
      },
      {
        "title": "McCabe & Mrs. Miller",
        "director": "Robert Altman",
        "year": 1971,
        "country": "USA"
      },
      {
        "title": "Two-Lane Blacktop",
        "director": "Monte Hellman",
        "year": 1971,
        "country": "USA",
        "genre": "Drama, Road Movie"
      },
      {
        "title": "Aguirre: The Wrath of God",
        "director": "Werner Herzog",
        "year": 1972,
        "country": "West Germany",
        "genre": "Adventure Drama, Jungle Film"
      },
      {
        "title": "A Woman Under the Influence",
        "director": "John Cassavetes",
        "year": 1974,
        "country": "USA",
        "genre": "Marriage Drama, Psychological Drama"
      },
      {
        "title": "The Conversation",
        "director": "Francis Ford Coppola",
        "year": 1974,
        "country": "USA"
      },
      {
        "title": "Lancelot du Lac",
        "director": "Robert Bresson",
        "year": 1974,
        "country": "France-Italy",
        "genre": "Drama, Period Film"
      },
      {
        "title": "The Phantom of Liberty",
        "director": "Luis Buñuel",
        "year": 1974,
        "country": "France",
        "genre": "Satire, Black Comedy",
        "rating": 10
      },
      {
        "title": "Barry Lyndon",
        "director": "Stanley Kubrick",
        "year": 1975,
        "country": "UK",
        "genre": "Drama, Period Film",
        "rating": 10
      },
      {
        "title": "Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles",
        "director": "Chantal Akerman",
        "year": 1975,
        "country": "Belgium-France",
        "genre": "Avant-garde-Experimental, Feminist Film",
        "rating": 10
      },
      {
        "title": "Nashville",
        "director": "Robert Altman",
        "year": 1975,
        "country": "USA",
        "genre": "Ensemble Film, Media Satire",
      },
      {
        "title": "The Passenger",
        "director": "Michelangelo Antonioni",
        "year": 1975,
        "country": "Italy",
        "genre": "Road Movie, Psychological Drama"
      },
      {
        "title": "Salò, or the 120 Days of Sodom",
        "director": "Pier Paolo Pasolini",
        "year": 1975,
        "country": "Italy"
      },
      {
        "title": "Carrie",
        "director": "Brian De Palma",
        "year": 1976,
        "country": "USA",
        "genre": "Horror, Supernatural Thriller"
      },
      {
        "title": "The Killing of a Chinese Bookie",
        "director": "John Cassavetes",
        "year": 1976,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Taxi Driver",
        "director": "Martin Scorsese",
        "year": 1976,
        "country": "USA",
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "That Obscure Object of Desire",
        "director": "Luis Buñuel",
        "year": 1977,
        "country": "France-Spain",
        "genre": "Black Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Manhattan",
        "director": "Woody Allen",
        "year": 1979,
        "country": "USA",
        "genre": "Urban Comedy, Romantic Comedy"
      },
      {
        "title": "The Marriage of Maria Braun",
        "director": "Rainer Werner Fassbinder",
        "year": 1979,
        "country": "West Germany",
        "genre": "War Drama, Melodrama"
      },
      {
        "title": "Stalker",
        "director": "Andrei Tarkovsky",
        "year": 1979,
        "country": "USSR",
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "Blow Out",
        "director": "Brian De Palma",
        "year": 1981,
        "country": "USA",
        "genre": "Political Thriller, Paranoid Thriller"
      },
      {
        "title": "Possession",
        "director": "Andrzej Zulawski",
        "year": 1981,
        "country": "France-West Germany",
        "genre": "Marriage Drama, Supernatural Horror"
      },
      {
        "title": "Fitzcarraldo",
        "director": "Werner Herzog",
        "year": 1982,
        "country": "West Germany",
        "genre": "Adventure Drama, Jungle Film"
      },
      {
        "title": "The King of Comedy",
        "director": "Martin Scorsese",
        "year": 1983,
        "country": "USA",
        "genre": "Showbiz Comedy, Black Comedy"
      },
      {
        "title": "Sans soleil",
        "director": "Chris Marker",
        "year": 1983,
        "country": "France",
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "Videodrome",
        "director": "David Cronenberg",
        "year": 1983,
        "country": "Canada"
      },
      {
        "title": "The Fly",
        "director": "David Cronenberg",
        "year": 1986,
        "country": "USA",
        "genre": "Science Fiction, Horror",
      },
      {
        "title": "Where is the Friend's Home?",
        "director": "Abbas Kiarostami",
        "year": 1987,
        "country": "Iran",
        "image": "whereisthefriendshome"
      },
      {
        "title": "Dead Ringers",
        "director": "David Cronenberg",
        "year": 1988,
        "country": "Canada",
        "genre": "Drama, Psychological Thriller"
      },
      {
        "title": "Close-Up",
        "director": "Abbas Kiarostami",
        "year": 1990,
        "country": "Iran",
        "genre": "Docudrama, Courtroom Drama"
      },
      {
        "title": "Goodfellas",
        "director": "Martin Scorsese",
        "year": 1990,
        "country": "USA",
        "genre": "Gangster Film, Crime Drama"
      },
      {
        "title": "Miller's Crossing",
        "director": "Joel Coen & Ethan Coen",
        "year": 1990,
        "country": "USA",
        "genre": "Crime, Gangster Film"
      },
      {
        "title": "Raging Bull",
        "director": "Martin Scorsese",
        "year": 1980,
        "country": "USA",
        "genre": "Biography, Sports Drama"
      },
      {
        "title": "The Double Life of Veronique",
        "director": "Krzysztof Kieslowski",
        "year": 1991,
        "country": "France",
        "genre": "Romantic Drama, Psychological Drama"
      },
      {
        "title": "Bad Lieutenant",
        "director": "Abel Ferrara",
        "year": 1992,
        "country": "USA",
        "genre": "Police Drama, Crime Drama"
      },
      {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": 1994,
        "country": "USA",
        "genre": "Crime Comedy, Ensemble Film"
      },
      {
        "title": "Casino",
        "director": "Martin Scorsese",
        "year": 1995,
        "country": "USA",
        "genre": "Gangster Film, Crime Drama"
      },
      {
        "title": "Lost Highway",
        "director": "David Lynch",
        "year": 1997,
        "country": "USA-France",
        "genre": "Mystery, Surrealist Film"
      },
      {
        "title": "Eyes Wide Shut",
        "director": "Stanley Kubrick",
        "year": 1999,
        "country": "USA-UK",
        "rating": 9
      },
      {
        "title": "Rosetta",
        "director": "Jean-Pierre Dardenne & Luc Dardenne",
        "year": 1999,
        "country": "Belgium-France",
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Code Unknown",
        "director": "Michael Haneke",
        "year": 2000,
        "country": "France-Germany-Romania",
        "genre": "Ensemble Film, Urban Drama"
      },
      {
        "title": "In the Mood for Love",
        "director": "Wong Kar-wai",
        "year": 2000,
        "country": "Hong Kong-France",
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "Yi yi",
        "director": "Edward Yang",
        "year": 2000,
        "country": "Taiwan-Japan",
        "genre": "Ensemble Film, Family Drama"
      },
      {
        "title": "A.I. Artificial Intelligence",
        "director": "Steven Spielberg",
        "year": 2001,
        "country": "USA",
        "genre": "Science Fiction, Psychological Drama"
      },
      {
        "title": "Millennium Mambo",
        "director": "Hou Hsiao-hsien",
        "year": 2001,
        "country": "Taiwan-France",
        "genre": "Urban Drama, Coming-of-Age",
        "rating": 10
      },
      {
        "title": "Mulholland Dr.",
        "director": "David Lynch",
        "year": 2001,
        "country": "France-US",
        "genre": "Mystery, Psychological Thriller"
      },
      {
        "title": "The Piano Teacher",
        "director": "Michael Haneke",
        "year": 2001,
        "country": "Austria-France-Germany",
        "genre": "Psychological Drama, Erotic Drama"
      },
      {
        "title": "City of God",
        "director": "Fernando Meirelles & Kátia Lund",
        "year": 2002,
        "country": "Brazil-Germany-France"
      },
      {
        "title": "Elephant",
        "director": "Gus Van Sant",
        "year": 2003,
        "country": "USA",
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "Oldboy",
        "director": "Park Chan-wook",
        "year": 2003,
        "country": "South Korea",
        "genre": "Thriller, Psychological Drama"
      },
      {
        "title": "2046",
        "director": "Wong Kar-wai",
        "year": 2004,
        "country": "Hong Kong-China-France-Italy-Germany",
        "genre": "Romance, Science Fiction"
      },
      {
        "title": "Tropical Malady",
        "director": "Apichatpong Weerasethakul",
        "year": 2004,
        "country": "France-Thailand-Germany-Italy-Switzerland"
      },
      {
        "title": "Caché",
        "director": "Michael Haneke",
        "year": 2005,
        "country": "France-Austria-Germany-Italy"
      },
      {
        "title": "Synecdoche, New York",
        "director": "Charlie Kaufman",
        "year": 2008,
        "country": "USA",
        "genre": "Psychological Drama, Showbiz Drama"
      },
      {
        "title": "The White Ribbon",
        "director": "Michael Haneke",
        "year": 2009,
        "country": "Germany-Austria-France-Italy",
        "genre": "Drama, Period Film"
      },
      {
        "title": "A Separation",
        "director": "Asghar Farhadi",
        "year": 2011,
        "country": "Iran"
      },
      {
        "title": "Melancholia",
        "director": "Lars von Trier",
        "year": 2011,
        "country": "Denmark-Sweden-France-Germany"
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
        "genre": "Political Drama, Propaganda Film",
        "rating": 10
      },
      {
        "title": "Metropolis",
        "director": "Fritz Lang",
        "year": 1927,
        "country": "Germany",
        "genre": "Science Fiction, Psychological Sci-Fi",
        "rating": 10
      },
      {
        "title": "M",
        "director": "Fritz Lang",
        "year": 1931,
        "country": "Germany",
        "genre": "Psychological Thriller, Police Detective Film",
        "rating": 10
      },
      {
        "title": "Alexander Nevsky",
        "director": "Sergei Eisenstein",
        "year": 1938,
        "country": "USSR",
        "genre": "Historical Epic, Biography",
        "rating": 10
      },
      {
        "title": "The Lady Vanishes",
        "director": "Alfred Hitchcock",
        "year": 1938,
        "country": "UK",
        "genre": "Spy Film, Thriller",
        "rating": 10
      },
      {
        "title": "Mr. Smith Goes to Washington",
        "director": "Frank Capra",
        "year": 1939,
        "country": "USA",
        "genre": "Comedy Drama, Message Movie",
        "rating": 10
      },
      {
        "title": "Rebecca",
        "director": "Alfred Hitchcock",
        "year": 1940,
        "country": "USA",
        "genre": "Mystery, Gothic Film",
        "rating": 10
      },
      {
        "title": "Shadow of a Doubt",
        "director": "Alfred Hitchcock",
        "year": 1943,
        "country": "USA",
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Double Indemnity",
        "director": "Billy Wilder",
        "year": 1944,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "The Best Years of Our Lives",
        "director": "William Wyler",
        "year": 1946,
        "country": "US",
        "rating": 10
      },
      {
        "title": "Letter from an Unknown Woman",
        "director": "Max Ophüls",
        "year": 1948,
        "country": "USA",
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "All About Eve",
        "director": "Joseph L. Mankiewicz",
        "year": 1950,
        "country": "USA",
        "genre": "Satire, Showbiz Drama",
        "rating": 10
      },
      {
        "title": "Los Olvidados",
        "director": "Luis Buñuel",
        "year": 1950,
        "country": "Mexico",
        "genre": "Juvenile Delinquency Film, Urban Drama",
        "rating": 10
      },
      {
        "title": "Sunset Blvd.",
        "director": "Billy Wilder",
        "year": 1950,
        "country": "USA",
        "genre": "Showbiz Drama, Satire",
        "rating": 10
      },
      {
        "title": "Ace in the Hole",
        "director": "Billy Wilder",
        "year": 1951,
        "country": "USA",
        "genre": "Drama, Media Satire",
        "rating": 10
      },
      {
        "title": "Othello",
        "director": "Orson Welles",
        "year": 1951,
        "country": "Italy-France-Morocco-USA",
        "genre": "Drama, Tragedy"
      },
      {
        "title": "Umberto D.",
        "director": "Vittorio De Sica",
        "year": 1952,
        "country": "Italy"
      },
      {
        "title": "I Vitelloni",
        "director": "Federico Fellini",
        "year": 1953,
        "country": "Italy",
        "genre": "Drama, Comedy",
        "rating": 10
      },
      {
        "title": "The Wages of Fear",
        "director": "Henri-Georges Clouzot",
        "year": 1953,
        "country": "France-Italy"
      },
      {
        "title": "Sansho the Bailiff",
        "director": "Kenji Mizoguchi",
        "year": 1954,
        "country": "Japan",
        "genre": "Drama, Period Film"
      },
      {
        "title": "Invasion of the Body Snatchers",
        "director": "Don Siegel",
        "year": 1956,
        "country": "USA",
        "genre": "Science Fiction, Alien Invasion Film"
      },
      {
        "title": "The Searchers",
        "director": "John Ford",
        "year": 1956,
        "country": "USA",
        "genre": "Western, Revisionist Western",
        "rating": 10
      },
      {
        "title": "Paths of Glory",
        "director": "Stanley Kubrick",
        "year": 1957,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "The Seventh Seal",
        "director": "Ingmar Bergman",
        "year": 1957,
        "country": "Sweden",
        "genre": "Fantasy, Psychological Drama",
        "rating": 10
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
        "country": "Sweden",
        "genre": "Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Elevator to the Gallows",
        "director": "Louis Malle",
        "year": 1958,
        "country": "France"
      },
      {
        "title": "Touch of Evil",
        "director": "Orson Welles",
        "year": 1958,
        "country": "USA",
        "genre": "Crime, Film Noir",
        "rating": 10
      },
      {
        "title": "North by Northwest",
        "director": "Alfred Hitchcock",
        "year": 1959,
        "country": "USA",
        "genre": "Thriller, Chase Movie",
        "rating": 10
      },
      {
        "title": "Some Like it Hot",
        "director": "Billy Wilder",
        "year": 1959,
        "country": "USA",
        "genre": "Comedy, Farce",
        "rating": 10
      },
      {
        "title": "The Apartment",
        "director": "Billy Wilder",
        "year": 1960,
        "country": "USA",
        "genre": "Comedy Drama, Workplace Comedy",
        "rating": 10
      },
      {
        "title": "La Dolce vita",
        "director": "Federico Fellini",
        "year": 1960,
        "country": "Italy",
        "genre": "Comedy Drama, Media Satire",
        "rating": 10
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
        "country": "USA",
        "genre": "Thriller, Psychological Thriller",
        "rating": 10
      },
      {
        "title": "Spartacus",
        "director": "Stanley Kubrick",
        "year": 1960,
        "country": "USA",
        "genre": "Sword-and-Sandal, Historical Epic",
        "rating": 10
      },
      {
        "title": "Cléo from 5 to 7",
        "director": "Agnès Varda",
        "year": 1962,
        "country": "France",
        "rating": 10
      },
      {
        "title": "8½",
        "director": "Federico Fellini",
        "year": 1963,
        "country": "Italy",
        "genre": "Satire, Psychological Drama",
        "rating": 10
      },
      {
        "title": "High and Low",
        "director": "Akira Kurosawa",
        "year": 1963,
        "country": "Japan",
        "genre": "Drama, Post-Noir (Modern Noir)",
        "rating": 10
      },
      {
        "title": "Who's Afraid of Virginia Woolf?",
        "director": "Mike Nichols",
        "year": 1966,
        "country": "USA",
        "genre": "Marriage Drama, Psychological Drama",
        "image": "whosafraidofvirginiawoolf",
        "rating": 10
      },
      {
        "title": "The Graduate",
        "director": "Mike Nichols",
        "year": 1967,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Once Upon a Time in the West",
        "director": "Sergio Leone",
        "year": 1968,
        "country": "Italy-USA",
        "genre": "Epic Western, Spaghetti Western",
        "rating": 10
      },
      {
        "title": "Kes",
        "director": "Ken Loach",
        "year": 1969,
        "country": "UK",
        "rating": 10
      },
      {
        "title": "A Clockwork Orange",
        "director": "Stanley Kubrick",
        "year": 1971,
        "country": "UK",
        "genre": "Satire, Psychological Sci-Fi",
        "rating": 10
      },
      {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "year": 1972,
        "country": "USA",
        "genre": "Gangster Film, Crime Drama",
        "rating": 10
      },
      {
        "title": "Solaris",
        "director": "Andrei Tarkovsky",
        "year": 1972,
        "country": "USSR"
      },
      {
        "title": "F for Fake",
        "director": "Orson Welles",
        "year": 1973,
        "country": "France-Iran-West Germany",
        "rating": 10
      },
      {
        "title": "The Long Goodbye",
        "director": "Robert Altman",
        "year": 1973,
        "country": "USA",
        "genre": "Mystery, Post-Noir (Modern Noir)",
        "rating": 10
      },
      {
        "title": "Paper Moon",
        "director": "Peter Bogdanovich",
        "year": 1973,
        "country": "USA",
        "genre": "Comedy Drama, Road Movie",
        "rating": 10
      },
      {
        "title": "The Wicker Man",
        "director": "Robin Hardy",
        "year": 1973,
        "country": "UK",
        "genre": "Occult Horror, Police Detective Film",
        "rating": 10
      },
      {
        "title": "Deep Red",
        "director": "Dario Argento",
        "year": 1975,
        "country": "Italy",
        "genre": "Thriller, Giallo",
        "rating": 10
      },
      {
        "title": "Eraserhead",
        "director": "David Lynch",
        "year": 1977,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Suspiria",
        "director": "Dario Argento",
        "year": 1977,
        "country": "Italy",
        "genre": "Horror, Gothic Film",
        "rating": 10
      },
      {
        "title": "Reds",
        "director": "Warren Beatty",
        "year": 1981,
        "country": "USA",
        "genre": "Epic, Historical Film",
        "rating": 10
      },
      {
        "title": "Fanny and Alexander",
        "director": "Ingmar Bergman",
        "year": 1982,
        "country": "Sweden",
        "genre": "Family Drama, Childhood Drama",
        "rating": 10
      },
      {
        "title": "Koyaanisqatsi",
        "director": "Godfrey Reggio",
        "year": 1982,
        "country": "USA",
        "genre": "Essay Film, Documentary",
        "rating": 10
      },
      {
        "title": "The Thing",
        "director": "John Carpenter",
        "year": 1982,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Ran",
        "director": "Akira Kurosawa",
        "year": 1985,
        "country": "France-Japan",
        "rating": 10
      },
      {
        "title": "Au revoir les enfants",
        "director": "Louis Malle",
        "year": 1987,
        "country": "France",
        "genre": "War Drama, Childhood Drama",
        "rating": 10
      },
      {
        "title": "Cinema Paradiso",
        "director": "Giuseppe Tornatore",
        "year": 1988,
        "country": "Italy-France",
        "rating": 10
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "year": 1988,
        "country": "Japan",
        "rating": 10
      },
      {
        "title": "Women on the Verge of a Nervous Breakdown",
        "director": "Pedro Almodóvar",
        "year": 1988,
        "country": "Spain",
        "genre": "Comedy, Farce",
        "rating": 10
      },
      {
        "title": "Naked",
        "director": "Mike Leigh",
        "year": 1993,
        "country": "UK",
        "genre": "Urban Drama, Social Problem Film",
        "rating": 10
      },
      {
        "title": "Crumb",
        "director": "Terry Zwigoff",
        "year": 1994,
        "country": "USA",
        "genre": "Documentary, Biography",
        "rating": 10
      },
      {
        "title": "Ed Wood",
        "director": "Tim Burton",
        "year": 1994,
        "country": "USA",
        "genre": "Comedy Drama, Biography",
        "rating": 10
      },
      {
        "title": "Fargo",
        "director": "Joel Coen & Ethan Coen",
        "year": 1996,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Princess Mononoke",
        "director": "Hayao Miyazaki",
        "year": 1997,
        "country": "Japan",
        "genre": "Anime, Fantasy Adventure",
        "rating": 10
      },
      {
        "title": "The Big Lebowski",
        "director": "Joel Coen & Ethan Coen",
        "year": 1998,
        "country": "USA-UK",
        "rating": 10
      },
      {
        "title": "Requiem for a Dream",
        "director": "Darren Aronofsky",
        "year": 2000,
        "country": "USA",
        "genre": "Addiction Drama, Psychological Drama",
        "rating": 10
      },
      {
        "title": "Amélie",
        "director": "Jean-Pierre Jeunet",
        "year": 2001,
        "country": "France-Germany",
        "genre": "Romance, Comedy",
        "rating": 10
      },
      {
        "title": "Spirited Away",
        "director": "Hayao Miyazaki",
        "year": 2001,
        "country": "Japan",
        "rating": 10
      },
      {
        "title": "Y tu mamá también",
        "director": "Alfonso Cuarón",
        "year": 2001,
        "country": "Mexico",
        "genre": "Coming-of-Age, Road Movie",
        "rating": 10
      },
      {
        "title": "Dogville",
        "director": "Lars von Trier",
        "year": 2003,
        "country": "Denmark-Sweden-France-UK-Germany-Finland-Italy-Netherlands-Norway",
        "genre": "Drama, Avant-garde-Experimental",
        "rating": 10
      },
      {
        "title": "Kill Bill Vol. 1",
        "director": "Quentin Tarantino",
        "year": 2003,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Spring, Summer, Autumn, Winter... and Spring",
        "director": "Kim Ki-duk",
        "year": 2003,
        "country": "South Korea-Germany",
        "genre": "Psychological Drama, Religious Drama",
        "rating": 10
      },
      {
        "title": "Eternal Sunshine of the Spotless Mind",
        "director": "Michel Gondry",
        "year": 2004,
        "country": "USA"
      },
      {
        "title": "Pan's Labyrinth",
        "director": "Guillermo del Toro",
        "year": 2006,
        "country": "Spain-Mexico-USA",
        "genre": "Fantasy, Fairy Tales & Legends",
        "rating": 10
      },
      {
        "title": "Inglourious Basterds",
        "director": "Quentin Tarantino",
        "year": 2009,
        "country": "USA-Germany",
        "genre": "War Adventure",
        "rating": 10
      },
      {
        "title": "Blue is the Warmest Colour",
        "director": "Abdellatif Kechiche",
        "year": 2013,
        "country": "France-Belgium-Spain",
        "rating": 10
      },
      {
        "title": "Parasite",
        "director": "Bong Joon-ho",
        "year": 2019,
        "country": "South Korea",
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
        "rating": 9
      },
      {
        "title": "The General",
        "director": "Buster Keaton",
        "year": 1926,
        "country": "USA",
        "genre": "Buster Keaton & Clyde Bruckman",
        "rating": 9
      },
      {
        "title": "Un Chien andalou",
        "director": "Luis Buñuel",
        "year": 1928,
        "country": "France",
        "genre": "Avant-garde-Experimental, Surrealist Film",
        "rating": 9
      },
      {
        "title": "Trouble in Paradise",
        "director": "Ernst Lubitsch",
        "year": 1932,
        "country": "USA",
        "genre": "Sophisticated Comedy, Romantic Comedy"
      },
      {
        "title": "It Happened One Night",
        "director": "Frank Capra",
        "year": 1934,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "The 39 Steps",
        "director": "Alfred Hitchcock",
        "year": 1935,
        "country": "UK",
        "genre": "Thriller, Spy Film"
      },
      {
        "title": "A Night at the Opera",
        "director": "Sam Wood",
        "year": 1935,
        "country": "USA",
        "genre": "Anarchic Comedy, Farce",
        "rating": 9
      },
      {
        "title": "Top Hat",
        "director": "Mark Sandrich",
        "year": 1935,
        "country": "USA",
        "genre": "Musical Romance, Romantic Comedy"
      },
      {
        "title": "The Adventures of Robin Hood",
        "director": "Michael Curtiz",
        "year": 1938,
        "country": "USA",
        "genre": "Swashbuckler, Romantic Adventure"
      },
      {
        "title": "Bringing Up Baby",
        "director": "Howard Hawks",
        "year": 1938,
        "country": "USA",
        "genre": "Screwball Comedy, Romantic Comedy"
      },
      {
        "title": "Gone with the Wind",
        "director": "Victor Fleming",
        "year": 1939,
        "country": "USA",
        "genre": "Romantic Epic, Historical Epic"
      },
      {
        "title": "His Girl Friday",
        "director": "Howard Hawks",
        "year": 1940,
        "country": "USA",
        "genre": "Screwball Comedy, Romantic Comedy"
      },
      {
        "title": "Pinocchio",
        "director": "Ben Sharpsteen & Hamilton Luske",
        "year": 1940,
        "country": "USA",
        "genre": "Children's Fantasy, Animated Musical",
        "rating": 9
      },
      {
        "title": "Casablanca",
        "director": "Michael Curtiz",
        "year": 1942,
        "country": "USA",
        "genre": "Drama, War Romance"
      },
      {
        "title": "To Be or Not to Be",
        "director": "Ernst Lubitsch",
        "year": 1942,
        "country": "USA",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Laura",
        "director": "Otto Preminger",
        "year": 1944,
        "country": "USA",
        "genre": "Mystery, Film Noir"
      },
      {
        "title": "To Have and Have Not",
        "director": "Howard Hawks",
        "year": 1944,
        "country": "USA",
        "genre": "Drama, Romance",
        "rating": 9
      },
      {
        "title": "Brief Encounter",
        "director": "David Lean",
        "year": 1945,
        "country": "UK",
        "genre": "Drama, Romance"
      },
      {
        "title": "Les Dames du Bois de Boulogne",
        "director": "Robert Bresson",
        "year": 1945,
        "country": "France",
        "genre": "Psychological Drama, Period Film"
      },
      {
        "title": "The Big Sleep",
        "director": "Howard Hawks",
        "year": 1946,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Great Expectations",
        "director": "David Lean",
        "year": 1946,
        "country": "UK",
        "genre": "Drama, Period Film",
        "rating": 9
      },
      {
        "title": "Notorious",
        "director": "Alfred Hitchcock",
        "year": 1946,
        "country": "USA",
        "genre": "Thriller, Romantic Mystery",
        "rating": 9
      },
      {
        "title": "The Treasure of the Sierra Madre",
        "director": "John Huston",
        "year": 1948,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "On the Town",
        "director": "Stanley Donen & Gene Kelly",
        "year": 1949,
        "country": "USA",
        "genre": "Musical, Comedy",
        "rating": 9
      },
      {
        "title": "The Third Man",
        "director": "Carol Reed",
        "year": 1949,
        "country": "UK",
        "genre": "Mystery, Film Noir",
        "rating": 9
      },
      {
        "title": "In a Lonely Place",
        "director": "Nicholas Ray",
        "year": 1950,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Orpheus",
        "director": "Jean Cocteau",
        "year": 1950,
        "country": "France",
        "genre": "Fantasy, Romantic Fantasy",
        "rating": 9
      },
      {
        "title": "A Streetcar Named Desire",
        "director": "Elia Kazan",
        "year": 1951,
        "country": "USA",
        "genre": "Marriage Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Day the Earth Stood Still",
        "director": "Robert Wise",
        "year": 1951,
        "country": "USA",
        "genre": "Science Fiction, Alien Invasion Film",
        "rating": 9
      },
      {
        "title": "Diary of a Country Priest",
        "director": "Robert Bresson",
        "year": 1951,
        "country": "France"
      },
      {
        "title": "Limelight",
        "director": "Charles Chaplin",
        "year": 1952,
        "country": "USA",
        "genre": "Comedy Drama, Melodrama"
      },
      {
        "title": "Singin' in the Rain",
        "director": "Stanley Donen",
        "year": 1952,
        "country": "USA",
        "genre": "Musical, Showbiz Comedy",
        "rating": 9
      },
      {
        "title": "The Band Wagon",
        "director": "Vincente Minnelli",
        "year": 1953,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "The Big Heat",
        "director": "Fritz Lang",
        "year": 1953,
        "country": "USA",
        "genre": "Crime, Film Noir"
      },
      {
        "title": "Summer with Monika",
        "director": "Ingmar Bergman",
        "year": 1953,
        "country": "Sweden",
        "genre": "Psychological Drama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "La Strada",
        "director": "Federico Fellini",
        "year": 1954,
        "country": "Italy",
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "French Cancan",
        "director": "Jean Renoir",
        "year": 1955,
        "country": "France",
        "genre": "Comedy Drama, Musical Comedy",
        "rating": 9
      },
      {
        "title": "Les Diaboliques",
        "director": "Henri-Georges Clouzot",
        "year": 1955,
        "country": "France",
        "genre": "Thriller, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "The Ten Commandments",
        "director": "Cecil B. DeMille",
        "year": 1956,
        "country": "USA",
        "genre": "Religious Epic, Hagiography",
        "rating": 9
      },
      {
        "title": "Nights of Cabiria",
        "director": "Federico Fellini",
        "year": 1957,
        "country": "Italy-France",
        "rating": 9
      },
      {
        "title": "12 Angry Men",
        "director": "Sidney Lumet",
        "year": 1957,
        "country": "USA",
        "genre": "Drama, Courtroom Drama",
        "rating": 9
      },
      {
        "title": "The Cranes Are Flying",
        "director": "Mikhail Kalatozov",
        "year": 1957,
        "country": "USSR",
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Sweet Smell of Success",
        "director": "Alexander Mackendrick",
        "year": 1957,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Vertigo",
        "director": "Alfred Hitchcock",
        "year": 1958,
        "country": "USA",
        "genre": "Romantic Mystery, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Anatomy of a Murder",
        "director": "Otto Preminger",
        "year": 1959,
        "country": "USA",
        "genre": "Drama, Courtroom Drama",
        "rating": 9
      },
      {
        "title": "Pickpocket",
        "director": "Robert Bresson",
        "year": 1959,
        "country": "France",
        "genre": "Crime Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Eyes Without a Face",
        "director": "Georges Franju",
        "year": 1960,
        "country": "France-Italy",
        "rating": 9
      },
      {
        "title": "The Virgin Spring",
        "director": "Ingmar Bergman",
        "year": 1960,
        "country": "Sweden",
        "genre": "Drama, Period Film",
        "rating": 9
      },
      {
        "title": "Breakfast at Tiffany's",
        "director": "Blake Edwards",
        "year": 1961,
        "country": "USA",
        "genre": "Comedy Drama, Romantic Comedy",
        "rating": 9
      },
      {
        "title": "The Innocents",
        "director": "Jack Clayton",
        "year": 1961,
        "country": "UK",
        "rating": 9
      },
      {
        "title": "Last Year at Marienbad",
        "director": "Alain Resnais",
        "year": 1961,
        "country": "France-Italy",
        "genre": "Avant-garde-Experimental, Psychological Drama",
        "rating": 9
      },
      {
        "title": "West Side Story",
        "director": "Robert Wise",
        "year": 1961,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Yojimbo",
        "director": "Akira Kurosawa",
        "year": 1961,
        "country": "Japan",
        "genre": "Adventure, Samurai Film",
        "rating": 9
      },
      {
        "title": "Harakiri",
        "director": "Masaki Kobayashi",
        "year": 1962,
        "country": "Japan",
        "genre": "Drama, Samurai Film",
        "rating": 9
      },
      {
        "title": "La Jetée",
        "director": "Chris Marker",
        "year": 1962,
        "country": "France",
        "genre": "Science Fiction, Avant-garde-Experimental",
        "rating": 9
      },
      {
        "title": "Lawrence of Arabia",
        "director": "David Lean",
        "year": 1962,
        "country": "UK",
        "genre": "Epic, British Empire Film",
        "rating": 9
      },
      {
        "title": "Winter Light",
        "director": "Ingmar Bergman",
        "year": 1962,
        "country": "Sweden",
        "genre": "Psychological Drama, Religious Drama",
        "rating": 9
      },
      {
        "title": "Shock Corridor",
        "director": "Samuel Fuller",
        "year": 1963,
        "country": "USA",
        "genre": "Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Silence",
        "director": "Ingmar Bergman",
        "year": 1963,
        "country": "Sweden",
        "rating": 9
      },
      {
        "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "director": "Stanley Kubrick",
        "year": 1964,
        "country": "UK-USA",
        "genre": "Black Comedy, Anti-War Film",
        "rating": 9
      },
      {
        "title": "Marnie",
        "director": "Alfred Hitchcock",
        "year": 1964,
        "country": "USA",
        "genre": "Romantic Mystery, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Belle de jour",
        "director": "Luis Buñuel",
        "year": 1967,
        "country": "France-Italy",
        "rating": 9
      },
      {
        "title": "Night of the Living Dead",
        "director": "George A. Romero",
        "year": 1968,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Easy Rider",
        "director": "Dennis Hopper",
        "year": 1969,
        "country": "USA",
        "genre": "Road Movie, Biker Film",
        "rating": 9
      },
      {
        "title": "Harold and Maude",
        "director": "Hal Ashby",
        "year": 1971,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Pat Garrett and Billy the Kid",
        "director": "Sam Peckinpah",
        "year": 1973,
        "country": "USA",
        "genre": "Revisionist Western, Outlaw (Gunfighter) Film",
        "rating": 9
      },
      {
        "title": "The Spirit of the Beehive",
        "director": "Victor Erice",
        "year": 1973,
        "country": "Spain",
        "genre": "Drama, Childhood Drama",
        "rating": 9
      },
      {
        "title": "Alice in the Cities",
        "director": "Wim Wenders",
        "year": 1974,
        "country": "West Germany",
        "genre": "Drama, Road Movie",
        "rating": 9
      },
      {
        "title": "Monty Python and the Holy Grail",
        "director": "Terry Gilliam",
        "year": 1975,
        "country": "UK",
        "genre": "Anarchic Comedy, Parody/Spoof",
        "rating": 9
      },
      {
        "title": "Monty Python's Life of Brian",
        "director": "Terry Jones",
        "year": 1979,
        "country": "UK",
        "genre": "Parody/Spoof, Religious Comedy",
        "rating": 9
      },
      {
        "title": "Amarcord",
        "director": "Federico Fellini",
        "year": 1973,
        "country": "Italy",
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "The Holy Mountain",
        "director": "Alejandro Jodorowsky",
        "year": 1973,
        "country": "Mexico-USA",
        "genre": "Avant-garde-Experimental, Surrealist Film",
        "rating": 9
      },
      {
        "title": "Mean Streets",
        "director": "Martin Scorsese",
        "year": 1973,
        "country": "USA",
        "rating": 10
      },
      {
        "title": "Ali: Fear Eats the Soul",
        "director": "Rainer Werner Fassbinder",
        "year": 1974,
        "country": "West Germany",
        "genre": "Melodrama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "The Godfather Part II",
        "director": "Francis Ford Coppola",
        "year": 1974,
        "country": "USA",
        "genre": "Gangster Film, Crime Drama",
        "rating": 9
      },
      {
        "title": "The Man Who Would Be King",
        "director": "John Huston",
        "year": 1975,
        "country": "USA",
        "genre": "Adventure, British Empire Film",
        "rating": 9
      },
      {
        "title": "The Mirror",
        "director": "Andrei Tarkovsky",
        "year": 1975,
        "country": "USSR",
        "genre": "Avant-garde-Experimental, Essay Film",
        "rating": 9
      },
      {
        "title": "Annie Hall",
        "director": "Woody Allen",
        "year": 1977,
        "country": "USA",
        "genre": "Romantic Comedy, Urban Comedy",
        "rating": 9
      },
      {
        "title": "Close Encounters of the Third Kind",
        "director": "Steven Spielberg",
        "year": 1977,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Alien",
        "director": "Ridley Scott",
        "year": 1979,
        "country": "USA",
        "genre": "Horror, Science Fiction",
        "rating": 9
      },
      {
        "title": "Apocalypse Now",
        "director": "Francis Ford Coppola",
        "year": 1979,
        "country": "USA",
        "genre": "Anti-War Film, Jungle Film",
        "rating": 9
      },
      {
        "title": "The Empire Strikes Back",
        "director": "Irvin Kershner",
        "year": 1980,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Kagemusha",
        "director": "Akira Kurosawa",
        "year": 1980,
        "country": "Japan",
        "genre": "Historical Epic, Samurai Film",
        "rating": 9
      },
      {
        "title": "The Shining",
        "director": "Stanley Kubrick",
        "year": 1980,
        "country": "USA",
        "genre": "Horror, Haunted House Film",
        "rating": 9
      },
      {
        "title": "Blade Runner",
        "director": "Ridley Scott",
        "year": 1982,
        "country": "USA",
        "genre": "Science Fiction, Tech Noir",
        "rating": 9
      },
      {
        "title": "E.T. The Extra-Terrestrial",
        "director": "Steven Spielberg",
        "year": 1982,
        "country": "USA",
        "genre": "Science Fiction, Children's Fantasy",
        "rating": 9
      },
      {
        "title": "Veronika Voss",
        "director": "Rainer Werner Fassbinder",
        "year": 1982,
        "country": "West Germany",
        "genre": "Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Scarface",
        "director": "Brian De Palma",
        "year": 1983,
        "country": "USA",
        "genre": "Crime Thriller, Gangster Film",
        "rating": 9
      },
      {
        "title": "Blood Simple",
        "director": "Joel Coen & Ethan Coen",
        "year": 1984,
        "country": "USA",
        "genre": "Post-Noir (Modern Noir), Crime Thriller",
        "rating": 9
      },
      {
        "title": "Paris, Texas",
        "director": "Wim Wenders",
        "year": 1984,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "The Terminator",
        "director": "James Cameron",
        "year": 1984,
        "country": "USA",
        "genre": "Science Fiction, Action",
        "rating": 9
      },
      {
        "title": "Back to the Future",
        "director": "Robert Zemeckis",
        "year": 1985,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "The Purple Rose of Cairo",
        "director": "Woody Allen",
        "year": 1985,
        "country": "USA",
        "genre": "Comedy, Romantic Fantasy",
        "rating": 9
      },
      {
        "title": "Taipei Story",
        "director": "Edward Yang",
        "year": 1985,
        "country": "Taiwan",
        "genre": "Romantic Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Aliens",
        "director": "James Cameron",
        "year": 1986,
        "country": "USA",
        "genre": "Horror, Sci-Fi Action",
        "rating": 9
      },
      {
        "title": "Hannah and Her Sisters",
        "director": "Woody Allen",
        "year": 1986,
        "country": "USA",
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "The Sacrifice",
        "director": "Andrei Tarkovsky",
        "year": 1986,
        "country": "France-Sweden",
        "rating": 9
      },
      {
        "title": "Evil Dead II",
        "director": "Sam Raimi",
        "year": 1987,
        "country": "USA",
        "genre": "Horror, Horror Comedy",
        "rating": 9
      },
      {
        "title": "Robocop",
        "director": "Paul Verhoeven",
        "year": 1987,
        "country": "USA",
        "genre": "Action, Science Fiction",
        "rating": 9
      },
      {
        "title": "Crimes and Misdemeanors",
        "director": "Woody Allen",
        "year": 1989,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Do the Right Thing",
        "director": "Spike Lee",
        "year": 1989,
        "country": "USA",
        "genre": "Urban Drama, Ensemble Film",
        "rating": 9
      },
      {
        "title": "Edward Scissorhands",
        "director": "Tim Burton",
        "year": 1990,
        "country": "USA",
        "genre": "Fantasy Comedy, Romance",
        "rating": 9
      },
      {
        "title": "A Brighter Summer Day",
        "director": "Edward Yang",
        "year": 1991,
        "country": "Taiwan",
        "genre": "Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Barton Fink",
        "director": "Joel Coen & Ethan Coen",
        "year": 1991,
        "country": "USA",
        "genre": "Comedy Drama, Black Comedy",
        "rating": 9
      },
      {
        "title": "The Silence of the Lambs",
        "director": "Jonathan Demme",
        "year": 1991,
        "country": "USA",
        "genre": "Psychological Drama, Family Drama",
        "rating": 9
      },
      {
        "title": "Thelma & Louise",
        "director": "Ridley Scott",
        "year": 1991,
        "country": "USA",
        "genre": "Road Movie, Buddy Film",
        "rating": 9
      },
      {
        "title": "Reservoir Dogs",
        "director": "Quentin Tarantino",
        "year": 1992,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Dazed and Confused",
        "director": "Richard Linklater",
        "year": 1993,
        "country": "USA",
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Groundhog Day",
        "director": "Harold Ramis",
        "year": 1993,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "The Nightmare Before Christmas",
        "director": "Henry Selick",
        "year": 1993,
        "country": "USA",
        "genre": "Fantasy, Animated Musical",
        "rating": 9
      },
      {
        "title": "Three Colours: Blue",
        "director": "Krzysztof Kieslowski",
        "year": 1993,
        "country": "France-Poland-Switzerland",
        "rating": 9
      },
      {
        "title": "Chungking Express",
        "director": "Wong Kar-wai",
        "year": 1994,
        "country": "Hong Kong",
        "rating": 9
      },
      {
        "title": "Before Sunrise",
        "director": "Richard Linklater",
        "year": 1995,
        "country": "USA",
        "genre": "Romance, Comedy Drama",
        "rating": 9
      },
      {
        "title": "Safe",
        "director": "Todd Haynes",
        "year": 1995,
        "country": "USA",
        "genre": "Medical Drama, Psychological Drama",
        "rating": 9
      },
      {
        "title": "Trainspotting",
        "director": "Danny Boyle",
        "year": 1996,
        "country": "UK",
        "genre": "Comedy Drama, Addiction Drama",
        "rating": 9
      },
      {
        "title": "Hana-bi",
        "director": "Takeshi Kitano",
        "year": 1997,
        "country": "Japan",
        "genre": "Crime Drama, Road Movie",
        "rating": 9
      },
      {
        "title": "Starship Troopers",
        "director": "Paul Verhoeven",
        "year": 1997,
        "country": "USA",
        "genre": "Sci-Fi Action, Political Satire",
        "rating": 9
      },
      {
        "title": "Festen",
        "director": "Thomas Vinterberg",
        "year": 1998,
        "country": "Denmark",
        "genre": "Ensemble Film, Family Drama",
        "rating": 9
      },
      {
        "title": "Rushmore",
        "director": "Wes Anderson",
        "year": 1998,
        "country": "USA",
        "genre": "Comedy Drama, Coming-of-Age",
        "rating": 9
      },
      {
        "title": "Amores perros",
        "director": "Alejandro González Iñárritu",
        "year": 2000,
        "country": "Mexico",
        "genre": "Ensemble Film, Urban Drama",
        "rating": 9
      },
      {
        "title": "Talk to Her",
        "director": "Pedro Almodóvar",
        "year": 2002,
        "country": "Spain",
        "genre": "Melodrama, Romantic Drama",
        "rating": 9
      },
      {
        "title": "Before Sunset",
        "director": "Richard Linklater",
        "year": 2004,
        "country": "USA",
        "genre": "Romance, Comedy Drama",
        "rating": 9
      },
      {
        "title": "A History of Violence",
        "director": "David Cronenberg",
        "year": 2005,
        "country": "USA-Germany",
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 9
      },
      {
        "title": "Children of Men",
        "director": "Alfonso Cuarón",
        "year": 2006,
        "country": "USA-UK",
        "genre": "Psychological Sci-Fi, Action Thriller",
        "rating": 9
      },
      {
        "title": "The Host",
        "director": "Bong Joon-ho",
        "year": 2006,
        "country": "South Korea-Japan",
        "genre": "Sci-Fi Horror, Monster Film",
        "rating": 9
      },
      {
        "title": "Inland Empire",
        "director": "David Lynch",
        "year": 2006,
        "country": "USA-France-Poland",
        "genre": "Avant-garde-Experimental, Mystery",
        "rating": 9
      },
      {
        "title": "There Will Be Blood",
        "director": "Paul Thomas Anderson",
        "year": 2007,
        "country": "USA",
        "rating": 9
      },
      {
        "title": "Certified Copy",
        "director": "Abbas Kiarostami",
        "year": 2010,
        "country": "France-Italy-Belgium-Iran",
        "genre": "Drama, Slice of Life",
        "rating": 9
      },
      {
        "title": "Inside Llewyn Davis",
        "director": "Joel Coen & Ethan Coen",
        "year": 2013,
        "country": "USA-UK-France",
        "rating": 9
      },
      {
        "title": "Boyhood",
        "director": "Richard Linklater",
        "year": 2014,
        "country": "USA",
        "genre": "Childhood Drama, Coming-of-Age"
      },
      {
        "title": "Once Upon a Time... in Hollywood",
        "director": "Quentin Tarantino",
        "year": 2019,
        "country": "USA-UK-China",
        "rating": 9
      },
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
        "genre": "Comedy, Slapstick",
        "rating": 8
      },
      {
        "title": "Seven Chances",
        "director": "Buster Keaton",
        "year": 1925,
        "country": "USA",
        "genre": "Comedy of Errors, Romantic Comedy",
        "rating": 8
      },
      {
        "title": "Strike",
        "director": "Sergei Eisenstein",
        "year": 1925,
        "country": "USSR",
        "genre": "Political Drama, Historical Epic",
        "rating": 8
      },
      {
        "title": "The Passion of Joan of Arc",
        "director": "Carl Theodor Dreyer",
        "year": 1928,
        "country": "France",
        "genre": "Historical Film, Hagiography"
      },
      {
        "title": "City Lights",
        "director": "Charles Chaplin",
        "year": 1931,
        "country": "USA",
        "genre": "Comedy Drama, Romance",
        "rating": 8
      },
      {
        "title": "Land Without Bread",
        "director": "Luis Buñuel",
        "year": 1932,
        "country": "Spain",
        "genre": "Culture & Society, Documentary",
        "rating": 8
      },
      {
        "title": "Scarface",
        "director": "Howard Hawks",
        "year": 1932,
        "country": "USA",
        "genre": "Gangster Film, Crime Drama",
        "image": "scarface1932",
        "rating": 8
      },
      {
        "title": "Duck Soup",
        "director": "Leo McCarey",
        "year": 1933,
        "country": "USA",
        "genre": "Anarchic Comedy, Farce"
      },
      {
        "title": "L'Atalante",
        "director": "Jean Vigo",
        "year": 1934,
        "country": "France",
        "genre": "Romantic Drama, Marriage Drama",
        "rating": 8
      },
      {
        "title": "Bride of Frankenstein",
        "director": "James Whale",
        "year": 1935,
        "country": "USA"
      },
      {
        "title": "Modern Times",
        "director": "Charles Chaplin",
        "year": 1936,
        "country": "USA",
        "genre": "Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Holiday",
        "director": "George Cukor",
        "year": 1938,
        "country": "USA",
        "genre": "Comedy, Romance"
      },
      {
        "title": "Ninotchka",
        "director": "Ernst Lubitsch",
        "year": 1939,
        "country": "USA",
        "genre": "Romantic Comedy, Sophisticated Comedy",
        "rating": 7
      },
      {
        "title": "The Story of the Last Chrysanthemums",
        "director": "Kenji Mizoguchi",
        "year": 1939,
        "country": "Japan",
        "rating": 8
      },
      {
        "title": "The Wizard of Oz",
        "director": "Victor Fleming",
        "year": 1939,
        "country": "USA",
        "genre": "Children's/Family, Musical Fantasy",
        "rating": 8
      },
      {
        "title": "Citizen Kane",
        "director": "Orson Welles",
        "year": 1941,
        "country": "USA",
        "genre": "Drama, Film a Clef",
        "rating": 8
      },
      {
        "title": "The Maltese Falcon",
        "director": "John Huston",
        "year": 1941,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Ivan the Terrible, Part 1",
        "director": "Sergei Eisenstein",
        "year": 1944,
        "country": "USSR",
        "rating": 8
      },
      {
        "title": "The Miracle of Morgan's Creek",
        "director": "Preston Sturges",
        "year": 1944,
        "country": "USA",
        "genre": "Satire, Screwball Comedy",
        "rating": 8
      },
      {
        "title": "Detour",
        "director": "Edgar G. Ulmer",
        "year": 1945,
        "country": "USA",
        "genre": "Film Noir, Crime Drama"
      },
      {
        "title": "Mildred Pierce",
        "director": "Michael Curtiz",
        "year": 1945,
        "country": "USA",
        "genre": "Melodrama, Film Noir"
      },
      {
        "title": "It's a Wonderful Life",
        "director": "Frank Capra",
        "year": 1946,
        "country": "USA",
        "genre": "Comedy Drama, Fantasy",
        "rating": 8
      },
      {
        "title": "Ivan the Terrible, Part 2",
        "director": "Sergei Eisenstein",
        "year": 1946,
        "country": "USSR",
        "rating": 8
      },
      {
        "title": "Monsieur Verdoux",
        "director": "Charles Chaplin",
        "year": 1947,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Out of the Past",
        "director": "Jacques Tourneur",
        "year": 1947,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Bicycle Thieves",
        "director": "Vittorio De Sica",
        "year": 1948,
        "country": "Italy",
        "genre": "Family Drama, Urban Drama",
        "rating": 8
      },
      {
        "title": "Fort Apache",
        "director": "John Ford",
        "year": 1948,
        "country": "USA",
        "genre": "Western, Cavalry Film",
        "rating": 8
      },
      {
        "title": "The Red Shoes",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1948,
        "country": "UK",
        "rating": 8
      },
      {
        "title": "Rope",
        "director": "Alfred Hitchcock",
        "year": 1948,
        "country": "USA",
        "genre": "Thriller, Psychological Thriller",
        "rating": 8
      },
      {
        "title": "Kind Hearts and Coronets",
        "director": "Robert Hamer",
        "year": 1949,
        "country": "UK",
        "rating": 8
      },
      {
        "title": "She Wore a Yellow Ribbon",
        "director": "John Ford",
        "year": 1949,
        "country": "USA",
        "genre": "Western, Cavalry Film",
        "rating": 8
      },
      {
        "title": "White Heat",
        "director": "Raoul Walsh",
        "year": 1949,
        "country": "USA",
        "genre": "Crime, Gangster Film",
        "rating": 8
      },
      {
        "title": "Gun Crazy",
        "director": "Joseph H. Lewis",
        "year": 1950,
        "country": "USA",
        "genre": "Film Noir, Crime Thriller",
        "rating": 8
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
        "country": "USA",
        "genre": "Psychological Thriller, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Bad and the Beautiful",
        "director": "Vincente Minnelli",
        "year": 1952,
        "country": "USA",
        "genre": "Drama, Showbiz Drama",
        "rating": 8
      },
      {
        "title": "El",
        "director": "Luis Buñuel",
        "year": 1953,
        "country": "Mexico",
        "genre": "Black Comedy, Satire",
        "rating": 8
      },
      {
        "title": "Ugetsu monogatari",
        "director": "Kenji Mizoguchi",
        "year": 1953,
        "country": "Japan",
        "genre": "Romantic Fantasy, Period Film",
        "rating": 8
      },
      {
        "title": "On the Waterfront",
        "director": "Elia Kazan",
        "year": 1954,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Seven Samurai",
        "director": "Akira Kurosawa",
        "year": 1954,
        "country": "Japan",
        "genre": "Drama, Samurai Film",
        "rating": 8
      },
      {
        "title": "All That Heaven Allows",
        "director": "Douglas Sirk",
        "year": 1955,
        "country": "USA",
        "genre": "Melodrama, Romantic Drama",
        "rating": 8
      },
      {
        "title": "The Ladykillers",
        "director": "Alexander Mackendrick",
        "year": 1955,
        "country": "UK",
        "genre": "Crime, Black Comedy",
        "rating": 8
      },
      {
        "title": "Lola Montès",
        "director": "Max Ophüls",
        "year": 1955,
        "country": "France-West Germany",
        "genre": "Drama, Period Film",
        "rating": 8
      },
      {
        "title": "Night and Fog",
        "director": "Alain Resnais",
        "year": 1955,
        "country": "France",
        "rating": 8
      },
      {
        "title": "Rebel Without a Cause",
        "director": "Nicholas Ray",
        "year": 1955,
        "country": "USA",
        "genre": "Teen Movie, Family Drama",
        "rating": 8
      },
      {
        "title": "Rififi",
        "director": "Jules Dassin",
        "year": 1955,
        "country": "France",
        "genre": "Crime Thriller, Caper",
        "rating": 8
      },
      {
        "title": "Smiles of a Summer Night",
        "director": "Ingmar Bergman",
        "year": 1955,
        "country": "Sweden",
        "genre": "Comedy, Ensemble Film",
        "rating": 8
      },
      {
        "title": "Bigger Than Life",
        "director": "Nicholas Ray",
        "year": 1956,
        "country": "USA",
        "genre": "Psychological Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "The Killing",
        "director": "Stanley Kubrick",
        "year": 1956,
        "country": "USA",
        "genre": "Crime Thriller, Film Noir",
        "rating": 8
      },
      {
        "title": "An Affair to Remember",
        "director": "Leo McCarey",
        "year": 1957,
        "country": "USA",
        "genre": "Romance, Melodrama",
        "rating": 8
      },
      {
        "title": "Night of the Demon",
        "director": "Jacques Tourneur",
        "year": 1957,
        "country": "UK",
        "genre": "Occult Horror, Gothic Film",
        "rating": 8
      },
      {
        "title": "The Misfits",
        "director": "John Huston",
        "year": 1961,
        "country": "USA",
        "genre": "Drama, Modern Western",
        "rating": 8
      },
      {
        "title": "Hatari!",
        "director": "Howard Hawks",
        "year": 1962,
        "country": "USA",
        "genre": "Adventure, Comedy",
        "rating": 8
      },
      {
        "title": "Lolita",
        "director": "Stanley Kubrick",
        "year": 1962,
        "country": "UK",
        "genre": "Black Comedy, Psychological Drama",
        "rating": 8
      },
      {
        "title": "The Man Who Shot Liberty Valance",
        "director": "John Ford",
        "year": 1962,
        "country": "USA",
        "genre": "Western, Outlaw (Gunfighter) Film",
        "rating": 8
      },
      {
        "title": "The Birds",
        "director": "Alfred Hitchcock",
        "year": 1963,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Doctor Zhivago",
        "director": "David Lean",
        "year": 1965,
        "country": "USA",
        "genre": "Romantic Epic, Period Film",
        "rating": 8
      },
      {
        "title": "Pierrot le fou",
        "director": "Jean-Luc Godard",
        "year": 1965,
        "country": "France-Italy",
        "genre": "Road Movie, Romantic Drama",
        "rating": 8
      },
      {
        "title": "Simon of the Desert",
        "director": "Luis Buñuel",
        "year": 1965,
        "country": "Mexico",
        "genre": "Satire, Religious Comedy",
        "rating": 8
      },
      {
        "title": "The Sound of Music",
        "director": "Robert Wise",
        "year": 1965,
        "country": "USA",
        "genre": "Musical, Drama",
        "rating": 8
      },
      {
        "title": "Daisies",
        "director": "Vera Chytilová",
        "year": 1966,
        "country": "Czechoslovakia",
        "rating": 8
      },
      {
        "title": "Bonnie and Clyde",
        "director": "Arthur Penn",
        "year": 1967,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Butch Cassidy and the Sundance Kid",
        "director": "George Roy Hill",
        "year": 1969,
        "country": "USA",
        "genre": "Western, Buddy Film",
        "rating": 8
      },
      {
        "title": "The Wild Bunch",
        "director": "Sam Peckinpah",
        "year": 1969,
        "country": "USA",
        "genre": "Revisionist Western, Outlaw (Gunfighter) Film",
        "rating": 8
      },
      {
        "title": "The Private Life of Sherlock Holmes",
        "director": "Billy Wilder",
        "year": 1970,
        "country": "USA",
        "genre": "Romantic Adventure, Comedy Thriller",
        "rating": 8
      },
      {
        "title": "Death in Venice",
        "director": "Luchino Visconti",
        "year": 1971,
        "country": "Italy",
        "rating": 8
      },
      {
        "title": "Duel",
        "director": "Steven Spielberg",
        "year": 1971,
        "country": "USA",
        "genre": "Thriller, Road Movie",
        "rating": 8
      },
      {
        "title": "Cries and Whispers",
        "director": "Ingmar Bergman",
        "year": 1972,
        "country": "Sweden",
        "genre": "Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "Deliverance",
        "director": "John Boorman",
        "year": 1972,
        "country": "USA",
        "genre": "Drama, Adventure Drama",
        "rating": 8
      },
      {
        "title": "The Discreet Charm of the Bourgeoisie",
        "director": "Luis Buñuel",
        "year": 1972,
        "country": "France",
        "rating": 8
      },
      {
        "title": "Badlands",
        "director": "Terrence Malick",
        "year": 1973,
        "country": "USA",
        "genre": "Crime Drama, Americana",
        "rating": 8
      },
      {
        "title": "Assault on Precinct 13",
        "director": "John Carpenter",
        "year": 1976,
        "country": "USA",
        "genre": "Action Thriller, Police Drama",
        "rating": 8
      },
      {
        "title": "Network",
        "director": "Sidney Lumet",
        "year": 1976,
        "country": "USA",
        "genre": "Comedy Drama, Media Satire",
        "rating": 8
      },
      {
        "title": "The Tenant",
        "director": "Roman Polanski",
        "year": 1976,
        "country": "France-USA",
        "genre": "Thriller, Black Comedy",
        "rating": 8
      },
      {
        "title": "Star Wars",
        "director": "George Lucas",
        "year": 1977,
        "country": "USA",
        "genre": "Science Fiction, Space Adventure",
        "rating": 8
      },
      {
        "title": "Dawn of the Dead",
        "director": "George A. Romero",
        "year": 1978,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Days of Heaven",
        "director": "Terrence Malick",
        "year": 1978,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "An American Werewolf in London",
        "director": "John Landis",
        "year": 1981,
        "country": "USA",
        "genre": "Horror Comedy, Creature Film",
        "rating": 8
      },
      {
        "title": "Excalibur",
        "director": "John Boorman",
        "year": 1981,
        "country": "UK",
        "genre": "Sword-and-Sorcery, Mythological Fantasy",
        "rating": 8
      },
      {
        "title": "Raiders of the Lost Ark",
        "director": "Steven Spielberg",
        "year": 1981,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Amadeus",
        "director": "Milos Forman",
        "year": 1984,
        "country": "USA",
        "genre": "Musical Drama, Biography",
        "rating": 8
      },
      {
        "title": "Once Upon a Time in America",
        "director": "Sergio Leone",
        "year": 1984,
        "country": "Italy-USA",
        "genre": "Crime, Gangster Film",
        "rating": 8
      },
      {
        "title": "Brazil",
        "director": "Terry Gilliam",
        "year": 1985,
        "country": "UK",
        "rating": 8
      },
      {
        "title": "Blue Velvet",
        "director": "David Lynch",
        "year": 1986,
        "country": "USA",
        "genre": "Mystery, Crime Thriller",
        "rating": 8
      },
      {
        "title": "Full Metal Jacket",
        "director": "Stanley Kubrick",
        "year": 1987,
        "country": "USA",
        "genre": "Anti-War Film, War Drama",
        "rating": 8
      },
      {
        "title": "Raising Arizona",
        "director": "Joel Coen & Ethan Coen",
        "year": 1987,
        "country": "USA",
        "genre": "Crime Comedy, Domestic Comedy",
        "rating": 8
      },
      {
        "title": "Akira",
        "director": "Katsuhiro Otomo",
        "year": 1988,
        "country": "Japan",
        "genre": "Science Fiction, Anime",
        "rating": 8
      },
      {
        "title": "Die Hard",
        "director": "John McTiernan",
        "year": 1988,
        "country": "USA",
        "genre": "Action, Action Thriller",
        "rating": 8
      },
      {
        "title": "The Last Temptation of Christ",
        "director": "Martin Scorsese",
        "year": 1988,
        "country": "USA",
        "genre": "Religious Drama, Hagiography",
        "rating": 8
      },
      {
        "title": "They Live",
        "director": "John Carpenter",
        "year": 1988,
        "country": "USA",
        "genre": "Alien Film, Sci-Fi Action",
        "rating": 8
      },
      {
        "title": "The Killer",
        "director": "John Woo",
        "year": 1989,
        "country": "Hong Kong",
        "genre": "Crime, Action Thriller",
        "rating": 8
      },
      {
        "title": "My Own Private Idaho",
        "director": "Gus Van Sant",
        "year": 1991,
        "country": "USA",
        "genre": "Drama, Buddy Film",
        "rating": 8
      },
      {
        "title": "Raise the Red Lantern",
        "director": "Zhang Yimou",
        "year": 1991,
        "country": "Hong Kong",
        "genre": "Period Film, Marriage Drama",
        "rating": 8
      },
      {
        "title": "Terminator 2: Judgment Day",
        "director": "James Cameron",
        "year": 1991,
        "country": "USA",
        "genre": "Science Fiction, Sci-Fi Action",
        "rating": 8
      },
      {
        "title": "Unforgiven",
        "director": "Clint Eastwood",
        "year": 1992,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Carlito's Way",
        "director": "Brian De Palma",
        "year": 1993,
        "country": "USA",
        "genre": "Crime Drama, Gangster Film",
        "rating": 8
      },
      {
        "title": "Schindler's List",
        "director": "Steven Spielberg",
        "year": 1993,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Forrest Gump",
        "director": "Robert Zemeckis",
        "year": 1994,
        "country": "USA",
        "genre": "Comedy Drama, Americana",
        "rating": 8
      },
      {
        "title": "Three Colours: Red",
        "director": "Krzysztof Kieslowski",
        "year": 1994,
        "country": "France-Switzerland-Poland",
        "rating": 8
      },
      {
        "title": "Heat",
        "director": "Michael Mann",
        "year": 1995,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "Se7en",
        "director": "David Fincher",
        "year": 1995,
        "country": "USA",
        "genre": "Police Detective Film, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Usual Suspects",
        "director": "Bryan Singer",
        "year": 1995,
        "country": "USA",
        "genre": "Crime, Thriller",
        "rating": 8
      },
      {
        "title": "Funny Games",
        "director": "Michael Haneke",
        "year": 1997,
        "country": "Austria",
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 8
      },
      {
        "title": "The Thin Red Line",
        "director": "Terrence Malick",
        "year": 1998,
        "country": "USA",
        "rating": 8
      },
      {
        "title": "The Matrix",
        "director": "Lana Wachowski & Lilly Wachowski",
        "year": 1999,
        "country": "USA-Australia",
        "rating": 8
      },
      {
        "title": "Memento",
        "director": "Christopher Nolan",
        "year": 2000,
        "country": "USA",
        "genre": "Mystery, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Royal Tenenbaums",
        "director": "Wes Anderson",
        "year": 2001,
        "country": "USA",
        "genre": "Comedy Drama, Comedy of Manners",
        "rating": 8
      },
      {
        "title": "Saraband",
        "director": "Ingmar Bergman",
        "year": 2003,
        "country": "Sweden-Denmark-Norway-Italy-Finland-Germany-Austria",
        "genre": "Psychological Drama, Family Drama",
        "rating": 8
      },
      {
        "title": "No Country for Old Men",
        "director": "Joel Coen & Ethan Coen",
        "year": 2007,
        "country": "USA",
        "genre": "Thriller, Crime Thriller",
        "rating": 8
      },
      {
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "year": 2008,
        "country": "USA-UK",
        "genre": "Crime Drama, Comic-Book Superhero Film",
        "rating": 8
      },
      {
        "title": "Mad Max: Fury Road",
        "director": "George Miller",
        "year": 2015,
        "country": "Australia-USA",
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
        "genre": "Comedy, Slapstick",
        "rating": 7
      },
      {
        "title": "Steamboat Bill, Jr.",
        "director": "Buster Keaton & Charles Reisner",
        "year": 1928,
        "country": "USA",
        "genre": "Adventure Comedy, Slapstick",
        "rating": 7
      },
      {
        "title": "Man with a Movie Camera",
        "director": "Dziga Vertov",
        "year": 1929,
        "country": "USSR",
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "All Quiet on the Western Front",
        "director": "Lewis Milestone",
        "year": 1930,
        "country": "USA",
        "genre": "War Drama, Anti-War Film"
      },
      {
        "title": "L'Âge d'or",
        "director": "Luis Buñuel",
        "year": 1930,
        "country": "France",
        "genre": "Avant-garde/Experimental, Surrealist Film",
        "rating": 7   
      },
      {
        "title": "Boudu Saved from Drowning",
        "director": "Jean Renoir",
        "year": 1932,
        "country": "France",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Design for Living",
        "director": "Ernst Lubitsch",
        "year": 1933,
        "country": "USA",
        "genre": "Romance, Sophisticated Comedy"
      },
      {
        "title": "Outskirts",
        "director": "Boris Barnet",
        "year": 1933,
        "country": "USSR",
        "genre": "War Drama, Period Film"
      },
      {
        "title": "The Testament of Dr. Mabuse",
        "director": "Fritz Lang",
        "year": 1933,
        "country": "Germany",
        "genre": "Master Criminal Film, Police Detective Film",
        "rating": 7
      },
      {
        "title": "La Grande illusion",
        "director": "Jean Renoir",
        "year": 1937,
        "country": "France",
        "genre": "Anti-War Film, War Drama"
      },
      {
        "title": "Snow White and the Seven Dwarfs",
        "director": "David Hand",
        "year": 1937,
        "country": "USA",
        "rating": "?"
      },
      {
        "title": "Only Angels Have Wings",
        "director": "Howard Hawks",
        "year": 1939,
        "country": "USA"
      },
      {
        "title": "Young Mr. Lincoln",
        "director": "John Ford",
        "year": 1939,
        "country": "USA",
        "genre": "Historical Film, Biography",
        "rating": 7
      },
      {
        "title": "The Philadelphia Story",
        "director": "George Cukor",
        "year": 1940,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "The Great Dictator",
        "director": "Charles Chaplin",
        "year": 1940,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "Dumbo",
        "director": "Ben Sharpsteen",
        "year": 1941,
        "country": "USA",
        "genre": "Animated Musical, Children's Fantasy",
        "rating": 7
      },
      {
        "title": "How Green Was My Valley",
        "director": "John Ford",
        "year": 1941,
        "country": "USA",
        "genre": "Family Drama, Rural Drama",
        "rating": 7
      },
      {
        "title": "The Magnificent Ambersons",
        "director": "Orson Welles",
        "year": 1942,
        "country": "USA",
        "genre": "Family Drama, Period Film",
        "rating": 7
      },
      {
        "title": "Ossessione",
        "director": "Luchino Visconti",
        "year": 1943,
        "country": "Italy",
        "genre": "Drama, Crime",
        "rating": 7
      },
      {
        "title": "Rome, Open City",
        "director": "Roberto Rossellini",
        "year": 1945,
        "country": "Italy",
        "genre": "War Drama, Resistance Film",
        "image": "romeopencity",
        "rating": 7
      },
      {
        "title": "Beauty and the Beast",
        "director": "Jean Cocteau",
        "year": 1946,
        "country": "France",
        "rating": 7
      },
      {
        "title": "Black Narcissus",
        "director": "Michael Powell & Emeric Pressburger",
        "year": 1947,
        "country": "UK",
        "rating": 7
      },
      {
        "title": "The Ghost and Mrs. Muir",
        "director": "Joseph L. Mankiewicz",
        "year": 1947,
        "country": "USA",
        "genre": "Romance, Fantasy",
        "rating": 7
      },
      {
        "title": "The Lady from Shanghai",
        "director": "Orson Welles",
        "year": 1948,
        "country": "USA",
        "genre": "Film Noir, Romantic Mystery",
        "rating": 7
      },
      {
        "title": "The Asphalt Jungle",
        "director": "John Huston",
        "year": 1950,
        "country": "USA",
        "genre": "Crime Thriller, Film Noir",
        "rating": "7"
      },
      {
        "title": "Wagon Master",
        "director": "John Ford",
        "year": 1950,
        "country": "USA",
        "genre": "Western, Traditional Western",
        "rating": 7
      },
      {
        "title": "A Place in the Sun",
        "director": "George Stevens",
        "year": 1951,
        "country": "USA",
        "genre": "Romantic Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Forbidden Games",
        "director": "René Clément",
        "year": 1952,
        "country": "France",
        "genre": "Childhood Drama, War Drama",
        "rating": 7
      },
      {
        "title": "The Quiet Man",
        "director": "John Ford",
        "year": 1952,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "Gentlemen Prefer Blondes",
        "director": "Howard Hawks",
        "year": 1953,
        "country": "US",
        "genre": "Musical Comedy, Romance",
        "rating": 7
      },
      {
        "title": "Sawdust and Tinsel",
        "director": "Ingmar Bergman",
        "year": 1953,
        "country": "Sweden",
        "genre": "Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Johnny Guitar",
        "director": "Nicholas Ray",
        "year": 1954,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "Senso",
        "director": "Luchino Visconti",
        "year": 1954,
        "country": "Italy",
        "genre": "Melodrama, Romantic Drama",
        "rating": 7
      },
      {
        "title": "The Criminal Life of Archibaldo de la Cruz",
        "director": "Luis Buñuel",
        "year": 1955,
        "country": "Mexico",
        "genre": "Crime Comedy, Satire",
        "rating": 7
      },
      {
        "title": "Rio Bravo",
        "director": "Howard Hawks",
        "year": 1959,
        "country": "USA",
        "genre": "Western, Buddy Film",
        "rating": 7
      },
      {
        "title": "Rocco and His Brothers",
        "director": "Luchino Visconti",
        "year": 1960,
        "country": "Italy-France",
        "rating": 7
      },
      {
        "title": "The Ladies Man",
        "director": "Jerry Lewis",
        "year": 1961,
        "country": "USA",
        "genre": "Comedy, Slapstick"
      },
      {
        "title": "Splendor in the Grass",
        "director": "Elia Kazan",
        "year": 1961,
        "country": "USA",
        "genre": "Coming-of-Age, Romantic Drama",
        "rating": 7
      },
      {
        "title": "Jules et Jim",
        "director": "François Truffaut",
        "year": 1962,
        "country": "France",
        "genre": "Drama, Romance",
        "rating": 7
      },
      {
        "title": "The Leopard",
        "director": "Luchino Visconti",
        "year": 1963,
        "country": "Italy",
        "genre": "Epic, Family Drama",
        "rating": 7
      },
      {
        "title": "Red Desert",
        "director": "Michelangelo Antonioni",
        "year": 1964,
        "country": "Italy-France",
        "rating": 7
      },
      {
        "title": "Repulsion",
        "director": "Roman Polanski",
        "year": 1965,
        "country": "UK",
        "genre": "Thriller, Psychological Thriller",
        "rating": 7
      },
      {
        "title": "Hour of the Wolf",
        "director": "Ingmar Bergman",
        "year": 1968,
        "country": "Sweden",
        "genre": "Gothic Film, Psychological Drama",
        "rating": 7
      },
      {
        "title": "O Bandido da Luz Vermelha",
        "director": "Rogério Sganzerla",
        "year": 1968,
        "country": "Brazil",
        "genre": "Biopic"
      },
      {
        "title": "Fat City",
        "director": "John Huston",
        "year": 1972,
        "country": "USA",
        "genre": "Drama, Sports Drama",
        "rating": 7
      },
      {
        "title": "Last Tango in Paris",
        "director": "Bernardo Bertolucci",
        "year": 1972,
        "country": "France-Italy",
        "genre": "Psychological Drama, Erotic Drama",
        "rating": 7
      },
      {
        "title": "Don't Look Now",
        "director": "Nicolas Roeg",
        "year": 1973,
        "country": "UK",
        "genre": "Psychological Thriller, Supernatural Thriller",
        "rating": 7
      },
      {
        "title": "The Exorcist",
        "director": "William Friedkin",
        "year": 1973,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "Chinatown",
        "director": "Roman Polanski",
        "year": 1974,
        "country": "USA",
        "genre": "Mystery, Post-Noir (Modern Noir)",
        "rating": 7
      },
      {
        "title": "Dersu Uzala",
        "director": "Akira Kurosawa",
        "year": 1975,
        "country": "USSR-Japan",
        "genre": "Drama, Adventure Drama",
        "rating": 7
      },
      {
        "title": "Jaws",
        "director": "Steven Spielberg",
        "year": 1975,
        "country": "USA",
        "genre": "Thriller, Natural Horror",
        "rating": 7
      },
      {
        "title": "One Flew Over the Cuckoo's Nest",
        "director": "Milos Forman",
        "year": 1975,
        "country": "USA",
        "genre": "Comedy Drama, Psychological Drama",
        "rating": 7
      },
      {
        "title": "Picnic at Hanging Rock",
        "director": "Peter Weir",
        "year": 1975,
        "country": "Australia",
        "genre": "Mystery, Period Film",
        "rating": 7
      },
      {
        "title": "The Seasons",
        "director": "Artavazd Peleshian",
        "year": 1975,
        "country": "USSR",
        "genre": "Documentary"
      },
      {
        "title": "In the Realm of the Senses",
        "director": "Nagisa Oshima",
        "year": 1976,
        "country": "Japan-France",
        "rating": 7
      },
      {
        "title": "Rocky",
        "director": "John G. Avildsen",
        "year": 1976,
        "country": "USA",
        "genre": "Drama, Sports Drama",
        "rating": 7
      },
      {
        "title": "Halloween",
        "director": "John Carpenter",
        "year": 1978,
        "country": "USA",
        "genre": "Horror, Slasher Film",
        "rating": 7
      },
      {
        "title": "Being There",
        "director": "Hal Ashby",
        "year": 1979,
        "country": "USA",
        "genre": "Comedy, Satire",
        "rating": 7
      },
      {
        "title": "The Elephant Man",
        "director": "David Lynch",
        "year": 1980,
        "country": "USA",
        "genre": "Biography, Medical Drama",
        "rating": 7
      },
      {
        "title": "The Right Stuff",
        "director": "Philip Kaufman",
        "year": 1983,
        "country": "USA",
        "genre": "Drama, Docudrama",
        "rating": 7
      },
      {
        "title": "Ghostbusters",
        "director": "Ivan Reitman",
        "year": 1984,
        "country": "USA",
        "genre": "Fantasy, Sci-Fi Comedy",
        "rating": 7
      },
      {
        "title": "This is Spinal Tap",
        "director": "Rob Reiner",
        "year": 1984,
        "country": "USA",
        "rating": 7
      },
      {
        "title": "The Breakfast Club",
        "director": "John Hughes",
        "year": 1985,
        "country": "USA",
        "genre": "Comedy Drama, Teen Movie",
        "rating": 7
      },
      {
        "title": "Come and See",
        "director": "Elem Klimov",
        "year": 1985,
        "country": "USSR",
        "genre": "War Drama, Coming-of-Age",
        "rating": 7
      },
      {
        "title": "A Better Tomorrow",
        "director": "John Woo",
        "year": 1986,
        "country": "Hong Kong",
        "genre": "Crime, Action Thriller",
        "rating": 7
      },
      {
        "title": "Down by Law",
        "director": "Jim Jarmusch",
        "year": 1986,
        "country": "USA",
        "genre": "Comedy, Buddy Film",
        "rating": 7
      },
      {
        "title": "Near Dark",
        "director": "Kathryn Bigelow",
        "year": 1987,
        "country": "USA",
        "genre": "Horror, Hybrid Western"
      },
      {
        "title": "Wings of Desire",
        "director": "Wim Wenders",
        "year": 1987,
        "country": "West Germany-France",
        "rating": 7
      },
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "year": 1988,
        "country": "Japan",
        "genre": "Anime, War Drama",
        "rating": 7
      },
      {
        "title": "Days of Being Wild",
        "director": "Wong Kar-wai",
        "year": 1990,
        "country": "Hong Kong",
        "rating": 7
      },
      {
        "title": "Abraham's Valley",
        "director": "Manoel de Oliveira",
        "year": 1993,
        "country": "Portugal-France-Switzerland",
        "genre": "Psychological Drama"
      },
      {
        "title": "Léon",
        "director": "Luc Besson",
        "year": 1994,
        "country": "France",
        "genre": "Action Thriller, Coming-of-Age",
        "rating": 7
      },
      {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994,
        "country": "USA",
        "genre": "Drama, Prison Film",
        "rating": 7
      },
      {
        "title": "Vive L'Amour",
        "director": "Tsai Ming-liang",
        "year": 1994,
        "country": "Taiwan",
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "Dead Man",
        "director": "Jim Jarmusch",
        "year": 1995,
        "country": "USA-Germany",
        "genre": "Hybrid Western, Psychological Western",
        "rating": 7
      },
      {
        "title": "Underground",
        "director": "Emir Kusturica",
        "year": 1995,
        "country": "Yugoslavia-France-Germany-Bulgaria-Czech Republic-Hungary",
        "rating": 7
      },
      {
        "title": "The River",
        "director": "Tsai Ming-liang",
        "year": 1997,
        "country": "Taiwan",
        "genre": "Drama, Family Drama",
        "image": "river1997.jpg"
      },
      {
        "title": "All About My Mother",
        "director": "Pedro Almodóvar",
        "year": 1999,
        "country": "Spain-France",
        "rating": 7
      },
      {
        "title": "American Beauty",
        "director": "Sam Mendes",
        "year": 1999,
        "country": "USA",
        "genre": "Comedy Drama, Family Drama",
        "rating": 7
      },
      {
        "title": "Dancer in the Dark",
        "director": "Lars von Trier",
        "year": 2000,
        "country": "Denmark-France-Sweden-Italy-Germany-Norway-Netherlands-Iceland-Finland-UK-USA",
        "genre": "Musical Drama, Melodrama",
        "rating": 7
      },
      {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "director": "Peter Jackson",
        "year": 2001,
        "country": "USA-New Zealand",
        "genre": "Epic, Fantasy Adventure",
        "rating": 7
      },
      {
        "title": "The Lord of the Rings: The Return of the King",
        "director": "Peter Jackson",
        "year": 2003,
        "country": "New Zealand-USA",
        "genre": "Epic, Fantasy",
        "rating": 7
      },
      {
        "title": "Memories of Murder",
        "director": "Bong Joon-ho",
        "year": 2003,
        "country": "South Korea",
        "genre": "Crime, Police Drama",
        "rating": 7
      },
      {
        "title": "Million Dollar Baby",
        "director": "Clint Eastwood",
        "year": 2004,
        "country": "USA",
        "genre": "Sports Drama, Melodrama",
        "rating": 7
      },
      {
        "title": "Brokeback Mountain",
        "director": "Ang Lee",
        "year": 2005,
        "country": "USA-Canada",
        "genre": "Romantic Drama, Modern Western",
        "rating": 7
      },
      {
        "title": "Zodiac",
        "director": "David Fincher",
        "year": 2007,
        "country": "USA",
        "genre": "Mystery, Police Detective Film",
        "rating": 7
      },
      {
        "title": "A Prophet",
        "director": "Jacques Audiard",
        "year": 2009,
        "country": "France-Italy",
        "genre": "Drama, Prison Film"
      },
      {
        "title": "Avatar",
        "director": "James Cameron",
        "year": 2009,
        "country": "USA-UK",
        "genre": "Science Fiction, Sci-Fi Action",
        "rating": 7
      },
      {
        "title": "The Social Network",
        "director": "David Fincher",
        "year": 2010,
        "country": "USA",
        "genre": "Drama, Biopic",
        "rating": 7
      },
      {
        "title": "Once Upon a Time in Anatolia",
        "director": "Nuri Bilge Ceylan",
        "year": 2011,
        "country": "Turkey-Bosnia and Herzergovina",
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
        "rating": 4
      },
      {
        "title": "Intolerance",
        "director": "D.W. Griffith",
        "year": 1916,
        "country": "USA",
        "genre": "Historical Epic, Melodrama",
        "rating": 6
      },
      {
        "title": "Our Hospitality",
        "director": "Buster Keaton & John G. Blystone",
        "year": 1923,
        "country": "USA",
        "genre": "Comedy, Romantic Comedy",
        "rating": 6,
      },
      {
        "title": "October",
        "director": "Sergei Eisenstein & Grigori Aleksandrov",
        "year": 1928,
        "country": "USSR",
        "genre": "Historical Film, Docudrama",
        "rating": 5
      },
      {
        "title": "Frankenstein",
        "director": "James Whale",
        "year": 1931,
        "country": "USA",
        "genre": "Horror, Monster Film",
        "rating": "?"
      },
      {
        "title": "King Kong",
        "director": "Merian C. Cooper & Ernest B. Schoedsack",
        "year": 1933,
        "country": "USA",
        "rating": 6
      },
      {
        "title": "The Rules of the Game",
        "director": "Jean Renoir",
        "year": 1939,
        "country": "France",
        "genre": "Comedy Drama, Ensemble Film",
        "rating": 5
      },
      {
        "title": "Stagecoach",
        "director": "John Ford",
        "year": 1939,
        "country": "USA",
        "genre": "Western, Traditional Western",
        "rating": 4
      },
      {
        "title": "Fantasia",
        "director": "Various Directors",
        "year": 1940,
        "country": "USA",
        "genre": "Animated Musical, Children's Fantasy",
        "rating": "?"
      },
      {
        "title": "The Grapes of Wrath",
        "director": "John Ford",
        "year": 1940,
        "country": "USA",
        "rating": 6
      },
      {
        "title": "The Shop Around the Corner",
        "director": "Ernst Lubitsch",
        "year": 1940,
        "country": "USA",
        "rating": 5
      },
      {
        "title": "Sullivan's Travels",
        "director": "Preston Sturges",
        "year": 1941,
        "country": "USA",
        "rating": 5
      },
    
    
      {
        "title": "Bambi",
        "director": "David Hand",
        "year": 1942,
        "country": "USA",
        "genre": "Children's Fantasy, Animated Musical",
        "rating": "?"
      },
    
      {
        "title": "Cat People",
        "director": "Jacques Tourneur",
        "year": 1942,
        "country": "USA",
        "genre": "Horror, Supernatural Thriller",
        "rating": 5
      },
      
      {
        "title": "I Walked with a Zombie",
        "director": "Jacques Tourneur",
        "year": 1943,
        "country": "USA",
        "genre": "Horror, Supernatural Horror",
        "rating": 6
      },
      {
        "title": "Meet Me in St. Louis",
        "director": "Vincente Minnelli",
        "year": 1944,
        "country": "USA",
        "rating": 3
      },
      {
        "title": "Gilda",
        "director": "Charles Vidor",
        "year": 1946,
        "country": "USA",
        "genre": "Film Noir, Romantic Mystery",
        "rating": "?"
      },
      {
        "title": "My Darling Clementine",
        "director": "John Ford",
        "year": 1946,
        "country": "USA",
        "genre": "Western, Traditional Western",
        "rating": 6
      },
      {
        "title": "Odd Man Out",
        "director": "Carol Reed",
        "year": 1947,
        "country": "UK",
        "genre": "Drama, Crime",
        "rating": 4
      },
      {
        "title": "La Terra trema",
        "director": "Luchino Visconti",
        "year": 1948,
        "country": "Italy",
        "rating": 6
      },
    
      {
        "title": "Red River",
        "director": "Howard Hawks",
        "year": 1948,
        "country": "USA",
        "rating": 6
      },
      {
        "title": "They Live by Night",
        "director": "Nicholas Ray",
        "year": 1948,
        "country": "USA",
        "genre": "Crime Drama, Film Noir",
        "rating": 6
      },
    
      {
        "title": "The African Queen",
        "director": "John Huston",
        "year": 1951,
        "country": "USA",
        "genre": "Romance, Adventure",
        "rating": 6
      },
      {
        "title": "An American in Paris",
        "director": "Vincente Minnelli",
        "year": 1951,
        "country": "USA",
        "genre": "Musical, Romance",
        "rating": 6
      },
      {
        "title": "High Noon",
        "director": "Fred Zinnemann",
        "year": 1952,
        "country": "USA",
        "genre": "Western, Psychological Western",
        "rating": 5
      },
      {
        "title": "Roman Holiday",
        "director": "William Wyler",
        "year": 1953,
        "country": "USA",
        "genre": "Romance, Comedy",
        "rating": 6
      },
      {
        "title": "Shane",
        "director": "George Stevens",
        "year": 1953,
        "country": "USA",
        "genre": "Western, Psychological Western",
        "rating": 3
      },
    
      {
        "title": "A Star is Born",
        "director": "George Cukor",
        "year": 1954,
        "country": "USA"
      },
    
      {
        "title": "Voyage in Italy",
        "director": "Roberto Rossellini",
        "year": 1954,
        "country": "Italy",
        "genre": "Marriage Drama, Psychological Drama",
        "rating": 5
      },
      {
        "title": "East of Eden",
        "director": "Elia Kazan",
        "year": 1955,
        "country": "USA",
        "genre": "Family Drama, Rural Drama",
        "rating": 6
      },
      {
        "title": "Kiss Me Deadly",
        "director": "Robert Aldrich",
        "year": 1955,
        "country": "USA",
        "rating": 5
      },
      {
        "title": "The Night of the Hunter",
        "director": "Charles Laughton",
        "year": 1955,
        "country": "USA",
        "genre": "Crime Thriller, Psychological Thriller",
        "rating": 6
      },
      {
        "title": "Forbidden Planet",
        "director": "Fred M. Wilcox",
        "year": 1956,
        "country": "USA",
        "genre": "Science Fiction, Space Adventure",
        "rating": 5
      },
      {
        "title": "The Bridge on the River Kwai",
        "director": "David Lean",
        "year": 1957,
        "country": "UK",
        "genre": "War, Drama",
        "rating": 6
      },
      {
        "title": "Ben-Hur",
        "director": "William Wyler",
        "year": 1959,
        "country": "USA",
        "genre": "Religious Epic, Sword-and-Sandal",
        "rating": 6
      },

      {
        "title": "Shoot the Piano Player",
        "director": "François Truffaut",
        "year": 1960,
        "country": "France",
        "genre": "Crime Drama, Post-Noir (Modern Noir)",
        "rating": 6
      },
      {
        "title": "The Hustler",
        "director": "Robert Rossen",
        "year": 1961,
        "country": "USA",
        "genre": "Drama, Sports Drama",
        "rating": 6
      },
      {
        "title": "Knife in the Water",
        "director": "Roman Polanski",
        "year": 1962,
        "country": "Poland",
        "genre": "Psychological Drama, Marriage Drama",
        "rating": 6
      },
      {
        "title": "The Manchurian Candidate",
        "director": "John Frankenheimer",
        "year": 1962,
        "country": "USA",
        "genre": "Political Thriller, Paranoid Thriller",
        "rating": "?"
      },
      {
        "title": "To Kill a Mockingbird",
        "director": "Robert Mulligan",
        "year": 1962,
        "country": "USA",
        "genre": "Courtroom Drama, Childhood Drama",
        "rating": 6
      },
    
      {
        "title": "The Great Escape",
        "director": "John Sturges",
        "year": 1963,
        "country": "USA",
        "genre": "Escape Film, War Adventure",
        "rating": 6
      },
      {
        "title": "The Nutty Professor",
        "director": "Jerry Lewis",
        "year": 1963,
        "country": "USA",
        "genre": "Comedy, Satire",
        "rating": 6
      },
      {
        "title": "Black God, White Devil",
        "director": "Glauber Rocha",
        "year": 1964,
        "country": "Brazil",
        "rating": 2
      },
      {
        "title": "Mary Poppins",
        "director": "Robert Stevenson",
        "year": 1964,
        "country": "USA",
        "genre": "Musical, Children's Fantasy",
        "rating": 6
      },
      {
        "title": "The Battle of Algiers",
        "director": "Gillo Pontecorvo",
        "year": 1966,
        "country": "Italy-Algeria",
        "genre": "Docudrama, Political Drama",
        "rating": 5
      },
      {
        "title": "Cool Hand Luke",
        "director": "Stuart Rosenberg",
        "year": 1967,
        "country": "USA",
        "genre": "Drama, Prison Film",
        "rating": 5
      },
      {
        "title": "Point Blank",
        "director": "John Boorman",
        "year": 1967,
        "country": "USA",
        "genre": "Crime, Thriller",
        "rating": 6
      },
      {
        "title": "The Producers",
        "director": "Mel Brooks",
        "year": 1968,
        "country": "USA",
        "genre": "Showbiz Comedy, Farce",
        "rating": 5
      },
      {
        "title": "Army of Shadows",
        "director": "Jean-Pierre Melville",
        "year": 1969,
        "country": "France-Italy"
      },
      {
        "title": "Midnight Cowboy",
        "director": "John Schlesinger",
        "year": 1969,
        "country": "USA",
        "rating": 6
      },
    
      {
        "title": "Satyricon",
        "director": "Federico Fellini",
        "year": 1969,
        "country": "Italy",
        "genre": "Drama, Period Film",
        "rating": 6
      },
      {
        "title": "The Conformist",
        "director": "Bernardo Bertolucci",
        "year": 1970,
        "country": "Italy-France-West Germany",
        "genre": "Psychological Drama, Political Drama",
        "rating": "?"
      },
      {
        "title": "M*A*S*H",
        "director": "Robert Altman",
        "year": 1970,
        "country": "USA",
        "genre": "Military Comedy, Satire",
        "rating": "?"
      },
      {
        "title": "Dirty Harry",
        "director": "Don Siegel",
        "year": 1971,
        "country": "USA",
        "genre": "Crime, Action Thriller",
        "rating": "?"
      },
      {
        "title": "The French Connection",
        "director": "William Friedkin",
        "year": 1971,
        "country": "USA",
        "genre": "Crime, Action Thriller",
        "rating": 3
      },
    
      {
        "title": "Cabaret",
        "director": "Bob Fosse",
        "year": 1972,
        "country": "USA",
        "genre": "Musical, Drama",
        "rating": 6
      },
      {
        "title": "Fellini's Roma",
        "director": "Federico Fellini",
        "year": 1972,
        "country": "Italy",
        "genre": "Satire, Ensemble Film",
        "rating": 6
      },
      {
        "title": "American Graffiti",
        "director": "George Lucas",
        "year": 1973,
        "country": "USA",
        "genre": "Comedy Drama, Teen Movie",
        "rating": 6
      },
      {
        "title": "Enter the Dragon",
        "director": "Robert Clouse",
        "year": 1973,
        "country": "USA-Hong Kong",
        "genre": "Action, Martial Arts",
        "rating": 5
      },
      {
        "title": "Bring Me the Head of Alfredo Garcia",
        "director": "Sam Peckinpah",
        "year": 1974,
        "country": "USA",
        "genre": "Black Comedy, Action Thriller",
        "rating": 5
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
        "genre": "Parody/Spoof, Horror Comedy",
        "rating": 5
      },
      {
        "title": "Dog Day Afternoon",
        "director": "Sidney Lumet",
        "year": 1975,
        "country": "USA",
        "rating": 6
      },
      {
        "title": "All the President's Men",
        "director": "Alan J. Pakula",
        "year": 1976,
        "country": "USA",
        "genre": "Political Drama, Paranoid Thriller",
        "rating": "?"
      },
      {
        "title": "Fellini's Casanova",
        "director": "Federico Fellini",
        "year": 1976,
        "country": "Italy",
        "genre": "Comedy Drama, Period Film",
        "rating": "?"
      },
      {
        "title": "The Outlaw Josey Wales",
        "director": "Clint Eastwood",
        "year": 1976,
        "country": "USA",
        "rating": 4
      },
      {
        "title": "Saturday Night Fever",
        "director": "John Badham",
        "year": 1977,
        "country": "USA",
        "genre": "Dance Film, Musical Drama",
        "rating": 5
      },
      {
        "title": "The Deer Hunter",
        "director": "Michael Cimino",
        "year": 1978,
        "country": "USA",
        "rating": 5
      },
      {
        "title": "Airplane!",
        "director": "Jim Abrahams, David Zucker & Jerry Zucker",
        "year": 1980,
        "country": "USA",
        "genre": "Anarchic Comedy, Parody/Spoof",
        "rating": 6
      },
      {
        "title": "The Blues Brothers",
        "director": "John Landis",
        "year": 1980,
        "country": "USA",
        "genre": "Action Comedy, Rock Musical",
        "rating": 5
      },
      {
        "title": "Das Boot",
        "director": "Wolfgang Petersen",
        "year": 1981,
        "country": "West Germany",
        "genre": "War Drama, Sea Adventure",
        "rating": 6
      },
      {
        "title": "Mad Max 2",
        "director": "George Miller",
        "year": 1981,
        "country": "Australia",
        "genre": "Action, Science Fiction",
        "rating": 6
      },
      {
        "title": "Tootsie",
        "director": "Sydney Pollack",
        "year": 1982,
        "country": "USA",
        "genre": "Showbiz Comedy, Romantic Comedy",
        "rating": 6
      },
      {
        "title": "Ferris Bueller's Day Off",
        "director": "John Hughes",
        "year": 1986,
        "country": "USA",
        "genre": "Comedy, Teen Movie",
        "rating": 6
      },
      {
        "title": "Stand by Me",
        "director": "Rob Reiner",
        "year": 1986,
        "country": "USA",
        "genre": "Drama, Coming-of-Age",
        "rating": 6
      },
      {
        "title": "The Last Emperor",
        "director": "Bernardo Bertolucci",
        "year": 1987,
        "country": "China-Italy-UK-France",
        "genre": "Historical Film, Biography",
        "rating": "?"
      },
      {
        "title": "The Princess Bride",
        "director": "Rob Reiner",
        "year": 1987,
        "country": "USA",
        "genre": "Adventure Comedy, Fairy Tale",
        "rating": 5
      },
      {
        "title": "When Harry Met Sally...",
        "director": "Rob Reiner",
        "year": 1989,
        "country": "USA",
        "genre": "Romance, Comedy",
        "rating": 6
      },
      {
        "title": "Wild at Heart",
        "director": "David Lynch",
        "year": 1990,
        "country": "USA",
        "genre": "Road Movie, Black Comedy",
        "rating": 2
      },
      {
        "title": "Jurassic Park",
        "director": "Steven Spielberg",
        "year": 1993,
        "country": "USA",
        "genre": "Prehistoric Fantasy, Sci-Fi Action",
        "rating": 6
      },
      {
        "title": "The Bridges of Madison County",
        "director": "Clint Eastwood",
        "year": 1995,
        "country": "USA",
        "genre": "Romance, Drama",
        "rating": 5
      },
      {
        "title": "La Haine",
        "director": "Mathieu Kassovitz",
        "year": 1995,
        "country": "France",
        "genre": "Urban Drama, Message Movie",
        "rating": "?"
      },
      {
        "title": "Toy Story",
        "director": "John Lasseter",
        "year": 1995,
        "country": "USA",
        "genre": "Fantasy Comedy, Animation",
        "rating": "?"
      },
      {
        "title": "Boogie Nights",
        "director": "Paul Thomas Anderson",
        "year": 1997,
        "country": "USA",
        "genre": "Comedy Drama, Ensemble Film"
      },
      {
        "title": "L.A. Confidential",
        "director": "Curtis Hanson",
        "year": 1997,
        "country": "USA",
        "genre": "Crime, Mystery",
        "rating": "?"
      },    
      {
        "title": "Titanic",
        "director": "James Cameron",
        "year": 1997,
        "country": "USA",
        "genre": "Romantic Epic, Disaster Film",
        "rating": "?"
      },
      {
        "title": "Central Station",
        "director": "Walter Salles",
        "year": 1998,
        "country": "Brazil-France-Spain-Japan",
        "genre": "Drama, Road Movie",
        "rating": "?"
      },
      {
        "title": "Saving Private Ryan",
        "director": "Steven Spielberg",
        "year": 1998,
        "country": "USA",
        "genre": "War, Combat Film",
        "rating": 6
      },
      {
        "title": "Fight Club",
        "director": "David Fincher",
        "year": 1999,
        "country": "USA-Germany",
        "genre": "Satire, Psychological Drama",
        "rating": "?"
      },
      {
        "title": "Magnolia",
        "director": "Paul Thomas Anderson",
        "year": 1999,
        "country": "USA"
      },
      {
        "title": "The Straight Story",
        "director": "David Lynch",
        "year": 1999,
        "country": "USA-France-UK",
        "genre": "Americana, Road Movie",
        "rating": 6
      },
      {
        "title": "Crouching Tiger, Hidden Dragon",
        "director": "Ang Lee",
        "year": 2000,
        "country": "Taiwan-Hong Kong-USA-China",
        "genre": "Martial Arts, Romantic Adventure"
      },
      {
        "title": "Moulin Rouge!",
        "director": "Baz Luhrmann",
        "year": 2001,
        "country": "USA-Australia",
        "genre": "Musical, Romance",
        "rating": "?"
      },
      {
        "title": "Punch-Drunk Love",
        "director": "Paul Thomas Anderson",
        "year": 2002,
        "country": "USA",
        "genre": "Comedy Drama, Romantic Comedy"
      },
      {
        "title": "Lost in Translation",
        "director": "Sofia Coppola",
        "year": 2003,
        "country": "USA-Japan",
        "genre": "Comedy, Drama"
      },
      {
        "title": "The Lives of Others",
        "director": "Florian Henckel von Donnersmarck",
        "year": 2006,
        "country": "Germany",
        "genre": "Political Thriller, Period Film",
        "rating": "?"
      },
      {
        "title": "Hunger",
        "director": "Steve McQueen",
        "year": 2008,
        "country": "UK-Ireland",
        "genre": "Prison Film, Political Drama",
        "rating": "?"
      },
      {
        "title": "Let the Right One In",
        "director": "Tomas Alfredson",
        "year": 2008,
        "country": "Sweden-Norway",
        "genre": "Horror, Drama",
        "rating": "?"
      },
      {
        "title": "The Hurt Locker",
        "director": "Kathryn Bigelow",
        "year": 2008,
        "country": "USA",
        "rating": "?"
      },
      {
        "title": "WALL-E",
        "director": "Andrew Stanton",
        "year": 2008,
        "country": "USA",
        "genre": "Sci-Fi Adventure, Animation",
        "rating": "?"
      },
    ]
  },
  {
    "name": "Watchlist",
    "items": [
      {
        "title": "Fantômas",
        "director": "Louis Feuillade",
        "year": 1913,
        "country": "France",
        "genre": "Master Criminal Film, Police Detective Film"
      },
      {
        "title": "The Phantom Carriage",
        "director": "Victor Sjöström",
        "year": 1920,
        "country": "Sweden",
        "genre": "Fantasy, Family Drama"
      },
      {
        "title": "Foolish Wives",
        "director": "Erich von Stroheim",
        "year": 1922,
        "country": "USA",
        "genre": "Drama"
      },
      {
        "title": "Häxan",
        "director": "Benjamin Christensen",
        "year": 1922,
        "country": "Sweden",
        "genre": "Supernatural Horror, Documentary"
      },
      {
        "title": "A Woman of Paris",
        "director": "Charles Chaplin",
        "year": 1923,
        "country": "USA",
        "genre": "Romance, Melodrama"
      },
      {
        "title": "The Adventures of Prince Achmed",
        "director": "Lotte Reiniger",
        "year": 1926,
        "country": "Germany",
        "genre": "Children's Fantasy, Animation"
      },
      {
        "title": "Berlin: Symphony of a Great City",
        "director": "Walter Ruttmann",
        "year": 1927,
        "country": "Germany",
        "genre": "Avant-garde-Experimental, Documentary"
      },
      {
        "title": "Seventh Heaven",
        "director": "Frank Borzage",
        "year": 1927,
        "country": "USA",
        "genre": "Romance, Melodrama"
      },
      {
        "title": "Morocco",
        "director": "Josef von Sternberg",
        "year": 1930,
        "country": "USA",
        "genre": "Romance, Melodrama"
      },
      {
        "title": "La Chienne",
        "director": "Jean Renoir",
        "year": 1931,
        "country": "France",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Le Million",
        "director": "René Clair",
        "year": 1931,
        "country": "France",
        "genre": "Musical Comedy, Chase Movie"
      },
      {
        "title": "La Nuit du carrefour",
        "director": "Jean Renoir",
        "year": 1932,
        "country": "France",
        "genre": "Police Detective Film, Crime Drama"
      },
      {
        "title": "42nd Street",
        "director": "Lloyd Bacon",
        "year": 1933,
        "country": "USA",
        "genre": "Backstage Musical, Musical Comedy"
      },
      {
        "title": "It's a Gift",
        "director": "Norman Z. McLeod",
        "year": 1934,
        "country": "USA",
        "genre": "Comedy, Screwball Comedy"
      },
      {
        "title": "Humanity and Paper Balloons",
        "director": "Sadao Yamanaka",
        "year": 1937,
        "country": "Japan",
        "genre": "Drama"
      },
      {
        "title": "Pépé le Moko",
        "director": "Julien Duvivier",
        "year": 1937,
        "country": "France",
        "genre": "Romantic Drama, Gangster Film"
      },
      {
        "title": "Street Angel",
        "director": "Yuan Muzhi",
        "year": 1937,
        "country": "China",
        "genre": "Drama, Comedy"
      },
      {
        "title": "La Bête humaine",
        "director": "Jean Renoir",
        "year": 1938,
        "country": "France",
        "genre": "Crime Drama, Psychological Drama"
      },
      {
        "title": "Olympia",
        "director": "Leni Riefenstahl",
        "year": 1938,
        "country": "Germany",
        "genre": "Sports, Documentary"
      },
      {
        "title": "Port of Shadows",
        "director": "Marcel Carné",
        "year": 1938,
        "country": "France",
        "genre": "Romantic Drama, Crime Drama"
      },
      {
        "title": "Le Jour se lève",
        "director": "Marcel Carné",
        "year": 1939,
        "country": "France",
        "genre": "Crime Drama, Romantic Drama"
      },
      {
        "title": "The Thief of Bagdad",
        "director": "Michael Powell, Ludwig Berger & Tim Whelan",
        "year": 1940,
        "country": "UK",
        "genre": "Fantasy, Costume Adventure"
      },
      {
        "title": "Hellzapoppin'",
        "director": "H.C. Potter",
        "year": 1941,
        "country": "USA",
        "genre": "Anarchic Comedy, Backstage Musical"
      },
      {
        "title": "Fires Were Started",
        "director": "Humphrey Jennings",
        "year": 1943,
        "country": "UK",
        "genre": "Military & War, Documentary"
      },

      {
        "title": "They Were Expendable",
        "director": "John Ford",
        "year": 1945,
        "country": "USA",
        "genre": "War Drama, Combat Film"
      },
      {
        "title": "Duel in the Sun",
        "director": "King Vidor",
        "year": 1946,
        "country": "USA",
        "genre": "Western, Melodrama"
      },
      {
        "title": "Le Sang des bêtes",
        "director": "Georges Franju",
        "year": 1949,
        "country": "France",
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The Reckless Moment",
        "director": "Max Ophüls",
        "year": 1949,
        "country": "USA",
        "genre": "Crime Drama, Film Noir"
      },
      {
        "title": "The Thing from Another World",
        "director": "Christian Nyby & Howard Hawks",
        "year": 1951,
        "country": "USA",
        "genre": "Science Fiction, Monster Film"
      },
      {
        "title": "The Lusty Men",
        "director": "Nicholas Ray",
        "year": 1952,
        "country": "USA",
        "genre": "Drama, Modern Western"
      },
      {
        "title": "Anatahan",
        "director": "Josef von Sternberg",
        "year": 1953,
        "country": "Japan",
        "genre": "Drama, Adventure"
      },
      {
        "title": "The Sun Shines Bright",
        "director": "John Ford",
        "year": 1953,
        "country": "USA",
        "genre": "Drama, Americana"
      },
      {
        "title": "Chikamatsu monogatari",
        "director": "Kenji Mizoguchi",
        "year": 1954,
        "country": "Japan",
        "genre": "Melodrama, Romantic Drama"
      },
      {
        "title": "Les Maîtres fous",
        "director": "Jean Rouch",
        "year": 1955,
        "country": "France",
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Le Bonheur",
        "director": "Agnès Varda",
        "year": 1965,
        "country": "France",
        "genre": "Romance, Marriage Drama"
      },
      {
        "title": "The Red Balloon",
        "director": "Albert Lamorisse",
        "year": 1956,
        "country": "France",
        "genre": "Children's/Family, Family-Oriented Adventure"
      },
      {
        "title": "Street of Shame",
        "director": "Kenji Mizoguchi",
        "year": 1956,
        "country": "Japan",
        "genre": "Melodrama, Urban Drama"
      },
      {
        "title": "Il Grido",
        "director": "Michelangelo Antonioni",
        "year": 1957,
        "country": "Italy",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "The Incredible Shrinking Man",
        "director": "Jack Arnold",
        "year": 1957,
        "country": "USA",
        "genre": "Science Fiction, Psychological Sci-Fi"
      },
      {
        "title": "Mother India",
        "director": "Mehboob Khan",
        "year": 1957,
        "country": "India",
        "genre": "Epic, Melodrama"
      },
      {
        "title": "Dracula",
        "director": "Terence Fisher",
        "year": 1958,
        "country": "UK",
        "genre": "Costume Horror, Gothic Film"
      },
      {
        "title": "Man of the West",
        "director": "Anthony Mann",
        "year": 1958,
        "country": "USA",
        "genre": "Western, Psychological Western"
      },
      {
        "title": "Moi, un Noir",
        "director": "Jean Rouch",
        "year": 1958,
        "country": "France",
        "genre": "Culture & Society, Anthropology"
      },
      {
        "title": "Black Orpheus",
        "director": "Marcel Camus",
        "year": 1959,
        "country": "Brazil-France",
        "genre": "Fantasy, Romance"
      },
      {
        "title": "Floating Weeds",
        "director": "Yasujiro Ozu",
        "year": 1959,
        "country": "Japan",
        "genre": "Drama, Reunion Film"
      },
      {
        "title": "Kaagaz Ke Phool",
        "director": "Guru Dutt",
        "year": 1959,
        "country": "India",
        "genre": "Romance, Drama"
      },
      {
        "title": "The Naked Island",
        "director": "Kaneto Shindo",
        "year": 1960,
        "country": "Japan",
        "genre": "Rural Drama"
      },
      {
        "title": "Saturday Night and Sunday Morning",
        "director": "Karel Reisz",
        "year": 1960,
        "country": "UK",
        "genre": "Drama, Urban Drama"
      },
      {
        "title": "Strangers When We Meet",
        "director": "Richard Quine",
        "year": 1960,
        "country": "USA",
        "genre": "Drama, Melodrama"
      },
      {
        "title": "The End of Summer",
        "director": "Yasujiro Ozu",
        "year": 1961,
        "country": "Japan",
        "genre": "Drama, Family Drama"
      },
      {
        "title": "Il Posto",
        "director": "Ermanno Olmi",
        "year": 1961,
        "country": "Italy",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Carnival of Souls",
        "director": "Herk Harvey",
        "year": 1962,
        "country": "USA",
        "genre": "Horror, Gothic Film"
      },
      {
        "title": "The Loneliness of the Long Distance Runner",
        "director": "Tony Richardson",
        "year": 1962,
        "country": "UK"
      },
      {
        "title": "Ride the High Country",
        "director": "Sam Peckinpah",
        "year": 1962,
        "country": "USA",
        "genre": "Western, Revisionist Western"
      },
      {
        "title": "America, America",
        "director": "Elia Kazan",
        "year": 1963,
        "country": "USA",
        "genre": "Drama, Americana"
      },
      {
        "title": "Flaming Creatures",
        "director": "Jack Smith",
        "year": 1963,
        "country": "USA",
        "genre": "Avant-garde-Experimental, Horror"
      },
      {
        "title": "Dog Star Man",
        "director": "Stan Brakhage",
        "year": 1964,
        "country": "USA",
        "genre": "Avant-garde-Experimental, Abstract Film"
      },
      {
        "title": "Kwaidan",
        "director": "Masaki Kobayashi",
        "year": 1964,
        "country": "Japan",
        "genre": "Fantasy, Costume Horror"
      },
      {
        "title": "Faster, Pussycat! Kill! Kill!",
        "director": "Russ Meyer",
        "year": 1965,
        "country": "USA",
        "genre": "Sexploitation, Action Comedy"
      },
      {
        "title": "Juliet of the Spirits",
        "director": "Federico Fellini",
        "year": 1965,
        "country": "Italy",
        "genre": "Comedy Drama, Marriage Drama"
      },
      {
        "title": "Red Beard",
        "director": "Akira Kurosawa",
        "year": 1965,
        "country": "Japan",
        "genre": "Period Film, Medical Drama"
      },
      {
        "title": "Subarnarekha",
        "director": "Ritwik Ghatak",
        "year": 1965,
        "country": "India",
        "genre": "Drama"
      },
      {
        "title": "Black Girl",
        "director": "Ousmane Sembene",
        "year": 1966,
        "country": "Senegal-France",
        "genre": "Drama, Social Problem Film"
      },
      {
        "title": "Cul-de-sac",
        "director": "Roman Polanski",
        "year": 1966,
        "country": "UK",
        "genre": "Comedy Thriller, Black Comedy"
      },
      {
        "title": "Second Breath",
        "director": "Jean-Pierre Melville",
        "year": 1966,
        "country": "France",
        "genre": "Crime Thriller, Caper"
      },
      {
        "title": "The Hawks and the Sparrows",
        "director": "Pier Paolo Pasolini",
        "year": 1966,
        "country": "Italy",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Seven Women",
        "director": "John Ford",
        "year": 1966,
        "country": "USA",
        "genre": "Drama, Period Film"
      },
      {
        "title": "Branded to Kill",
        "director": "Seijun Suzuki",
        "year": 1967,
        "country": "Japan",
        "genre": "Gangster Film, Crime Thriller"
      },
      {
        "title": "The Firemen's Ball",
        "director": "Milos Forman",
        "year": 1967,
        "country": "Czechoslovakia",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Portrait of Jason",
        "director": "Shirley Clarke",
        "year": 1967,
        "country": "USA",
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The Chronicle of Anna Magdalena Bach",
        "director": "Jean-Marie Straub",
        "year": 1968,
        "country": "West Germany-Italy",
        "genre": "Drama, Biopic"
      },
      {
        "title": "L'Amour fou",
        "director": "Jacques Rivette",
        "year": 1968,
        "country": "France",
        "genre": "Showbiz Drama, Psychological Drama"
      },
      {
        "title": "L'Enfance nue",
        "director": "Maurice Pialat",
        "year": 1968,
        "country": "France",
        "genre": "Childhood Drama, Coming-of-Age"
      },
      {
        "title": "Diaries, Notes and Sketches",
        "director": "Jonas Mekas",
        "year": 1969,
        "country": "USA",
        "genre": "Avant-garde/Experimental"
      },
      {
        "title": "Macunaima",
        "director": "Joaquim Pedro de Andrade",
        "year": 1969,
        "country": "Brazil",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Z",
        "director": "Constantin Costa-Gavras",
        "year": 1969,
        "country": "France",
        "genre": "Thriller, Political Thriller"
      },
      {
        "title": "Deep End",
        "director": "Jerzy Skolimowski",
        "year": 1970,
        "country": "UK-West Germany",
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Dodes'ka-den",
        "director": "Akira Kurosawa",
        "year": 1970,
        "country": "Japan",
        "genre": "Ensemble Film, Urban Drama"
      },
      {
        "title": "The Hart of London",
        "director": "Jack Chambers",
        "year": 1970,
        "country": "Canada",
        "genre": "Avant-garde-Experimental"
      },
      {
        "title": "Le Boucher",
        "director": "Claude Chabrol",
        "year": 1970,
        "country": "France-Italy",
        "genre": "Thriller, Psychological Thriller"
      },
      {
        "title": "Fata Morgana",
        "director": "Werner Herzog",
        "year": 1971,
        "country": "West Germany",
        "genre": "Avant-garde/Experimental"
      },
      {
        "title": "Get Carter",
        "director": "Mike Hodges",
        "year": 1971,
        "country": "UK",
        "genre": "Crime Thriller, Gangster Film"
      },
      {
        "title": "The Go-Between",
        "director": "Joseph Losey",
        "year": 1971,
        "country": "UK",
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "Two English Girls",
        "director": "François Truffaut",
        "year": 1971,
        "country": "France",
        "genre": "Romantic Drama, Period Film"
      },
      {
        "title": "Pink Flamingos",
        "director": "John Waters",
        "year": 1972,
        "country": "USA",
        "genre": "Comedy, Trash Film"
      },
      {
        "title": "The Last Detail",
        "director": "Hal Ashby",
        "year": 1973,
        "country": "USA",
        "genre": "Comedy Drama, Road Movie"
      },
      {
        "title": "Ludwig",
        "director": "Luchino Visconti",
        "year": 1973,
        "country": "Italy-France-West Germany",
        "genre": "Historical Film, Biography"
      },
      {
        "title": "O Lucky Man!",
        "director": "Lindsay Anderson",
        "year": 1973,
        "country": "UK",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Arabian Nights",
        "director": "Pier Paolo Pasolini",
        "year": 1974,
        "country": "Italy-France",
        "genre": "Adventure, Romantic Fantasy"
      },
      {
        "title": "Edvard Munch",
        "director": "Peter Watkins",
        "year": 1974,
        "country": "Sweden-Norway",
        "genre": "Drama, Biopic"
      },
      {
        "title": "Female Trouble",
        "director": "John Waters",
        "year": 1974,
        "country": "USA",
        "genre": "Comedy, Trash Film"
      },
      {
        "title": "My Little Loves",
        "director": "Jean Eustache",
        "year": 1974,
        "country": "France",
        "genre": "Drama"
      },
      {
        "title": "We All Loved Each Other So Much",
        "director": "Ettore Scola",
        "year": 1974,
        "country": "Italy",
        "genre": "Comedy Drama, Romantic Drama"
      },
      {
        "title": "Iracema - Uma Transa Amazônica",
        "director": "Jorge Bodanzky & Orlando Senna",
        "year": 1975,
        "country": "Brazil-West Germany-France",
        "genre": "Drama"
      },
      {
        "title": "Numéro deux",
        "director": "Jean-Luc Godard",
        "year": 1975,
        "country": "France",
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "Sholay",
        "director": "Ramesh Sippy",
        "year": 1975,
        "country": "India",
        "genre": "Action, Adventure Drama"
      },
      {
        "title": "Cría cuervos",
        "director": "Carlos Saura",
        "year": 1976,
        "country": "Spain",
        "genre": "Childhood Drama, Family Drama"
      },
      {
        "title": "News from Home",
        "director": "Chantal Akerman",
        "year": 1976,
        "country": "France-Belgium-West Germany",
        "genre": "Avant-garde/Experimental, Urban Drama"
      },
      {
        "title": "3 Women",
        "director": "Robert Altman",
        "year": 1977,
        "country": "USA",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Hitler: A Film from Germany",
        "director": "Hans-Jürgen Syberberg",
        "year": 1977,
        "country": "West Germany-France-UK",
        "genre": "Avant-garde-Experimental, Essay Film"
      },
      {
        "title": "New York, New York",
        "director": "Martin Scorsese",
        "year": 1977,
        "country": "USA",
        "genre": "Period Film, Musical Drama"
      },
      {
        "title": "National Lampoon's Animal House",
        "director": "John Landis",
        "year": 1978,
        "country": "USA",
        "genre": "Gross-Out Comedy, Anarchic Comedy"
      },
      {
        "title": "The Tin Drum",
        "director": "Volker Schlöndorff",
        "year": 1979,
        "country": "West Germany-France-Poland-Yugoslavia",
        "genre": "Political Drama, Childhood Drama"
      },
      {
        "title": "Vengeance is Mine",
        "director": "Shohei Imamura",
        "year": 1979,
        "country": "Japan",
        "genre": "Crime, Psychological Drama"
      },
      {
        "title": "The Age of the Earth",
        "director": "Glauber Rocha",
        "year": 1980,
        "country": "Brazil",
        "genre": "Religious Epic, Political Drama"
      },
      {
        "title": "Bad Timing",
        "director": "Nicolas Roeg",
        "year": 1980,
        "country": "UK",
        "genre": "Mystery, Psychological Drama"
      },
      {
        "title": "Gregory's Girl",
        "director": "Bill Forsyth",
        "year": 1980,
        "country": "UK",
        "genre": "Comedy Drama, Coming-of-Age"
      },
      {
        "title": "Mon oncle d'Amérique",
        "director": "Alain Resnais",
        "year": 1980,
        "country": "France",
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "Sauve qui peut (la vie)",
        "director": "Jean-Luc Godard",
        "year": 1980,
        "country": "France-Switzerland",
        "genre": "Psychological Drama, Urban Drama"
      },
      {
        "title": "Yol",
        "director": "Serif Gören & Yilmaz Güney",
        "year": 1982,
        "country": "Turkey-Switzerland-France",
        "genre": "Political Drama, Prison Film"
      },
      {
        "title": "The Ballad of Narayama",
        "director": "Shohei Imamura",
        "year": 1983,
        "country": "Japan",
        "genre": "Rural Drama, Family Drama"
      },
      {
        "title": "Diary",
        "director": "David Perlov",
        "year": 1983,
        "country": "Israel",
        "genre": "Documentary, Political"
      },
      {
        "title": "A Short Film About Killing",
        "director": "Krzysztof Kieslowski",
        "year": 1987,
        "country": "Poland",
        "genre": "Drama, Crime"
      },
      {
        "title": "Broadcast News",
        "director": "James L. Brooks",
        "year": 1987,
        "country": "USA",
        "genre": "Workplace Comedy, Media Satire"
      },
      {
        "title": "Dust in the Wind",
        "director": "Hou Hsiao-hsien",
        "year": 1987,
        "country": "Taiwan",
        "genre": "Drama, Coming-of-Age"
      },
      {
        "title": "Red Sorghum",
        "director": "Zhang Yimou",
        "year": 1987,
        "country": "China",
        "genre": "Rural Drama, Marriage Drama"
      },
      {
        "title": "A Tale of the Wind",
        "director": "Joris Ivens",
        "year": 1988,
        "country": "France-UK-West Germany-Netherlands",
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "Hôtel Terminus",
        "director": "Marcel Ophüls",
        "year": 1988,
        "country": "USA",
        "genre": "History, Documentary"
      },
      {
        "title": "The Cook, The Thief, His Wife & Her Lover",
        "director": "Peter Greenaway",
        "year": 1989,
        "country": "UK-France",
        "genre": "Black Comedy, Satire"
      },
      {
        "title": "Time of the Gypsies",
        "director": "Emir Kusturica",
        "year": 1989,
        "country": "Yugoslavia",
        "genre": "Comedy Drama, Coming-of-Age"
      },
      {
        "title": "The Match Factory Girl",
        "director": "Aki Kaurismäki",
        "year": 1990,
        "country": "Finland-Sweden",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Point Break",
        "director": "Kathryn Bigelow",
        "year": 1991,
        "country": "USA-Japan",
        "genre": "Action, Thriller"
      },
      {
        "title": "Lessons of Darkness",
        "director": "Werner Herzog",
        "year": 1992,
        "country": "France-UK-Germany",
        "genre": "Social History, Documentary"
      },
      {
        "title": "The Long Day Closes",
        "director": "Terence Davies",
        "year": 1992,
        "country": "UK",
        "genre": "Coming-of-Age, Family Drama"
      },
      {
        "title": "Twin Peaks: Fire Walk with Me",
        "director": "David Lynch",
        "year": 1992,
        "country": "USA-France",
        "genre": "Mystery, Surrealist Film"
      },
      {
        "title": "Blue",
        "director": "Derek Jarman",
        "year": 1993,
        "country": "UK",
        "genre": "Avant-garde/Experimental, Gay & Lesbian Film"
      },
      {
        "title": "D'est",
        "director": "Chantal Akerman",
        "year": 1993,
        "country": "Belgium-France-Portugal",
        "genre": "Culture & Society, Documentary"
      },
      {
        "title": "The Last Bolshevik",
        "director": "Chris Marker",
        "year": 1993,
        "country": "France-Finland",
        "genre": "Essay Film, Documentary"
      },
      {
        "title": "Burnt by the Sun",
        "director": "Nikita Mikhalkov",
        "year": 1994,
        "country": "Russia-France",
        "genre": "Political Drama, Family Drama"
      },
      {
        "title": "Caro diario",
        "director": "Nanni Moretti",
        "year": 1994,
        "country": "Italy-France",
        "genre": "Comedy, Satire"
      },
      {
        "title": "Exotica",
        "director": "Atom Egoyan",
        "year": 1994,
        "country": "Canada",
        "genre": "Psychological Drama, Ensemble Film"
      },
      {
        "title": "To Live",
        "director": "Zhang Yimou",
        "year": 1994,
        "country": "China-Hong Kong",
        "genre": "Family Drama, Political Drama"
      },
      {
        "title": "Babe",
        "director": "Chris Noonan",
        "year": 1995,
        "country": "Australia",
        "genre": "Animal Picture, Children's Fantasy"
      },
      {
        "title": "The Sweet Hereafter",
        "director": "Atom Egoyan",
        "year": 1997,
        "country": "Canada",
        "genre": "Drama, Ensemble Film"
      },
      {
        "title": "The Idiots",
        "director": "Lars von Trier",
        "year": 1998,
        "country": "Denmark-Spain-Sweden-France-Netherlands-Italy",
        "genre": "Comedy Drama, Satire"
      },
      {
        "title": "L'Humanité",
        "director": "Bruno Dumont",
        "year": 1999,
        "country": "France",
        "genre": "Psychological Drama, Police Detective Film"
      },
      {
        "title": "Sicilia!",
        "director": "Jean-Marie Straub & Danièle Huillet",
        "year": 1999,
        "country": "Italy-France-Germany",
        "genre": "Family Drama, Political Drama"
      },
      {
        "title": "Topsy-Turvy",
        "director": "Mike Leigh",
        "year": 1999,
        "country": "UK-USA",
        "genre": "Comedy Drama, Musical Drama"
      },
       {
        "title": "As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty",
        "director": "Jonas Mekas",
        "year": 2000,
        "country": "USA",
        "genre": "Biography, Documentary"
      },
      {
        "title": "In Praise of Love",
        "director": "Jean-Luc Godard",
        "year": 2001,
        "country": "France",
        "genre": "Drama"
      },
      {
        "title": "Ten",
        "director": "Abbas Kiarostami",
        "year": 2002,
        "country": "France-Iran",
        "genre": "Avant-garde-Experimental, Urban Drama"
      },
      {
        "title": "The Return",
        "director": "Andrey Zvyagintsev",
        "year": 2003,
        "country": "Russia"
      },
      {
        "title": "The Intruder",
        "director": "Claire Denis",
        "year": 2004,
        "country": "France-Korea",
        "genre": "Drama, Psychological Drama"
      },
      {
        "title": "Sideways",
        "director": "Alexander Payne",
        "year": 2004,
        "country": "USA",
        "genre": "Comedy Drama, Buddy Film"
      },
    ]
  }
]
