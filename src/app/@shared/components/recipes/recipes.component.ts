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

  recipes: Recipe[];
  recipeToEdit: Recipe;

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
    this.recipeService.getRecipes().subscribe(recipes => {
      // console.log(recipes);
      this.recipes = recipes;
    });
  }

  ngAfterViewInit() {
    this.renderer.setStyle(document.body, 'background-color', '#424242');
  }

  deleteRecipe(event, recipe: Recipe) {
    this.alertService.success('Рецептата беше премахната успешно !')
    this.recipeService.deleteRecipe(recipe);
  }

  noRecipe() {
    this.router.navigate(['./add-recipe'])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '800px',
    });
  }

}


