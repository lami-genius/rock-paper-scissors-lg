import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpsLG-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // attributes
  private _rockImgLink: string = './assets/img/real-rock.png'
  private _paperImgLink: string = './assets/img/real-paper.png'
  private _scissorsImgLink: string = './assets/img/real-scissors.png'
  private _playImgLink: string = './assets/img/play-button.png'


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


}
