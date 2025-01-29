import { Routes } from '@angular/router';
import { CalorieInputComponent } from './calorie-input/calorie-input.component';
import { CalorieDisplayComponent } from './calorie-display/calorie-display.component';
import { CalorieHistoryComponent } from './calorie-history/calorie-history.component';

export const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: CalorieInputComponent },
  { path: 'display', component: CalorieDisplayComponent },
  { path: 'history', component: CalorieHistoryComponent },
  { path: '**', redirectTo: '' },
];
