const clone = require('clone-deep');

const cards = {
  'wheat field': {
    type: 'primary',
    color: 'blue',
    cost: 1,
    activation: [1],
    action: (gameOriginal, owner) => {
      const game = clone(gameOriginal);

      if (!game.players[owner.id]) {
        throw new Error('player could not be found');
      }

      game.players[owner.id].coins += 1;

      return game;
    },
  },
  bakery: {
    type: 'secondary',
    color: 'green',
    cost: 1,
    activation: [2, 3],
    action: (gameOriginal, owner) => {
      const game = clone(gameOriginal);
      if (game.turn === owner.id) {
        game.players[owner.id].coins += 1;
      }

      return game;
    },
  },
};

class Card {
  constructor(cardName, owner) {
    if (!(cardName in cards)) {
      throw new Error('This card does not exist');
    }

    const card = cards[cardName];

    // map all card properties to card class
    Object.keys(card).forEach(key => {
      this[key] = card[key];
    });

    this.name = cardName;

    if (owner) {
      this.owner = owner;
    }
  }
}

export default Card;
