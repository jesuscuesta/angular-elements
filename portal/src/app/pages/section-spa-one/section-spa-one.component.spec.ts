import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaOneComponent } from './section-spa-one.component';

describe('SectionSpaOneComponent', () => {
  let component: SectionSpaOneComponent;
  let fixture: ComponentFixture<SectionSpaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
