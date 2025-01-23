import Link from 'next/link';
import { Post } from '@/lib/posts';

export default function PostList({ postsData }: { postsData: Post[] }) {
  return (
    <ul className="space-y-4">
      {postsData.map(post => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="block hover:text-sakiko-600 dark:hover:text-taki-400"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            {post.description && (
              <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
            )}
            <time className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('zh-CN')}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
