import { useMediaQuery } from '@mantine/hooks';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import SectionTitle from '../common/section-title';
import { ComponentProps, ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';
import { Drawer as DrawerPrimitive } from 'vaul';
import { ScrollArea } from './scroll-area';

export default function ResponsiveDialog({
  trigger,
  title,
  description,
  children,
  drawerProps,
}: {
  trigger: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  drawerProps?: ComponentProps<typeof DrawerPrimitive.Root>;
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="flex w-90 flex-col items-center">
          <DialogHeader className="items-center gap-0">
            <DialogTitle className="text-center">
              <SectionTitle as="span">{title}</SectionTitle>
            </DialogTitle>
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer {...drawerProps}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col px-2 pt-0 pb-6">
        <ScrollArea className="h-100 px-4">
          <DrawerHeader>
            <DrawerTitle className="text-center">
              <SectionTitle as="span">{title}</SectionTitle>
            </DrawerTitle>
            <DrawerDescription className="text-center">
              {description}
            </DrawerDescription>
          </DrawerHeader>
          {children}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
