import { TestBed } from '@angular/core/testing';

import { SearchsPokemonServiceService } from './searchs-pokemon-service.service';

describe('SearchsPokemonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchsPokemonServiceService = TestBed.get(SearchsPokemonServiceService);
    expect(service).toBeTruthy();
  });
});
