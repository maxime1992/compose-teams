import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PlayersService } from 'app/players.service';
import { IPlayer } from 'app/players.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject();

  playersFormGroup: FormGroup;
  players: IPlayer[];

  constructor(
    private fb: FormBuilder,
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    this.playersFormGroup = this.fb.group({});

    this.playersService.players$
      .takeUntil(this.onDestroy$)
      .do(players => {
        this.players = players;
        this.updateFormControl(players);
      })
      .subscribe();
  }

  private updateFormControl(players: IPlayer[]) {
    players.forEach(player => {
      const control = this.playersFormGroup.controls[player.name];

      if (control) {
        if (control.value !== player.grade) {
          control.patchValue(player.grade, { emitEvent: false });
        }
      } else {
        this.playersFormGroup.addControl(
          player.name,
          new FormControl(player.grade, [
            Validators.required,
            Validators.min(0),
            Validators.max(10),
          ])
        );

        this.playersFormGroup.controls[player.name].valueChanges
          .distinctUntilChanged()
          .do(grade => this.playersService.changeUserGrade(player.name, +grade))
          .subscribe();
      }
    });

    for (const cName in this.playersFormGroup.controls) {
      if (players.filter(p => p.name === cName).length === 0) {
        this.playersFormGroup.removeControl(cName);
      }
    }
  }

  private generatePlayersGroup(players: IPlayer[]) {
    return players.reduce((acc, curr) => {
      return { ...acc, [curr.name]: curr.grade };
    }, {});
  }

  trackByName(player: IPlayer) {
    return player.name;
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
