import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient .model';
import { ShopListService } from './shop-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShopListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
