import { getAllTags } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: '标签云',
  description: '所有文章标签',
};
export default async function TagsPage({ children }: { children: React.ReactNode }) {
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
                <Link
                  key={tag.name}
                  href={`/tags/${tag.name}`}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-sakiko-100/80 px-4 py-2 text-sakiko-800 transition-all hover:scale-105 hover:bg-sakiko-200/80 dark:bg-taki-800/80 dark:text-taki-200 dark:hover:bg-taki-700/80"
                >
                  <span className="text-lg">{tag.name}</span>
                  <span className="rounded-full bg-sakiko-200/80 px-2 py-0.5 text-sm dark:bg-taki-700/80">
                    {tag.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 标签文章列表 */}
          {children}
        </div>
      </div>
    </div>
  );
}
