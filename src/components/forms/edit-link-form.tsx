import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editLinkSchema } from '@/lib/zod-schemas';
import { Input, PasswordInput } from '../ui/input';
import { DatePicker } from '../ui/date-picker';
import { TEditLinkSchema, TLinkListData } from '@/lib/types';
import { Button } from '../ui/button';
import { isBefore } from 'date-fns';
import ConfirmButton from '../ui/confirm-button';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';

type TEditLinkFormProps = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  linkData: TLinkListData;
  onSubmit: SubmitHandler<TEditLinkSchema>;
  onDelete: VoidFunction;
};

export default function EditLinkForm({
  onSubmit,
  onDelete,
  className,
  linkData,
  ...props
}: TEditLinkFormProps) {
  const form = useForm({
    resolver: zodResolver(editLinkSchema),
    defaultValues: {
      expiredDate: linkData.expiredAt || undefined,
      password: linkData.password || undefined,
      shortLink: linkData.shortLink,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="shortLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>very short link</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>expired date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  setValue={field.onChange}
                  className="w-full justify-start"
                  disabledDate={(date) => isBefore(date, new Date())}
                />
              </FormControl>
              <FormDescription className="text-sm">
                leave it empty to make it always on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormDescription className="text-sm">
                if password filled it means link protected
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4">
          <Button type="submit">save it</Button>
          <ConfirmButton type="button" onClick={() => onDelete()}>
            {(isConfirming) => (isConfirming ? 'r u sure???' : 'delete this')}
          </ConfirmButton>
        </div>
      </form>
    </Form>
  );
}
