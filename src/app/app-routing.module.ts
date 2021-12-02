import { PlayGameComponent } from './start-game/play-game/play-game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RulesComponent } from './rules/rules.component';
import { GameInfoComponent } from './game-info/game-info.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'gameno', component: GameInfoComponent },
  { path: 'play', component: PlayGameComponent },
  { path: '*', redirectTo: 'gameno', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
