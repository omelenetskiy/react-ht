import React, { Component } from 'react';

import { searchByButtons } from '../../../config/buttonGroups';
import StyledSearchFilter from '../../styled/searchFilter';
import Button from '../button/Button';
import ButtonGroup from '../buttonGroup/ButtonGroup';

class SearchFilter extends Component {
  toggleSearchBy = (e) => {
    const { handleChangeSearchBy } = this.props;
    handleChangeSearchBy(e.target.value);
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

export default SearchFilter;
