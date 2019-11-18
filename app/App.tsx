import React from 'react';
import AppContainer from './navigation';
import { Provider } from 'react-redux';
import Store from './config/configStore';



const App = () => {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
    )
};

export default App;




