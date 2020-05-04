import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwFormAddComponent } from './tw-form-add.component';

describe('TwFormAddComponent', () => {
  let component: TwFormAddComponent;
  let fixture: ComponentFixture<TwFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
