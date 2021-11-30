import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rpsLG-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() numWins: number = 0;
  @Input() numLosses: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increementWin(): void {
    this.numWins++
  }

  increementLosses(): void {
    this.numLosses++
  }

  getWins(): number {
    return this.numWins
  }

  getLosses(): number {
    return this.numLosses
  }

  reset(): void {
    this.numWins = 0
    this.numLosses = 0
  }

}
