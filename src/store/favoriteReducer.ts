import {ADD} from './actions';

export interface DrinksType {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

const INITIAL_STATE = {
  strDrink: '',
  strDrinkThumb: '',
  idDrink: '',
};

function favoriteReducer(
  state = INITIAL_STATE,
  action: {type: string; drinks: DrinksType},
) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        strDrink: action.drinks.strDrink,
        strDrinkThumb: action.drinks.strDrinkThumb,
        idDrink: action.drinks.idDrink,
      };
    default:
      return state;
  }
}

export default favoriteReducer;
