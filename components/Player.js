import React from 'react';
import { Heading, Image, Paragraph, Card } from 'reakit';

const Player = ({ data, roll }) => {
  if (!data || !data.cards) {
    return null;
  }

  return (
    <div>
      <div>ID: {data.id}</div>
      <div>Coins: {data.coins}</div>
      <div>
        {data.cards.map(card => (
          <Card
            height={300}
            width={200}
            borderColor={card.activation.includes(roll) ? 'red' : '#dadada'}
          >
            <Heading use="h5" textTransform="capitalize">
              {card.name} ({card.activation.join(', ')})
            </Heading>
            <Paragraph>Description for Card</Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Player;
