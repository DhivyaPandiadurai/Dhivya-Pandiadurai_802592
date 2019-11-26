import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaymentComponent } from './apayment.component';

describe('ApaymentComponent', () => {
  let component: ApaymentComponent;
  let fixture: ComponentFixture<ApaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
