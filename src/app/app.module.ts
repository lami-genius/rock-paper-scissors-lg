
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
import { SummaryGamesPlayedComponent } from './summary-games-played/summary-games-played.component';
import { ScoreComponent } from './start-game/score/score.component';
import { GameSummaryComponent } from './start-game/game-summary/game-summary.component';
import { PlayerOptionsComponent } from './start-game/player-options/player-options.component';
import { PlayGameComponent } from './start-game/play-game/play-game.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    LandingPageComponent,
    RulesComponent,
    PlayGameComponent,
    GameInfoComponent,
    SummaryGamesPlayedComponent,
    ScoreComponent,
    GameSummaryComponent,
    PlayerOptionsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(libraryFontIcon: FaIconLibrary) {
    libraryFontIcon.addIconPacks(fas)
  }
}
