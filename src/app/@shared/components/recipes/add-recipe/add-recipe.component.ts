import { Component, OnInit, Renderer2 } from '@angular/core';
import { RecipeService } from '../../../../@core//services/recipe.service';
import { Recipe } from '../../../models/recipe/recipes.model';
import { AlertService } from '../../../../@core/services/alert.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../@core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  user: firebase.User;

  recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    author: this.afAuth.auth.currentUser.email,
    rating: this.getRecipeRating()
  }

  constructor(
    private renderer: Renderer2,
    private recipeService: RecipeService,
    private alertService: AlertService,
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth

  ) {

  }

  ngOnInit() {

  }

  
  onSubmit() {
    if (this.recipe.name != '' && this.recipe.description != '') {
      this.recipeService.addRecipe(this.recipe);
      this.alertService.success('Вашата рецепта беше добавена успешно!');
      this.router.navigate(['/recipes']);
    } else {
      this.alertService.error('Рецептата трябва да съдържа Заглавие и Продукти!')
      this.recipe.name = '';
      this.recipe.description = '';
      this.recipe.imagePath = '';
    }
  }
  
  getRecipeRating(){
   let number = Math.floor(Math.random() * 5) +1 ;
   return number;
  }
}
