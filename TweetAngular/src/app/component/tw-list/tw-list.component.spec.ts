import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwListComponent } from './tw-list.component';

describe('TwListComponent', () => {
  let component: TwListComponent;
  let fixture: ComponentFixture<TwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
