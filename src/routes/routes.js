/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import UniversalRouter from 'universal-router/main.js';

// Not sure why `/turn-roll/` isn't resolving automatically, but whatever, this works for now.
// NOTE: This page was very helpful: https://github.com/rafrex/spa-github-pages
const createPath = pathFragment => `${process.env.PUBLIC_URL}${pathFragment}`; // PUBLIC_URL resolves to '/turn-roll' in production.

export const routePaths = {
  about: createPath('/about'),
  account: createPath('/account'),
  diceBag: createPath('/dicebag'),
  error: createPath('/error'),
  home: createPath(''),
  homeSlash: createPath('/'),
  privacy: createPath('/privacy'),
};

// The list of all application routes where each route contains a URL path string (pattern),
// the list of components to load asynchroneously (chunks), data requirements (GraphQL query),
// and a render() function which shapes the result to be passed into the top-level (App) component.
// For more information visit https://github.com/kriasoft/universal-router
const routes = [
  {
    path: routePaths.home,
    components: () => [import(/* webpackChunkName: 'Home' */ './Home/Home')],
    render: ({ user, components: [Home] }) => ({
      title: 'TurnRoll - roll for your whole turn',
      body: <Home user={user} />,
    }),
  },
  {
    path: '/',
    components: () => [import(/* webpackChunkName: 'Home' */ './Home/Home')],
    render: ({ user, components: [Home] }) => ({
      title: 'TurnRoll - roll for your whole turn ("/turn-roll/")',
      body: <Home user={user} />,
    }),
  },
  {
    path: routePaths.account,
    components: () => [
      import(/* webpackChunkName: 'Account' */ './Account/Account'),
    ],
    render: ({ user, components: [Account] }) => ({
      title: 'My Account • React Firebase Starter',
      body: <Account user={user} />,
    }),
  },
  {
    path: routePaths.about,
    components: () => [import(/* webpackChunkName: 'About' */ './About/About')],
    render: ({ user, components: [About] }) => ({
      title: 'About Us • React Firebase Starter',
      body: <About user={user} />,
    }),
  },
  {
    path: routePaths.privacy,
    components: () => [
      import(/* webpackChunkName: 'Privacy' */ './Privacy/Privacy'),
    ],
    render: ({ user, components: [Privacy] }) => ({
      title: 'Privacy Policy • React Firebase Starter',
      body: <Privacy user={user} />,
    }),
  },
  {
    path: routePaths.diceBag,
    components: () => [
      import(/* webpackChunkName: 'DiceBag' */ './DiceBag/DiceBag'),
    ],
    render: ({ user, components: [DiceBag] }) => ({
      title: 'TEMP Dice Bag view for dice',
      body: <DiceBag user={user} />,
    }),
  },
];

function resolveRoute(ctx) {
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

// export const routeNames = {
//   About: 'about',
//   Account: 'account',
//   DiceBag: 'dicebag',
//   Home: '',
//   Privacy: 'privacy',
// };

export default new UniversalRouter(routes, { resolveRoute });
