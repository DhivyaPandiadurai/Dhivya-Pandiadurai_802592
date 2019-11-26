import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmentorComponent } from './amentor.component';

describe('AmentorComponent', () => {
  let component: AmentorComponent;
  let fixture: ComponentFixture<AmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
