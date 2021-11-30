import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumGamesComponent } from './num-games.component';

describe('NumGamesComponent', () => {
  let component: NumGamesComponent;
  let fixture: ComponentFixture<NumGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
