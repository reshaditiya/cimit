import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cryptr from 'cryptr';
import { env } from './env';

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
