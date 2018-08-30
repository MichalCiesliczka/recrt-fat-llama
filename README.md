# Frontend Challange app for recriutment process

## How to run application
Regarding on your OS you can use:
```
yarn start-linux
OR
yarn start-windows
OR
yarn start-os
```

## Backend
API is prepared by Fat Llama and stored in `backend` directory. Run proper binary regarding your OS.

## Frontend
Frontend is based on [create-react-app](https://github.com/facebook/create-react-app) boilerplate.

## Short story what and why
I've decided to do it with React with Redux. This is technology I'm working daily, so I feel strong in it. To do it fast I've used create-react-app as a bolierplate.
Side effects are handled with [Redux Saga](https://github.com/redux-saga/redux-saga).
To select data from Redux store I'm using [reselect](https://github.com/reduxjs/reselect). It's caching functionality maybe does not make a magic here, but for sure it'll be useful if app will scale.
List of all the libs you can find in `package.json` file.

Project's structure is prepare to scale. See bellow chart:
```
backend - Server files from Fat Llama
[...]
src/
  components - app-cross reusable components not linked with any functionality
  config - configuration files per environment
  features - full package of feature. Dedicated actions, constans, api methods, reducers, sagas and selectors. Also specified containers and controllers.
  routes - on-functionality-entry files to fetch proper data and render specific components
  utilities - pack of app-cross utilities
```

API documentation I've received was `deliberately sparse` so the only way to fetch the transactions I know is to request every page (20 transactions) from server.
The problem was I need to make it sortable. Of course as API does not support sorting I need to do it on my side.
2 ideas were in my mind: one long list and joing the results together or pagination.
In the end I've decided to make a one long list with `Load more` button at the end. With this solution user can sort more than one page of results if he clicks the button. It's also easier to show that there's no more results. User clicks the button and app checks if there are at least 20 results. If so button is still there. If no - button disappears.

To make app look nice and make it fast I've used [Material-UI](https://material-ui.com/) React components

## To improve:
- Add information to user that sorting will not show every data at the beggining;
- Add flow to project to check types;
- Write more tests;
- UX and designs;
- Get to know why accepting the transaction does not work;
