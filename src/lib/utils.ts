import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cryptr from 'cryptr';
import { env } from './env';
import { hc } from 'hono/client';
import { HonoApp } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cryptr(password: string) {
  const cryptr = new Cryptr(env.CRYPTR_SALT + password);

  return cryptr;
}

export function getAllowedOriginCors() {
  return [
    'http://localhost:6006',
    'http://localhost:3000',
    'http://localhost:3001',
  ];
}

export const client = hc<HonoApp>('http://localhost:8787/', {
  fetch: ((input, init) => {
    return fetch(input, {
      ...init,
      credentials: 'include',
    });
  }) satisfies typeof fetch,
});
