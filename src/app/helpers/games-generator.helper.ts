import * as Combinatorics from 'js-combinatorics';

import { IGame } from 'app/games/games.interface';
import { ITeam } from 'app/games/teams/teams.interface';
import { IPlayer } from 'app/players.interface';

export function generateGames(players: IPlayer[]): IGame[] {
  if (players.length === 0) {
    return [];
  }

  const teams = generateTeams(players);
  const complement = (t: IPlayer[]) => players.filter(p => !t.includes(p));
  return teams
    .map((team1: IPlayer[]) => {
      const team2 = complement(team1);
      const total1 = grade(team1);
      const total2 = grade(team2);
      const mergedTeams: [ITeam, ITeam] = [
        {
          players: team1,
          grade: total1,
        },
        {
          players: team2,
          grade: total2,
        },
      ];
      return {
        teams: mergedTeams,
        gradeDifference: Math.abs(total1 - total2),
      };
    })
    .sort((a, b) => a.gradeDifference - b.gradeDifference);
}

function generateTeams(players: IPlayer[]): IPlayer[][] {
  const combinations: IPlayer[][] = Combinatorics.combination(
    players,
    players.length / 2
  ).toArray();
  // we remove half of it as they are the complementaries!
  return combinations.slice(0, combinations.length / 2);
}

function grade(player: IPlayer | IPlayer[]): number {
  if (Array.isArray(player)) {
    return player.map(grade).reduce(plus, 0);
  } else {
    return player.grade;
  }
}

function plus(a: number, b: number) {
  return a + b;
}
