import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLabaComponent } from './second-laba.component';

describe('SecondLabaComponent', () => {
  let component: SecondLabaComponent;
  let fixture: ComponentFixture<SecondLabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
