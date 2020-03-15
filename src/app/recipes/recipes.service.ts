import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Classic-spaghetti-carbonara.jpg',
      ingredients: ['Tomato sauce', 'Garlic', 'Basil']
    }
  ];
  constructor() {}

  getAllRecipes = () => [...this.recipes];
  getRecipe = (id: string) => ({ ...this.recipes.find(recipe => recipe.id === id) });
  deleteRecipe = (recipeId: string) => {
    this.recipes = this.recipes.filter(recipe => {
      // console.log(recipeId === recipe.id);
      return recipe.id !== recipeId;
    });
    // console.log(this.recipes);
  };
}
