'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Switch from '@/components/theme/theme-switch';
import Logo from '@/public/logo.png';

export default function Header() {
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
      className={`fixed z-50 flex w-full items-center justify-between px-7 ${isScrolled ? 'top-4' : 'top-7'} transition-all duration-500`}
    >
      <Link href="/">
        <Image width={60} height={60} src={Logo} alt="logo" priority />
      </Link>
      <nav className="rounded-full bg-sakiko-100/75 px-8 py-4 shadow-xl brightness-105 backdrop-blur-2xl dark:bg-taki-700/75 dark:text-taki-400">
        <ul className="flex items-center justify-evenly gap-6">
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">
            <Link href={'/'}> home</Link>
          </li>
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">
            archives
          </li>
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">tag</li>
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">
            surprise
          </li>
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">
            <Link href={'/about'}> about</Link>
          </li>
          <li className="cursor-pointer px-3 text-2xl duration-500 hover:text-anon-400">more</li>
          <li>
            <Switch></Switch>
          </li>
        </ul>
      </nav>
    </header>
  );
}
