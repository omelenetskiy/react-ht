import React from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from '../../src/shared/components/styled/theme';

import Button from '../../src/shared/components/common/button/Button';

const themes = [theme];

storiesOf('Button', module)
  .addDecorator(withThemesProvider(themes))
  .add('with text', () => <Button>Hello Button</Button>);
