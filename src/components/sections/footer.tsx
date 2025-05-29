import Link from 'next/link';
import CardContainer from '../layouts/card-container';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

export default function Footer({
  personalDomain = `https://me.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
}: {
  personalDomain?: string;
}) {
  const t = useTranslations('footer');

  return (
    <CardContainer as="footer" className="flex items-center justify-between">
      <span>
        {t.rich('created-by', {
          personalLink: () => (
            <Link href={personalDomain} className="underline">
              reshaditiya
            </Link>
          ),
        })}
      </span>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon">
          <Image src="./github.svg" alt="github" width={20} height={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Globe className="size-5" />
        </Button>
      </div>
    </CardContainer>
  );
}
