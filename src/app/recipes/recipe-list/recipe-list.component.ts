import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recope.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Icecream', 'Vanilla delight', 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg'),
    new Recipe('Chocolate cake', 'Yummy chocolate', 'https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {

    this.recipeWasSelected.emit(recipe);
  }

}
