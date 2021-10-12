export interface DrinksType {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface DrinksByCategoriesResponse {
  drinks: DrinksType[];
}
