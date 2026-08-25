import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border border-black/10 bg-cream/80 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-[#14121f]/80'
            : 'border border-transparent'
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape to-coral text-sm text-white transition-transform group-hover:-rotate-12">
            S
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-ink/70 transition-colors hover:bg-grape/10 hover:text-grape dark:text-white/70 dark:hover:text-grape-soft"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 text-base transition-transform hover:scale-110 active:scale-95 dark:border-white/15"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-ink px-4 py-2 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 sm:inline-block dark:bg-cream dark:text-ink"
          >
            Say hi
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-black/10 md:hidden dark:border-white/15"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-full mt-2 w-[92%] max-w-5xl rounded-2xl border border-black/10 bg-cream p-2 shadow-xl md:hidden dark:border-white/10 dark:bg-[#14121f]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold hover:bg-grape/10"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
