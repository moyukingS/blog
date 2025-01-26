import PostList from '@/components/post-list';
import { getAllPosts } from '@/lib/posts';

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const postsData = await getAllPosts();

  return (
    <main className="min-h-screen bg-taki-200 dark:bg-sakiko-950">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* 文章列表侧边栏 */}
          <aside className="lg:col-span-3">
            <div className="rounded-lg bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:bg-black/30">
              <h2 className="mb-6 text-2xl font-bold">文章列表</h2>
<PostList posts={postsData} />
            </div>
          </aside>

          {/* 主要内容区 */}
          <main className="lg:col-span-9">
            <div className="rounded-lg bg-white/50 p-8 shadow-lg backdrop-blur-sm dark:bg-black/30">
              {children}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
