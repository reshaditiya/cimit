import { StoryContext } from '@storybook/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function StorybookProvider({
  context,
  children,
}: {
  context: StoryContext;
  children: React.ReactNode;
}) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(context.globals.theme);
  }, [context.globals.theme, setTheme]);

  return children;
}
