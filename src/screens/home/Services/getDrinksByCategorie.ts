import {api} from '../../../services/api';
import {DrinksByCategoriesResponse} from '../Types/getDrinksByCategorieTypes';

type Params = {
  categorie: string;
};

export const getDrinksByCategories = async ({categorie}: Params) => {
  try {
    const {data} = await api.get<DrinksByCategoriesResponse>(
      `filter.php?c=${categorie}`,
    );

    const {drinks} = data;

    return drinks;
  } catch (error) {
    return error;
  }
};
