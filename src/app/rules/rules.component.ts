import { Component, OnInit } from '@angular/core';
import { IRule } from '../model/irule';

@Component({
  selector: 'rpsLG-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  private _rulesImgLink: string = "./assets/img/rules.png"
  private _rulesText: IRule[] = [];




  constructor() {
    // add rules
    this._rulesText.push({
      brief: "Rock breaks scissors",
      fullDesc: "The rock breaks the scissors",
      color: "blue"
    });

    this._rulesText.push({
      brief: "Scissors cuts paper",
      fullDesc: "The scissors cuts the paper",
      color: "red"
    });

    this._rulesText.push({
      brief: "Paper covers rock",
      fullDesc: "The paper covers the rock",
      color: "green"
    });

  }

  ngOnInit(): void {
  }

  // getters and setters
  public get rulesImgLink(): string {
    return this._rulesImgLink;
  }

  public set rulesImgLink(rulesImgLink: string) {
    this._rulesImgLink = rulesImgLink;
  }

  public get rulesText(): IRule[] {
    return this._rulesText;
  }

  public set rulesText(rulesText: IRule[]) {
    this._rulesText = rulesText;
  }

}
