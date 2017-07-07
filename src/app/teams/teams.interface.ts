export interface IPlayer {
  name: string;
  grade: number;
}

export interface ITeam {
  grade: number;
  players: IPlayer[];
}
