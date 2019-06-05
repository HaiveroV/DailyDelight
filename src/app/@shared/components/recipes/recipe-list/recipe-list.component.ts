import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../models/recipe/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];


  constructor() { }

  ngOnInit() {
  }

}
