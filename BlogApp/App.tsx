import React from 'react';
import Navigation from './Screens/Navigation';
import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
