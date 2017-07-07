import { Component, OnInit, Input } from '@angular/core';

import { IPlayer } from 'app/teams/teams.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() players: IPlayer[];

  constructor() {}

  ngOnInit() {}
}
