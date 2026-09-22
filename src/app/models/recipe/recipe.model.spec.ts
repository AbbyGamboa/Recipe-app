import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModel } from './recipe.model';

describe('RecipeModel', () => {
  let component: RecipeModel;
  let fixture: ComponentFixture<RecipeModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeModel],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
