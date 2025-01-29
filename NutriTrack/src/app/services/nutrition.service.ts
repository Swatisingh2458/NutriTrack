import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private calorieEntries: {
    item: string;
    calories: number;
    quantity: number;
  }[] = [];

  // Local food database for simplicity (you can replace this with an API call if needed)
  private foodDatabase: { [key: string]: number } = {
    apple: 52, // calories per 100g
    banana: 89,
    bread: 265,
    rice: 130,
    chicken: 165,
    milk: 42,
  };

  constructor() {}

  // Add an entry to the calorie log
  addCalorieEntry(item: string, quantity: number) {
    const caloriesPer100g = this.foodDatabase[item.toLowerCase()];

    if (caloriesPer100g) {
      const totalCalories = (caloriesPer100g * quantity) / 100;
      this.calorieEntries.push({ item, calories: totalCalories, quantity });
    } else {
      throw new Error(`No calorie data found for item: ${item}`);
    }
  }

  // Get the total calories consumed
  getTotalCalories(): number {
    return this.calorieEntries.reduce(
      (total, entry) => total + entry.calories,
      0
    );
  }

  // Get the history of calorie entries
  getCalorieHistory() {
    return this.calorieEntries;
  }
}
