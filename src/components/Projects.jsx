import { projects, profile } from "../data";

function ArrowUpRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ProjectLinks({ project }) {
  if (project.status === "building") {
    return (
      <span className="justify-self-start rounded-full bg-ochre/25 px-3 py-1 text-sm font-semibold text-indigo-ink">
        In progress
      </span>
    );
  }
  return (
    <div className="flex gap-5 whitespace-nowrap text-sm font-semibold">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1 text-indigo-deep underline decoration-ochre decoration-2 underline-offset-4 hover:decoration-indigo-deep"
        >
          Visit site
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="bg-cloth">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div data-reveal="up">
          <h2 className="font-display text-3xl font-bold text-indigo-ink sm:text-4xl">Selected work</h2>
          <p className="mt-3 max-w-xl text-indigo-ink/75">
            Real projects, each built to solve a specific problem for the people using it.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-indigo-mid/20 border-y border-indigo-mid/20">
          {projects.map((p) => (
            <li
              key={p.title}
              data-batch="work"
              className="group/row grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_8rem] md:items-start md:gap-10"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-indigo-deep transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover/row:translate-x-1">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-mid">{p.type}</p>
              </div>
              <div>
                <p className="leading-relaxed text-indigo-ink/85">{p.summary}</p>
                <p className="mt-3 text-sm text-indigo-mid">Built with {p.stack.join(", ")}</p>
              </div>
              <ProjectLinks project={p} />
            </li>
          ))}
        </ul>

        {/* Big link row: the arrow moves toward the link and a line draws underneath */}
        <a href={profile.github} target="_blank" rel="noreferrer" data-reveal="up" className="group mt-14 block">
          <div className="flex items-end justify-between gap-4 pb-4">
            <span className="font-display text-4xl font-bold leading-none tracking-tight text-indigo-ink sm:text-6xl">
              More on my GitHub
            </span>
            <ArrowUpRight className="mb-1 h-7 w-7 shrink-0 text-indigo-mid transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-deep sm:h-9 sm:w-9" />
          </div>
          <div className="relative h-px overflow-hidden bg-indigo-mid/20">
            <div className="absolute inset-0 origin-left scale-x-0 bg-ochre transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </div>
        </a>
      </div>
    </section>
  );
}
