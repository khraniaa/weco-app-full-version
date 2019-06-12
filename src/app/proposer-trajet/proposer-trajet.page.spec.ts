import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerTrajetPage } from './proposer-trajet.page';

describe('ProposerTrajetPage', () => {
  let component: ProposerTrajetPage;
  let fixture: ComponentFixture<ProposerTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerTrajetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
