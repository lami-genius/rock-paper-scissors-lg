import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TwoWay } from 'two-way-decorator';

@Component({
  selector: 'rpsLG-num-games',
  templateUrl: './num-games.component.html',
  styleUrls: ['./num-games.component.css']
})
export class NumGamesComponent implements OnInit {
  @Input()
  gameCount: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
