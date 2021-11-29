import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'rpsLG-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  private _logoImgUrl: string = "./assets/img/logo.png"

  constructor() { }

  ngOnInit(): void {
  }

  // getters and setters
  public get logoImgUrl(): string {
    return this._logoImgUrl;
  }

  public set logoImgUrl(logoImgUrl: string) {
    this._logoImgUrl = logoImgUrl;
  }

}
