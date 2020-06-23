import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {
  dictionaryAction,
  depositAction,
  savingAction,
  loanAction,
  recommendAction,
} from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

store.dispatch(dictionaryAction.request('/static/data/dictionary.json'));
store.dispatch(recommendAction.request('/static/data/recommend.json'));
store.dispatch(depositAction.request());
store.dispatch(savingAction.request());
store.dispatch(loanAction.request());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
