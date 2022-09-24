import { Component, EventEmitter, Input, OnInit, } from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService : RecipeService) {}

  ngOnInit(): void {}

  goToItemDetail() {

    this.recipeService.recipeSelected.emit(this.recipe);
    
  }
}