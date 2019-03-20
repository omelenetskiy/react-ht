import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../src/shared/components/common/button/Button';

storiesOf('Button', module).add('with text', () => (
  <Button>Hello Button</Button>
));
