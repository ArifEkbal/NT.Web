import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxdemoComponent } from './jqxdemo.component';

describe('JqxdemoComponent', () => {
  let component: JqxdemoComponent;
  let fixture: ComponentFixture<JqxdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
