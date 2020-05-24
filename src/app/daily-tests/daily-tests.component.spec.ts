import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTestsComponent } from './daily-tests.component';

describe('DailyTestsComponent', () => {
  let component: DailyTestsComponent;
  let fixture: ComponentFixture<DailyTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
