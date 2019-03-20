import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/buttons.stories');
  require('./stories/input.stories');
}

configure(loadStories, module);
