import { EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [];
  ingredientAdded = new EventEmitter<{ name: string; amount: number }>();

  getIngredients() {
    return this.ingredients.slice();
  }
  AddIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredients(ings: Ingredient[]) {
    // for (let ingredient of ings) {
    //   this.addIngredients(ingredient);
    // }
    this.ingredients.push(...ings);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
