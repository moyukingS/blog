import Hero from './components/Hero';
import Card from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-taki-200 dark:bg-sakiko-950">
      <Hero></Hero>

      <div className="container mt-4 grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((item, index) => {
          return <Card key={index}></Card>;
        })}
      </div>
    </main>
  );
}
