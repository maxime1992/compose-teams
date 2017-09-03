import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GamesService } from 'app/games.service';
import { IPlayer } from 'app/players.interface';
import { PlayersService } from 'app/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nbGames$: Observable<number>;

  players$: Observable<IPlayer[]>;
  selectedPlayers$: Observable<IPlayer[]>;

  constructor(
    private playersService: PlayersService,
    private gameService: GamesService
  ) {}

  ngOnInit() {
    this.players$ = this.playersService.players$;
    this.selectedPlayers$ = this.playersService.selectedPlayers$;
    this.nbGames$ = this.gameService.games$.map(games => games.length);
  }
}
