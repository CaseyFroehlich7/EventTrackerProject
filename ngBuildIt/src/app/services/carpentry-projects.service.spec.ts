import { TestBed } from '@angular/core/testing';

import { CarpentryProjectsService } from './carpentry-projects.service';

describe('CarpentryProjectsService', () => {
  let service: CarpentryProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpentryProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
