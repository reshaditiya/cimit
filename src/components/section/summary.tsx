import { useTranslations } from 'next-intl';
import CardContainer from './layout/card-container';
import SectionTitle from './common/section-title';

export default function Summary({
  totalLinks,
  totalVisit,
}: {
  totalLinks: number;
  totalVisit: number;
}) {
  const t = useTranslations('summary');
  const formattedTotalLinks = new Intl.NumberFormat('en-US').format(totalLinks);
  const formattedTotalVisit = new Intl.NumberFormat('en-US').format(totalVisit);

  return (
    <CardContainer>
      <SectionTitle>
        {t('total-link-shorten', { totalLinks: formattedTotalLinks })}
      </SectionTitle>
      <p>{t('total-visited', { totalVisit: formattedTotalVisit })}</p>
    </CardContainer>
  );
}
