import Hero from './components/Hero';
import Card from '@/components/ui/card';

export default function Home() {
  const fakeData = [
    {
      title: 'A wonderful journey through the mountains',
      intro:
        'This is an exciting story about a journey through the mountains. We faced many challenges and had a great time exploring the beautiful scenery.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'Adventurer123',
      date: '2025-01-10',
    },
    {
      title: 'Cooking delicious meals at home',
      intro:
        "Learn how to cook amazing dishes from the comfort of your own kitchen. It's fun and easy!",
      avatar: 'https://via.placeholder.com/150',
      nickName: 'ChefMaster',
      date: '2025-01-09',
    },
    {
      title: 'Building a new website',
      intro:
        "Follow the steps to build a professional website from scratch. It's a great learning experience.",
      avatar: 'https://via.placeholder.com/150',
      nickName: 'WebDevPro',
      date: '2025-01-08',
    },
    {
      title: 'Reading great books in the park',
      intro:
        "Spend your time reading amazing books in a peaceful park. It's a great way to relax and learn new things.",
      avatar: 'https://via.placeholder.com/150',
      nickName: 'BookLover',
      date: '2025-01-07',
    },
    {
      title: 'Painting beautiful landscapes',
      intro: 'Discover the art of painting landscapes. Let your creativity flow on the canvas.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'ArtistAtHeart',
      date: '2025-01-06',
    },
    {
      title: 'Playing sports with friends',
      intro: 'Have fun playing your favorite sports with friends. Stay active and healthy.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'SportsFanatic',
      date: '2025-01-05',
    },
    {
      title: 'Traveling around the world',
      intro: "Explore different countries and cultures. It's an eye-opening experience.",
      avatar: 'https://via.placeholder.com/150',
      nickName: 'Globetrotter',
      date: '2025-01-04',
    },
    {
      title: 'Learning a new language',
      intro: 'Start learning a new language today. It opens up new opportunities.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'LanguageLearner',
      date: '2025-01-03',
    },
    {
      title: 'Gardening in the backyard',
      intro: 'Create a beautiful garden in your backyard. Enjoy the fresh air and nature.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'GreenThumb',
      date: '2025-01-02',
    },
    {
      title: 'Photographing wildlife',
      intro: 'Capture amazing moments of wildlife. Share your photos with the world.',
      avatar: 'https://via.placeholder.com/150',
      nickName: 'WildlifePhotographer',
      date: '2025-01-01',
    },
  ];
  return (
    <main className="min-h-screen bg-taki-200 dark:bg-sakiko-950">
      <Hero>
        <div>this is center</div>
      </Hero>

      <div className="container mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {[...fakeData, ...fakeData].map((item, index) => {
          return (
            <Card
              date={item.date}
              avatar={item.avatar}
              title={item.title}
              nickName={item.nickName}
              intro={item.intro}
              key={index}
            ></Card>
          );
        })}
      </div>
    </main>
  );
}
