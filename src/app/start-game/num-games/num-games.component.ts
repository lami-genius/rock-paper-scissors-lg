import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rpsLG-num-games',
  templateUrl: './num-games.component.html',
  styleUrls: ['./num-games.component.css']
})
export class NumGamesComponent implements OnInit {
  @Input() gameCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
