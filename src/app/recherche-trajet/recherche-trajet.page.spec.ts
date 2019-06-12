import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTrajetPage } from './recherche-trajet.page';

describe('RechercheTrajetPage', () => {
  let component: RechercheTrajetPage;
  let fixture: ComponentFixture<RechercheTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTrajetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
