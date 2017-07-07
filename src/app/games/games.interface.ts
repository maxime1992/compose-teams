import { ITeam } from 'app/teams/teams.interface';

export interface IGame {
  grade: number;
  teams: [ITeam, ITeam];
}
