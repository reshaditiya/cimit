import CardContainer from './card-container';
import SectionTitle from './section-title';

export default function Summary({
  totalLinks,
  totalVisit,
}: {
  totalLinks: number;
  totalVisit: number;
}) {
  const formattedTotalLinks = new Intl.NumberFormat('en-US').format(totalLinks);
  const formattedTotalVisit = new Intl.NumberFormat('en-US').format(totalVisit);

  return (
    <CardContainer>
      <SectionTitle>{formattedTotalLinks} link shrtn.</SectionTitle>
      <p>
        <span>{formattedTotalVisit}</span> visited
      </p>
    </CardContainer>
  );
}
