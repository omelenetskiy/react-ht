import React from 'react';

import StyledSearchFilter from '../../styled/searchFilter';
import Button from '../button/Button';
import ButtonGroup from '../buttonGroup/ButtonGroup';

const SearchFilter = ({ handleSearch }) => (
  <StyledSearchFilter>
    <ButtonGroup />
    <Button size="large" onClick={handleSearch}>
      Search
    </Button>
  </StyledSearchFilter>
);

export default SearchFilter;
