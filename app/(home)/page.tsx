import Image from "next/image";
import BlogTitle from "@/public/blog_title.avif";
import BlogDescription from "@/public/blog-description.png";
import TotalCountCard from "./components/total-count-card";

const list = [
  { name: "누적 방문자 수", thisWeekCount: 100, lastWeekCount: 1 },
  { name: "누적 게시물 수", thisWeekCount: 200, lastWeekCount: 190 },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-5">
      <Image
        src={BlogTitle}
        alt="blog title"
        className="mb-2"
        style={{
          maxWidth: "700px",
          width: "70vw",
          height: "auto",
        }}
      />

      <Image
        src={BlogDescription}
        alt="blog description"
        className="mb-10"
        style={{
          maxWidth: "500px",
          width: "50vw",
          height: "auto",
        }}
      />

      <div className="flex w-full justify-center gap-10 max-sm:flex-col">
        {list.map((i) => (
          <TotalCountCard
            key={`item-${i.name}`}
            name={i.name}
            currentCount={i.thisWeekCount}
            previousCount={i.lastWeekCount}
          />
        ))}
      </div>
    </main>
  );
}
