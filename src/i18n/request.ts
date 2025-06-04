import { getRequestConfig } from 'next-intl/server';
import config from './config';

export default getRequestConfig(async () => {
  return config;
});
