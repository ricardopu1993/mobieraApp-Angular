import { TestBed } from '@angular/core/testing';

import { JsonServerAPIService } from './json-server-api.service';

describe('JsonServerAPIService', () => {
  let service: JsonServerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
