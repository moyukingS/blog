'use client';

import * as React from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ScrollProvider({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const { theme } = useTheme();
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: theme === 'dark' ? 'os-theme-dark' : 'os-theme-light',
        clickScroll: true,
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars, theme]);

  return <div {...props}>{children}</div>;
}
