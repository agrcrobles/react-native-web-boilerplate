// @flow

import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';

import { connect } from 'react-redux';

import Nav from './src';

export const Navigator = Nav;

// your app
const App = (props) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.navigation
    })}
  />
);

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

// return your data to your provider
export default connect(mapStateToProps)(App);
