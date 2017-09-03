import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-select-delta-max',
  templateUrl: './select-delta-max.component.html',
  styleUrls: ['./select-delta-max.component.scss'],
})
export class SelectDeltaMaxComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  @Input() nbGames: number;
  @Output() onDeltaMaxChanges = new EventEmitter<number>();

  private initDeltaMax = 1;
  deltaMaxCtrl = new FormControl(this.initDeltaMax);

  constructor() {}

  ngOnInit() {
    this.deltaMaxCtrl.valueChanges
      .startWith(this.initDeltaMax)
      .takeUntil(this.onDestroy$)
      .debounceTime(200)
      .map(deltaMax => this.onDeltaMaxChanges.emit(deltaMax))
      .subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
