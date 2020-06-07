import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaWithRoutingComponent } from './section-spa-with-routing.component';

describe('SectionSpaWithRoutingComponent', () => {
  let component: SectionSpaWithRoutingComponent;
  let fixture: ComponentFixture<SectionSpaWithRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaWithRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaWithRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
