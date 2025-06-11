'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { VariantProps } from 'class-variance-authority';
import { useDisclosure } from '@mantine/hooks';
import { Matcher } from 'react-day-picker';

type DatePickerProps = Omit<React.ComponentProps<'button'>, 'value'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    value: Date | undefined | null;
    disabledDate?: Matcher | Matcher[] | undefined;
    onChange: (value: Date | undefined | null) => void;
  };

// NOTE: value and onChange has null to solve date form control
// https://github.com/shadcn-ui/ui/issues/5503
export function DatePicker({
  value,
  onChange,
  disabledDate,
  className,
  clearable = false,
  ...props
}: DatePickerProps & { clearable?: boolean }) {
  const [opened, handlers] = useDisclosure();

  return (
    <Popover open={opened}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'flex w-full items-center transition-[gap]',
            value && clearable && 'gap-4',
            className
          )}
        >
          <Button
            variant="outline"
            className={cn(
              'flex-1 justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
            onClick={() => handlers.toggle()}
            {...props}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, 'PPP') : <span>Pick a date</span>}
          </Button>
          {clearable && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => onChange(null)}
              className={cn(
                value
                  ? 'max-h-[36px] max-w-[36px] opacity-100'
                  : 'max-h-0 max-w-0 opacity-0',
                'transition-all'
              )}
            >
              <X />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value ?? undefined}
          onSelect={(val) => {
            onChange(val ?? null);
            handlers.close();
          }}
          disabled={disabledDate}
        />
      </PopoverContent>
    </Popover>
  );
}
