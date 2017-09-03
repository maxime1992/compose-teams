import { ITeam } from 'app/games/teams/teams.interface';

export interface IGame {
  gradeDifference: number;
  teams: [ITeam, ITeam];
}
