import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post-list';

export default async function TagsIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="rounded-lg bg-white/50 p-8 shadow-lg backdrop-blur-sm dark:bg-black/30">
      <h2 className="mb-8 text-2xl font-bold text-sakiko-950 dark:text-taki-100">所有文章</h2>
      <PostList posts={posts} />
    </div>
  );
}
