import Logo from './Logo';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <div className="px-4 py-4 flex items-center justify-between  shadow-lg">
      <Logo />
      <Input className="border-black border w-44 h-10 sm:w-96" />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
