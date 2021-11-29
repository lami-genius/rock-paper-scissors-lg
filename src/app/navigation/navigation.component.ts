import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'rpsLG-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  // attributes
  private _logoImgUrl: string = "./assets/img/logo.png"
  private _navElements: Map<string, string> = new Map<string, string>();

  constructor() {
    // add routes and label of routes
    this._navElements.set('/home', "Home")
    this._navElements.set('/rules', "Rules")
    this._navElements.set('/login', "Login")
    this._navElements.set('/register', "Join Now")
    this._navElements.set('/play', "Play")
  }

  ngOnInit(): void {
  }

  // getters and setters
  public get logoImgUrl(): string {
    return this._logoImgUrl;
  }

  public set logoImgUrl(logoImgUrl: string) {
    this._logoImgUrl = logoImgUrl;
  }

  public get navElements(): Map<string, string> {
    return this._navElements;
  }

  public set navElements(navElements: Map<string, string>) {
    this._navElements = navElements;
  }

}
