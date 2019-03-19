import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionSearcByChange } from '../../../store/actions/movies';

import Button from '../button/Button';

const StyledBtnGroup = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input:checked + label {
    background-color: ${props => props.theme.dangerColorDark};
  }

  input + label {
    background-color: ${props => props.theme.stylishColor};
  }
`;

const StyledLabel = styled(Button)`
  min-width: 50px;
  padding: 5px 15px;
  margin: 0 5px;
  transition: all 0.1s ease-in-out;
`;

class BtnGroup extends Component {
  state = {
    buttons: [
      {
        title: 'Title',
        value: 'title',
        name: 'search',
        checked: true
      },
      {
        title: 'Genres',
        value: 'genres',
        name: 'search',
        checked: false
      }
    ]
  };

  searchBy = e => {
    const { changeSearchBy } = this.props;
    changeSearchBy(e.target.value);
  };

  render() {
    const { buttons } = this.state;
    return (
      <StyledBtnGroup>
        <span>Search by:</span>

        {buttons.map(button => (
          <Fragment key={button.title}>
            <input
              type="radio"
              value={button.value}
              id={button.title}
              name={button.name}
              defaultChecked={button.checked}
              onChange={this.searchBy}
            />
            <StyledLabel as="label" htmlFor={button.title}>
              {button.title}
            </StyledLabel>
          </Fragment>
        ))}
      </StyledBtnGroup>
    );
  }
}

const matDispatchToProps = dispatch => ({
  changeSearchBy: value => dispatch(actionSearcByChange(value))
});

export default connect(
  null,
  matDispatchToProps
)(BtnGroup);
