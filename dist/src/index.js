import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk'

const middleware = [thunk];
const store = createStore(
  allReducers, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
  
  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
