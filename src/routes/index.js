/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import UniversalRouter from 'universal-router/main.js';

// The list of all application routes where each route contains a URL path string (pattern),
// the list of components to load asynchroneously (chunks), data requirements (GraphQL query),
// and a render() function which shapes the result to be passed into the top-level (App) component.
// For more information visit https://github.com/kriasoft/universal-router
const routes = [
  {
    path: '',
    components: () => [import(/* webpackChunkName: 'Home' */ './Home')],
    render: ({ user, components: [Home] }) => ({
      title: 'React Starter Kit for Firebase and GraphQL',
      body: <Home user={user} />,
    }),
  },
  {
    path: '/',
    components: () => [import(/* webpackChunkName: 'Home' */ './Home')],
    render: ({ user, components: [Home] }) => ({
      title: 'React Starter Kit for Firebase and GraphQL',
      body: <Home user={user} />,
    }),
  },
  {
    path: '/account',
    components: () => [import(/* webpackChunkName: 'Account' */ './Account')],
    render: ({ user, components: [Account] }) => ({
      title: 'My Account • React Firebase Starter',
      body: <Account user={user} />,
    }),
  },
  {
    path: '/about',
    components: () => [import(/* webpackChunkName: 'About' */ './About')],
    render: ({ user, components: [About] }) => ({
      title: 'About Us • React Firebase Starter',
      body: <About user={user} />,
    }),
  },
  {
    path: '/privacy',
    components: () => [import(/* webpackChunkName: 'Privacy' */ './Privacy')],
    render: ({ user, components: [Privacy] }) => ({
      title: 'Privacy Policy • React Firebase Starter',
      body: <Privacy user={user} />,
    }),
  },
  {
    path: '/dicebag',
    components: () => [import(/* webpackChunkName: 'DiceBag' */ './DiceBag')],
    render: ({ user, components: [DiceBag] }) => ({
      title: 'TEMP Dice Bag view for dice',
      body: <DiceBag user={user} />,
    }),
  },
];

function resolveRoute(ctx) {
  console.warn('ctx:', ctx);
  const { route } = ctx;

  if (!route.render) {
    return ctx.next();
  }

  return Promise.all(route.components()).then(components =>
    ctx.render({
      user: ctx.user,
      location: ctx.location,
      route: route.render({
        user: ctx.user,
        location: ctx.location,
        components: components.map(x => x.default),
      }),
    }),
  );
}

export const routeNames = {
  About: 'about',
  Account: 'account',
  DiceBag: 'dicebag',
  Home: '',
  Privacy: 'privacy',
};

export default new UniversalRouter(routes, { resolveRoute });
