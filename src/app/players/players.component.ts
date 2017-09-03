import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MdInput } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { IPlayer } from 'app/players.interface';
import { PlayersService } from 'app/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject();
  @ViewChild(MdInput) nameNewPlayer;

  playersFormGroup: FormGroup;
  selectedPlayers$: Observable<IPlayer[]>;
  playersSubscriptions: { [key: string]: Subscription } = {};

  displayedColumns = ['name', 'grade', 'select', 'remove'];
  dataSource: ExampleDataSource | null;

  newPlayerFormGroup: FormGroup;
  isNewPlayerFormGroupVisible = false;

  constructor(
    private fb: FormBuilder,
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    this.playersFormGroup = this.fb.group({});

    this.newPlayerFormGroup = this.fb.group({
      name: [''],
    });

    this.playersService.players$
      .takeUntil(this.onDestroy$)
      .do(players => this.updateFormControl(players))
      .subscribe();

    this.selectedPlayers$ = this.playersService.selectedPlayers$.takeUntil(
      this.onDestroy$
    );

    this.dataSource = new ExampleDataSource(this.playersService.players$);
  }

  private updateFormControl(players: IPlayer[]) {
    players.forEach(player => {
      const controlGrade = this.playersFormGroup.controls[
        `${player.name}-grade`
      ];
      const controlIsSelected = this.playersFormGroup.controls[
        `${player.name}-is-selected`
      ];

      if (controlGrade && controlIsSelected) {
        if (controlGrade.value !== player.grade) {
          controlGrade.patchValue(player.grade, { emitEvent: false });
        }

        if (controlIsSelected.value !== player.isSelected) {
          controlIsSelected.patchValue(player.isSelected, { emitEvent: false });
        }
      } else {
        this.playersFormGroup.addControl(
          `${player.name}-grade`,
          new FormControl(player.grade, [
            Validators.required,
            Validators.min(0),
            Validators.max(10),
          ])
        );

        this.playersFormGroup.addControl(
          `${player.name}-is-selected`,
          new FormControl(player.isSelected, [])
        );

        const gradeSubscription = this.playersFormGroup.controls[
          `${player.name}-grade`
        ].valueChanges
          .distinctUntilChanged()
          .debounceTime(200)
          .do(grade =>
            this.playersService.changeUserGrade(player.name, +grade)
          );

        this.playersSubscriptions[
          `${player.name}-grade`
        ] = gradeSubscription.subscribe();

        const isSelectedSubscription = this.playersFormGroup.controls[
          `${player.name}-is-selected`
        ].valueChanges
          .distinctUntilChanged()
          .do(isSelected =>
            this.playersService.changeUserIsSelected(player.name, isSelected)
          );

        this.playersSubscriptions[
          `${player.name}-is-selected`
        ] = isSelectedSubscription.subscribe();
      }
    });

    for (const cName in this.playersFormGroup.controls) {
      if (
        !players.find(
          p => `${p.name}-grade` === cName || `${p.name}-is-selected` === cName
        )
      ) {
        this.playersFormGroup.removeControl(cName);
        this.playersSubscriptions[cName].unsubscribe();
      }
    }
  }

  openNewPlayerForm() {
    this.isNewPlayerFormGroupVisible = true;
    setTimeout(() => this.nameNewPlayer.focus(), 0);
  }

  closeAndResetNewPlayerForm() {
    this.isNewPlayerFormGroupVisible = false;
    this.newPlayerFormGroup.reset();
  }

  addNewPlayer({ name }: { name: string }) {
    this.playersService.addPlayer(name, 0);
    this.closeAndResetNewPlayerForm();
  }

  removePlayer(player: IPlayer) {
    this.playersService.removePlayer(player.name);
  }

  trackByName(index, player: IPlayer) {
    return player.name;
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private dataChange: Observable<any[]>) {
    super();
  }

  connect(): Observable<any[]> {
    return this.dataChange;
  }

  disconnect() {}
}
