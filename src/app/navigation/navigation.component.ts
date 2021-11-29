import { Component, OnInit } from '@angular/core';
import { INavLink } from '../model/inav-link';

@Component({
  selector: 'rpsLG-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  // attributes
  private _logoImgUrl: string = './assets/img/logo.png'
  private _navElements: INavLink[] = [];

  constructor() {
    // add routes and label of routes
    this._navElements.push(
      {
        route: '/home',
        label: 'Home'
      }
    )
    this._navElements.push(
      {
        route: '/rules',
        label: 'Rules'
      }
    )
    this._navElements.push(
      {
        route: '/settings',
        label: 'Settings'
      }
    )

    this._navElements.push(
      {
        route: '/play',
        label: 'Play'
      }
    )
    this._navElements.push(
      {
        route: '/login',
        label: 'Login'
      }
    )
    this._navElements.push(
      {
        route: '/register',
        label: "Join Now"
      }
    )

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

  public get navElements(): INavLink[] {
    return this._navElements;
  }

  public set navElements(navElements: INavLink[]) {
    this._navElements = navElements;
  }

}
