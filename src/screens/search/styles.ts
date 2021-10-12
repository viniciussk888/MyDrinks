import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 10,
    width: '95%',
    backgroundColor: 'white',
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
