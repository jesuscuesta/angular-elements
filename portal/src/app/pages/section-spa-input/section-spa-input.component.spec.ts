import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaInputComponent } from './section-spa-input.component';

describe('SectionSpaInputComponent', () => {
  let component: SectionSpaInputComponent;
  let fixture: ComponentFixture<SectionSpaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
