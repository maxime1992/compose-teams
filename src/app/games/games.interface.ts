import { ITeam } from 'app/teams/teams.interface';

export interface IGame {
  score: number;
  teams: [ITeam, ITeam];
}
