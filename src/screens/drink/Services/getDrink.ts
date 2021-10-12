import {api} from '../../../services/api';
import {GetDrinkResponse} from '../Types/getDrinkTypes';

type Params = {
  drinkId: string;
};

export const getDrink = async ({drinkId}: Params) => {
  try {
    const {data} = await api.get<GetDrinkResponse>(`lookup.php?i=${drinkId}`);

    const {drinks} = data;

    return drinks[0];
  } catch (error) {
    return error;
  }
};
