import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient .model';
import { ShopListService } from '../shopping-list/shop-list.service';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShopListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pouting',
      'Quebec traditional meal ',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/29/1/FNM_100111-Poutine-002_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383239551554.jpeg',
      [new Ingredient('fries', 20), new Ingredient('cheese', 40)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //get une copie et non pas le vrai
  }

  // addIngredientsToShoppingList(Ingredient: Ingredient[]) {
  //   this.slService.addIngredients(Ingredient)

  // }

  
}
