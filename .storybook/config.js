import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/header.stories');
  require('./stories/buttons.stories');
  require('./stories/input.stories');
  require('./stories/card.stories');
  require('./stories/footer.stories');
}

configure(loadStories, module);
