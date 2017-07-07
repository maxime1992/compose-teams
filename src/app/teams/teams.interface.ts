export interface IPlayer {
  name: string;
  grade: number;
}

export interface ITeam {
  score: number;
  players: IPlayer[];
}
