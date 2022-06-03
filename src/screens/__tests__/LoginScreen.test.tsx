import React from "react";
import { render, fireEvent } from '@testing-library/react-native'
import LoginScreen from "../LoginScreen";

const mockedDispatch = jest.fn();

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return { KeyboardAwareScrollView };
});

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});


it("renders LoginScreen element", () => {
  const { getAllByText } = render(<LoginScreen />)
  expect(getAllByText("Sign in").length).toBe(1)
})
