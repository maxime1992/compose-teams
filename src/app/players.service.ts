import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import {
  sortPlayersByGradeAndNames,
  sortPlayersByNames,
} from 'app/helpers/players.helper';
import { IPlayer } from 'app/players.interface';

@Injectable()
export class PlayersService {
  private _players$ = new BehaviorSubject<IPlayer[]>([]);

  public players$ = this._players$.asObservable().pipe(
    distinctUntilChanged(),
    map(sortPlayersByNames)
  );

  public selectedPlayers$ = this.players$.pipe(
    map(players => players.filter(player => player.isSelected)),
    map(sortPlayersByGradeAndNames)
  );

  constructor(private storage: LocalStorageService) {
    const players: IPlayer[] = this.storage.retrieve('players');

    if (players) {
      this._players$.next(players);
    } else {
      this.persistPlayers([]);
    }
  }

  changeUserGrade(playerName: string, grade: number): void {
    const players = this._players$.value;

    const updatedPlayers = players.map((player: IPlayer) =>
      player.name === playerName ? { ...player, grade } : player
    );

    this._players$.next(updatedPlayers);
    this.persistPlayers(updatedPlayers);
  }

  changeUserIsSelected(playerName: string, isSelected: boolean): void {
    const players = this._players$.value;

    const updatedPlayers = players.map(player =>
      player.name === playerName ? { ...player, isSelected } : player
    );

    this._players$.next(updatedPlayers);
    this.persistPlayers(updatedPlayers);
  }

  addPlayer(playerName: string, grade: number): void {
    playerName = playerName.trim();

    if (this._players$.value.find(player => player.name === playerName)) {
      throw new Error('Player already exists');
    }

    const updatedPlayers = [
      ...this._players$.value,
      { name: playerName, grade, isSelected: false },
    ];

    this._players$.next(updatedPlayers);
    this.persistPlayers(updatedPlayers);
  }

  removePlayer(name: string): void {
    const updatedPlayers = this._players$.value.filter(
      player => player.name !== name
    );

    this._players$.next(updatedPlayers);
    this.persistPlayers(updatedPlayers);
  }

  persistPlayers(players: IPlayer[]) {
    this.storage.store('players', players);
  }
}
