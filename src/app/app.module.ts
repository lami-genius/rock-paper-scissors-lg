
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RulesComponent } from './rules/rules.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { ScoreComponent } from './start-game/score/score.component';
import { GameSummaryComponent } from './start-game/game-summary/game-summary.component';
import { PlayerOptionsComponent } from './start-game/player-options/player-options.component';
import { PlayGameComponent } from './start-game/play-game/play-game.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { toastrSettings } from './toatr-settings';
import { NumGamesComponent } from './start-game/num-games/num-games.component';
import { NumGamesService } from './services/num-games.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    LandingPageComponent,
    RulesComponent,
    PlayGameComponent,
    GameInfoComponent,
    ScoreComponent,
    GameSummaryComponent,
    PlayerOptionsComponent,
    NumGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot(toastrSettings),
    BrowserAnimationsModule
  ],

  providers: [NumGamesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(libraryFontIcon: FaIconLibrary) {
    libraryFontIcon.addIconPacks(fas)
  }
}
