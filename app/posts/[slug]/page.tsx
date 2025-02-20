import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import dayjs from 'dayjs';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const post = await getPost(slug);
    if (!post) return { title: '文章未找到' };

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return { title: '文章未找到' };
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.id,
  }));
}

export default async function PostPage({ params }: Props) {
  try {
    const slug = (await params).slug;
    const post = await getPost(slug);
    if (!post) notFound();
    return (
      <article className="prose-lg">
        <header className="not-prose mb-8">
          <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <time dateTime={post.date} className="text-sm">
              {dayjs(post.date).format('YYYY-MM-DD')}
            </time>
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-sakiko-100/80 px-3 py-1 text-sm text-sakiko-800 backdrop-blur-sm dark:bg-taki-800/80 dark:text-taki-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-slate max-w-none dark:prose-invert">{post.content}</div>
      </article>
    );
  } catch (error) {
    console.warn(error);
    notFound();
  }
}
