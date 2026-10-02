import { useState } from "react";
import BeamBorder from "./BeamBorder";
import { profile } from "../data";

function CopyEmail() {
  const [label, setLabel] = useState("Copy");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setLabel("Copied");
    } catch {
      setLabel("Couldn't copy");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${profile.email}`}
      className="copy-reveal rounded-full border border-wash/40 px-3 py-1 text-xs font-semibold text-wash hover:border-wash"
    >
      <span aria-live="polite">{label}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="bg-indigo-deep text-wash">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 data-reveal="up" className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
          Have a project in mind? Let's talk about it.
        </h2>
        <div data-reveal="up" data-delay="0.1" className="mt-8 flex flex-wrap items-center gap-3">
          <BeamBorder>
            <a href={profile.upwork} target="_blank" rel="noreferrer" className="rounded-full bg-ochre px-6 py-3 font-semibold text-indigo-ink hover:bg-wash">
              Hire me on Upwork
            </a>
          </BeamBorder>
          <a href={profile.cv} download className="rounded-full border-2 border-wash/40 px-6 py-3 font-semibold hover:border-wash">
            Download CV
          </a>
          {/* Last in the row, so the hidden copy button leaves no gap. It slides in when you hover or tab to the email link */}
          <div className="group flex items-center gap-2">
            <a href={`mailto:${profile.email}`} className="rounded-full border-2 border-wash px-6 py-3 font-semibold hover:bg-wash hover:text-indigo-deep">
              {profile.email}
            </a>
            <CopyEmail />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-indigo-mid pt-6 text-sm text-wash/70">
          <p>{profile.location}</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-draw hover:text-wash">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-draw hover:text-wash">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
