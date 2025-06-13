import { RequestConfig } from 'next-intl/server';
import defaultMessages from '../../../public/locales/en.json';

const locale = 'en';

const config: RequestConfig | Promise<RequestConfig> = {
  locale,
  messages: defaultMessages,
  timeZone: 'UTC',
};

export default config;
