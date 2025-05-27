import Link from 'next/link';
import CardContainer from './card-container';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
        <Image src="./github.svg" alt="github" width={24} height={24} />
        <Globe className="size-6" />
      </div>
    </CardContainer>
  );
}
