import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import StoryRouter from 'storybook-react-router';
import ProviderWrapper from '../Provider';

import theme from '../../src/shared/components/styled/theme';
import GlobalStyle from '../../src/shared/components/styled/globalStyle';

import Footer from '../../src/shared/components/layout/footer/Footer';

const themes = [theme];

storiesOf('Footer', module)
  .addDecorator(withThemesProvider(themes))
  .addDecorator((story) => <ProviderWrapper story={story()} />)
  .addDecorator(StoryRouter())
  .add('footer', () => (
    <Fragment>
      <GlobalStyle />
      <Footer />
    </Fragment>
  ));
