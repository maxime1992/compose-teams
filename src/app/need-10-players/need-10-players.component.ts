import { Component, Input, OnInit } from '@angular/core';

import { IPlayer } from 'app/players.interface';

@Component({
  selector: 'app-need-10-players',
  template: `
    <span *ngIf="selectedPlayers.length < 10; else tooManyPlayers">
      Not enough player
    </span>

    <ng-template #tooManyPlayers>
      Too many players
    </ng-template>

    <span>to generate the possible games</span>
  `,
  styles: [``],
})
export class Need10PlayersComponent implements OnInit {
  @Input() selectedPlayers: IPlayer[];

  constructor() {}

  ngOnInit() {}
}
