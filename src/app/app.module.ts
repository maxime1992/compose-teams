// Modules 3rd party
import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';

// Shared
import { GamesService } from 'app/games.service';
import { PlayersService } from 'app/players.service';

// Main
import { AppComponent } from 'app/app.component';

// Components
import { GamesComponent } from 'app/games/games.component';
import { TeamComponent } from 'app/games/teams/team/team.component';
import { TeamsComponent } from 'app/games/teams/teams.component';
import { PlayersComponent } from 'app/players/players.component';
import { Need10PlayersComponent } from './need-10-players/need-10-players.component';

export const MaterialModules = [
  CdkTableModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
];

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
    // Material Modules
    ...MaterialModules,
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // LocalStorage Module
    NgxWebstorageModule.forRoot(),
  ],
  providers: [PlayersService, GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
