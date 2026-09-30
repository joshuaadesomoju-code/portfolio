import { projects } from "../data";

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
        <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo-deep underline decoration-ochre decoration-2 underline-offset-4 hover:decoration-indigo-deep">
          Visit site
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="bg-cloth">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl font-bold text-indigo-ink sm:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-xl text-indigo-ink/75">
          Real projects, each built to solve a specific problem for the people using it.
        </p>

        <ul className="mt-12 divide-y divide-indigo-mid/20 border-y border-indigo-mid/20">
          {projects.map((p) => (
            <li key={p.title} className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_8rem] md:items-start md:gap-10">
              <div>
                <h3 className="font-display text-2xl font-bold text-indigo-deep">{p.title}</h3>
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
      </div>
    </section>
  );
}
