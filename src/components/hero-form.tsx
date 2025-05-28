'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { linkShortSchema } from '@/lib/schemas';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from './ui/form';
import { TLinkShortSchema } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function HeroForm({
  onSubmit = () => {},
}: {
  onSubmit?: (params: TLinkShortSchema) => void;
}) {
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const form = useForm({
    resolver: zodResolver(linkShortSchema),
    defaultValues: {
      longLink: '',
    },
  });
  const t = useTranslations('hero-form');

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
              <FormControl>
                <Input
                  {...field}
                  placeholder={t('paste-long-form')}
                  className="max-w-md"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </FormControl>
              <FormDescription className="text-primary/80">
                {t('more-options')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t('shrink-it')}</Button>
      </form>
    </Form>
  );
}
