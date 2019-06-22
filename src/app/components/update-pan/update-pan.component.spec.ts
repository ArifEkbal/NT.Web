import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanComponent } from './update-pan.component';

describe('UpdatePanComponent', () => {
  let component: UpdatePanComponent;
  let fixture: ComponentFixture<UpdatePanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
