import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { IPlayer } from 'app/teams/teams.interface';
import { PlayersService } from 'app/players.service';

@Component({
  selector: 'app-compose-teams',
  templateUrl: './compose-teams.component.html',
  styleUrls: ['./compose-teams.component.scss'],
})
export class ComposeTeamsComponent implements OnInit {
  deltaMaximumCtrl = new FormControl(0);
  players$: Observable<IPlayer[]>;

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.players$ = this.playersService.players$;
  }
}
