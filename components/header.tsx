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
        <span className="text-3xl font-extrabold">COBA_LOG</span>
      </p>

      <span className="ml-auto hidden max-sm:inline">test</span>

      <nav className="flex flex-auto justify-center gap-10 max-sm:hidden">
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
