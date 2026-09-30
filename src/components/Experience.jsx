import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-3xl font-bold text-indigo-ink sm:text-4xl">Experience</h2>
          <p className="mt-3 text-indigo-ink/75">Where I've put these skills to work so far.</p>
        </div>
        <ol className="divide-y divide-indigo-mid/20 border-y border-indigo-mid/20">
          {experience.map((job) => (
            <li key={job.role + job.org} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-x-8">
              <div>
                <h3 className="font-display text-xl font-bold text-indigo-deep">
                  {job.role} <span className="font-medium text-indigo-mid">at {job.org}</span>
                </h3>
                <p className="mt-0.5 text-sm text-indigo-mid">{job.kind}</p>
              </div>
              <p className="text-sm font-semibold text-indigo-ink/70 sm:text-right sm:whitespace-nowrap">{job.dates}</p>
              <ul className="space-y-1 leading-relaxed text-indigo-ink/85 sm:col-span-2">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
