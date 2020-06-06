import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpaOneGithubComponent } from './section-spa-one-github.component';

describe('SectionSpaOneGithubComponent', () => {
  let component: SectionSpaOneGithubComponent;
  let fixture: ComponentFixture<SectionSpaOneGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSpaOneGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpaOneGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
