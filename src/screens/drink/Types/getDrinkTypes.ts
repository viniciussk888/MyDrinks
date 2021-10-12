export interface DrinkType {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
}

export interface GetDrinkResponse {
  drinks: DrinkType[];
}
