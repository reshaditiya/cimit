import { useTranslations } from 'next-intl';
import CopyLinkBtn from '../common/copy-link-btn';
import SectionTitle from '../common/section-title';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { QRCodeSVG } from 'qrcode.react';
import { FC } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';

export default function LinkShortenedModal({
  link,
  onCopyLink,
  children,
  ...props
}: React.ComponentProps<FC<DialogProps>> & {
  link: string;
  onCopyLink: (link: string) => void;
}) {
  const t = useTranslations('link-shortened-modal');

  return (
    <Dialog {...props}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex w-90 flex-col items-center gap-0 text-center">
        <DialogTitle>
          <SectionTitle as="span">{t('title')}</SectionTitle>
        </DialogTitle>
        <DialogDescription>{t('description')}</DialogDescription>
        <QRCodeSVG value={link} height={240} width={240} className="mt-4" />
        <CopyLinkBtn onCopyLink={onCopyLink} link={link} />
      </DialogContent>
    </Dialog>
  );
}
