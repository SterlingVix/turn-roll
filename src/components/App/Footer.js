/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { routePaths } from '../../routes';
import Link from '../Link';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 24px;
  color: rgba(0, 0, 0, 0.4);
`;

const Separator = styled.span`
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

export const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

class Footer extends React.Component<{}> {
  render() {
    return (
      <Container>
        <ExtLink href="https://github.com/SterlingVix">Aaron Melocik</ExtLink>
        <Separator> & </Separator>
        <ExtLink href="https://github.com/carmella718">Carmella Peeler</ExtLink>
        <Separator> with </Separator>
        <ExtLink href="https://github.com/kriasoft/react-firebase-starter">
          Kriasoft/react-starter-kit
        </ExtLink>
        <Separator>|</Separator>
        <Link href={routePaths.privacy}>Privacy Policy</Link>
      </Container>
    );
  }
}

export default Footer;
