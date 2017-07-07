import { ITeam } from 'app/teams/teams.interface';

export interface IGame {
  gradeDifference: number;
  teams: [ITeam, ITeam];
}
