import { CardState } from '@/components/common/card-state';
import { Ripple } from '@/components/magicui/ripple';
import { Shell } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('not-found');

  return (
    <main className="flex h-svh items-center justify-center">
      <CardState
        icon={Shell}
        className="relative max-w-4xl"
        title={t('title')}
        description={t('description')}
      >
        <Ripple
          effectClassName="top-[40px] md:top-[96px] lg:top-[182px]"
          mainCircleSize={80}
        />
      </CardState>
    </main>
  );
}
