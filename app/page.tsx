import Image from 'next/image';
import bg from '@/public/bg.jpg';
export default function Home() {
  return (
    <Image
      className="fixed inset-0 m-auto h-screen w-screen object-contain"
      src={bg}
      alt={'family go'}
    />
  );
}
