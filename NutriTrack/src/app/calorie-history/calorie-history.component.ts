import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NutritionService } from '../services/nutrition.service';

@Component({
  selector: 'app-calorie-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './calorie-history.component.html',
  styleUrls: ['./calorie-history.component.css'], // Corrected from styleUrl to styleUrls
})
export class CalorieHistoryComponent implements OnInit {
  calorieHistory: any[] = []; // Define the calorieHistory property

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.loadCalorieHistory();
  }

  loadCalorieHistory() {
    this.calorieHistory = this.nutritionService.getCalorieHistory(); // Populate the calorieHistory property
  }
}
