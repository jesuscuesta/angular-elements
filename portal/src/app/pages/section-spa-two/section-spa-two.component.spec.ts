import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaTwoComponent } from './section-spa-two.component';

describe('SectionSpaTwoComponent', () => {
  let component: SectionSpaTwoComponent;
  let fixture: ComponentFixture<SectionSpaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
