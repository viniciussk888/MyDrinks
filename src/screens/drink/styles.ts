import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  banner: {width: '100%', height: 234},
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    marginBottom: 30,
    marginTop: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  category: {
    fontSize: 22,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21,
  },
});
