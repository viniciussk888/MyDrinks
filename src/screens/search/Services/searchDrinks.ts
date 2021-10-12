import {api} from '../../../services/api';
import {SearchDrinksResponse} from '../Types/searchDrinkTypes';

type Params = {
  text: string;
};

export const searchdrinks = async ({text}: Params) => {
  try {
    const {data} = await api.get<SearchDrinksResponse>(`search.php?f=${text}`);

    const {drinks} = data;

    return drinks;
  } catch (error) {
    return error;
  }
};
