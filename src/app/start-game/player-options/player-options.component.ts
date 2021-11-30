import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rpsLG-player-options',
  templateUrl: './player-options.component.html',
  styleUrls: ['./player-options.component.css']
})
export class PlayerOptionsComponent implements OnInit {

  // attributes
  private _rockImgLink: string = './assets/img/real-rock.png'
  private _paperImgLink: string = './assets/img/real-paper.png'
  private _scissorsImgLink: string = './assets/img/real-scissors.png'
  private _playImgLink: string = './assets/img/play-button.png'
  @Input() playButtonColor: string = "2c7af0";
  public scissorsSelectedBackground: string = ""
  public paperSelectedBackground: string = ""
  public rockSelectedBackground: string = ""
  public colorSelected: string = 'orange'
  public shape: string = "scissors"
  @Output() clickedObjEvent = new EventEmitter()

  public arrObj: string[] = ['scissors', 'rock', 'paper']
  constructor() { }

  ngOnInit(): void {
  }

  // getters and setters

  public get rockImgLink(): string {
    return this._rockImgLink;
  }

  public set rockImgLink(rockImgLink: string) {
    this._rockImgLink = rockImgLink;
  }

  public get paperImgLink(): string {
    return this._paperImgLink;
  }

  public set paperImgLink(paperImgLink: string) {
    this._paperImgLink = paperImgLink;
  }

  public get scissorsImgLink(): string {
    return this._scissorsImgLink;
  }

  public set scissorsImgLink(scissorsImgLink: string) {
    this._scissorsImgLink = scissorsImgLink;
  }

  public get playImgLink(): string {
    return this._playImgLink;
  }

  public set playImgLink(playImgLink: string) {
    this._playImgLink = playImgLink;
  }

  colorReset(): void {
    this.paperSelectedBackground = ""
    this.rockSelectedBackground = ""
    this.scissorsSelectedBackground = ""
  }

  updateColor(shape: string) {
    if (shape === 'rand') {
      let idx = Math.floor(Math.random() * 3)
      shape = this.arrObj[idx]

      this.colorReset();

    }

    this.shape = shape
    if (shape === 'scissors') {
      this.scissorsSelectedBackground = "background-color: " + this.colorSelected + ";"
      this.paperSelectedBackground = ""
      this.rockSelectedBackground = ""
    }

    if (shape === 'paper') {
      this.paperSelectedBackground = "background-color: " + this.colorSelected + ";"
      this.scissorsSelectedBackground = ""
      this.rockSelectedBackground = ""
    }

    if (shape === 'rock') {
      this.rockSelectedBackground = "background-color:" + this.colorSelected + ";"
      this.paperSelectedBackground = ""
      this.scissorsSelectedBackground = ""
    }

    this.clickedObjEvent.emit(shape)
  }



}

