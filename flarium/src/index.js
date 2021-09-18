import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';

import authReducer from './store/reducers/auth-reducer';
<<<<<<< HEAD

const rootReducer = combineReducers({
    ath: authReducer,
=======
import flightReducer from './store/reducers/flight-reducer';

const rootReducer = combineReducers({
    ath: authReducer,
    flt: flightReducer,
>>>>>>> frontend-branch
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(Thunk)));

<<<<<<< HEAD

=======
>>>>>>> frontend-branch
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
