import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCasesActiveComponent } from './daily-cases-active.component';

describe('DailyCasesActiveComponent', () => {
  let component: DailyCasesActiveComponent;
  let fixture: ComponentFixture<DailyCasesActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCasesActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCasesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
