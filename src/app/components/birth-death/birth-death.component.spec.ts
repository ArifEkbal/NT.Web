import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDeathComponent } from './birth-death.component';

describe('BirthDeathComponent', () => {
  let component: BirthDeathComponent;
  let fixture: ComponentFixture<BirthDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
