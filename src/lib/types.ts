import { z } from 'zod';
import { linkShortForm } from './schemas';

export type TLinkShortForm = z.infer<typeof linkShortForm>;
