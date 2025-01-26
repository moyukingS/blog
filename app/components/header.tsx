'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/theme/theme-switch';
import Logo from '@/public/logo.png';
import MenuDrawer from '@/components/theme/menu-drawer';
import { usePathname } from 'next/navigation';

export type MenuItem = {
  href: string;
  label: string;
};

export default function Header() {
  const pathName = usePathname();
  const menuList: MenuItem[] = [
    { href: '/', label: 'home' },
    { href: '/posts', label: 'posts' },
    { href: '/tags', label: 'tag' },
    { href: '#', label: 'surprise' },
    { href: '/about', label: 'about' },
    { href: '#', label: 'more' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 flex w-full items-center justify-between px-7 ${isScrolled ? 'top-2 md:top-4' : 'top-5 md:top-7'} transition-all duration-500`}
    >
      <Link href="/">
        <Image
          className="h-10 min-h-10 w-10 min-w-10 md:h-[60px] md:w-[60px]"
          width={60}
          height={60}
          src={Logo}
          alt="logo"
          priority
        />
      </Link>
      <nav className="flex items-center justify-between rounded-full bg-sakiko-100/75 px-5 py-1.5 shadow-xl brightness-105 backdrop-blur-2xl dark:bg-taki-700/75 dark:text-taki-400 md:px-8 md:py-4">
        <ul className="hidden items-center justify-evenly gap-6 md:flex">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`${pathName === item.href ? 'text-anon-400' : ''} cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400`}
            >
              {item.href !== '#' ? <Link href={item.href}>{item.label}</Link> : item.label}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-start gap-6">
          <ModeToggle />
          <div className="md:hidden">
            <MenuDrawer menuList={menuList} />
          </div>
        </div>
      </nav>
    </header>
  );
}
