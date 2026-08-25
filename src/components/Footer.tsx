import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-black/10 px-5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape to-coral text-sm text-white">S</span>
          {profile.name}
        </div>
        <p className="text-sm text-ink/50 dark:text-white/50">Designed & built by {profile.name} · {new Date().getFullYear()}</p>
        <div className="flex gap-4 text-sm font-semibold">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-grape dark:hover:text-grape-soft">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-grape dark:hover:text-grape-soft">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-grape dark:hover:text-grape-soft">Email</a>
        </div>
      </div>
    </footer>
  )
}
