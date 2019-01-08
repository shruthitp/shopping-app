import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredieant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe(
            'Icecream',
            'Vanilla delight', 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
            [new Ingredient('Milk', 5), new Ingredient('Cream', 4)]),
        new Recipe('Chocolate cake', 'Yummy chocolate', 'https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg',
            [new Ingredient('Chocolate', 5), new Ingredient('Cherry', 20)]),
    ];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngToShoppingList(ing: Ingredient[]) {
        this.slService.addIngredients(ing);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

