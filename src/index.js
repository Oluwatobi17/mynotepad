import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import AuthProvider from './store/auth-context';
import NoteProvider from './store/selectednote-context';
import store from './store/reducers';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <NoteProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </NoteProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
