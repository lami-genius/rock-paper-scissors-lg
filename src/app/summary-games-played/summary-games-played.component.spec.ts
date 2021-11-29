import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGamesPlayedComponent } from './summary-games-played.component';

describe('SummaryGamesPlayedComponent', () => {
  let component: SummaryGamesPlayedComponent;
  let fixture: ComponentFixture<SummaryGamesPlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryGamesPlayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGamesPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
