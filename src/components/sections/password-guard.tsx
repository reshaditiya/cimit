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
import { reqGetRedirectSchema } from '@/lib/zod-schemas/link';
import { ReqGetRedirect } from '@/lib/types';
import { PasswordInput } from '../ui/input';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

export default function PasswordGuard({
  onSubmit,
}: {
  onSubmit: SubmitHandler<ReqGetRedirect>;
}) {
  const t = useTranslations('password-guard');
  const form = useForm({ resolver: zodResolver(reqGetRedirectSchema) });

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormControl>
                    <PasswordInput {...field} autoComplete="off" className='w-xs' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">unlock</Button>
          </div>
        </form>
      </Form>
    </CardState>
  );
}
