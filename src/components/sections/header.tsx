import { env } from '@/lib/env';
import AccountBtn from '../common/account-btn';
import { Button } from '../ui/button';

export default function Header({
  domain = env.NEXT_PUBLIC_DOMAIN_NAME,
}: {
  domain?: string;
}) {
  return (
    <header className="flex justify-between">
      <Button variant="secondary">{domain}</Button>
      <AccountBtn size="sm" />
    </header>
  );
}
