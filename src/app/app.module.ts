import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { ComposeTeamsComponent } from './compose-teams/compose-teams.component';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from 'app/players.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent,
    GamesComponent,
    ComposeTeamsComponent,
    PlayersComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
