export interface DrinkType {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface SearchDrinksResponse {
  drinks: DrinkType[];
}
