import type { Preview } from '@storybook/react';
import { montserrat } from '../src/lib/font';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={montserrat.variable}>
        <div className="font-sans">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
