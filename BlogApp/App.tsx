/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Login from './Screens/Login';
import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
