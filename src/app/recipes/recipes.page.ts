import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit, OnChanges {
  recipes: Recipe[];
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
    console.log(this.recipes);
  }

  ngOnChanges = () => {
    this.recipes = this.recipeService.getAllRecipes();
  };
}
