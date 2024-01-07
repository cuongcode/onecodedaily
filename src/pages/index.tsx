import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

// import { v4 as uuidv4 } from 'uuid';
import { Main } from '../templates/Main';
import { Meta } from '../templates/Meta';
import { AppConfig } from '../utils/AppConfig';
import { shuffle } from '../utils/base';

const { v4: uuidv4 } = require('uuid');

interface Animal {
  name: string;
  emoji: string;
}

const ANIMALS: Animal[] = [
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
  { name: 'cow', emoji: '🐮' },
  { name: 'pig', emoji: '🐷' },
  { name: 'flog', emoji: '🐸' },
  { name: 'monkey', emoji: '🐵' },
  { name: 'butterfly', emoji: '🦋' },
  { name: 'unicorn', emoji: '🦄' },
];

const Homepage = () => {
  return (
    <Main
      meta={<Meta title="One Code Daily" description={AppConfig.description} />}
    >
      <div>One Code Daily</div>
      <AnimalBoard />
    </Main>
  );
};

export default Homepage;

const AnimalBoard = () => {
  const initialBoard = [...ANIMALS, ...ANIMALS].map((animal) => {
    return {
      id: uuidv4(),
      ...animal,
    };
  });
  const [board, setBoard] = useState<any>(initialBoard);

  useEffect(() => {
    const updatedBoard = shuffle([...board]);
    setBoard(updatedBoard);
  }, []);
  const _shuffleBoard = () => {
    const updatedBoard = shuffle([...board]);
    setBoard(updatedBoard);
  };
  return (
    <>
      <div className={clsx('grid grid-cols-6 w-fit')}>
        {board.map((animal: any) => (
          <FlipCard key={animal.id} animal={animal} />
        ))}
      </div>
      <button
        onClick={_shuffleBoard}
        className="p-2 bg-gray-500 w-fit rounded-md text-white"
      >
        Shuffle
      </button>
    </>
  );
};

const FlipCard = ({ animal }: { animal: Animal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const _openCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={_openCard}
      className="w-16 h-16 border-gray-800 border flex justify-center items-center bg-white"
    >
      {isOpen ? <div className="text-[60px]">{animal.emoji}</div> : null}
    </div>
  );
};
