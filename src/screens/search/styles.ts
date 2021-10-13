import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 8,
    fontFamily: theme.fonts.text500,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
