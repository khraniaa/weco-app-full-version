import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesEtapePage } from './villes-etape.page';

describe('VillesEtapePage', () => {
  let component: VillesEtapePage;
  let fixture: ComponentFixture<VillesEtapePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillesEtapePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillesEtapePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
