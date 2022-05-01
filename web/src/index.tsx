import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RootStore, StoreContext } from './models';
import { createHttpClient } from 'mst-gql';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:8080/graphql'),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  </React.StrictMode>,
);

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  window.store = rootStore;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
