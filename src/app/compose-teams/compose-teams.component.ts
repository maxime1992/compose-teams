import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IPlayer } from 'app/teams/teams.interface';

@Component({
  selector: 'app-compose-teams',
  templateUrl: './compose-teams.component.html',
  styleUrls: ['./compose-teams.component.scss'],
})
export class ComposeTeamsComponent implements OnInit {
  deltaMaximumCtrl = new FormControl(0);
  players: IPlayer[];

  constructor() {}

  ngOnInit() {
    this.players = [
      { name: 'Victorious', grade: 3.5 },
      { name: 'Topito', grade: 6.5 },
      { name: 'Samy', grade: 3.5 },
      { name: 'Skoko', grade: 9 },
      { name: 'Bescudie', grade: 6 },
      { name: 'Maximouss', grade: 6 },
      { name: 'Abdel', grade: 6.5 },
      { name: 'Jordy', grade: 6 },
      { name: 'Etienne', grade: 5.5 },
      { name: 'Kook', grade: 4.5 },
    ];
  }
}
