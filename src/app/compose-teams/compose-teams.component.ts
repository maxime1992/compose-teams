import { Component, OnInit } from '@angular/core';

import { IPlayer } from 'app/teams/teams.interface';

@Component({
  selector: 'app-compose-teams',
  templateUrl: './compose-teams.component.html',
  styleUrls: ['./compose-teams.component.scss'],
})
export class ComposeTeamsComponent implements OnInit {
  players: IPlayer[];

  constructor() {}

  ngOnInit() {
    this.players = [
      { name: 'Victorious', grade: 4 },
      { name: 'Topito', grade: 7 },
      { name: 'Samy', grade: 3 },
      { name: 'Skoko', grade: 9 },
      { name: 'Bescudie', grade: 6 },
      { name: 'Maximouss', grade: 5 },
      { name: 'Abdel', grade: 6 },
      { name: 'Jordy', grade: 7 },
      { name: 'Etienne', grade: 6 },
      { name: 'Kook', grade: 5 },
    ];
  }
}
