import { Component, OnInit, Input } from '@angular/core';

import { IGame } from 'app/games/games.interface';
import { IPlayer } from 'app/teams/teams.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  @Input() players: IPlayer[];

  games: IGame[];

  constructor() {}

  ngOnInit() {
    // generate the games here
  }
}
