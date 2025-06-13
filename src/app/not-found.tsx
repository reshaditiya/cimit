import { CardState } from '@/components/common/card-state';
import { Ripple } from '@/components/magicui/ripple';
import { Shell } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex h-svh items-center justify-center">
      <CardState
        icon={Shell}
        className="relative max-w-4xl"
        title="what u lookin for???"
        description="i can't give you something that doesn't exist, sort your
          mind, get some fresh air, touch grass, relax, and try again."
      >
        <Ripple
          effectClassName="top-[40px] lg:top-[182px]"
          mainCircleSize={80}
        />
      </CardState>
    </main>
  );
}
