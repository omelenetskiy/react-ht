import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionSearchByChange } from '../../../store/actions/movies';

import { searchByButtons } from '../../../../config/buttonGroups';

import Button from '../../styled/button';
import Checkbox from './checkbox/Checkbox';

import StyledButtonGroup from '../../styled/buttonGroup';
import StyledFilterTitle from '../../styled/filterTitle';

const StyledLabel = styled(Button)`
  min-width: 50px;
  padding: 5px 15px;
  margin: 0 5px;
  transition: all 0.1s ease-in-out;
`;

class ButtonGroup extends Component {
  toggleSearchBy = e => {
    const { changeSearchBy } = this.props;
    changeSearchBy(e.target.value);
  };

  render() {
    return (
      <StyledButtonGroup>
        <StyledFilterTitle light>{searchByButtons.title}</StyledFilterTitle>

        <div className="filter-buttons">
          {searchByButtons.buttons.map(button => (
            <Fragment key={button.title}>
              <Checkbox button={button} onChange={this.toggleSearchBy} />
              <StyledLabel as="label" htmlFor={button.title}>
                {button.title}
              </StyledLabel>
            </Fragment>
          ))}
        </div>
      </StyledButtonGroup>
    );
  }
}

const matDispatchToProps = dispatch => ({
  changeSearchBy: value => dispatch(actionSearchByChange(value))
});

export default connect(
  null,
  matDispatchToProps
)(ButtonGroup);
