/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Container = styled.div`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Content = styled(Card)`
  padding: 1em 2em;
  margin: 2em 0;
`;

const Row = styled(Card)`
  /* Center contents and apply equal margins between. */
  display: flex;
  justify-content: space-around; /* or space-between */
  align-items: center;
  padding: 0.66em;
  border: solid pink 1px;
  border-radius: 3px;

  /* All children are flex, too. :) */
  & * {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Result = styled(Card)`
  /* padding: 0.66em; deferring to flex for spacing. */
  width: 3em;
  height: 3em;
  border: solid black 1px;
  border-radius: 0.1em;
  user-select: none;
  cursor: cell;
  cursor: copy;
  &:hover {
    background-color: lightgrey;
  }
`;

// TODO: This is basically a copy of "Result". Can this be de-duplicated?
const valueColor = 'orange';
const DieValue = styled.div`
  width: 3em;
  height: 3em;
  margin: 0 0.5em;
  font-size: 1.5rem;
  color: ${valueColor};
  border: solid transparent 1px;
  border-bottom: solid ${valueColor} 1px;
  border-radius: 0.3em;
  user-select: none;
  cursor: default;
  &:hover {
    border: solid ${valueColor} 1px;
  }
`;

const ButtonReroll = styled(Button)`
  padding: 0.33em;
  text-align: center;
`;

class Home extends Component<{}> {
  state = {
    rows: [
      { die: 100, size: 6 },
      { die: 20, size: 6 },
      { die: 12, size: 6 },
      { die: 10, size: 6 },
      { die: 8, size: 8 },
      { die: 6, size: 8 },
      { die: 4, size: 8 },
    ],
  };

  componentWillMount() {
    // TEMP Set initial dice values:
    this.roll();
  }

  setResults = row => {
    // returns an Array[]
    const { die, size } = row;

    // TODO: what's the best way to do this? Is this state too nested?
    let newResults = [];
    // Accumulate new random numbers
    for (let i = 0; i < size; i++) {
      newResults.push(1 + Math.floor(Math.random() * Math.floor(die)));
    }

    // Return a new Row value:
    return {
      die,
      size,
      results: newResults,
    };
  };

  roll = () =>
    this.setState({
      rows: this.state.rows.map(this.setResults),
    });

  renderRow = (row, index) => {
    return (
      <Row key={`DiceRow-${index}`}>
        <DieValue>{row.die}s:</DieValue>
        {row.results.map(this.renderResult)}
      </Row>
    );
  };

  renderResult = (thisDie, index) => (
    <Result key={`result-${index}`}>{thisDie}</Result>
  );

  render() {
    const { rows } = this.state;

    return (
      <Container>
        <Content>
          <Typography type="headline" gutterBottom>
            Dice Bag{' '}
            <ButtonReroll raised color="accent" onClick={this.roll}>
              Reroll
            </ButtonReroll>
          </Typography>
          {/*<Typography type="body1" paragraph>*/}
          {rows.map(this.renderRow)}
          {/*</Typography>*/}
        </Content>
      </Container>
    );
  }
}

export default Home;
