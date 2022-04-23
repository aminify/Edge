# EdgePetrol FE Exercise

The aim of this exercise is to demonstrate your React skills working against an existing GraphQL API.

## Prerequisites

Recent versions of:

- Node
- Yarn

## Repo Contents

`api`: The implemented Nest.js GraphQL API.

`web`: Folder for the React application (add your code here).

## Instructions

The API can be started by running `yarn --cwd api install` then `yarn --cwd api start` and is accessible at `http://localhost:8080/graphql`.

Opening this URL in the browser will take you to GraphQL Playground.

### Features:

The API allows the user to fetch a list of all stations or a single station by ID.

Add the following features to the web project:

- Home route which displays the list of stations and their metrics in a table. This table should be sortable by station name, volume, margin and profit. Implement the sort in the client.
- A single station route which shows the same information but only for a single station.
- Clicking on a station in the list of stations should take the user to the single station route.

Please implement as much of the above as possible but don't aim to spend more than a few hours.

### Tech notes:

- You are free to use any React framework (CRA/Next etc) and GraphQL library to interact with the API.
- Add a number of unit tests to demonstrate how you would test production code. There's no need to aim for 100% coverage, just a good example set of tests for one or more components.
- Please use either TypeScript or JavaScript, whichever you feel most comfortable with.
- In terms of styling, aim for something basic and clean. No need to spend much time, just show us you have a good grasp of CSS.
