import fs from 'fs';
import path from 'path';

import remarkGfm from 'remark-gfm';
import { compileMDX } from 'next-mdx-remote/rsc';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import CustomMDXComponents from '@/components/mdx';
import { ReactElement } from 'react';
import dayjs from 'dayjs';

const postsDirectory = path.join(process.cwd(), 'markdown');

export interface Post {
  id: string;
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  content: ReactElement;
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, frontmatter } = await compileMDX({
      source: fileContents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'prepend',
                headingProperties: {
                  className: ['md-header'],
                },
                content: fromHtmlIsomorphic(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
                  { fragment: true }
                ).children,
              },
            ],
            [rehypePrettyCode, { theme: 'github-dark' }],
          ],
        },
      },
      components: { ...CustomMDXComponents },
    });
    return {
      id: slug,
      ...frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory not found');
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx')) continue;
    const id = fileName.replace(/\.mdx$/, '');
    const post = await getPost(id);
    if (post) posts.push(post);
  }

  return posts.sort((a, b) => dayjs(b.date || '').valueOf() - dayjs(a.date || '').valueOf());
}

export interface TagWithPosts {
  name: string;
  count: number;
  posts: Array<{
    id: string;
    title?: string;
    date?: string;
    description?: string;
  }>;
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts
    .filter(post => post.tags?.includes(tag))
    .sort((a, b) => dayjs(b.date || '').valueOf() - dayjs(a.date || '').valueOf());
}

export async function getAllTags(): Promise<TagWithPosts[]> {
  const posts = await getAllPosts();
  const tagMap = new Map<string, TagWithPosts>();

  posts.forEach(post => {
    post.tags?.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, { name: tag, count: 0, posts: [] });
      }
      const tagInfo = tagMap.get(tag)!;
      tagInfo.count += 1;
      tagInfo.posts.push({
        id: post.id,
        title: post.title,
        date: post.date,
        description: post.description,
      });
    });
  });

  return Array.from(tagMap.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}

