import React from 'react';
import Header from './common/Header';
import store from './store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
      </Provider>
    )
  }
}
