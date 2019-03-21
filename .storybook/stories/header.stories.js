import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import StoryRouter from 'storybook-react-router';
import ProviderWrapper from '../Provider';

import { theme } from '../../src/shared/components/styled/theme';
import { GlobalStyle } from '../../src/shared/components/styled/globalStyle';

import Header from '../../src/shared/components/layout/header/Header';

const themes = [theme];

storiesOf('Header', module)
  .addDecorator(withThemesProvider(themes))
  .addDecorator(story => <ProviderWrapper story={story()} />)
  .addDecorator(StoryRouter())
  .add('header', () => (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  ));
