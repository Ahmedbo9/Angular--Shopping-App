import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient .model';
import { ShopListService } from 'src/app/shopping-list/shop-list.service';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private slService: ShopListService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {}
  
  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
