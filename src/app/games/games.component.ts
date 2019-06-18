import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from 'app/games.service';
import { IGame } from 'app/games/games.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games$: Observable<IGame[]>;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games$ = this.gamesService.games$;
  }
}
