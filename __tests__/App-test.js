import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../App';

it('renders correctly', () => {
  renderer.create(<Login />);
});

test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Login username', () => {
  const { getByText, getByPlaceholderText } = render(
    <Login />,
  );

  fireEvent.changeText(
    getByPlaceholderText('Username')
  );
  fireEvent.press(getByText('Submit'));
});
