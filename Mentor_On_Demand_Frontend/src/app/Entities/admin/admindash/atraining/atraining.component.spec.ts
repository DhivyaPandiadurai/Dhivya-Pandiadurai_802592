import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrainingComponent } from './atraining.component';

describe('AtrainingComponent', () => {
  let component: AtrainingComponent;
  let fixture: ComponentFixture<AtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
