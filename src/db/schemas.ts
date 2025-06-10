import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const links = pgTable('links', {
  shortLink: text('short_link').notNull().primaryKey(),
  longLink: text('long_link').notNull(),
  password: text('password'),
  totalVisited: integer('total_visited').notNull().default(0),
  createdBy: text('created_by'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  expiredAt: timestamp('expired_at'),
});
