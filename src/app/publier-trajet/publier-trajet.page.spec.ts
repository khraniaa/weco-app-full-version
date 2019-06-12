import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierTrajetPage } from './publier-trajet.page';

describe('PublierTrajetPage', () => {
  let component: PublierTrajetPage;
  let fixture: ComponentFixture<PublierTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierTrajetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
