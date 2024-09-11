import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStoriesComponent } from './food-stories.component';

describe('FoodStoriesComponent', () => {
  let component: FoodStoriesComponent;
  let fixture: ComponentFixture<FoodStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
