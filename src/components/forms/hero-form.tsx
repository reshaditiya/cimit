'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reqPostLinkSchema } from '@/lib/zod-schemas/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { useTranslations } from 'next-intl';
import type { ReqPostLink } from '@/lib/types';

export default function HeroForm({
  onSubmit = () => {},
}: {
  onSubmit?: (params: ReqPostLink) => void;
}) {
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const form = useForm({
    resolver: zodResolver(reqPostLinkSchema),
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
                  aria-label={t('label-long-link')}
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
