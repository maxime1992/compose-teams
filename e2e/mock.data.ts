import { IPlayer } from './../src/app/players.interface';

export const tenPlayers = (): IPlayer[] => {
  return [
    { name: 'Player 0', grade: 9, isSelected: false },
    { name: 'Player 1', grade: 8, isSelected: false },
    { name: 'Player 2', grade: 6, isSelected: false },
    { name: 'Player 3', grade: 7.5, isSelected: false },
    { name: 'Player 4', grade: 5, isSelected: false },
    { name: 'Player 5', grade: 4.5, isSelected: false },
    { name: 'Player 6', grade: 3, isSelected: false },
    { name: 'Player 7', grade: 7, isSelected: false },
    { name: 'Player 8', grade: 8.5, isSelected: false },
    { name: 'Player 9', grade: 4, isSelected: false },
  ];
};
