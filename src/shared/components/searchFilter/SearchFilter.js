import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionSearchByChange } from '../../store/actions/movies';

import { searchByButtons } from '../../../config/buttonGroups';

import StyledSearchFilter from '../../styled/searchFilter';
import Button from '../button/Button';
import ButtonGroup from '../buttonGroup/ButtonGroup';

class SearchFilter extends Component {
  toggleSearchBy = (e) => {
    const { changeSearchBy } = this.props;
    changeSearchBy(e.target.value);
  };

  render() {
    const { handleSearch } = this.props;
    return (
      <StyledSearchFilter>
        <ButtonGroup
          controls={searchByButtons}
          toggleSearchBy={this.toggleSearchBy}
          color="light"
        />
        <Button size="large" onClick={handleSearch}>
          Search
        </Button>
      </StyledSearchFilter>
    );
  }
}

const matDispatchToProps = (dispatch) => ({
  changeSearchBy: (value) => dispatch(actionSearchByChange(value)),
});

export default connect(
  null,
  matDispatchToProps
)(SearchFilter);
