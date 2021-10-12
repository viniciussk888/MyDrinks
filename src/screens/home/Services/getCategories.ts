import {api} from '../../../services/api';
import {CategoriesResponse} from '../Types/getCategoriesTypes';

export const getCategories = async () => {
  try {
    const {data} = await api.get<CategoriesResponse>('list.php?c=list');

    const {drinks} = data;

    return drinks;
  } catch (error) {
    return error;
  }
};
