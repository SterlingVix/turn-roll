/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';

const Container = styled.div`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Content = styled(Card)`
  padding: 1em 2em;
  margin: 2em 0;
`;

const Column = styled(Card)`
  /* Center contents and apply equal margins between. */
  display: flex;
  flex-flow: column nowrap;
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

const MAX_LENGTH = 8;

class DiceGroup extends Component<{}> {
  state = {
    value: this.props.value,
    errorText: '',
    isUnderlined: true,
  };

  componentWillMount() {}

  handleInputChange = event => {
    console.log(`  event.target`, event.target);

    if (!event.target.value) {
      this.setState({
        isUnderlined: true,
      });
    }

    if (event.target.value && event.target.value.length > MAX_LENGTH) {
      this.setState({
        errorText: 'Too long!',
      });
    } else {
      this.setState({
        value: event.target.value,
      });
      if (this.state.errorText) {
        this.setState({
          errorText: '',
        });
      }
    }
  };

  handleBlur = event => {
    console.log(`  event.target`, event.target);

    if (event.target.value && event.target.value.length) {
      this.setState({
        isUnderlined: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <Column>
          <Container>{this.props.children}</Container>

          <FormControl margin="dense">
            {/*<InputLabel htmlFor="diceGroup">Label</InputLabel>*/}
            <Input
              disableUnderline={!this.state.isUnderlined}
              error={!!this.state.errorText}
              id="diceGroup"
              onBlur={this.handleBlur}
              onChange={this.handleInputChange}
              value={this.state.value}
            />
            {this.state.errorText ? (
              <FormHelperText id="diceGroupText">
                {this.state.errorText}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Column>
      </Container>
    );
  }
}

DiceGroup.propTypes = {
  value: PropTypes.string,
};

DiceGroup.defaultProps = {
  value: '',
};

export default DiceGroup;
