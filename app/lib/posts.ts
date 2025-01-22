import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'markdown');

export interface Post {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  content: any;
}

export async function getPost(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
      },
    });

    return {
      id: slug,
      content: mdxSource,
      ...data,
    } as Post;
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

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
