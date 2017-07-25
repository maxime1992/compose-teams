import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IPlayer } from 'app/players.interface';

@Injectable()
export class PlayersService {
  private _players$ = new BehaviorSubject<IPlayer[]>([]);

  public players$ = this._players$.asObservable();

  constructor() {}

  changeUserGrade(playerName: string, grade: number): void {
    const players = this._players$.value;

    const updatedPlayers = players.map(
      player => (player.name === playerName ? { ...player, grade } : player)
    );

    this._players$.next(updatedPlayers);
  }
}
