import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        {/* Heading stays in view while the list scrolls past */}
        <div className="self-start md:sticky md:top-24" data-reveal="up">
          <h2 className="font-display text-3xl font-bold text-indigo-ink sm:text-4xl">What I can build for you</h2>
          <p className="mt-3 text-indigo-ink/75">
            Every project is tested on phones, tablets and desktops before I hand it over.
          </p>
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} data-batch="services" className="border-l-4 border-ochre pl-4">
              <dt className="font-display text-lg font-bold text-indigo-deep">{s.title}</dt>
              <dd className="mt-1 leading-relaxed text-indigo-ink/80">{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
