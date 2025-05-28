import { useTranslations } from 'next-intl';
import CardContainer from './card-container';
import SectionTitle from './section-title';
import { InputWithIcons } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filterSorterSchema } from '@/lib/schemas';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { TFilterSorterSchema } from '@/lib/types';
import { useDebouncedCallback, useDidUpdate } from '@mantine/hooks';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export default function FilterSorter({
  onChange = () => {},
}: {
  onChange: (params: TFilterSorterSchema) => void;
}) {
  const t = useTranslations('filter-sorter');
  const form = useForm({
    resolver: zodResolver(filterSorterSchema),
    defaultValues: {
      search: '',
      orderBy: 'created date',
      order: 'desc',
      visibility: 'all',
      expiry: 'all',
    },
  });
  const formState = form.watch();
  const onChangeDebounced = useDebouncedCallback(
    (formState: TFilterSorterSchema) => {
      onChange(formState);
    },
    400
  );

  useDidUpdate(() => {
    onChangeDebounced(formState);
  }, [formState]);

  function handleOrderChange() {
    form.setValue('order', form.getValues('order') === 'asc' ? 'desc' : 'asc');
  }

  return (
    <CardContainer className="flex flex-col gap-4">
      <SectionTitle>{t('title')}</SectionTitle>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {})}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcons
                    leftIcon={<Search className="size-4" />}
                    rightIcon={
                      field.value && (
                        <X
                          className="size-4 cursor-pointer"
                          onClick={() => field.onChange('')}
                        />
                      )
                    }
                    placeholder={t('search-placeholder')}
                    aria-label={t('label-search')}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="orderBy"
              render={({ field }) => (
                <FormItem className="grow">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        aria-label={t('order-by')}
                        className="w-full"
                      >
                        <SelectValue placeholder={t('order-by')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="created date">
                        {t('created-date')}
                      </SelectItem>
                      <SelectItem value="most visited">
                        {t('most-visited')}
                      </SelectItem>
                      <SelectItem value="expired date">
                        {t('expired-date')}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent"
              onClick={handleOrderChange}
              aria-label={t('order')}
            >
              {formState.order === 'asc' ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
          <Tabs
            onValueChange={(value) =>
              form.setValue(
                'visibility',
                value as TFilterSorterSchema['visibility']
              )
            }
            value={formState.visibility}
          >
            <TabsList className="flex w-full flex-1">
              <TabsTrigger value="all">{t('all')}</TabsTrigger>
              <TabsTrigger value="public">{t('public')}</TabsTrigger>
              <TabsTrigger value="protected">{t('protected')}</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs
            onValueChange={(value) =>
              form.setValue('expiry', value as TFilterSorterSchema['expiry'])
            }
            value={formState.expiry}
          >
            <TabsList className="flex w-full flex-1">
              <TabsTrigger value="all">{t('all')}</TabsTrigger>
              <TabsTrigger value="active">{t('active')}</TabsTrigger>
              <TabsTrigger value="expired">{t('expired')}</TabsTrigger>
            </TabsList>
          </Tabs>
        </form>
      </Form>
    </CardContainer>
  );
}
