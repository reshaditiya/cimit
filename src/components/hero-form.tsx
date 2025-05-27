'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { linkShortForm } from '@/lib/schemas';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from './ui/form';
import { TLinkShortForm } from '@/lib/types';

export default function HeroForm({
  onSubmit = () => {},
}: {
  onSubmit?: (params: TLinkShortForm) => void;
}) {
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const form = useForm({
    resolver: zodResolver(linkShortForm),
    defaultValues: {
      longLink: '',
    },
  });

  useEffect(() => {
    if (inputLinkRef.current) {
      inputLinkRef.current.focus();
    }
  }, []);

  return (
    <Form {...form}>
      <form
        className="flex flex-wrap gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="longLink"
          render={({ field }) => (
            <FormItem>
              <Input
                {...field}
                placeholder="paste your loooong url here...."
                className="max-w-md"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <FormDescription className="text-primary/80">
                u want more options????, yea u can edit that later.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">shrnk it</Button>
      </form>
    </Form>
  );
}
