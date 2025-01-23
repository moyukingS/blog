'use client';

import * as React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const CustomLink = ({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href || ''}
    className="text-sakiko-600 hover:text-sakiko-800 dark:text-taki-400 dark:hover:text-taki-200"
    {...props}
  >
    {children}
  </Link>
);

const CustomPre = ({ children }: { children: React.ReactNode }) => (
  <pre className="relative mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-900 p-4 dark:bg-slate-800">
    {children}
  </pre>
);

const CustomCode = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded px-1.5 py-0.5 font-mono text-sm">{children}</code>
);

const components = {
  a: CustomLink,
  pre: CustomPre,
  code: CustomCode,
};

export function Mdx({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
