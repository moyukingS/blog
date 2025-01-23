import Hero from '@/components/Hero';

export default async function Home() {
  return (
    <main className="min-h-screen bg-taki-200 dark:bg-sakiko-950">
      <Hero>
        <div>this is center</div>
      </Hero>

      <div className="container mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {/* {posts.map(post => (
          <Card
            key={post.id}
            date={post.date.toISOString().split('T')[0]}
            avatar="https://via.placeholder.com/150"
            title={post.title}
            nickName="Admin"
            intro={post.description || ''}
          />
        ))} */}
      </div>
    </main>
  );
}
