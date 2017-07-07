import { Component, OnInit } from '@angular/core';

import { ITeam } from 'app/teams/teams.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: ITeam[];

  constructor() {}

  ngOnInit() {}
}
