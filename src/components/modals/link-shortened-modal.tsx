import { useTranslations } from 'next-intl';
import CopyLinkBtn from '../common/copy-link-btn';
import SectionTitle from '../common/section-title';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
      <DialogContent className="flex w-90 flex-col items-center">
        <DialogHeader className="items-center gap-0">
          <DialogTitle className="text-center">
            <SectionTitle as="span">{t('title')}</SectionTitle>
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('description')}
          </DialogDescription>
        </DialogHeader>
        <QRCodeSVG value={link} height={240} width={240} className="mt-4" />
        <CopyLinkBtn onCopyLink={onCopyLink} link={link} />
      </DialogContent>
    </Dialog>
  );
}
