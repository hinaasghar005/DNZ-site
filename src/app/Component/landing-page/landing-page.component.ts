import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FoodStoriesComponent } from '../food-stories/food-stories.component';
import { BestNutritionistComponent } from '../best-nutritionist/best-nutritionist.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FooterComponent,ReviewsComponent,FoodStoriesComponent,BestNutritionistComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
