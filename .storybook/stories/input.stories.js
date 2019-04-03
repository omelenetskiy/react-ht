import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import StoryRouter from 'storybook-react-router';
import ProviderWrapper from '../Provider';

import theme from '../../src/shared/components/styled/theme';
import GlobalStyle from '../../src/shared/components/styled/globalStyle';

import SearchInput from '../../src/shared/components/common/searchForm/input/Input';

const themes = [theme];

storiesOf('Input', module)
  .addDecorator(withThemesProvider(themes))
  .addDecorator((story) => <ProviderWrapper story={story()} />)
  .addDecorator(StoryRouter())
  .add('search input', () => (
    <Fragment>
      <GlobalStyle />
      <SearchInput placeholder="Type text..." onChange={() => ({})} />
    </Fragment>
  ));
