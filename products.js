const products = [

  {
      title: 'Luigis Mansion',
      description: 'Luigis Mansion 3 is an action-adventure game, in which players control the character of Luigi from a fixed third-person perspective, as they capture ghosts across a large hotel setting.',
      price: 59,
      img: '/images/juego1.png',
      id: 1,
      playerMode: 'multiplayer',
      rating: 5,
    },

  {
      title: 'Pokemon Sword',
      description: 'Pokémon Sword. Pokémon Sword is one of the two latest Pokémon adventures. It takes place in the Galar region, which is inspired by the UK, and features three new starters, and brings back gym battles. Older Pokémon seem to make an appearance as well, so you will see some of your favorites',
      price: 59,
      img: '/images/juego2.png',
      id: 2,
      playerMode: 'single player',
      rating: 3,
    },

  {
      title: 'Pokemon Shield',
      description: 'Pokémon Shield is one of the two latest Pokémon adventures. It takes place in the Galar region, which is inspired by the UK, and features three new starters, and brings back gym battles. Older Pokémon seem to make an appearance as well, so you will see some of your favorites.',
      price: 59,
      img: '/images/juego3.png',
      id: 3,
      playerMode: 'single player',
      rating: 3,
    },

  {
      title: 'Tokyo Miracle Session',
      description: 'Tokyo Mirage Sessions ♯FE is a role-playing video game (RPG), and a crossover between the Shin Megami Tensei and Fire Emblem series. Set in modern-day Tokyo, the game follows the members of a talent agency during their conflicts with hostile beings from another world called Mirages.',
      price: 29,
      img: '/images/juego4.png',
      id: 4,
      playerMode: 'single player',
      rating: 2,
    },

  {
      title: 'Overcooked 2!',
      description: 'Overcooked 2 is a chaotic co-op cooking game for 1-4 players in which you must serve a variety of recipes including sushi, pasta, cakes, burgers and burritos to hungry customers in a series of unconventional kitchens.',
      price: 29,
      img: '/images/juego5.png',
      id: 5,
      playerMode: 'single player',
      rating: 2,
    },

  {
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Breath of the Wild is an action-adventure game set in an open world environment where players are tasked with exploring the kingdom of Hyrule while controlling Link.',
      price: 59,
      img: '/images/juego6.png',
      id: 6,
      playerMode: 'single player',
      rating: 5,
    },

  {
      title: 'Mario Odyssey',
      description: 'Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as "Kingdoms", on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.',
      price: 59,
      img: '/images/juego7.png',
      id: 7,
      playerMode: 'multiplayer',
      rating: 5,
    },

  {
      title: 'Mario Kart 8',
      description: 'The game was announced at E3 2013 and released worldwide in May 2014. Like in other games in the series, in Mario Kart 8, players control characters from the Mario franchise and participate in kart racing on various race tracks, using a variety of items to hinder opponents or gain advantages in the race.',
      price: 59,
      img: '/images/juego8.png',
      id: 8,
      playerMode: 'multiplayer',
      rating: 4,
    },

  {
      title: 'The Legend of Zelda: Links Awakening',
      description: 'The Legend of Zelda: Links Awakening is an action-adventure game with a top-down perspective. Its story is set on Koholint Island, where Link, the player character, is stranded after his ship is caught up in a storm. ',
      price: 59,
      img: '/images/juego9.png',
      id: 9,
      playerMode: 'single player', 
      rating: 4,
    },   

  {
      title: 'Super Mario Maker 2',
      description: 'Super Mario Maker 2 is a side-scrolling platform game and game creation system developed and published by Nintendo for the Nintendo Switch. ... Super Mario Maker 2 introduces new features and course assets, including a new course style and assets based on Super Mario 3D World.',
      price: 39,
      img: '/images/juego10.png',
      id: 10,
      playerMode: 'multiplayer',
      rating: 3,
    },

  {
      title: 'Crash Bandicoot Nsane Trilogy',
      description: 'Crash Bandicoot N. Sane Trilogy is a collection of remasters of the first three games in the Crash Bandicoot series; Crash Bandicoot, Cortex Strikes Back and Warped. Each game features Crash Bandicoot traversing various levels in order to stop Doctor Neo Cortex from taking over the world.',
      price: 59,
      img: '/images/juego11.png',
      id: 11,
      playerMode: 'single player',
      rating: 2,
    },

  {
      title: 'Animal Crossing: New Horizon',
      description: 'It is the fifth main series title in the Animal Crossing series. ... New Horizons sees the player assuming the role of a customizable character who moves to a deserted island after purchasing a package from Tom Nook, a tanuki character who has appeared in every entry in the Animal Crossing series.',
      price: 59,
      img: '/images/juego12.png',
      id: 12,
      playerMode: 'single player',
      rating: 4,
    },

  {
      title: 'Daemon x Machina',
      description: 'Third-person mech blaster, Daemon X Machina, tells the story of a world recovering from a major catastrophe. The moon has crashed into the planet, and the resulting wreck has been emitting a strange energy that is not only turning all artificial intelligence sentient, but also turning it against the human race.',
      price: 39,
      img: '/images/juego13.png',
      id: 13,
      playerMode: 'single player',
      rating: 3,
    },

  {
      title: 'DarkSouls Remastered',
      description: 'Dark Souls is a third-person action role-playing game. A core mechanic of the game is exploration. Players are encouraged by the game to proceed with caution, learn from past mistakes, or find alternative areas to explore.',
      price: 39,
      img: '/images/juego14.png',
      id: 14,
      playerMode: 'single player',
      rating: 4,
    },

  {
      title: 'Just Dance 2020',
      description: 'Just Dance® 2020 is the ultimate dance game with 40 hot tracks from chart-topping hits like “Old Town Road (Remix) by Lil Nas X Ft. Billy Ray Cyrus and “God Is A Woman” by Ariana Grande. Keep the party going for hours with songs for the whole family to enjoy!',
      price: 59,
      img: '/images/juego15.png',
      id: 15,
      playerMode: 'multiplayer',
      rating: 3,
    },

  {
      title: 'Mario and Sonic: Olympic Games Tokyo 2020',
      description: 'Like previous Mario & Sonic titles, Mario & Sonic at the Olympic Games Tokyo 2020 is a sports game featuring a crossover cast of characters from Nintendo Super Mario and Sega Sonic the Hedgehog series. The game also features split-screen local multiplayer and online play.',
      price: 29,
      img: '/images/juego16.png',
      id: 16,
      playerMode: 'multiplayer',
      rating: 2,
    },
    
  {
      title: 'Minecraft',
      description: 'Minecraft is a Lego style adventure game which has massively increased in popularity since it was released two years ago. It now has more than 33 million users worldwide. ',
      price: 39,
      img: '/images/juego17.png',
      id: 17,
      playerMode: 'multiplayer',
      rating: 5,
    },
    
  {
      title: 'Xenoblade Chronicles',
      description: 'Xenoblade Chronicles is a series of fantasy and science fiction action role-playing video games developed by Monolith Soft and published by Nintendo. It is a part of the Xeno meta series created by Tetsuya Takahashi, but was formed after Nintendo acquisition of Monolith Soft.',
      price: 69,
      img: '/images/juego18.png',
      id: 18,
      playerMode: 'single player',
      rating: 5,
    }, 

  {
      title: 'Mario Party',
      description: 'Mario Party is a party video game series featuring characters from the Mario franchise in which up to four local players or computer-controlled characters (called "CPUs") compete in a board game interspersed with minigames.',
      price: 59,
      img: '/images/juego19.png',
      id: 19,
      playerMode: 'multiplayer',
      rating: 5,
      
    }, 

  {
      title: 'Wolfenstein',
      description: 'Wolfenstein: The New Order is an action-adventure and first-person shooter video game played from a first-person perspective. To progress through the story, players fight enemies throughout levels.',
      price: 39,
      img: '/images/juego20.png',
      id: 20,
      playerMode: 'single player',
      rating: 3,
    },
];
module.exports = products;
