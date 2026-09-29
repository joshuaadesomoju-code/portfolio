import AdirePattern from "./AdirePattern";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-8 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pt-14">
      <div>
        <p className="font-medium text-indigo-mid">
          {profile.role}, available for freelance projects
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-indigo-ink sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-ink/80">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-indigo-deep px-6 py-3 font-semibold text-wash hover:bg-indigo-ink">
            See my work
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border-2 border-indigo-deep px-6 py-3 font-semibold text-indigo-deep hover:bg-indigo-deep hover:text-wash">
            Email me
          </a>
        </div>
      </div>

      {/* The memorable element: a square of adire cloth */}
      <div className="dye-in relative mx-auto w-full max-w-sm md:max-w-none">
        <AdirePattern className="w-full rounded-sm shadow-[12px_12px_0_#E8B04A]" />
      </div>
    </section>
  );
}
