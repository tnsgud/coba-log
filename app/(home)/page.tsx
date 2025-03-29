import Image from "next/image";
import { Gugi } from 'next/font/google';
import BlogTitle from '@/public/blog_title.avif';

const gugi = Gugi({weight:'400', subsets:['latin']})

const list = [
  { name: "누적 방문자", count: 0 },
  { name: "누적 게시물", count: 0 },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-5">
      <Image
        src={BlogTitle}
        alt="blog title"
        className="mb-10"
      />

      <span className={`${gugi.className} text-5xl font-thin mb-10`}>코딩바보의 모든 기록</span>

      <div className="flex flex-row justify-center gap-30">
        {list.map((i) => (
          <div
            key={`item-${i.name}`}
            className="flex flex-row gap-10 rounded-xl border-2 px-5 py-2"
          >
            <p className="text-2xl font-bold">{i.name}</p>
            <p className="text-2xl">{i.count}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
