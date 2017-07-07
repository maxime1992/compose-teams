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
export class GamesComponent implements OnInit {
  @Input() players: IPlayer[];

  constructor() {}

  ngOnInit() {}

  games(): IGame[] {
    return generateGames(this.players);
  }
}
