import { PlayGameComponent } from './start-game/play-game/play-game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RulesComponent } from './rules/rules.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { SummaryGamesPlayedComponent } from './summary-games-played/summary-games-played.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'game-info', component: GameInfoComponent },
  { path: 'summary', component: SummaryGamesPlayedComponent },
  { path: 'settings', component: GameInfoComponent },
  { path: 'play', component: PlayGameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
