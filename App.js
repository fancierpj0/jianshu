import React from 'react';
import Header from './common/Header';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}
