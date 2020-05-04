import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwEditComponent } from './tw-edit.component';

describe('TwEditComponent', () => {
  let component: TwEditComponent;
  let fixture: ComponentFixture<TwEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
