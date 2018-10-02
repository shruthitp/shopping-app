import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredieant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Milk', 2),
    new Ingredient('Vanilla', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngrediantAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }

}
