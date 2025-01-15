'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
      className={`fixed flex w-full items-center justify-between px-7 ${isScrolled ? 'pt-4' : 'pt-7'} transition-all duration-500`}
    >
      <Link href="/">
        <Image width={60} height={60} src={Logo} alt="logo" />
      </Link>
      <nav className="rounded-full bg-white px-8 py-4">
        <ul className="flex items-center justify-evenly gap-6">
          <li className="cursor-pointer text-2xl duration-500 hover:text-anon-600">
            <Link href={'/'}> home</Link>
          </li>
          <li className="cursor-pointer text-2xl duration-500 hover:text-anon-600">
            <Link href={'/about'}> about</Link>
          </li>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <li className="cursor-pointer text-2xl duration-500 hover:text-anon-600" key={index}>
                {index}menu
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
