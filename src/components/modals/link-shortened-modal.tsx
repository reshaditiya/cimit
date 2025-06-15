import { useFormatter, useTranslations } from 'next-intl';
import CopyLinkBtn from '../common/copy-link-btn';
import { QRCodeSVG } from 'qrcode.react';
import { FC } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import ResponsiveDialog from '../ui/responsive-dialog';

export default function LinkShortenedModal({
  link,
  onCopyLink,
  children,
  expiredAt,
}: React.ComponentProps<FC<DialogProps>> & {
  link: string;
  onCopyLink: (link: string) => void;
  expiredAt: Date;
}) {
  const t = useTranslations('link-shortened-modal');
  const format = useFormatter();

  return (
    <ResponsiveDialog
      trigger={children}
      title={t('title')}
      description={t.rich('description', {
        expiredAt: format.dateTime(expiredAt, {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
        warning: (warning) => <span className="text-warning">{warning}</span>,
      })}
    >
      <div className="flex flex-col items-center">
        <QRCodeSVG value={link} className="mt-4 size-50" aria-label={link} />
        <CopyLinkBtn onCopyLink={onCopyLink} link={link} />
      </div>
    </ResponsiveDialog>
  );
}
