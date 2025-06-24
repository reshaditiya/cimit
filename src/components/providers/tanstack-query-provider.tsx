'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function TanstackQueryProvider({
  children,
  showDevTools = true,
}: {
  children: React.ReactNode;
  showDevTools?: boolean;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {showDevTools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
