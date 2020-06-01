import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {
  dictionaryAction, depositAction,
} from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

store.dispatch(dictionaryAction.request('/dictionary.json'));
store.dispatch(depositAction.request({ topFinGrpNo: '020000', pageNo: '1' }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
