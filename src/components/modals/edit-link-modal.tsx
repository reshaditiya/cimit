import { SubmitHandler } from 'react-hook-form';
import EditLinkForm from '../forms/edit-link-form';
import type { ResGetLink, ReqUpdateLink } from '@/lib/types';
import { FC } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import { useFormatter, useTranslations } from 'next-intl';
import { QRCodeSVG } from 'qrcode.react';
import ResponsiveDialog from '../ui/responsive-dialog';

export default function EditLinkModal({
  onSubmit,
  onDelete,
  children,
  linkData,
}: React.ComponentProps<FC<DialogProps>> & {
  linkData: ResGetLink;
  onSubmit: SubmitHandler<ReqUpdateLink>;
  onDelete: VoidFunction;
}) {
  const format = useFormatter();
  const t = useTranslations('edit-link-modal');

  return (
    <ResponsiveDialog
      title={<span className="sr-only">{t('title')}</span>}
      trigger={children}
      drawerProps={{ snapPoints: [1] }}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-sm">
          {t('description', {
            totalVisited: format.number(linkData.totalVisited),
            createdAt: format.dateTime(linkData.createdAt, {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }),
          })}
        </p>
        <div className="flex flex-col items-center gap-2">
          <QRCodeSVG value={linkData.shortLink} height={140} width={140} />
          <p className="text-muted-foreground text-xs">{t('qr-description')}</p>
        </div>
        <EditLinkForm
          onSubmit={onSubmit}
          onDelete={onDelete}
          linkData={linkData}
          className="w-full"
        />
      </div>
    </ResponsiveDialog>
  );
}
