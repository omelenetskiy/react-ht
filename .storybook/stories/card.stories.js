import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import StoryRouter from 'storybook-react-router';
import ProviderWrapper from '../Provider';

import { theme } from '../../src/shared/components/styled/theme';
import { GlobalStyle } from '../../src/shared/components/styled/globalStyle';

import Card from '../../src/shared/components/layout/movieCard/MovieCard';

const themes = [theme];

class Movie extends Component {
  state = {
    movie: {
      id: '447365',
      poster_path:
        'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
      title: 'Guardians of the Galaxy Vol. 3',
      genres: ['Action', 'Horror', 'Comedy']
    },
    parsedDate: '2020'
  };

  render() {
    const { movie, parsedDate } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Card movie={movie} parsedDate={parsedDate} />
      </Fragment>
    );
  }
}

storiesOf('Card', module)
  .addDecorator(story => <ProviderWrapper story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withThemesProvider(themes))
  .add('movie card', () => <Movie />);
