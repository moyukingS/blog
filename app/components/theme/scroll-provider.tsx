'use client';

import * as React from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect } from 'react';
export function ScrollProvider({ children, ...props }) {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: 'os-theme-light',
        clickScroll: true,
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return <div {...props}>{children}</div>;
}
