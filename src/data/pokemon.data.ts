import { Pokemon } from 'page/App'

const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      'Sp. Attack': 65,
      'Sp. Defense': 65,
      Speed: 45
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png'
    }
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: ['Grass', 'Poison'],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      'Sp. Attack': 80,
      'Sp. Defense': 80,
      Speed: 60
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png'
    }
  },
  {
    id: 3,
    name: 'Venusaur',
    type: ['Grass', 'Poison'],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      'Sp. Attack': 100,
      'Sp. Defense': 100,
      Speed: 80
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png'
    }
  },
  {
    id: 4,
    name: 'Charmander',
    type: ['Fire'],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      'Sp. Attack': 60,
      'Sp. Defense': 50,
      Speed: 65
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png'
    }
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: ['Fire'],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      'Sp. Attack': 80,
      'Sp. Defense': 65,
      Speed: 80
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png'
    }
  },
  {
    id: 6,
    name: 'Charizard',
    type: ['Fire', 'Flying'],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      'Sp. Attack': 109,
      'Sp. Defense': 85,
      Speed: 100
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png'
    }
  },
  {
    id: 7,
    name: 'Squirtle',
    type: ['Water'],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      'Sp. Attack': 50,
      'Sp. Defense': 64,
      Speed: 43
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/007.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png'
    }
  },
  {
    id: 8,
    name: 'Wartortle',
    type: ['Water'],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      'Sp. Attack': 65,
      'Sp. Defense': 80,
      Speed: 58
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/008.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/008.png'
    }
  },
  {
    id: 9,
    name: 'Blastoise',
    type: ['Water'],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      'Sp. Attack': 85,
      'Sp. Defense': 105,
      Speed: 78
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/009.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/009.png'
    }
  },
  {
    id: 10,
    name: 'Caterpie',
    type: ['Bug'],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      'Sp. Attack': 20,
      'Sp. Defense': 20,
      Speed: 45
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/010.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/010.png'
    }
  },
  {
    id: 11,
    name: 'Metapod',
    type: ['Bug'],
    base: {
      HP: 50,
      Attack: 20,
      Defense: 55,
      'Sp. Attack': 25,
      'Sp. Defense': 25,
      Speed: 30
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/011.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/011.png'
    }
  },
  {
    id: 12,
    name: 'Butterfree',
    type: ['Bug', 'Flying'],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 50,
      'Sp. Attack': 90,
      'Sp. Defense': 80,
      Speed: 70
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/012.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/012.png'
    }
  },
  {
    id: 13,
    name: 'Weedle',
    type: ['Bug', 'Poison'],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      'Sp. Attack': 20,
      'Sp. Defense': 20,
      Speed: 50
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/013.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/013.png'
    }
  },
  {
    id: 14,
    name: 'Kakuna',
    type: ['Bug', 'Poison'],
    base: {
      HP: 45,
      Attack: 25,
      Defense: 50,
      'Sp. Attack': 25,
      'Sp. Defense': 25,
      Speed: 35
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/014.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/014.png'
    }
  },
  {
    id: 15,
    name: 'Beedrill',
    type: ['Bug', 'Poison'],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 40,
      'Sp. Attack': 45,
      'Sp. Defense': 80,
      Speed: 75
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/015.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/015.png'
    }
  },
  {
    id: 16,
    name: 'Pidgey',
    type: ['Normal', 'Flying'],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      'Sp. Attack': 35,
      'Sp. Defense': 35,
      Speed: 56
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/016.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/016.png'
    }
  },
  {
    id: 17,
    name: 'Pidgeotto',
    type: ['Normal', 'Flying'],
    base: {
      HP: 63,
      Attack: 60,
      Defense: 55,
      'Sp. Attack': 50,
      'Sp. Defense': 50,
      Speed: 71
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/017.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/017.png'
    }
  },
  {
    id: 18,
    name: 'Pidgeot',
    type: ['Normal', 'Flying'],
    base: {
      HP: 83,
      Attack: 80,
      Defense: 75,
      'Sp. Attack': 70,
      'Sp. Defense': 70,
      Speed: 101
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/018.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/018.png'
    }
  },
  {
    id: 19,
    name: 'Rattata',
    type: ['Normal'],
    base: {
      HP: 30,
      Attack: 56,
      Defense: 35,
      'Sp. Attack': 25,
      'Sp. Defense': 35,
      Speed: 72
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/019.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/019.png'
    }
  },
  {
    id: 20,
    name: 'Raticate',
    type: ['Normal'],
    base: {
      HP: 55,
      Attack: 81,
      Defense: 60,
      'Sp. Attack': 50,
      'Sp. Defense': 70,
      Speed: 97
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/020.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/020.png'
    }
  },
  {
    id: 21,
    name: 'Spearow',
    type: ['Normal', 'Flying'],
    base: {
      HP: 40,
      Attack: 60,
      Defense: 30,
      'Sp. Attack': 31,
      'Sp. Defense': 31,
      Speed: 70
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/021.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/021.png'
    }
  },
  {
    id: 22,
    name: 'Fearow',
    type: ['Normal', 'Flying'],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 65,
      'Sp. Attack': 61,
      'Sp. Defense': 61,
      Speed: 100
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/022.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/022.png'
    }
  },
  {
    id: 23,
    name: 'Ekans',
    type: ['Poison'],
    base: {
      HP: 35,
      Attack: 60,
      Defense: 44,
      'Sp. Attack': 40,
      'Sp. Defense': 54,
      Speed: 55
    },
    image: {
      sprite:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/023.png',
      thumbnail:
        'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/023.png'
    }
  }
]

export default pokemonData
