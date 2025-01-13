import Image from "next/image";
import bg from '@/public/bg.jpg'
export default function Home() {
  return (
        <Image className="w-screen h-screen object-contain fixed inset-0 m-auto" src={bg} alt={'family go'} />
  );
}
