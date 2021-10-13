import 'react-native';
import React from 'react';
import {Search} from '../src/screens/search';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Search />);
});
