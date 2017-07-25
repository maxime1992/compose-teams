import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

import { IGame } from 'app/games/games.interface';
import { IPlayer } from 'app/teams/teams.interface';
import { generateGames } from 'app/helpers/games-generator.helper';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit, OnChanges {
  @Input() players: IPlayer[];
  @Input() deltaMaximum: number;
  private gamesBackup: IGame[];
  games: IGame[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['players']) {
      // generate a new games only if needed
      this.gamesBackup = generateGames(this.players);
    }

    let deltaMaximum = this.deltaMaximum;

    if (changes['deltaMaximum']) {
      deltaMaximum = changes['deltaMaximum'].currentValue;
    }

    this.games = this.gamesBackup.filter(
      game => game.gradeDifference <= deltaMaximum
    );
  }
}
