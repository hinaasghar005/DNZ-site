import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestNutritionistComponent } from './best-nutritionist.component';

describe('BestNutritionistComponent', () => {
  let component: BestNutritionistComponent;
  let fixture: ComponentFixture<BestNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestNutritionistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
