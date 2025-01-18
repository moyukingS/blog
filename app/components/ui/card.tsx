import Img from '@/public/bg.jpg';
import Image from 'next/image';
import Tag from '@/components/ui/tag';

export default function Card() {
  return (
    <article className="flex flex-col items-start justify-between gap-2 rounded-md bg-anon/30 p-2.5 shadow-2xl">
      <div className="radio relative aspect-2/1 w-full cursor-pointer overflow-hidden rounded-md">
        <Image alt="this is img" src={Img} fill></Image>
      </div>
      <div className="cursor-pointer">
        <Tag></Tag>
      </div>
      <h2 className="line-clamp-1 cursor-pointer">title</h2>

      <p className="line-clamp-3">
        introintrointro introintroi ntroint rointrointro introintrointrointrointrointro
        introintrointrointrointrointro introintrointrointrointrointro introintrointrointrointrointro
      </p>

      <div className="flex cursor-pointer items-center justify-start gap-2 text-sm">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-soyo">avatar</div>
        <div className="flex flex-col items-start justify-center">
          <div>nickName</div>
          <time>date</time>
        </div>
      </div>
    </article>
  );
}
