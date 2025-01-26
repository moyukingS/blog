import { getAllTags, getPostsByTag } from '@/lib/posts';
import PostList from '@/components/post-list';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map(tag => ({
    tag: tag.name,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = (await params).tag;
  const posts = await getPostsByTag(tag);

  return (
    <div className="rounded-lg bg-white/50 p-8 shadow-lg backdrop-blur-sm dark:bg-black/30">
      <h2 className="mb-8 text-2xl font-bold text-sakiko-950 dark:text-taki-100">标签：{tag}</h2>
      <PostList posts={posts} />
    </div>
  );
}