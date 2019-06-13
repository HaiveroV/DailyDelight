import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { Recipe } from '../../@shared/models/recipe/recipes.model';

import { AlertService } from '../services/alert.service'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  recipeDoc: AngularFirestoreDocument<Recipe>;
  desc: AngularFirestoreDocument<Recipe>;

  constructor(
    public afs: AngularFirestore,
    public alertService: AlertService
  ) { }

  getRecipes() {
    this.recipesCollection = this.afs.collection('recipes');

    this.recipes = this.recipesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Recipe;
          data.id = a.payload.doc.id;
          return data;
        })
      }))
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipesCollection.add(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeDoc = this.afs.doc(`recipes/${recipe.id}`);
    this.recipeDoc.delete();
  }

  getRecipeDesc(recipe: Recipe) {
    this.desc = this.afs.doc(`recipes/${recipe.description}`)
    console.log(this.desc);
  }

  updateRecipe(recipe: Recipe) {
    this.recipeDoc = this.afs.doc(`recipes/${recipe.id}`);
    this.recipeDoc.update(recipe);
  }
}


