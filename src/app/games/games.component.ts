import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GamesService } from 'app/games.service';
import { IGame } from 'app/games/games.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  @Input() deltaMax: number;

  games$: Observable<IGame[]>;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games$ = this.gamesService.games$;
  }
}
