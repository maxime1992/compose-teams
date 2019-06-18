import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';

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
  public activeMediaQuery = '';

  nbGames$: Observable<number>;

  players$: Observable<IPlayer[]>;
  selectedPlayers$: Observable<IPlayer[]>;

  @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;

  constructor(
    private playersService: PlayersService,
    private gameService: GamesService,
    private media$: MediaObserver
  ) {}

  ngOnInit() {
    this.selectedPlayers$ = this.playersService.selectedPlayers$;
    this.nbGames$ = this.gameService.games$.pipe(map(games => games.length));

    this.media$
      .asObservable()
      .pipe(
        map(
          (changes: MediaChange[]) =>
            changes[0].mqAlias as 'xs' | 'sm' | 'md' | 'lg'
        ),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$),
        tap(size => {
          if (size === 'xs' || size === 'sm') {
            this.closeSidenav();
            this.sidenavType = 'over';
          } else {
            this.isSidenavOpened = true;
            this.openSidenav();
            this.sidenavType = 'side';
          }
        })
      )
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
