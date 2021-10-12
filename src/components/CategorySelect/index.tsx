import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../../global/styles/theme';

import {getCategories} from '../../screens/home/Services/getCategories';
import {CategoriesType} from '../../screens/home/Types/getCategoriesTypes';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};
export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = true,
}: Props) {
  const [categories, setCategories] = useState<Array<CategoriesType>>([]);
  const {secondary40, secondary50, secondary70, secondary85} = theme.colors;

  useEffect(() => {
    async function fetchData() {
      const response = await getCategories();
      setCategories(response);
    }
    fetchData();
  }, [categories]);

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}>
      {categories.map(category => (
        <TouchableOpacity onPress={() => setCategory(category.strCategory)}>
          <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}>
            <LinearGradient
              style={[
                styles.content,
                {opacity: categorySelected === category.strCategory ? 1 : 0.5},
              ]}
              colors={[
                categorySelected === category.strCategory
                  ? secondary85
                  : secondary50,
                secondary40,
              ]}>
              {hasCheckBox && (
                <View
                  style={
                    categorySelected === category.strCategory
                      ? styles.checked
                      : styles.check
                  }
                />
              )}

              <Text style={styles.title}>{category.strCategory}</Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
