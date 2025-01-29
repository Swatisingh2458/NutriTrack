import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieHistoryComponent } from './calorie-history.component';

describe('CalorieHistoryComponent', () => {
  let component: CalorieHistoryComponent;
  let fixture: ComponentFixture<CalorieHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
