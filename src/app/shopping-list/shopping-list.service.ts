import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredieant.model';



export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Milk', 2),
        new Ingredient('Vanilla', 2)
    ];

    addIngredient(newIng: Ingredient) {
        this.ingredients.push(newIng);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngeredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ing: Ingredient[]) {
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredieant(index: number, newIng: Ingredient) {
        this.ingredients[index] = newIng;
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }



}

