import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ITeam } from 'app/teams/teams.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent implements OnInit {
  @Input() teams: ITeam[];
  @Input() gradeDifference: number;

  constructor() {}

  ngOnInit() {}
}
