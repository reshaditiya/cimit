import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cryptr from 'cryptr';
import { env } from './env';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cryptr() {
  const cryptr = new Cryptr(env.CRYPTR_SALT);

  return cryptr;
}
