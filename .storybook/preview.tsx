import type { Preview } from '@storybook/react';
import { montserrat } from '../src/lib/fonts';
import { ThemeProvider } from '../src/components/theme-provider';
import { StorybookProvider } from '../src/components/storybook-provider';
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
    (Story, context) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        forcedTheme={context.globals.theme}
      >
        <StorybookProvider context={context}>
          <div className={montserrat.variable}>
            <div className="font-sans">
              <Story />
            </div>
          </div>
        </StorybookProvider>
      </ThemeProvider>
    ),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
