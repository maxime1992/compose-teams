import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { ComposeTeamsComponent } from './compose-teams/compose-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent,
    GamesComponent,
    ComposeTeamsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
