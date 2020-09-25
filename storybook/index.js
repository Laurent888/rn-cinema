import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories/ImageCard.stories.tsx');
  require('./stories/FeatureBadge.stories.tsx');
  require('./stories/TextAccordeon.stories.tsx');
  require('./stories/TheatreItem.stories.tsx');
  require('./stories/SearchBar.stories.tsx');
  require('./stories/MovieCard.stories.tsx');
  require('./stories/TextInput.stories.tsx');
  require('./stories/ButtonLinkWide.stories.tsx');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
