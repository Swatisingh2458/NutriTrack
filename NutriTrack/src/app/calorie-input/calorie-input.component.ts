import { Component } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calorie-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './calorie-input.component.html',
  styleUrls: ['./calorie-input.component.css'],
})
export class CalorieInputComponent {
  item: string = '';
  quantity: number = 0;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private nutritionService: NutritionService) {}

  addEntry() {
    try {
      if (this.item && this.quantity > 0) {
        this.nutritionService.addCalorieEntry(this.item, this.quantity);
        this.successMessage = `${this.quantity}g of ${this.item} added successfully.`;
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Please enter valid food item and quantity.';
        this.successMessage = '';
      }
    } catch (error) {
      this.errorMessage = (error as Error).message;
      this.successMessage = '';
    }
  }
}
