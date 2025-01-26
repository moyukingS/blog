import Link from 'next/link';
import { Post } from '@/lib/posts';
import dayjs from 'dayjs';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-6">
      {posts.map(post => (
        <article key={post.id} className="group">
          <Link href={`/posts/${post.id}`}>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-sakiko-900 transition-colors group-hover:text-sakiko-600 dark:text-taki-100 dark:group-hover:text-taki-300">
                {post.title}
              </h3>
              <time dateTime={post.date}>
                {dayjs(post.date).format('YYYY年MM月DD日')}
              </time>
              <div className="flex items-center gap-4 text-sm text-sakiko-600 dark:text-taki-300">

                {post.tags && (
                  <div className="flex items-center gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-sakiko-100/80 px-2 py-0.5 text-xs text-sakiko-800 dark:bg-taki-800/80 dark:text-taki-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {post.description && (
                <p className="text-sakiko-600 dark:text-taki-300">{post.description}</p>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}