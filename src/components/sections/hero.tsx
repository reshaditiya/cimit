import { TLinkShortSchema } from '@/lib/types';
import { Ripple } from '../magicui/ripple';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import HeroForm from '../forms/hero-form';

export default function Hero({
  onSubmit = () => {},
}: {
  onSubmit?: (params: TLinkShortSchema) => void;
}) {
  const { theme } = useTheme();
  const t = useTranslations('hero');
  const reversedTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <section
      className={cn(
        reversedTheme,
        'bg-primary-foreground text-primary relative space-y-4 overflow-hidden rounded-4xl p-10 lg:p-20'
      )}
    >
      <div>
        <h1 className="text-5xl font-black lg:text-7xl">cimit.</h1>
        <p>{t('description')}</p>
      </div>
      <HeroForm onSubmit={onSubmit} />
      <Ripple effectClassName="top-[60px] left-[110px] lg:top-[118px] lg:left-[190px]" />
    </section>
  );
}
