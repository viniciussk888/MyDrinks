export const ADD = 'ADD';

export const adicionaDrink = (
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string,
) => ({
  type: ADD,
  drinks: {
    strDrink,
    strDrinkThumb,
    idDrink,
  },
});
