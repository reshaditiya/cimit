import { TLinkShortForm } from '@/lib/types';
import HeroForm from './hero-form';
import { Ripple } from './magicui/ripple';

export default function Hero({
  onSubmit = () => {},
}: {
  onSubmit?: (params: TLinkShortForm) => void;
}) {
  return (
    <section className="bg-primary text-primary-foreground relative space-y-4 overflow-hidden rounded-4xl p-10 lg:p-20">
      <div>
        <h1 className="text-5xl font-black lg:text-7xl">cimit.</h1>
        <p>Shrink ‘em, save ‘em, and share ‘em—without the hassle.</p>
      </div>
      <HeroForm onSubmit={onSubmit} />
      <Ripple effectClassName="top-[60px] left-[110px] lg:top-[118px] lg:left-[190px]" />
    </section>
  );
}
