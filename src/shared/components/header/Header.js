import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { actionMoviesFetchByQueryString } from '../../store/actions/movies';
import { appTitle } from '../../../config/moviesApp';
import StyledHeader from '../../styled/header';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.stylishColorLight};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.stylishColorLight};
  padding: 5px;
  border-radius: 3px;
`;

type Props = {
  location: {
    pathname: string,
  },
};

export const Header = ({ location, dispatch, moviesFetch }: Props) => (
  <StyledHeader>
    <Link to="/404">{appTitle}</Link>
    {location.pathname.includes('/movie') && (
      <StyledLink to="/" onClick={() => moviesFetch()}>
        Search
      </StyledLink>
    )}
  </StyledHeader>
);

const matDispatchToProps = (dispatch) => ({
  moviesFetch: () => dispatch(actionMoviesFetchByQueryString()),
});

export default withRouter(
  connect(
    null,
    matDispatchToProps
  )(Header)
);
