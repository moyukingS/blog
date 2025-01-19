import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import {
  DrawerTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import Link from 'next/link';
import { MenuItem } from '@/components/Header';
import { usePathname } from 'next/navigation';

interface MenuDrawerProps {
  menuList: MenuItem[];
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ menuList }) => {
  const pathname = usePathname();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="iconSmall">
          <AlignJustify className="duration-400 h-[1.2rem] w-[1.2rem] transition-all dark:text-white" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div>
            <div className="flex flex-col items-center gap-4">
              <DrawerTitle className="mt-4 text-center">
                <i>CRYCHI</i>
              </DrawerTitle>
              <DrawerDescription className="text-center">要组一辈子的乐队吗？</DrawerDescription>
            </div>
          </div>
          <nav className="px-4">
            <ul>
              {menuList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`rounded-sm p-1.5 ${item.href === pathname ? 'bg-tomori-950 text-white' : ''}`}
                  >
                    <Link href={item.href} className="block">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
