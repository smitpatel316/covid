import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCasesRateComponent } from './daily-cases-rate.component';

describe('DailyCasesRateComponent', () => {
  let component: DailyCasesRateComponent;
  let fixture: ComponentFixture<DailyCasesRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCasesRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCasesRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
