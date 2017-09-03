import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdSidenavModule,
  MdTableModule,
  MdToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app.component';
import { GamesService } from 'app/games.service';
import { GamesComponent } from 'app/games/games.component';
import { TeamComponent } from 'app/games/teams/team/team.component';
import { TeamsComponent } from 'app/games/teams/teams.component';
import { PlayersService } from 'app/players.service';
import { PlayersComponent } from 'app/players/players.component';
import { Need10PlayersComponent } from './need-10-players/need-10-players.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent,
    GamesComponent,
    PlayersComponent,
    Need10PlayersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdTableModule,
    CdkTableModule,
    MdToolbarModule,
    MdInputModule,
    MdSidenavModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
  ],
  providers: [PlayersService, GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
