import type { Preview } from '@storybook/react';
import { montserrat } from '../src/lib/fonts';
import { ThemeProvider } from '../src/components/providers/theme-provider';
import { StorybookProvider } from '../src/components/providers/storybook-provider';
import { NextIntlClientProvider } from 'next-intl';
import intlConfig from '../src/lib/i18n/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '../src/components/ui/sonner';
import '../src/styles/globals.css';

const queryClient = new QueryClient();

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
          <NextIntlClientProvider {...intlConfig}>
            <QueryClientProvider client={queryClient}>
              <div className={montserrat.variable}>
                <div className="font-sans">
                  <Story />
                </div>
              </div>
              <Toaster position="top-center" />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
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
