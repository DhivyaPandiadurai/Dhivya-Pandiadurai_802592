import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtechnologyComponent } from './atechnology.component';

describe('AtechnologyComponent', () => {
  let component: AtechnologyComponent;
  let fixture: ComponentFixture<AtechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
