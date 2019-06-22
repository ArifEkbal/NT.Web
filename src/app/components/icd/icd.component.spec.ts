import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICDComponent } from './icd.component';

describe('ICDComponent', () => {
  let component: ICDComponent;
  let fixture: ComponentFixture<ICDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
