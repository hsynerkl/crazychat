import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index'
import Router from './config/router'



function App() {





  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
export default App;
