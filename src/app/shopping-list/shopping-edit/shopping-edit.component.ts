import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  editedItemIndex: number;
  IngredientToEdit: Ingredient;
  @ViewChild('form') slForm: NgForm;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.IngredientToEdit = this.slService.getIngredientByIndex(index);
      this.slForm.setValue({
        name: this.IngredientToEdit.name,
        amount: this.IngredientToEdit.amount,
      });
    });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  clear() {
    this.slForm.reset();
    this.editMode = false;
  }

  delete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.clear();
  }
}
