import { drizzle } from 'drizzle-orm/xata-http';
import { getXataClient } from './xata-client'; //
import * as schema from '@/db/schemas';

const xata = getXataClient();
const db = drizzle(xata, { schema, casing: 'snake_case' });

export default db;
