import { TestBed } from '@angular/core/testing';

import { NumGamesService } from './num-games.service';

describe('NumGamesService', () => {
  let service: NumGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
