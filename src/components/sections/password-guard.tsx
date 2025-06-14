import { LockIcon } from 'lucide-react';
import { CardState } from '../common/card-state';
import { Ripple } from '../magicui/ripple';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reqGetProtectedRedirectSchema } from '@/lib/zod-schemas/link';
import { ReqGetProtectedRedirect } from '@/lib/types';
import { PasswordInput } from '../ui/input';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { useFocusOnMount } from '@/lib/hooks';

export default function PasswordGuard({
  onSubmit,
}: {
  onSubmit: SubmitHandler<ReqGetProtectedRedirect>;
}) {
  const focusRef = useFocusOnMount();
  const t = useTranslations('password-guard');
  const form = useForm({
    resolver: zodResolver(reqGetProtectedRedirectSchema),
  });

  return (
    <CardState
      icon={LockIcon}
      className="relative max-w-4xl"
      title={t('title')}
      description={t('description')}
    >
      <Ripple
        effectClassName="top-[40px] md:top-[96px] lg:top-[182px]"
        mainCircleSize={80}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="max-w-xs flex-1 text-left">
                <FormControl>
                  <PasswordInput
                    {...field}
                    ref={focusRef}
                    autoComplete="off"
                    placeholder="enter ur super duper secret password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">unlock</Button>
        </form>
      </Form>
    </CardState>
  );
}
