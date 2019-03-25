import React, { useState, useEffect } from 'react';
import Card from '../lib/card';
import rollDice from '../lib/rollDice';
import Player from '../components/Player';

const clone = require('clone-deep');

const initialGame = {
  players: {
    1: {
      id: 1,
      coins: 3,
      cards: [new Card('wheat field'), new Card('bakery')],
    },
    2: {
      id: 2,
      coins: 3,
      cards: [new Card('wheat field'), new Card('bakery')],
    },
  },
  turn: 1,
};

const Game = () => {
  const [roll, setRoll] = useState(null);
  const [game, setGame] = useState(initialGame);

  // useEffect(() => {
  //   setRoll(rollDice());

  //   players[0].cards.forEach(playerCard => {
  //     if (playerCard.activation.includes(roll)) {
  //       console.log(playerCard.action(game, { id: 1 }));
  //     }
  //   });
  //   // eslint-disable-next-line
  // }, []);

  const startTurn = () => {
    const newRoll = rollDice();

    let updatedGame = clone(game);

    Object.entries(updatedGame.players).forEach(([key, player]) => {
      player.cards.forEach(playerCard => {
        if (playerCard.activation.includes(newRoll)) {
          updatedGame = playerCard.action(updatedGame, player);
        }
      });
    });

    if (updatedGame.turn >= Object.keys(updatedGame.players).length) {
      updatedGame.turn = 1;
    } else {
      updatedGame.turn += 1;
    }

    setRoll(newRoll);
    setGame(updatedGame);
  };

  return (
    <div>
      <div>Roll: {roll}</div>
      <div>Current Turn: {game.turn}</div>
      <div>
        {Object.entries(game.players).map(([key, player]) => (
          <Player key={player.id} data={player} roll={roll} turn={game.turn} />
        ))}
      </div>
      <button type="button" onClick={startTurn}>
        Start Turn
      </button>
    </div>
  );
};

export default Game;
