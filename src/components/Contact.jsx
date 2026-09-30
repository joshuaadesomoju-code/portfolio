import { profile } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="bg-indigo-deep text-wash">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
          Have a project in mind? Let's talk about it.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.upwork} target="_blank" rel="noreferrer" className="rounded-full bg-ochre px-6 py-3 font-semibold text-indigo-ink hover:bg-wash">
            Hire me on Upwork
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border-2 border-wash px-6 py-3 font-semibold hover:bg-wash hover:text-indigo-deep">
            {profile.email}
          </a>
          <a href={profile.cv} download className="rounded-full border-2 border-wash/40 px-6 py-3 font-semibold hover:border-wash">
            Download CV
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-indigo-mid pt-6 text-sm text-wash/70">
          <p>{profile.location}</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-wash">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-wash">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
