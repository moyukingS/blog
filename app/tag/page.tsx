import { getAllTags } from '@/lib/posts';
import Link from 'next/link';
import dayjs from 'dayjs';

export const metadata = {
  title: '标签云',
  description: '所有文章标签',
};

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div className="min-h-screen bg-taki-200 dark:bg-sakiko-950">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-8">
          {/* 标签云部分 */}
          <div className="rounded-lg bg-white/50 p-8 shadow-lg backdrop-blur-sm dark:bg-black/30">
            <h1 className="mb-8 text-3xl font-bold text-sakiko-950 dark:text-taki-100">标签云</h1>
            <div className="flex flex-wrap gap-4">
              {tags.map(tag => (
                <div
                  key={tag.name}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-sakiko-100/80 px-4 py-2 text-sakiko-800 transition-all hover:scale-105 hover:bg-sakiko-200/80 dark:bg-taki-800/80 dark:text-taki-200 dark:hover:bg-taki-700/80"
                >
                  <span className="text-lg">{tag.name}</span>
                  <span className="rounded-full bg-sakiko-200/80 px-2 py-0.5 text-sm dark:bg-taki-700/80">
                    {tag.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 标签文章列表 */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tags.map(tag => (
              <div
                key={tag.name}
                className="rounded-lg bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:bg-black/30"
              >
                <h2 className="mb-4 text-xl font-bold text-sakiko-950 dark:text-taki-100">
                  {tag.name}
                  <span className="ml-2 text-sm text-gray-500">({tag.count})</span>
                </h2>
                <ul className="space-y-3">
                  {tag.posts.map(post => (
                    <li key={post.id}>
                      <Link
                        href={`/posts/${post.id}`}
                        className="block rounded-lg p-2 transition-colors hover:bg-sakiko-100/50 dark:hover:bg-taki-800/50"
                      >
                        <h3 className="font-medium text-sakiko-800 dark:text-taki-200">
                          {post.title}
                        </h3>
                        {post.date && (
                          <time className="text-sm text-gray-500">
                            {dayjs(post.date).format('YYYY年MM月DD日')}
                          </time>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
