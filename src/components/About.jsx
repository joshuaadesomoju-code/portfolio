import { profile, skills, certifications } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-cloth">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-3xl font-bold text-indigo-ink sm:text-4xl">About me</h2>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-indigo-ink/85">
          <p>
            I'm Joshua, a Computer Science student at Covenant University and a frontend developer
            based in {profile.location.split(" ·")[0]}. I enjoy taking a business's goals and turning
            them into a website that's simple to use and quick to load.
          </p>
          <p>
            When you work with me, you get regular progress updates, quick replies during your
            working hours, and clean, documented code that any developer can pick up later.
          </p>
          <p className="pt-2 text-base text-indigo-mid">
            <span className="font-semibold text-indigo-deep">Tools I use: </span>
            {skills.join(", ")}
          </p>
          <p className="text-base text-indigo-mid">
            <span className="font-semibold text-indigo-deep">Certified: </span>
            {certifications.map((c) => `${c.name} (${c.issuer}, ${c.date.split(" ")[1]})`).join("; ")}
          </p>
          <p className="pt-2">
            <a href={profile.cv} download className="inline-block rounded-full border-2 border-indigo-deep px-5 py-2.5 text-base font-semibold text-indigo-deep hover:bg-indigo-deep hover:text-wash">
              Download my CV (PDF)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
