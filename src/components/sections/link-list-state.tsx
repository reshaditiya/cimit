import SectionTitle from '../common/section-title';
import CardContainer from '../common/card-container';

export function LinkListState({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <CardContainer className="flex flex-col items-center justify-center gap-6 text-center md:p-20 lg:p-40">
      {icon}
      <div className="flex flex-col">
        <SectionTitle>{title}</SectionTitle>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
}
