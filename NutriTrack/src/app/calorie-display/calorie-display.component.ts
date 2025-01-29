import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calorie-display',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './calorie-display.component.html',
})
export class CalorieDisplayComponent implements OnInit {
  totalCalories: number = 0;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.calculateTotalCalories();
  }

  calculateTotalCalories() {
    this.totalCalories = this.nutritionService.getTotalCalories();
  }
}
