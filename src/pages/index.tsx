import React from 'react';

import { Main } from '../templates/Main';
import { Meta } from '../templates/Meta';
import { AppConfig } from '../utils/AppConfig';
import { shuffle } from '../utils/base';

interface Animal {
  name: string;
  emoji: string;
}

const animals: Animal[] = [
  { name: 'dog', emoji: '🐶' },
  { name: 'cat', emoji: '🐱' },
  { name: 'mouse', emoji: '🐭' },
  { name: 'hamster', emoji: '🐹' },
  { name: 'rabit', emoji: '🐰' },
  { name: 'fox', emoji: '🦊' },
  { name: 'bear', emoji: '🐻' },
  { name: 'panda', emoji: '🐼' },
  { name: 'polar_bear', emoji: '🐻‍❄️' },
  { name: 'koala', emoji: '🐨' },
  { name: 'tiger', emoji: '🐯' },
  { name: 'lion', emoji: '🦁' },
  // { name: 'cow', emoji: '🐮' },
  // { name: 'pig', emoji: '🐷' },
  // { name: 'flog', emoji: '🐸' },
  // { name: 'monkey', emoji: '🐵' },
];

const doubleAnimals = shuffle([...animals, ...animals]);

const FlipCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="w-16 h-16 border-gray-800 border flex justify-center items-center bg-white">
      <div className="text-[60px]">{animal.emoji}</div>
    </div>
  );
};

const Homepage = () => (
  <Main
    meta={<Meta title="One Code Daily" description={AppConfig.description} />}
  >
    <div>One Code Daily</div>
    <div className="grid grid-cols-6 w-fit">
      {doubleAnimals.map((animal: Animal) => (
        <FlipCard key={animal.name} animal={animal} />
      ))}
    </div>
  </Main>
);

export default Homepage;
