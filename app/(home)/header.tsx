import Image from "next/image";
import Link from "next/link";

interface CustomLink {
  href: string;
  text: string;
}

const links: CustomLink[] = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/posts",
    text: "POST",
  },
  {
    href: "/profile",
    text: "PROFILE",
  },
  {
    href: "/products",
    text: "PRODUCT",
  },
];

export default function Header() {
  return (
    <header className="flex flex-row items-center gap-5 border-b-2 px-5 py-3">
      <Link href="/">
        <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
      </Link>

      <p className="flex flex-col">
        <span className="text-2xl font-bold">COBA_LOG</span>
        <span className="font-extralight">코딩바보의 모든 기록</span>
      </p>

      <nav className="flex flex-auto justify-center gap-10">
        {links.map((value) => (
          <Link
            key={`home-link-${value.text}`}
            href={value.href}
            className="underline-offset-4 hover:underline"
          >
            {value.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
