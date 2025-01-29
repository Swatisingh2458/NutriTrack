import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieDisplayComponent } from './calorie-display.component';

describe('CalorieDisplayComponent', () => {
  let component: CalorieDisplayComponent;
  let fixture: ComponentFixture<CalorieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalorieDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
