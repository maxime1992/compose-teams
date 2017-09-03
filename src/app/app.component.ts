import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { GamesService } from 'app/games.service';
import { IPlayer } from 'app/players.interface';
import { PlayersService } from 'app/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  public isSidenavOpened: boolean;
  public sidenavType: 'over' | 'side';

  nbGames$: Observable<number>;

  players$: Observable<IPlayer[]>;
  selectedPlayers$: Observable<IPlayer[]>;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
    private playersService: PlayersService,
    private gameService: GamesService,
    private media: ObservableMedia
  ) {}

  ngOnInit() {
    this.players$ = this.playersService.players$;
    this.selectedPlayers$ = this.playersService.selectedPlayers$;
    this.nbGames$ = this.gameService.games$.map(games => games.length);

    this.media
      .asObservable()
      .takeUntil(this.onDestroy$)
      .map((change: MediaChange) => change.mqAlias as 'xs' | 'sm' | 'md' | 'lg')
      .distinctUntilChanged()
      .do(size => {
        if (size === 'xs' || size === 'sm') {
          this.closeSidenav();
          this.sidenavType = 'over';
        } else {
          this.isSidenavOpened = true;
          this.openSidenav();
          this.sidenavType = 'side';
        }
      })
      .subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  toggleSidenav() {
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
  }
}
