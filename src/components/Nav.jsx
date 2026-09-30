import { profile } from "../data";

export default function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#top" className="font-display text-lg font-bold text-indigo-deep">
        Joshua Adesomoju
      </a>
      <nav className="flex items-center gap-5 text-sm font-medium text-indigo-mid sm:gap-7">
        <a href="#work" className="hidden hover:text-indigo-deep sm:inline">Work</a>
        <a href="#services" className="hidden hover:text-indigo-deep sm:inline">Services</a>
        <a href="#about" className="hidden hover:text-indigo-deep sm:inline">About</a>
        <a href="#experience" className="hidden hover:text-indigo-deep md:inline">Experience</a>
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
