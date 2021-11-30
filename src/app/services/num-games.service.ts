import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class NumGamesService {
  private _numOfGames: Subject<number>

  constructor() {
    this._numOfGames = new Subject<number>()
  }

  // set number of games
  setNumGames(uNumGames: number): void {
    this._numOfGames.next(uNumGames)
  }

  // get number of games
  getNumGames(): Observable<number> {
    return this._numOfGames
  }
}
