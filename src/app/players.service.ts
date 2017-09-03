import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { sortPlayersByGradeAndNames } from 'app/helpers/players.helper';
import { IPlayer } from 'app/players.interface';

@Injectable()
export class PlayersService {
  private _players$ = new BehaviorSubject<IPlayer[]>([]);

  public players$ = this._players$
    .asObservable()
    .distinctUntilChanged()
    .map(sortPlayersByGradeAndNames);

  public selectedPlayers$ = this.players$.map(players =>
    players.filter(player => player.isSelected)
  );
  constructor() {}

  changeUserGrade(playerName: string, grade: number): void {
    const players = this._players$.value;

    const updatedPlayers = players.map(
      player => (player.name === playerName ? { ...player, grade } : player)
    );

    this._players$.next(updatedPlayers);
  }

  changeUserIsSelected(playerName: string, isSelected: boolean): void {
    const players = this._players$.value;

    const updatedPlayers = players.map(
      player =>
        player.name === playerName ? { ...player, isSelected } : player
    );

    this._players$.next(updatedPlayers);
  }

  addPlayer(playerName: string, grade: number): void {
    if (this._players$.value.find(player => player.name === playerName)) {
      throw new Error('Player already exists');
    }

    this._players$.next([
      ...this._players$.value,
      { name: playerName, grade, isSelected: false },
    ]);
  }

  removePlayer(name: string): void {
    this._players$.next(
      this._players$.value.filter(player => player.name !== name)
    );
  }
}
