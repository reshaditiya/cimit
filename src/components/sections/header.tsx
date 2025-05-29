import AccountBtn from '../shared/account-btn';
import { Button } from '../ui/button';

export default function Header({
  domain = process.env.NEXT_PUBLIC_DOMAIN_NAME,
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
