import { IPlayer } from 'app/players.interface';

export const sortPlayersByGradeAndNames = (players: IPlayer[]) =>
  players.sort((p1, p2) => {
    if (p1.grade === p2.grade) {
      return p1.name.localeCompare(p2.name);
    }

    return p1.grade < p2.grade ? 1 : -1;
  });

export const sortPlayersByNames = (players: IPlayer[]) =>
  players.sort((p1, p2) => p1.name.localeCompare(p2.name));
