import { Component, Input, OnInit } from '@angular/core';

import { IPlayer } from 'app/players.interface';

@Component({
  selector: 'app-need-10-players',
  template: `
    <div fxFill fxLayout="column" fxLayoutAlign="center center">
      <div>
        <span *ngIf="selectedPlayers.length < 10; else tooManyPlayers">
          Not enough player
        </span>

        <ng-template #tooManyPlayers>
          Too many players
        </ng-template>

        <span>to generate the possible games</span>
      </div>

      <mat-icon class="color-primary">mood_bad</mat-icon>
    </div>
  `,
  styles: [
    `
    mat-icon {
      font-size: 45px;
      margin-top: 20px;
    }
  `,
  ],
})
export class Need10PlayersComponent implements OnInit {
  @Input() selectedPlayers: IPlayer[];

  constructor() {}

  ngOnInit() {}
}
