import Img from '@/public/bg.jpg';
import Image from 'next/image';
import Tag from '@/components/ui/tag';

interface CardProps {
  title: string;
  intro: string;
  avatar: string;
  nickName: string;
  date: string;
}

export default function Card({ title, intro, avatar, nickName, date }: CardProps) {
  return (
    <article className="flex flex-col items-start justify-start gap-2 rounded-md border border-solid bg-tomori/50 p-2.5 shadow-lg duration-300 hover:-translate-y-1 dark:bg-taki/20">
      {/* eslint-disable-next-line prettier/prettier */}
      <div className="relative aspect-2/1 w-full cursor-pointer overflow-hidden rounded-md">
        <Image alt="this is img" src={Img} fill sizes={`100%`} />
      </div>
      <div className="flex items-center justify-start gap-3">
        <Tag />
      </div>
      <h2 className="line-clamp-1 cursor-pointer">{title}</h2>

      <p className="line-clamp-3 grow">{intro}</p>

      <div className="flex cursor-pointer items-center justify-start gap-2 justify-self-end text-sm">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-soyo">{avatar}</div>
        <div className="flex flex-col items-start justify-center">
          <div>{nickName}</div>
          <time>{date}</time>
        </div>
      </div>
    </article>
  );
}
