import type { Preview } from '@storybook/react';
import { montserrat } from '../src/lib/fonts';
import { ThemeProvider } from '../src/components/providers/theme-provider';
import { StorybookProvider } from '../src/components/providers/storybook-provider';
import { NextIntlClientProvider } from 'next-intl';
import defaultMessages from '../public/locales/en.json';
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
          <NextIntlClientProvider locale="en" messages={defaultMessages}>
            <div className={montserrat.variable}>
              <div className="font-sans">
                <Story />
              </div>
            </div>
          </NextIntlClientProvider>
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
