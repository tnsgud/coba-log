import { TrendingUp } from "lucide-react";

interface Props {
  name: string;
  currentCount: number;
  previousCount: number;
}

const numberFormatter = new Intl.NumberFormat();
const compactNumberFormatter = new Intl.NumberFormat("ko-KR", {
  notation: "compact",
});

export default function TotalCountCard({
  name,
  currentCount,
  previousCount,
}: Props) {
  return (
    <div
      className="grid flex-auto grid-cols-6 grid-rows-2 items-center gap-2 rounded-xl border-2 px-5 py-2"
    >
      <span className="col-span-6 text-2xl font-bold">{name}</span>
      <span className="col-span-4 text-2xl">
        {currentCount < 10000 && `${numberFormatter.format(currentCount)}명`}
        {currentCount > 10000 &&
          `${compactNumberFormatter.format(currentCount)}명`}
      </span>
      <span className="col-span-2 flex flex-row items-center text-xl font-thin">
        <TrendingUp className="mr-2 size-3 stroke-red-500 stroke-3" />
        {compactNumberFormatter.format(currentCount - previousCount)}
      </span>
    </div>
  );
}
