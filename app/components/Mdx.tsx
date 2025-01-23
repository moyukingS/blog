import * as React from 'react';
import type { Post } from '@/lib/posts';

export async function Mdx({ source }: { source: Post }) {
  return <div className="prose prose-slate max-w-none dark:prose-invert">{source.content}</div>;
}
