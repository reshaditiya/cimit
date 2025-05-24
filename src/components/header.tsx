import AccountBtn from './account-btn';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex justify-between">
      <Button variant="secondary">rsdt.com</Button>
      <AccountBtn size="sm" />
    </header>
  );
}
