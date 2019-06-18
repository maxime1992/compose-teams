import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { IGame } from 'app/games/games.interface';
import { generateGames } from 'app/helpers/games-generator.helper';
import { IPlayer } from 'app/players.interface';
import { PlayersService } from 'app/players.service';

@Injectable()
export class GamesService {
  public games$: Observable<IGame[]>;

  constructor(private playersService: PlayersService) {
    this.games$ = this.playersService.selectedPlayers$.pipe(
      distinctUntilChanged(),
      map((players: IPlayer[]) => (players.length === 10 ? players : [])),
      map((players: IPlayer[]) => generateGames(players))
    );
  }
}
