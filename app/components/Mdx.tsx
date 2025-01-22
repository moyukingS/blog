'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href || ''}
      className="text-sakiko-600 hover:text-sakiko-800 dark:text-taki-400 dark:hover:text-taki-200"
      {...props}
    >
      {children}
    </Link>
  ),
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={1200}
      height={630}
      className="rounded-lg w-full h-auto object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
      priority={false}
      {...props}
    />
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="relative mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-900 p-4 dark:bg-slate-800">
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-sm dark:bg-slate-700">
      {children}
    </code>
  ),
};

interface MdxProps {
  source: MDXRemoteSerializeResult;
}

export function Mdx({ source }: MdxProps) {
  return (
    <div className="mdx">
      <MDXRemote {...source} components={components} />
    </div>
  );
}