import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';
import { Provider } from "react-redux";
import DefaultPage from './page/default';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DefaultPage action={action}/>
      </Provider>
    );
  }
}

export default App;
