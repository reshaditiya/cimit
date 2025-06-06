'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

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
    value: Date | undefined;
    disabledDate?: Matcher | Matcher[] | undefined;
    setValue: (value: Date | undefined) => void;
  };

export function DatePicker({
  value,
  setValue,
  disabledDate,
  ...props
}: DatePickerProps) {
  const [opened, handlers] = useDisclosure();

  return (
    <Popover open={opened}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )}
          onClick={() => handlers.toggle()}
          {...props}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(val) => {
            setValue(val);
            handlers.close();
          }}
          disabled={disabledDate}
        />
      </PopoverContent>
    </Popover>
  );
}
