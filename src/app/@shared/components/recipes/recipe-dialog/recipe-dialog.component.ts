import { Component, Inject, OnInit } from '@angular/core';
import { CustomAngularMaterialsModule } from '../../../../@core/angular-materials.module';
import { RecipeService } from '../../../../@core/services/recipe.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/@shared/models/recipe/recipes.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../../@core/services/auth.service';
import { AlertService } from '../../../../@core/services/alert.service';
@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss']
})
export class RecipeDialogComponent implements OnInit {

  
  recipeToEdit: Recipe;
  editState: boolean = false;

  recipe: Recipe = {
    id: '',
    name: '',
    description: '',
    imagePath: '',
    author: this.afAuth.auth.currentUser.email,
    rating: 0

  }

  constructor(
    private recipeService: RecipeService,
    public dialog: MatDialog,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    let uEmail = this.afAuth.auth.currentUser.email

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

  updateRecipe(recipe: Recipe) {
    this.recipeService.updateRecipe(recipe);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.recipeToEdit = null;
  }

}