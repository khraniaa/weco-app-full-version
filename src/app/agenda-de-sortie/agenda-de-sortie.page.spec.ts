import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDeSortiePage } from './agenda-de-sortie.page';

describe('AgendaDeSortiePage', () => {
  let component: AgendaDeSortiePage;
  let fixture: ComponentFixture<AgendaDeSortiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaDeSortiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaDeSortiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
