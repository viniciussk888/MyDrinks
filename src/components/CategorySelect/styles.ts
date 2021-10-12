import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    maxHeight: 100,
    marginLeft: 8,
    borderRadius: 24,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 100,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15,
  },
  check: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 2,
  },
  checked: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
});
