import { DataSource } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IPlayer } from 'app/players.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements OnInit, OnChanges {
  @Input() players: IPlayer[];
  @Input() sumGrades: number;

  displayedColumns = ['name', 'grade'];
  dataSource: ExampleDataSource | null;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.dataChange);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['players']) {
      this.dataChange.next(this.players);
    }
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
