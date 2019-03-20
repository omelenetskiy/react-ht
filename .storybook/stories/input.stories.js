import React from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from '../../src/shared/components/styled/theme';

const themes = [theme];

storiesOf('Input', module)
  .addDecorator(withThemesProvider(themes))
  .add('search field', () => (
    <input
      type="text"
      className="search-control"
      placeholder="Find your movie..."
    />
  ));
