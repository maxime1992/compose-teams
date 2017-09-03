import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IGame } from 'app/games/games.interface';
import { generateGames } from 'app/helpers/games-generator.helper';
import { PlayersService } from 'app/players.service';

@Injectable()
export class GamesService {
  public games$: Observable<IGame[]>;

  constructor(private playersService: PlayersService) {
    this.games$ = this.playersService.selectedPlayers$
      .distinctUntilChanged()
      .map(players => (players.length === 10 ? players : []))
      .map(players => generateGames(players));
  }
}
