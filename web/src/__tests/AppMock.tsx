import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Router } from 'react-router-dom';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

type AppMockProps = {
  mocks: ReadonlyArray<MockedResponse>;
  history: any;
};

function AppMock({ mocks, history }: AppMockProps) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </ThemeProvider>
    </MockedProvider>
  );
}

export default AppMock;
