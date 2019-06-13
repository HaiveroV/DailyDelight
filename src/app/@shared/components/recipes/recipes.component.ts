import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeService } from '../../../@core/services/recipe.service';
import { Recipe } from '../../../@shared/models/recipe/recipes.model';
import { Router } from '@angular/router';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../@core/services/auth.service';
import { AlertService } from '../../../@core/services/alert.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = new Array<any>();
  recipeToEdit: Recipe;
  editState: boolean = false;
  admin;
  constructor(
    public dialog: MatDialog,
    private recipeService: RecipeService,
    private router: Router,
    private renderer: Renderer2,
    private alertService: AlertService,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
    this.admin = this.afAuth.auth.currentUser.email;
  }

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = [];
      recipes.forEach(recipe => this.recipes.push(recipe as Recipe))
    });
  }

  ngAfterViewInit() {
    this.renderer.setStyle(document.body, 'background-color', '#424242');
  }

  deleteRecipe(event, recipe: Recipe) {
    this.clearState();
    this.recipeService.deleteRecipe(recipe);
    this.getAllRecipes();
    this.alertService.success('Рецептата беше премахната успешно !')
  }

  noRecipe() {
    this.router.navigate(['./add-recipe'])
  }

  // openDialog(event,recipe): void {
  //   const dialogRef = this.dialog.open(RecipeDialogComponent, {
  //     width: '800px',
  //   });
  // }

  editRecipe(event, recipe: Recipe) {
    this.editState = true;
    this.recipeToEdit = recipe;
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


