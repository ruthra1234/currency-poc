// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// app imports
import { MainLayout } from './layouts/mainlayout';
import CurrencyConverterContainer from './containers/index';
import { store } from './store/index';

// switch between browser history or hash history
import { browserHistory } from 'react-router';
const history = syncHistoryWithStore(browserHistory, store) as any;


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={MainLayout}>         
          <Route path="/" component={CurrencyConverterContainer} />        
        </Route>
      </Router>
    </Provider>
  );
}

export const app = ReactDOM.render(
  <App />, document.getElementById('app-container'),
);
