import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rpsLG-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  private _numberOfGames: number = 1
  private _isValidNumGames: boolean = false
  private _minNumGames: number = 1
  private _maxNumGames: number = 99


  constructor(private _toastrService: ToastrService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.hasEnteredValidNumGames()) {
      console.log(this._numberOfGames)
      this._router.navigate(['/play'])
      this._toastrService.success(this._numberOfGames + " game" + (this._numberOfGames > 1 ? "s" : "") + " loading ...")
    }
    else {
      this._toastrService.info("Enter a positive number.")
      this._toastrService.warning("Invalid " + this._numberOfGames + "!!")
      this._numberOfGames = this._minNumGames
    }
  }

  hasEnteredValidNumGames() {
    return (
      this._numberOfGames >= this._minNumGames &&
      this._numberOfGames <= this._maxNumGames
    )
  }

  // getters and setters
  public get numberOfGames(): number {
    return this._numberOfGames;
  }

  public set numberOfGames(numberOfGames: number) {
    this._numberOfGames = numberOfGames;
  }

  public get isValidNumGames(): boolean {
    return this.isValidNumGames;
  }

  public set isValidNumGames(isValidNumGames: boolean) {
    this.isValidNumGames = isValidNumGames;
  }

  public get minNumGames(): number {
    return this.minNumGames;
  }

  public set minNumGames(minNumGames: number) {
    this.minNumGames = minNumGames;
  }

  public get maxNumGames(): number {
    return this.maxNumGames;
  }

  public set maxNumGames(maxNumGames: number) {
    this.maxNumGames = maxNumGames;
  }



}
