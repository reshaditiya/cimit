import { SendIcon } from 'lucide-react';
import { CardState } from '../common/card-state';
import { Ripple } from '../magicui/ripple';
import { useTranslations } from 'next-intl';

export default function Redirecting() {
  const t = useTranslations('redirecting');

  return (
    <CardState
      icon={SendIcon}
      className="relative max-w-4xl"
      title={t('title')}
      description={t('description')}
    >
      <Ripple
        effectClassName="top-[40px] md:top-[96px] lg:top-[182px]"
        mainCircleSize={80}
      />
    </CardState>
  );
}
