import { SubmitHandler } from 'react-hook-form';
import EditLinkForm from '../forms/edit-link-form';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { TEditLinkSchema, TLinkListData } from '@/lib/types';
import { FC } from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import { useFormatter } from 'next-intl';
import { QRCodeSVG } from 'qrcode.react';

export default function EditLinkModal({
  onSubmit,
  onDelete,
  children,
  linkData,
  ...props
}: React.ComponentProps<FC<DialogProps>> & {
  linkData: TLinkListData;
  onSubmit: SubmitHandler<TEditLinkSchema>;
  onDelete: VoidFunction;
}) {
  const format = useFormatter();

  return (
    <Dialog {...props}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex w-90 flex-col items-center gap-4">
        {/* for screen reader only */}
        <DialogTitle className="sr-only hidden">link edit</DialogTitle>
        <p className="text-center text-sm">
          {format.number(linkData.totalVisited)} visited since created{' '}
          {format.dateTime(linkData.createdAt, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
        <div className="flex flex-col items-center gap-2">
          <QRCodeSVG value={linkData.shortLink} height={140} width={140} />
          <p className="text-muted-foreground text-xs">
            the qr will refreshed after u save the changes
          </p>
        </div>
        <EditLinkForm
          onSubmit={onSubmit}
          onDelete={onDelete}
          linkData={linkData}
          className="w-full"
        />
      </DialogContent>
    </Dialog>
  );
}
