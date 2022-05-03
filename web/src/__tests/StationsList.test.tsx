/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import AppMock from './AppMock';
import { createMemoryHistory } from 'history';
import routes from 'routes';
import stationsQuery from 'queries/stationsQuery';

const renderStationsList = (route: string) => {
  const history = createMemoryHistory();
  history.push(route);
  return render(<AppMock history={history} mocks={apolloMocks} />);
};

const apolloMocks = [
  {
    request: {
      query: stationsQuery,
    },
    result: {
      data: {
        stations: [
          {
            id: 1,
            name: 'Anfield',
            metrics: {
              volume: 1526,
              margin: 20.65,
              profit: 315,
            },
          },
          {
            id: 2,
            name: 'Vicarage Road',
            metrics: {
              volume: 986,
              margin: 17.99,
              profit: 177,
            },
          },
          {
            id: 3,
            name: 'Stamford Bridge',
            metrics: {
              volume: 2360,
              margin: 25.88,
              profit: 611,
            },
          },
          {
            id: 4,
            name: 'Emirates Stadium',
            metrics: {
              volume: 1905,
              margin: 17.08,
              profit: 325,
            },
          },
        ],
      },
    },
  },
];

test('stations table renders correct number of columns and rows', async () => {
  renderStationsList(routes.STATIONS_LIST);
  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  const columns = screen.queryAllByRole('columnheader');
  expect(columns.length).toBe(4);

  const rows = screen.queryAllByRole('row');
  expect(rows.length).toBe(5); // 4 + 1 column row
});

test('stations table renders records in order by default', async () => {
  const { container } = renderStationsList(routes.STATIONS_LIST);
  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  const rowElements = container.querySelectorAll('tbody>tr');
  expect(rowElements[0].innerHTML.includes('Anfield')).toBe(true);
  expect(rowElements[1].innerHTML.includes('Vicarage Road')).toBe(true);
  expect(rowElements[2].innerHTML.includes('Stamford Bridge')).toBe(true);
  expect(rowElements[3].innerHTML.includes('Emirates Stadium')).toBe(true);
});

test('stations table sorts by name descending', async () => {
  const { container } = renderStationsList(
    routes.STATIONS_LIST + '?orderBy=name&asc=false',
  );
  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  const firstRow = container.querySelectorAll('tbody>tr')[0];
  expect(firstRow.innerHTML.includes('Vicarage Road')).toBe(true);
});

test('stations table sorts by volume ascending', async () => {
  const { container } = renderStationsList(
    routes.STATIONS_LIST + '?orderBy=volume&asc=true',
  );
  await waitForElementToBeRemoved(screen.queryByText(/loading/i));

  const tbodyRows = container.querySelectorAll('tbody>tr');
  const lastRow = tbodyRows[tbodyRows.length - 1];
  expect(lastRow.innerHTML.includes('Stamford Bridge')).toBe(true);
});
