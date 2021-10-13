import 'react-native';
import React from 'react';
import {Drink} from '../src/screens/drink';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Drink />);
});
