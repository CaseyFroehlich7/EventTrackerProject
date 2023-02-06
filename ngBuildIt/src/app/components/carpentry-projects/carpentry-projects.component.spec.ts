import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentryProjectsComponent } from './carpentry-projects.component';

describe('CarpentryProjectsComponent', () => {
  let component: CarpentryProjectsComponent;
  let fixture: ComponentFixture<CarpentryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpentryProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpentryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
