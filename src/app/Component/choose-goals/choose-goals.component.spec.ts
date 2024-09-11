import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGoalsComponent } from './choose-goals.component';

describe('ChooseGoalsComponent', () => {
  let component: ChooseGoalsComponent;
  let fixture: ComponentFixture<ChooseGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
