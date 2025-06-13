import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import './src/lib/env.ts';

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
