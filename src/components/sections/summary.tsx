import { useTranslations, useFormatter } from 'next-intl';
import CardContainer from '../common/card-container';
import SectionTitle from '../common/section-title';

export default function Summary({
  totalLinks,
  totalVisit,
}: {
  totalLinks: number;
  totalVisit: number;
}) {
  const t = useTranslations('summary');
  const format = useFormatter();
  const formattedTotalLinks = format.number(totalLinks);
  const formattedTotalVisit = format.number(totalVisit);

  return (
    <CardContainer>
      <SectionTitle>
        {t('total-link-shorten', { totalLinks: formattedTotalLinks })}
      </SectionTitle>
      <p>{t('total-visited', { totalVisit: formattedTotalVisit })}</p>
    </CardContainer>
  );
}
