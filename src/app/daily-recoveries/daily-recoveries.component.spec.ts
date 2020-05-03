import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecoveriesComponent } from './daily-recoveries.component';

describe('DailyRecoveriesComponent', () => {
  let component: DailyRecoveriesComponent;
  let fixture: ComponentFixture<DailyRecoveriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRecoveriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecoveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
