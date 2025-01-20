import { prisma } from '@/lib/prisma';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      tags: true,
    },
    orderBy: {
      date: 'desc',
    },
  });

  return (
    <div className="container mx-auto min-h-screen bg-taki-200 px-4 py-8 dark:bg-sakiko-950">
      <h1 className="mb-8 text-3xl font-bold text-sakiko-950 dark:text-taki-200">文章列表</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <article
            key={post.id}
            className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-sakiko-900"
          >
            <h2 className="mb-3 text-xl font-semibold text-sakiko-950 dark:text-taki-200">
              {post.title}
            </h2>
            {post.description && (
              <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
            )}
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag.id}
                  className="rounded-full bg-taki-100 px-3 py-1 text-sm text-sakiko-900 dark:bg-sakiko-800 dark:text-taki-100"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
