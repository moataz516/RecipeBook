import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipesChange = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'test recipe',
  //     'test recipe desc',
  //     'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
  //     [new Ingredient('meat', 1), new Ingredient('fries', 10)]
  //   ),
  //   new Recipe(
  //     'test recipe2',
  //     'test recipe desc2',
  //     'https://media.istockphoto.com/id/924476838/photo/delicious-pizza-with-ingredients-and-spices.jpg?s=612x612&w=0&k=20&c=dlj4HvyVhTavzIHyDf7fRVeXB_XDVzhlcdFx7uNi0Gw=',
  //     [new Ingredient('buns', 2), new Ingredient('meat', 5)]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChange.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  AddIngredientsToShoppingList(ings: Ingredient[]) {
    this.slService.addIngredients(ings);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.recipes.slice());
  }
}
