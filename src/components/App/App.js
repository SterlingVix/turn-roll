/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../../theme';
import Toolbar from './Toolbar';
import Footer from './Footer';

const Container = styled.div`
  height: 100vh;

  /* background: url(https://koistya.github.io/files/background-v1-1920x1080.jpg) no-repeat center center fixed; */

  /* orange with a kind of grey overlay. */
  background-color: rgba(168, 109, 0, 0.5);
  background-size: cover;
`;

export const Centered = styled.div`
  /* Center contents and apply equal margins between. */
  display: flex;
  justify-content: space-around; /* or space-between */
  align-items: center;
  text-align: center;
`;

//http://koistya.github.io/files/background-v1-1920x1080.jpg

class App extends React.Component<{}> {
  componentDidMount() {
    window.document.title = this.props.route.title;
    // FIXME: implement user
    // if (!this.props.user) {
    //   console.warn('No this.props.user on App.componentDidMount');
    // } else {
    //   console.log(`  this.props.user.uid`, this.props.user.uid);
    // }
  }

  componentDidUpdate(nextProps) {
    window.document.title = this.props.route.title;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Toolbar user={this.props.user} />
          {this.props.route.body}
          <Footer />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
