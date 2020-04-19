import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalCasesComponent } from './daily-total-cases.component';

describe('DailyTotalCasesComponent', () => {
  let component: DailyTotalCasesComponent;
  let fixture: ComponentFixture<DailyTotalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTotalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
