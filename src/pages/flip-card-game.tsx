import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { BaseButton } from '../components/base/base-button';
import { Main } from '../templates/Main';
import { Meta } from '../templates/Meta';
import { AppConfig } from '../utils/AppConfig';
import { shuffle } from '../utils/base';

const { v4: uuidv4 } = require('uuid');

interface Animal {
  name: string;
  emoji: string;
}

// https://getemoji.com/#animals-nature
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
  { name: 'frog', emoji: '🐸' },
  { name: 'monkey', emoji: '🐵' },
  { name: 'butterfly', emoji: '🦋' },
  { name: 'unicorn', emoji: '🦄' },
];

const FlipCardGame = () => {
  return (
    <Main
      meta={<Meta title="One Code Daily" description={AppConfig.description} />}
    >
      <AnimalBoard />
    </Main>
  );
};

export default FlipCardGame;

const AnimalBoard = () => {
  const initialBoard = [...ANIMALS, ...ANIMALS].map((animal) => {
    return {
      id: uuidv4(),
      isOpen: false,
      ...animal,
    };
  });
  const [board, setBoard] = useState<any>(initialBoard);
  const [selectionOne, setSelectionOne] = useState<any>(null);
  const [missCount, setMissCount] = useState(0);
  useEffect(() => {
    const updatedBoard = shuffle([...board]);
    setBoard(updatedBoard);
  }, []);
  const _openCard = (id: string) => {
    const updatedBoard = board.map((animal: any) => {
      if (animal.id === id) {
        return { ...animal, isOpen: true };
      }
      return animal;
    });
    setBoard(updatedBoard);
  };
  const _resetBoard = () => {
    const closedBoard = board.map((animal: any) => {
      return { ...animal, isOpen: false };
    });
    const updatedBoard = shuffle([...closedBoard]);
    setBoard(updatedBoard);
    setMissCount(0);
  };
  const _closeCards = (id1: string, id2: string) => {
    const updatedBoard = board.map((animal: any) => {
      if (animal.id === id1 || animal.id === id2) {
        return { ...animal, isOpen: false };
      }
      return animal;
    });
    setTimeout(() => {
      setBoard(updatedBoard);
    }, 200);
  };
  const clickCard = (animal: any) => {
    if (animal.isOpen) {
      return;
    }
    _openCard(animal.id);
    if (selectionOne === null) {
      setSelectionOne(animal);
    }
    if (selectionOne !== null && animal.emoji === selectionOne.emoji) {
      setSelectionOne(null);
    }
    if (selectionOne !== null && animal.emoji !== selectionOne.emoji) {
      setSelectionOne(null);
      _closeCards(selectionOne.id, animal.id);
      setMissCount((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className={clsx('grid grid-cols-6 w-fit')}>
        {board.map((animal: any) => (
          <FlipCard key={animal.id} animal={animal} clickCard={clickCard} />
        ))}
      </div>
      <BaseButton text="Reset" onClick={_resetBoard} />
      <div>Miss Count: {missCount}</div>
    </>
  );
};

const FlipCard = ({
  animal,
  clickCard,
}: {
  animal: any;
  clickCard: (animal: any) => void;
}) => {
  return (
    <div
      onClick={() => clickCard(animal)}
      className="w-16 h-16 border-gray-800 border flex justify-center items-center bg-white"
    >
      {animal.isOpen ? <div className="text-[60px]">{animal.emoji}</div> : null}
    </div>
  );
};
