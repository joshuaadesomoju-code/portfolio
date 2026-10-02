import { profile } from "../data";

const links = [
  { href: "#work", label: "Work", show: "sm:inline-block" },
  { href: "#services", label: "Services", show: "sm:inline-block" },
  { href: "#about", label: "About", show: "sm:inline-block" },
  { href: "#experience", label: "Experience", show: "md:inline-block" },
];

export default function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#top" className="font-display text-lg font-bold text-indigo-deep">
        Joshua Adesomoju
      </a>
      <nav className="flex items-center gap-5 text-sm font-medium text-indigo-mid sm:gap-7">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={`link-draw hidden hover:text-indigo-deep ${l.show}`}>
            {l.label}
          </a>
        ))}
        <a
          href={profile.upwork}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded-full bg-indigo-deep px-4 py-2 text-wash hover:bg-indigo-ink"
        >
          Hire me<span className="hidden sm:inline"> on Upwork</span>
        </a>
      </nav>
    </header>
  );
}
