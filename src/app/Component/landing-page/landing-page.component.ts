import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FoodStoriesComponent } from '../food-stories/food-stories.component';
import { BestNutritionistComponent } from '../best-nutritionist/best-nutritionist.component';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FooterComponent,ReviewsComponent,FoodStoriesComponent,BestNutritionistComponent,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
